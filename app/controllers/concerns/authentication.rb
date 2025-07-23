module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :require_authentication
    helper_method :authenticated?
  end

  class_methods do
    def allow_unauthenticated_access(**options)
      skip_before_action :require_authentication
    end
  end

  private

  def authenticated?
    resume_user_session
  end

  def require_authentication
    resume_user_session || request_authentication
  end

  def resume_user_session
    Current.user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def request_authentication
    session[:return_to_after_authenticating] = request.url
    redirect_to :new_session_path, alert: "Login to continue"
  end

  def after_authenticaton_url
    session.delete(:return_to_after_authenticating) || root_url
  end

  def start_new_session_for(user)
    session[:user_id] = user.id
    Current.user = user
  end

  def terminate_session
    Current.user = nil
    session[:user_id] = nil
  end
end
