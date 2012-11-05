class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :libelle
      t.integer :note
      t.integer :vin_id

      t.timestamps
    end
  end
end
