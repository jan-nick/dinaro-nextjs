/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tvhy7sm06pyp59s",
    "created": "2024-03-25 17:29:32.904Z",
    "updated": "2024-03-25 17:29:32.904Z",
    "name": "expenses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p7r8pi3h",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "xfynisml",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("tvhy7sm06pyp59s");

  return dao.deleteCollection(collection);
})
