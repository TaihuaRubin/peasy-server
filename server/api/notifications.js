const router = require("express").Router();
const { Notification } = require("../db/models");

router.get("/:userId", async (req, res, next) => {
  try {
    const notifications = await Notification.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(notifications);
  } catch (error) {
    next(error);
  }
});

router.put("/read", async (req, res, next) => {
  try {
    const notificationId = req.body.notificationId;
    const toUpdate = await Notification.findById(notificationId);
    const userId = toUpdate.userId;
    toUpdate.unread = false;
    await toUpdate.save();

    // send back all the noties
    const updatedNotifications = await Notifications.findAll({ where: { userId: userId } });
    res.json(updatedNotifications);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
