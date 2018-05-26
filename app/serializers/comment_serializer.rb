class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :book_id, :user
  belongs_to :book
end
