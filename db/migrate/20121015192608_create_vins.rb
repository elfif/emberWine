class CreateVins < ActiveRecord::Migration
  def change
    create_table :vins do |t|
      t.string :nom
      t.string :cave
      t.integer :annee
      t.string :couleur

      t.timestamps
    end
  end
end
