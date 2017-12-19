Rails.application.routes.draw do
  namespace :api do
    resources :links
  end
end
