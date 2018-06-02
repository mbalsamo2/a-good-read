class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.valid?
      @comment.save
      render :json => @comment
    else
      render json:{message: "There was an error, please try again."}
    end
  end

  private

  class comment_params
    params.require(:comment).permit(:user, :comment, :book_id)
  end

end
