class CommentsController < ApplicationController

  def index
    @book = Book.find(params[:book_id])
    @comments = @book.comments

    render :json => @comments
  end

  def create
    @book = Book.find(params[:book_id])
    @comment = @book.comments.build(comment_params)
    if @comment.valid?
      @book.save
      render :json => @book, include: ["comments"]
    else
      render json:{message: @comment.errors }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user, :comment, :book_id)
  end

end
