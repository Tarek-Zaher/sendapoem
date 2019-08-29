//jshint esversion: 6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require('nodemailer');
const favicon = require('serve-favicon');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(favicon(__dirname + "/public/images/favicon.ico"));

const defaultPoem = "hello friend,&#10;thanks for coming to my site!&#10;you didn't fill out the form&#10;but that's alright&#10;&#10;I hope you'll go back&#10;and fill it out all the way&#10;and then send it to someone special&#10;and make someone special's day. (:&#10;&#10;";
const motherGeneralThanks = "When I was a baby&#10;You made sure that I grew&#10;and now I think, maybe,&#10;I would like to thank you:&#10;&#10;Thanks! (:&#10;&#10;";
const motherBirthday = "Happy Birthday Mom! I am your biggest fan&#10;I love you times one million and ten.&#10;If I could time travel, I'd travel back to when you were a baby&#10;and give you a high five in advance for being the coolest, most loving lady! (:&#10;&#10;";
const motherRomantic = "Freud must be smiling so bright&#10;if, now, he looks upon me&#10;for his theories—they are right&#10;I'm in love with my mommy.&#10;&#10;";
const motherAnger = "Dear Mother.&#10;You may have birthed me out of your body,&#10;but that's no excuse to be rude and snotty.&#10;If you haven't gotten the message, I'll just say what you did:&#10;I'm not angry at you; I'm just dissapointed.&#10;&#10;";
const soGeneralThanks = "Thank you for your hugs.&#10;Thank you for your kisses.&#10;Everything you are&#10;fulfills all of my wishes.&#10;&#10;";
const soBirthday = "Roses are red.&#10;Violets are blue.&#10;You're a year older.&#10;and oh yeah! I love you. (:&#10;&#10;";
const soRomantic = "You are so sweet—anyone can see!&#10;In fact, I'm worried a bear might mistake you for honey!&#10;but if he did, I'd tell him how wonderful you are&#10;and he, understanding, would drive away in his car. &#10;&#10;";
const soAnger = "You were a fool to betray me&#10;and now you will have to pay me&#10;five kisses a day, two snuggles at night&#10;and the next time we argue&#10;you'll admit that I'm right!&#10;&#10;";
const thanosDidNothingWrong = "roses are red,&#10;the space stone is blue.&#10;thanos did nothing wrong.&#10;he did what's best for you&#10;&#10;";
const thanosSad = "reality stones are red&#10;i feel bad, man.&#10;I tried to help the universe,&#10;and they called me a mad man&#10;&#10;";
const thanosImpatient = "Mind stones are yellow,&#10;My favorite chocolate is Hershey.&#10;Add my poems to avoid the snap,&#10;I call that mercy. ♦️🔸👲🏼❇️🔷🔮&#10;&#10;";
const thanosMoreImpatient = "Time stones are green&#10;I'm still waiting for an answer to my plea&#10;You could not live with your own failure,&#10;and where did that bring you?&#10;Back to me.&#10;&#10;";
const thanosEvenMoreImpatient = "Power stones are purple,&#10;Adding my poems takes few skills.&#10;I don't want to snap you,&#10;but the hardest choices require the strongest wills&#10;&#10;";
const thanosVeryVeryVeryImpatient = "Roses are red,&#10;My skin is purple.&#10;You will be snapped for not uploading my poems.&#10;Nothing rhymes with purple.&#10;&#10;";

app.get("/", (req, res) => {
  res.render("home");
  name = "";
});

app.get("/submit", (req, res) => {
  res.render("submit");
});

app.get("/default", (req, res) => {
  res.render("poem", {poem: defaultPoem, name: "Tarek", lines: 11});
});

app.get("/mothergeneral-thanks", (req, res) => {
  res.render("poem", {poem: motherGeneralThanks, name: name, lines: 8});
});

app.get("/motherbirthday", (req, res) => {
  res.render("poem", {poem: motherBirthday, name: name, lines: 10});
});

app.get("/motherromantic", (req, res) => {
  res.render("poem", {poem: motherRomantic, name: name, lines: 6});
});

app.get("/motheranger", (req, res) => {
  res.render("poem", {poem: motherAnger, name: name, lines: 11});
});

app.get("/significant-othergeneral-thanks", (req, res) => {
  res.render("poem", {poem: soGeneralThanks, name: name, lines: 6});
});

app.get("/significant-otherbirthday", (req, res) => {
  res.render("poem", {poem: soBirthday, name: name, lines: 6});
});

app.get("/significant-otherromantic", (req, res) => {
  res.render("poem", {poem: soRomantic, name: name, lines: 6});
});

app.get("/significant-otheranger", (req, res) => {
  res.render("poem", {poem: soAnger, name: name, lines: 8});
});

app.get("/thanosdid-nothing-wrong", (req, res) => {
  res.render("poem", {poem: thanosDidNothingWrong, name: name, lines: 6});
});

app.get("/thanossad", (req, res) => {
  res.render("poem", {poem: thanosSad, name: name, lines: 6});
});

app.get("/thanosimpatient", (req, res) => {
  res.render("poem", {poem: thanosImpatient, name: name, lines: 6});
});

app.get("/thanosmore-impatient", (req, res) => {
  res.render("poem", {poem: thanosMoreImpatient, name: name, lines: 9});
});

app.get("/thanoseven-more-impatient", (req, res) => {
  res.render("poem", {poem: thanosEvenMoreImpatient, name: name, lines: 7});
});

app.get("/thanosvery-very-very-impatient", (req, res) => {
  res.render("poem", {poem: thanosVeryVeryVeryImpatient, name: name, lines: 7});
});

app.post("/", (req, res) => {
  const person = req.body.person;
  const mood = req.body.mood;
  const submittedName = req.body.name;

  name = submittedName;

  if (!person || !mood) {
    res.redirect("/default");
  } else {
    res.redirect("/"+ person + mood);
  }
});

app.post("/submit", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let person = req.body.person;
  let mood = req.body.mood;
  let poem = req.body.poem;

  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: name + ' &lt;' + email + '&gt;',
    to: process.env.GMAIL_USER,
    subject: 'Poem Submission for sendapoem.org',
    html: `<p>${name} (${email}) submitted the following poem:</p> <p>Person: ${person}</p> <p>Mood: ${mood}</p> <p>Poem: ${poem}</p>`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('submission-failure');
    }
    else {
      res.render('submission-success');
    }
  });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
