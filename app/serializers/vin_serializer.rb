class VinSerializer < ActiveModel::Serializer
	
  attributes :id, :nom, :cave, :annee, :couleur
  has_many :comments
end
