class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :summary, :comment_id, :review, :rating, :image_url
  has_many :comments
end
