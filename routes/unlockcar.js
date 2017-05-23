var express = require('express');
var router = express.Router();
var dataBaseModule = require('./pg-test_module_pool.js');
var bodyparser = require ('body-parser');
/* GET users listing. */


router.post('/:userId', function(req, res, next) {
      var userid = req.params.userId;
      var query='';
      var stat='';
      var topspeed ='';
      var accele ='';
      var handling ='';

      //body
      var idchar=req.body.idcaar;

      query = 'SELECT id FROM player WHERE id IN ({0});';
      query = query.replace('{0}',userid);
        try {
          dataBaseModule.execute(query,function(result){
              if(result ==''){
                res.send('no existe un usuario con ese id');
              }else{
                query ='SELECT carid FROM cars WHERE character_id_2 IN ({0});';
                query = query.replace('{0}', idcar);

                try {
                     dataBaseModule.execute(query,function(result){
                           if(result == ''){
                             res.send('no existe un carro con este id')
                           }else{
                                   query ='SELECT carid FROM playercars WHERE playerid IN ({0}) AND carid IN ({1});';
                                   query = query.replace('{1}', idcar);
                                   query = query.replace('{0}', userid);
                                   try {
                                        dataBaseModule.execute(query,function(result){

                                             if(result == ''){
                                               query ='SELECT topspeed, accele, handling FROM playercars WHERE carid IN ({0});';
                                               query = query.replace('{0}', idcar);
                                               try {
                                                    dataBaseModule.execute(query,function(result){
                                                      topspeed = result[0].topspeed;
                                                      accele = result[0].accele;
                                                      handling = result[0].handling;

                                                      query = "INSERT INTO playercars (playerid, carid, topspeed, accele, handling) VALUES ('{0}','{1}','{2}','{3}','{4}');";
                                                      query= query.replace('{0}',userid);
                                                      query= query.replace('{1}',idcar);
                                                      query= query.replace('{2}',topspeed);
                                                      query= query.replace('{3}',accele);
                                                      query= query.replace('{4}',handling);


                                                              try {
                                                                   dataBaseModule.execute(query,function(result){
                                                                      res.send('se desbloqueo el carro de forma efectiva');

                                                                });
                                                              } catch (e) {

                                                              }
                                                 });
                                               } catch (e) {

                                               }
                                             }else{
                                                   res.send('el jugador ya desbloqueo este carro');
                                             }
                                     });
                                   } catch (e) {

                                   }
                                 }

                  });
                } catch (e) {

                }
              }

            });
        } catch (e) {

        }




});

module.exports = router;
