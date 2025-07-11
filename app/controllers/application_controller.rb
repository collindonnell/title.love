class ApplicationController < ActionController::Base
  allow_browser versions: :modern
  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      flash[:alert] = "Login to continue"
      redirect_to new_session_path
    end
  end

  def set_body_class
    @body_class = "bg-base-200"
  end
end
