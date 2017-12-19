class LinksController < ApplicationController
  def create
    new_link = Link.new(long_url: params[:link])

    if new_link.save
      render json: new_link
    else
      render json: { message: "Please enter a valid URL" }
    end
  end

  def show
    link = Link.find_by(code: params[:code])
    redirect_to link.long_url
  end
end
