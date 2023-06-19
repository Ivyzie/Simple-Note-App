migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("80bs0524odql73b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xc6dip8",
    "name": "field",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("80bs0524odql73b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xc6dip8",
    "name": "field",
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
})
