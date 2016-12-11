require "sinatra"
require "sinatra/json"
require "json"
require 'pry'

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

get "/" do
  erb :home
end
