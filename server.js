const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  console.log(req.query.uid);
  try {
    let post = [
      {
        id: 1,
        description: "First Post",
        createdAt: new Date(),
        postOs: "web",
      },
      {
        id: 2,
        description: "Second Post",
        createdAt: new Date(),
        postOs: "mobile",
      },
      {
        id: 3,
        description: "Third Post",
        createdAt: new Date(),
        postOs: "web",
      },
    ];

    let requiredPost = post.filter((post) => post.id == req.query.id)

    res.status(200).json({
      message: "success",
      data: requiredPost
    })
  } catch (error) {
    res.status(500).json({
      message: "failed",
      error: error
    })
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
