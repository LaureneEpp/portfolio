class Api::V1::PagesController < ApplicationController
  def home
    render json: @page
  end
    
    def cv
      render json: @page
    end
  
    def projects
      render json: @page
    end
  
    def skills
      render json: @page
    end
  end
  