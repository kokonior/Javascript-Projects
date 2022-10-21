const express = require("express");
const helper = require("./helper");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  const jsonlist = helper.getDirList();
  const result = jsonlist.map((item) => {
    return {
      filename: item,
      url: helper.getUrl(item),
    };
  });
  res.json({
    status: true,
    result,
  });
});

app.get("/:id", (req, res) => {
  try {
    const id = req?.params?.id;
    if (id == null) {
      throw new Error(":id must not be empty");
    }
    res.json(helper.getJsonContent(id));
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
});

app.post("/save", (req, res) => {
  try {
    const body = req.body;
    const name = body?.name;
    const data = body?.data;
    if (name == null || data == null) {
      throw new Error(
        "name (string) or data (json) must be on the request body"
      );
    }
    const result = helper.save(name, data);
    res.json({
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
