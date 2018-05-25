class EditColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :books, :user_id, :comment_id
  end
end
