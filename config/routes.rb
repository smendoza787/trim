Rails.application.routes.draw do
  resources :links, only: [:create]
  get "/:code", to: "links#show"
end
