class ApplicationController < ActionController::Base
    # Ensure that if no CSRF token is provided, Rails will respond with an empty session
    protect_from_forgery with: :null_session
end
