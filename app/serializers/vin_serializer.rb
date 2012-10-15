class VinSerializer < ActiveModel::Serializer
  attributes :id, :nom, :cave, :annee, :couleur
end
