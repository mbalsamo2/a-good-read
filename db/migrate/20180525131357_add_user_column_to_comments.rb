class AddUserColumnToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :user, :string
  end
end
