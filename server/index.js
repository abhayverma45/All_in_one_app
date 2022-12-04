const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const DB =
  "mongodb+srv://Abhay:BQ700xtN9KelVAyc@cluster0.mlnwjhx.mongodb.net/all-in-one-database?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log(`successfully connected`);
  })
  .catch((err) => console.log(`no connection`));

// const Databaseconnection = require("./connecter/dbconnection");
const NEWMODEL = require("./model/model1");

// data coming from frontend to backend

app.post("/api/save", async (req, res) => {
  try {
    const { category, headline, description, type } = req.body;
    const front = new NEWMODEL({
      category,
      headline,
      description,
      type,
    });
    await front.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);

    return res.status(404).json({ success: false, error: error.message });
  }
});

// now api for getting the data from backend
app.get("/api/news", async (req, res) => {
  try {
    const newsdata = await NEWMODEL.find({ type: "news" });
    res.json({ data: newsdata, success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
});

app.get("/api/quotes", async (req, res) => {
  try {
    const quotesdata = await NEWMODEL.find({ type: "quotes" });
    res.json({ data: quotesdata, success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
});

app.get("/api/jokes", async (req, res) => {
  try {
    const jokesdata = await NEWMODEL.find({ type: "jokes" });
    res.json({ data: jokesdata, success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
});

app.put("/api/modify/", async (req, res) => {
  try {
    const { type, category, headline, description, id } = req.body;
    const jokesdata = await NEWMODEL.findByIdAndUpdate(
      { _id: id },
      { type, category, headline, description },
      { new: true }
    );
    res.json({ data: jokesdata, success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
});

app.delete("/api/remove/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const jokesdata = await NEWMODEL.findByIdAndDelete({ _id: id });
    res.json({ data: jokesdata, success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: error.message });
  }
});

// Databaseconnection().then(() => {
//   app.listen(8000, () => console.log("server is created at port no 8000"));
// });
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
