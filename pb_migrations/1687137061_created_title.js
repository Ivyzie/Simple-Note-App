migrate((db) => {
  const collection = new Collection({
    "id": "80bs0524odql73b",
    "created": "2023-06-19 01:11:01.840Z",
    "updated": "2023-06-19 01:11:01.840Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("80bs0524odql73b");

  return dao.deleteCollection(collection);
})
