migrate((db) => {
  const collection = new Collection({
    "id": "nwwls8q0x459qas",
    "created": "2023-06-19 02:06:03.586Z",
    "updated": "2023-06-19 02:06:03.586Z",
    "name": "content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q8kojvfe",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nwwls8q0x459qas");

  return dao.deleteCollection(collection);
})
