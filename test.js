const mongoose = require("mongoose");

const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

// BlogPost.create({
//   title: "The Mythbuster Guide to Saving Money on Energy Bills",
//   body: "If you have been here a long time, you might remember when I went on ITV Tonight to" +
//     "dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite" +
//     "money topics, because once you get past the boring bullet-point lists, a whole new world of" +
//     "thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything" +
//     "at this time of year. They go like this:"
// }, (error, blogpost) => {
//   console.log(error, blogpost)
// });

// BlogPost.find({}, (error, blogpost) => {
//   console.log(error, blogpost)
// });

var id = "60c9c42078a6bc0234206787";

// BlogPost.findByIdAndUpdate(id, { title: "Updated Title" }, (erro'r, blogpost) => {
//   console.log(error, blogpost)
// });

// BlogPost.findByIdAndDelete(id, (error, blogpost) => {
//   console.log(error, blogpost)
// });

  BlogPost.deleteMany();