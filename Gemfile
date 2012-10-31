#source 'https://rubygems.org'
#source "http://gems.rubyforge.org"
source "http://gemcutter.org"

gem 'rails', '3.2.3'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'pg'
gem 'active_model_serializers'
gem 'execjs'


#spécial pour pouvoir utiliser le même projet dans Win7 et GuyLux
if !(RUBY_PLATFORM=~ /i386-mingw32/)
   gem 'therubyracer'
end


gem 'ember-rails'

group :development do
  gem 'magic_encoding'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
