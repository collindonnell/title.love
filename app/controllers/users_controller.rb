class UsersController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]

  def new
    @user = User.new
  end

  def create
    email = user_params[:email]
    password = user_params[:password]
    password_confirmation = user_params[:password_confirmation]

    user = User.create(email:, password:, password_confirmation:)
    if user.persisted?
      resume_user_session
      redirect_to root_path, notice: "Created user"
    else
      redirect_to new_user_path, alert: user.errors.full_messages.join(", ")
    end
  end

  private

  def user_params
    params.expect(user: [ :email, :password, :password_confirmation ])
  end
end
