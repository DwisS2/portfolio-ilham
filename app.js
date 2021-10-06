const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 5000;

//setup method override
app.use(methodOverride("_method"));

// third party middleware
app.use(expressLayouts);

// built in moddleware
app.use(express.static("assets"));

app.use(express.urlencoded({ extended: true }));

//gunakan ejs
app.set("view engine", "ejs");

// halaman index
app.get("/", (req, res) => {
  res.render("index", { layout: "index.ejs", title: "Halaman Index" });
});
// halaman about
app.get("/about", (req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "Halaman About" });
});

// halaman contact
app.get("/contact", (req, res) => {
  res.render("contact", { layout: "layouts/main-layout", title: "Halaman Contact" });
});
// halaman component
app.get("/components", (req, res) => {
  res.render("components", { layout: "layouts/main-layout", title: "Halaman Components" });
});
// halaman project
app.get("/project-patapangzone", (req, res) => {
  res.render("project-patapangzone", { layout: "layouts/main-layout", title: "Halaman Patapang Zone" });
});
app.get("/project-wows", (req, res) => {
  res.render("project-wows", { layout: "layouts/main-layout", title: "Halaman Wows Tracker" });
});
// halaman projects
app.get("/projects", (req, res) => {
  res.render("projects", { layout: "layouts/main-layout", title: "Halaman Works" });
});

app.listen(port, () => {
  console.log(`Portfolio Ilham | listening at http://localhost:${port}`);
});
