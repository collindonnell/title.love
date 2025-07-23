class HomeController < ApplicationController
  allow_unauthenticated_access

  def show
    if authenticated?
      redirect_to user_titles_path(Current.user)
    end
  end
end
