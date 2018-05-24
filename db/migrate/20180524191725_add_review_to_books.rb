class AddReviewToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :review, :text
  end
end
