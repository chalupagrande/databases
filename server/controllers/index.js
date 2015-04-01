var models = require('../models');
var bluebird = require('bluebird');

var headers = {
  "access-control-allow-origin" : "*",
  "access-control-allow-methods" : "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers" : "content-type, accept",
  "access-control-max-age" : 10,
  "content-type" : "application/json"
}



module.exports = {
  messages: {
    get: function (req, res) {

      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      console.log("THE BODY ", req.body)

      // var fullbody = ""
      // req.on('data', function(err, data){
      //   if(err){
      //     console.log(err);
      //     throw err
      //   }
      //   fullbody+= data;
      // });
      // req.on('end', function(err, data){
      //   if(err){
      //     console.log(err);
      //     throw err
      //   }
      //   var obj = JSON.parse(fullbody);
      //   console.log("THE POST OBJ:",obj);
        
      //   //Call the model method
      //   exports.connection.query ("INSERT INTO users (name) VALUES (?)", [obj.username], function(err, results, fields){
      //     console.log("THE POST ERROR:",err);
      //     console.log("THE POST RESULTs:",results);
      //     console.log("THE POST ERROR:",fields);
      //   })

      // })

      // res.end("message added")


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    

    get: function (req, res) {

    },
    post: function (req, res) {
      var fullbody = ""
      // console.log("REQ:", req)

      req.on('data', function(err, data){
        console.log("TYPE OF DATA IS :", typeof data)
        console.log("The DATA IS :", typeof data)
        if(err){
          console.log(err);
          throw err
        }

        fullbody+= data;
      });
      req.on('end', function(err, data){
        if(err){
          console.log(err);
          throw err
        }
        var obj = JSON.parse(fullbody);
        console.log("THE POST OBJ:",obj);
        
        //Call the model method
        exports.connection.query ("INSERT INTO users (name) VALUES (?)", [obj.username], function(err, results, fields){
          console.log("THE POST ERROR:",err);
          console.log("THE POST RESULTs:",results);
          console.log("THE POST ERROR:",fields);
        })

      })

      res.end("User added")

    }
  }
};

