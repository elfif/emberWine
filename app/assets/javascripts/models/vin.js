App.Vin = DS.Model.extend({
  id: DS.attr("number"),
  nom: DS.attr("string"),
  cave: DS.attr("string"),
  annee: DS.attr("number"),
  couleur: DS.attr("string"),
  comments: DS.hasMany("App.Comment", { embedded: true })
});