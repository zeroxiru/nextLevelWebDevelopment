db.getCollection("massaiveData").find({$text: {$search: "dolor"}})
.project({about: 1})