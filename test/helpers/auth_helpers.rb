module AuthHelpers
  def login_as(user)
    # Authenticate by posting to the sessions controller
    post session_url, params: { email: user.email, password: 'password' }
    follow_redirect! if response.redirect?
  end
  
  def logout
    delete session_url
    follow_redirect! if response.redirect?
  end
end