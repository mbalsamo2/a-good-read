Rails.application.routes.draw do

  resources :books do
    resources :comments, only: [:new, :show, :index]
  end

end
