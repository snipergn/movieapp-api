const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@gmail.com",
      joined: new Date(),
    },
  ],
};
app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("succes");
  } else {
    res.status(400).json("error longing in");
  }
});

app.post("/register", (req, res) => {
    const { email, name, password } = req.body
    bcrypt.hash(password, null, null, function(err, hash) {
      // Store hash in your password DB.
  });
    database.users.push({
        id: "125",
        name: name,
        email: email,
        password: password,
        joined: new Date(),
    })
    res.json(database.users[database.users.length-1])
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params
  let found = false;
  database.users.forEach(users => {
    if (users.id === id) {
      found = true
      return res.json(users)
    }
  })
  if (!found) {
    res.status(400).json('not found')
  }
})
bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
  // Store hash in your password DB.
});
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
  // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash).then(function(result) {
  // result == false
});


app.listen(3000, () => {
  console.log("app is running on port 3000");
});

/*
/ --> res = this is working
/signin --> POST success/fail
/register --> POST = user
/profile --> :userId --> GET = user
/favorites --> POST = user
/favorites --> PUT = update user
/favorites --> GET = user
/favorites --> DELETE = user

*/
