migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8tu44cyl6k9cvqf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vn3nbpnk",
    "name": "records",
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
  collection.schema.removeField("vn3nbpnk")

  return dao.saveCollection(collection)
})
