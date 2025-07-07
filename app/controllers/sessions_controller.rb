class SessionsController < ApplicationController
  def new
  end

  def create
    email, password = params.expect(:email, :password)
    user = User.find_by(email:)
    if user && user.authenticate(password)
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged in"
    else
      redirect_to new_session_path, alert: "Invalid email or password"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end
end
