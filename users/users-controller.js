import * as dao from "./users-dao.js";

const UsersController = (app) => {
  const createUser = async (req, res) => {
    const user = req.body;
    const actualUser = await dao.createUser(user);
    res.json(actualUser);
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const deleteUser = async (req, res) => {
    const uid = req.param.uid;
    const status = await dao.deleteUser(uid);
    res.json(status);
  };

  const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const updates = req.body;
    const status = await dao.updateUser(uid, updates);
    const currentUser = await dao.findUserById(uid);
    res.json(currentUser);
  };

  const register = async (req, res) => {
    const user = req.body;
    const existingUser = await dao.findByUsername(user.username);
    if (existingUser) {
      res.sendStatus(403);
      return;
    }
    const currentUser = await dao.createUser(user);
    req.session["currentUser"] = currentUser;
    req.session.save();
    res.json(currentUser);
  };

  const login = async (req, res) => {
    if (req.session.currentUser) {
      return res.json(req.session.currentUser);
    }
    const credentials = req.body;
    const existingUser = await dao.findByCredentials(
      credentials.username,
      credentials.password
    );
    if (existingUser) {
      req.session["currentUser"] = existingUser;
      res.json(existingUser);
      return
    }
    res.sendStatus(403)
  };

  const profile = async (req, res) => {
    res.sendStatus(403);
  };

  const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const addLike = async (req, res) => {
    const liked = req.body.liked;
    const username = req.body.username;
    await dao.addLike(liked, username);
    res.json({liked, username});
  }

  const findUserByUsername = async (req, res) => {
    const username = req.params.username;
    const user = await dao.findUserByUsername(username);
    if (user) {
      res.json(user);
      return;
    }
    res.sendStatus(404);
  };

  app.post("/users", createUser);

  app.get("/users", findAllUsers);

  app.delete("/users/:uid", deleteUser);

  app.put("/users/:uid", updateUser);

  app.put("/users/likes/:uid", addLike);

  app.post("/register", register);

  app.post("/login", login);

  app.post("/profile", profile);

  app.post("/logout", logout);

  app.get("/profile/:username", findUserByUsername);
};

export default UsersController;
