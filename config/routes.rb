Rails.application.routes.draw do

  resources :books do
    resources :comments, only: [:new, :create, :show, :index]
  end

end
