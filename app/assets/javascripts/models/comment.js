App.Comment = DS.Model.extend({
  id: DS.attr('number'),
  libelle: DS.attr('string'),
  note: DS.attr('number'),
  vin: DS.belongsTo('App.Vin')
});