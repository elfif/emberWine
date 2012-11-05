class CommentSerializer < ActiveModel::Serializer
  attributes :id, :libelle, :note, :vin_id
end
