class HomeController < ApplicationController
  def show
    if logged_in?
      redirect_to user_titles_path(user_id: current_user.id)
    end
  end
end
