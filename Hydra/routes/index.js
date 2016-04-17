var	Post = require('../models/post.js');
module.exports = function(app) {
  app.get('/', function (req, res) {
    Post.get(null, function (err, posts) {
      if (err) {
        posts = [{lat:233,lng:666}];
      } 
      res.render('index', {
        posts: posts
      });
    });
  });
  app.post('/', function(req, res){
    var post = new Post(req.body.map_lat, req.body.map_lng);
    post.save(function(err){
      if(err){
        console.log(err);
        //res.redirect('/404');
      }
    });
  });
};
