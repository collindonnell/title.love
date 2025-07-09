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
      redirect_to titles_path, notice: "Title created successfully."
    else
      render :new
    end
  end

  def destroy
    @title = current_user.titles.find(params[:id])
    @title.destroy
    redirect_to titles_path, notice: "Title deleted."
  end

  private

  def title_params
    params.require(:title).permit(:title)
  end
end
