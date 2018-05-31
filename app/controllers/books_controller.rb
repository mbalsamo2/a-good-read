class BooksController < ApplicationController

  def index
    @books = Book.all

    render :json => @books
  end

  def show
    @book = Book.find(@book.id)

    render :json => @book
  end

end
