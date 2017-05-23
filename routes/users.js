var express = require('express');
var router = express.Router();
var dataBaseModule = require('./pg-test_module_pool.js');
/* GET users listing. */

router.get('/:userId', function (req, res, next) {
  var userid = req.params.userId;
  query = 'SELECT exp, lvl,money, player.id  FROM playerdata INNER JOIN player ON player.id = playerdata.playerid WHERE  player.id  IN ({0});'
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
      var exp=req.body.exp;
      var lvl=req.body.lvl;
      var money=req.body.money;
      query = 'UPDATE playerdata SET exp = {0} WHERE playerid IN ({1});';
      query = query.replace('{0}',JSON.stringify(exp));
      query = query.replace('{1}',idperdedor);
      try {
           dataBaseModule.execute(query,function(result){
               res.send('se actializo la exp');
        });
      } catch (e) {
       //fin sexto try
      }

      query = 'UPDATE playerdata SET lvl = {0} WHERE playerid IN ({1});';
      query = query.replace('{0}',JSON.stringify(lvl));
      query = query.replace('{1}',idperdedor);
      try {
           dataBaseModule.execute(query,function(result){
               res.send('se actializo el lvl');
        });
      } catch (e) {
       //fin sexto try
      }

      query = 'UPDATE playerdata SET money = {0} WHERE playerid IN ({1});';
      query = query.replace('{0}',JSON.stringify(money));
      query = query.replace('{1}',idperdedor);
      try {
           dataBaseModule.execute(query,function(result){
               res.send('se actializo el money');
        });
      } catch (e) {
       //fin sexto try
      }

});

module.exports = router;
