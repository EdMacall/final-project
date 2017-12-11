const path = require("path");
const router = require("express").Router();
const userController = require("../controllers/userController")
/*const articleController = require("../controllers/articleController");

router.route("/api")
  .get(articleController.findAll)
  .post(articleController.create)
  .delete(articleController.remove);

router.route("/api/:title")
	.delete(articleController.remove)
*/
// If no API routes are hit, send the React app

router.route("/findall").get(userController.findAll)

router.route(`/login/:email`).get(userController.login)

router.route(`/register`).post(userController.newUser)

router.use(function(req, res) 
{
  	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;