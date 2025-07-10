class TitlesController < ApplicationController
  before_action :require_login

  def index
    @titles = current_user.titles.order(created_at: :desc)
  end

  def edit
    @title = current_user.titles.find(params[:id])
  end

  def create
    @title = current_user.titles.new(title: params[:title])
    if @title.save
      redirect_to user_titles_path(user_id: current_user.id), notice: "Title created successfully."
    else
      render :new
    end
  end

  def destroy
    @title = current_user.titles.find(params[:id])
    @title.destroy
    redirect_to user_titles_path(user_id: current_user.id), notice: "Title deleted."
  end

  private

  def title_params
    params.expect(:title)
  end
end
