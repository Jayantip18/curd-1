const {getNoti,postNoti,putNoti,deleteNoti} = require("../controller/notificationController")
// const auth = require("../middleware/auth")
const router = require("express").Router()

router.get('/',getNoti)
router.post('/',auth,postNoti)
router.put('/:id',putNoti)
router.delete('/:id',deleteNoti)
router.post('/login',postNoti)
module.exports = router
