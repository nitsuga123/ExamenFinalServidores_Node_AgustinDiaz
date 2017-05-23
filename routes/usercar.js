var express = require('express');
var router = express.Router();
var dataBaseModule = require('./pg-test_module_pool.js');
/* GET users listing. */

router.get('/:userId', function (req, res, next) {
  var userid = req.params.userId;
  query = 'SELECT "car" FROM "activecar" WHERE "id" IN ({0});'
  query = query.replace('{0}', userid);
  try {
       dataBaseModule.execute(query,function(result){
         res.send(JSON.stringify(result));
    });
  } catch (e) {
   //fin sexto try
  }
});

router.post('/:userId', function(req, res, next) {
      var userid = req.params.userId;
      //body
      var carroentra=req.body.carroentra;

      query = 'SELECT "carid" FROM "playercars" WHERE playerid IN ({0});';
      query = query.replace('{0}', userid);

      try {
           dataBaseModule.execute(query,function(result){
             if(result == ''){
               res.send('el usuario no tiene este carro')
             }else{
               query = 'UPDATE activecar car  = {0} WHERE id IN ({1});';
               query = query.replace('{0}',JSON.stringify(carroentra));
               query = query.replace('{1}',userid);
             }
              
        });
      } catch (e) {
       //fin sexto try
      }
});

module.exports = router;
