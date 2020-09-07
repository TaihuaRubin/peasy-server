const router = require("express").Router();
const { Item, Store, StorePreference, ItemUserList } = require("../db/models");

//all the Items
router.get("/", async (req, res, next) => {
  try {
    const items = await items.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

//update item quantity
router.get("/add", async (req, res, next) => {
  try {
    const { itemId, listId, userId } = req.body;
    console.log("itemId", itemId, listId, userId);
    const item = await ItemUserList.findAll({
      where: {
        itemId,
        listId,
        userId,
      },
    });

    // item.quantity = item.quantity + 1;
    // await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
  }
});

//add new item to Item table
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

//route for each single item:  "api/items/:id"
router.get("/:itemId", async (req, res, next) => {
  try {
    const singleItem = await Item.findById(req.params.itemId);
    res.json(singleItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
