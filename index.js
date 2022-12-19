const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let posts = [
  {
    id: 1,
    name: "Hello",
  },
  {
    id: 2,
    name: "Hello ghgcgs",
  },
  {
    id: 3,
    name: "bshchbh",
  },
  {
    id: 4,
    name: "ghcgh",
  },
];

app.get("/", (req, res) => {
  res.json({ status: true, posts });
});

app.post("/", (req, res) => {
  const { id, name } = req.body;
  posts.push({ id, name });
  res.json({ status: true, posts });
});

app.delete("/", (req, res) => {
  const { id } = req.body;
  if (posts.filter((i) => i.id === id).length > 0) {
    posts = posts.filter((i) => i.id !== id);
    res.json({ status: true, posts });
  } else {
    res.json({ status: false, error: "Data not found" });
  }
});

app.put("/", (req, res) => {
  const { id, name } = req.body;
  if (posts.filter((i) => i.id === id).length > 0) {
    posts = posts.map((item) => {
      if (item.id === id) {
        return {
          id,
          name,
        };
      }
      return item;
    });
    res.json({ status: true, posts });
  } else {
    res.json({ status: false, error: "Data not found" });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
