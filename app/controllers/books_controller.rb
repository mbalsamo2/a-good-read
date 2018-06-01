class BooksController < ApplicationController

  def index
    @books = Book.all

    render :json => @books
  end

  def show
    @book = Book.find(@book.id)

    render :json => @book
  end

  def create
    @book = Book.new(book_params)
    if @book.valid?
      @book.save
      render :json => @book
    else
      render json:{message: "There was an error, please try again."}
    end
  end


  private

  def book_params
    params.require(:book).permit(:name, :author, :summary, :review, :rating, :image_url, comment_ids:[])
  end
end
