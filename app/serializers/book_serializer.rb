class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :summary, :comment_id, :review, :rating, :image_url
  has_many :comments, serializer: CommentSerializer
  # def comments
  #   @book = Book.find(params[:id])
  #   @comments = @book.comments
  # end

end
