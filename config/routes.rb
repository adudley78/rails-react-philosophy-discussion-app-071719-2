Rails.application.routes.draw do

  root to: redirect('/sparks')

  get 'sparks', to: 'site#index'
  get 'sparks/new', to: 'site#index'
  get 'sparks/:id', to: 'site#index'
  get 'sparks/:id/edit', to: 'site#index'

  namespace :api do
    resources :sparks , only: %i[index show create destroy update]
  end

end
