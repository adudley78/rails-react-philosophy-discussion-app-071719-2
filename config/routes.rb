Rails.application.routes.draw do
  namespace :api do
    resources :articles, only: %i[index show create destroy update]
  end
end
