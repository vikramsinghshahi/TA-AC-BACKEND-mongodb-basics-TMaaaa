var articles = [
  {
    title: 'Tracking',
    Date: 12 / 14 / 2021,
    details: 'all about tracking',
    author: {
      name: 'vikram',
      email: '123@gamil.com',
      age: 24,
    },
    tag: ['html', 'css'],
  },
  {
    title: 'paragliding',
    Date: 12 - 14 - 2021,
    details: 'all about paragliding',
    author: {
      name: 'rahul',
      email: '1234@gamil.com',
      age: 25,
    },
    tag: ['html', 'css'],
  },
  {
    title: 'Tracking',
    Date: 12 - 14 - 2021,
    details: 'all about tracking',
    author: {
      name: 'vikram',
      email: '12345@gamil.com',
      age: 26,
    },
    tag: ['html', 'css'],
  },
];

//db.articles.insertMany(articles)

//db.articles.find();

//db.artciles.find({ "_id" : ObjectId("6133a1c6fe98eb364bafee2a")});

//db.articles.find({"title" : "hicking"});

//db.articles.find({"author.name":"rahul"})

//db.articles.find({"tag: "html"})

//db.users.find({gnder:Male""})
//db.users.update({name:'Steve Ortega'},{$push:{sports:"golf"}})
//db.users.find({sports:{$in:["football","criket"]}})
//db.users.find({name:/ri/i})
