const router = (app) => {
  const users = require("../controller/usersController");
  const auth = require("../controller/authController");
  const foods = require("../controller/foodController");

  //authentication
  const _auth = require("../middleware/index");

  //PAGES
  app.get("/foodCartel", _auth.isAuthenticated, _auth.isUser, foods.homepage);

  //AUTH
  app.get("/auth/register", auth.signupPage);
  app.post("/auth/register", auth.register);
  app.post("/auth/login", auth.login);

  //USERS
  app.get("/users", _auth.isAuthenticated, _auth.isUser, users.getAllUsers);
  app.put("/users/:id", _auth.isAuthenticated, _auth.isUser, users.updateUser);
  app.delete( "/users/:id", _auth.isAuthenticated, _auth.isUser, users.deleteUser);

  //FOODS
  app.get("/foods", _auth.isAuthenticated, _auth.isUser, foods.getFoods)
  app.post("/foods", _auth.isAuthenticated, _auth.isUser, foods.create)

  //CART
  app.get("/cart", _auth.isAuthenticated, _auth.isUser, foods.cartitempage)
};

module.exports = router;
