var express = require("express"),
	app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

// Routes

app.get("/", function(req, res) {
	res.redirect("/home");
});

app.get("/home", function(req, res) {
	res.render("index");
});

app.get("/about", function(req, res) {
	res.render("about");
});

app.get("/resume", function(req, res) {
	res.render("resume");
});

app.get("/gallery", function(req, res) {
	res.render("gallery");

});
app.get("/contact", function(req, res) {
	res.render("contact");
});

app.listen(8080, "127.0.0.1", function() {
    console.log("App is listening...");
});