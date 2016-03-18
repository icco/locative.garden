require "rubygems"
require "bundler"
Bundler.require(:default, ENV["RACK_ENV"] || :development)

get "/" do
  erb :index
end

get "/api/comments" do

end
