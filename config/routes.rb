Rails.application.routes.draw do
  get "/", to: "pages#home", as: "root"
  get "cv", to: "pages#cv", as: :cv
  get "skills", to: "pages#skills", as: :skills
  get "projects", to: "pages#projects", as: :projects
end
