# -*- encoding : utf-8 -*-

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Vin.create(nom: 'Cuvée Saint Agathe', cave: 'Cave de Mégiers', annee: '2009', couleur: 'rouge')
Vin.create(nom: 'Cuvée Sol et Sens', cave: '4 Chemins', annee: '2010', couleur: 'blanc')
