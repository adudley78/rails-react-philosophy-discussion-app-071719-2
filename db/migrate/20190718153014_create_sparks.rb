class CreateSparks < ActiveRecord::Migration[5.2]
  def change
    create_table :sparks do |t|
      t.string :spark_type
      t.date :spark_date
      t.text :title
      t.string :url
      t.string :member_name

      t.timestamps
    end
  end
end
