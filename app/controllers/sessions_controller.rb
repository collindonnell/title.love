class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]

  def new
  end

  def create
    email, password = params.expect(:email, :password)
    user = User.find_by(email:)
    if user && user.authenticate(password)
      start_new_session_for(user)
      redirect_to root_path, notice: "Logged in"
    else
      redirect_to new_session_path, alert: "Invalid email or password"
    end
  end

  def destroy
    terminate_session
    redirect_to root_path, notice: "Logged out"
  end
end
