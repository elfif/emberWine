class Comment < ActiveRecord::Base

	belongs_to :vin
	attr_accessible :libelle, :note, :vin_id
end
