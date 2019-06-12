//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const defaultPoem = "hello friend,&#10;thanks for coming to my site!&#10;you didn't fill out the form&#10;but that's alright&#10;&#10;I hope you'll go back&#10;and fill it out all the way&#10;and then send it to someone special&#10;and make someone special's day. (:&#10;&#10;";
const motherGeneralThanks = "When I was a baby&#10;You made sure that I grew&#10;and now I think, maybe,&#10;I would like to thank you:&#10;&#10;Thanks! (:&#10;&#10;";
const motherBirthday = "It is your birthday and&#10;this is a test&#10;&#10;";
const motherRomantic = "Freud must be smiling so bright&#10;if, now, he looks upon me&#10;for his theories—they are right&#10;I'm in love with my mommy.&#10;&#10;";

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", (req, res) => {
  const person = req.body.person;
  const mood = req.body.mood;
  const name = req.body.name;

  switch (person) {
    case "mother":
      if (mood === "general-thanks") {
        res.render("poem", {poem: motherGeneralThanks, name: name, lines: 8});
      }
      if (mood === "birthday") {
        res.render("poem", {poem: motherBirthday, name: name, lines: 4});
      }
      if (mood === "romantic") {
        res.render("poem", {poem: motherRomantic, name: name, lines: 6});
      }
      if (mood === "anger") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      break;
    case "father":
      if (mood === "general-thanks") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "birthday") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "romantic") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "anger") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      break;
    case "significant-other":
      if (mood === "general-thanks") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "birthday") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "romantic") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "anger") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      break;
    case "friend":
      if (mood === "general-thanks") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "birthday") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "romantic") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      if (mood === "anger") {
        res.render("poem", {poem: "This poem needs to be written", name: name, lines: 6});
      }
      break;
    default:
      res.render("poem", {poem: defaultPoem, name: "Tarek", lines: 11});

  }

  res.render("poem", {poem: motherGeneralThanks, name: name});
});



app.listen(3000, function() {
  console.log("Server running on port 3000");
});
