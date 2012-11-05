class Vin < ActiveRecord::Base

	has_many :comments
 	attr_accessible :annee, :cave, :couleur, :nom
end
