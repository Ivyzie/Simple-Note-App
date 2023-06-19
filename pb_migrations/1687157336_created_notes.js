migrate((db) => {
  const collection = new Collection({
    "id": "8tu44cyl6k9cvqf",
    "created": "2023-06-19 06:48:56.388Z",
    "updated": "2023-06-19 06:48:56.388Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jghfrn4n",
        "name": "notes",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8tu44cyl6k9cvqf");

  return dao.deleteCollection(collection);
})
