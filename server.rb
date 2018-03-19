require 'sinatra'
require 'heroku'
get '/' do 
	File.read(File.join('public', 'index.html'))
end 