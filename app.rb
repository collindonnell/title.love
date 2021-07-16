require 'sinatra'
require 'titlecase'

get '/' do
  erb :index
end

post '/' do
  @original_title = params[:title_entry]
  unless @original_title.empty?
    @title = @original_title.titlecase
  else
    @error = "Enter something to titlecase."
  end
  erb :index
end
