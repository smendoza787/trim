class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.string :short_url
      t.string :long_url
      t.string :code

      t.timestamps
    end
  end
end
