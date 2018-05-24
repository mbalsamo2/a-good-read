class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.text :summary
      t.integer :user_id

      t.timestamps
    end
  end
end
