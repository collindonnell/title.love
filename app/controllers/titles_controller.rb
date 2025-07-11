class TitlesController < ApplicationController
  before_action :require_login

  def index
    @titles = current_user.titles.order(created_at: :desc)
  end

  def edit
    @title = current_user.titles.find(params[:id])
  end

  def create
    @title = current_user.titles.new(title_params)
    if @title.save
      redirect_to user_titles_path(user_id: current_user.id), notice: "Title created successfully."
    else
      render :new
    end
  end

  def update
    @title = current_user.titles.find(params[:id])
    if @title.update(title_params)
      redirect_to user_titles_path(user_id: current_user.id), notice: "Title updated successfully."
    else
      render :edit
    end
  end

  def destroy
    @title = current_user.titles.find(params[:id])
    @title.destroy
    redirect_to user_titles_path(user_id: current_user.id), notice: "Title deleted."
  end

  private

  def title_params
    params.expect(title: [ :title, :title_cased ])
  end
end
