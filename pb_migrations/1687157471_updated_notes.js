migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8tu44cyl6k9cvqf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1v4vwzr5",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txjp5lel",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8tu44cyl6k9cvqf")

  // remove
  collection.schema.removeField("1v4vwzr5")

  // remove
  collection.schema.removeField("txjp5lel")

  return dao.saveCollection(collection)
})
