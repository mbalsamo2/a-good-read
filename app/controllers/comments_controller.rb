class CommentsController < ApplicationController

  def create
    @book = Book.find(params[:book_id])
    @comment = @book.comments.build(comment_params)
    # @comment = Comment.new(comment_params)
    if @comment.valid?
      @book.save
      render :json => @book
    else
      render json:{message: @comment.errors }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user, :comment, :book_id)
  end

end
