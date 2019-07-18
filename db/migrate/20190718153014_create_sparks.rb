class CreateSparks < ActiveRecord::Migration[5.2]
  def change
    create_table :sparks do |t|
      t.references :user, foreign_key: true
      t.string :spark_type
      t.date :spark_date
      t.text :title
      t.string :url

      t.timestamps
    end
  end
end
