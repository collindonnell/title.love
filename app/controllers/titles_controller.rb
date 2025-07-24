class TitlesController < ApplicationController
  def index
    @titles = Current.user.titles.order(created_at: :desc)
  end

  def edit
    @title = Current.user.titles.find(params[:id])
  end

  def create
    @title = Current.user.titles.new(title_params)
    @titles = Title.all
    if @title.save
      respond_to do |format|
        format.html { redirect_to user_titles_path(Current.user) }
        if @titles.count > 1
          format.turbo_stream
        else
          format.turbo_stream { render turbo_stream: turbo_stream.replace("titles-list-container", partial: "titles") }
        end
      end
    else
      redirect_to user_titles_path(Current.user)
    end
  end

  def update
    @title = Current.user.titles.find(params[:id])
    if @title.update(title_params)
      redirect_to user_titles_path(Current.user)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @title = Current.user.titles.find(params[:id])
    @title.destroy
    @titles = Title.all
    respond_to do |format|
      format.html { redirect_to user_titles_path(Current.user), notice: "Title deleted." }
      if @titles.any?
        format.turbo_stream
      else
        format.turbo_stream { render turbo_stream: turbo_stream.replace("titles-list-container", partial: "titles") }
      end
    end
  end

  private

  def title_params
    params.expect(title: [ :title, :title_cased ])
  end
end
