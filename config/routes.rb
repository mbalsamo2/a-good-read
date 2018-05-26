Rails.application.routes.draw do
  namespace :api do
  # root 'welcome#home'
    resources :books
  end
end
