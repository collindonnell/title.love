class TitlesController < ApplicationController
  def index
    @titles = Current.user.titles.order(created_at: :desc)
  end

  def edit
    @title = Current.user.titles.find(params[:id])
  end

  def create
    @title = Current.user.titles.new(title_params)
    if @title.save
      respond_to do |format|
        format.html { redirect_to user_titles_path(Current.user), notice: "Title created successfully." }
        format.turbo_stream
      end
    else
      redirect_to user_titles_path(Current.user)
    end
  end

  def update
    @title = Current.user.titles.find(params[:id])
    if @title.update(title_params)
      redirect_to user_titles_path(Current.user), notice: "Title updated successfully."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @title = Current.user.titles.find(params[:id])
    @title.destroy
    respond_to do |format|
      format.html { redirect_to user_titles_path(Current.user), notice: "Title deleted." }
      format.turbo_stream
    end
  end

  private

  def title_params
    params.expect(title: [ :title, :title_cased ])
  end
end
