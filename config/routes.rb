Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "cv", to: "pages#cv", as: :cv
      get "skills", to: "pages#skills", as: :skills
      get "projects", to: "pages#projects", as: :projects
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  end