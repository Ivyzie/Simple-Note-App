migrate((db) => {
  const collection = new Collection({
    "id": "k0x0si35jaigxq9",
    "created": "2023-06-19 06:49:51.858Z",
    "updated": "2023-06-19 06:49:51.858Z",
    "name": "content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ojr9kcin",
        "name": "content",
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
  const collection = dao.findCollectionByNameOrId("k0x0si35jaigxq9");

  return dao.deleteCollection(collection);
})
