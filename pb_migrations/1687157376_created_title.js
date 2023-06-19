migrate((db) => {
  const collection = new Collection({
    "id": "tf90ktlevgka0b1",
    "created": "2023-06-19 06:49:36.418Z",
    "updated": "2023-06-19 06:49:36.418Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "53clnux5",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("tf90ktlevgka0b1");

  return dao.deleteCollection(collection);
})
