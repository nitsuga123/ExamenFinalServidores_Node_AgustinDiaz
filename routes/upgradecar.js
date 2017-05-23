var express = require('express');
var router = express.Router();
var dataBaseModule = require('./pg-test_module_pool.js');
/* GET home page. */


router.get('/:userId', function (req, res, next) {
  var userid = req.params.userId;
  query = 'SELECT "carid", "topspeed","accele" FROM "playercars" WHERE "playerid" IN ({0});'
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
  var query='';
  var stat='';
  //body
  var stattoupgrade=req.body.stattoupgrade;
  var quantity =req.body.quantity;
  var carid=req.body.carid;

  query = 'SELECT "id" FROM "player" WHERE id IN ({0});';
  query = query.replace('{0}', userid);
    try {
        dataBaseModule.execute(query, function (result) {
            if(result ==''){
              res.send('no existe un usuario con este id');
            }else{
              query = 'SELECT {0} FROM "playercars" WHERE "playerid" IN ({1}) AND "carid" IN ({2});'

              query = query.replace('{0}',stattoupgrade);
              query = query.replace('{1}',userid);
              query = query.replace('{2}',carid);
            if(stattoupgrade == 'topspeed' || stattoupgrade == 'accele'||stattoupgrade == 'handling'){

                    if(quantity > 0){
                        try {
                             dataBaseModule.execute(query,function(result){
                                 if(result == ''){
                                   res.send('el jugador seleccionado no tiene al personaje con el id ingresado')
                                 }else{
                                     if(stattoupgrade == 'topspeed'){
                                       stat=result[0].topspeed;
                                     }else if(stattoupgrade == 'accele'){
                                       stat=result[0].accele;
                                     }else if(stattoupgrade == 'handling'){
                                       stat=result[0].defense_points;
                                     }
                                     query = 'UPDATE playercars SET {0} = {1} WHERE playerid IN ({2}) AND carid IN ({3});';
                                     query = query.replace('{0}',stattoupgrade);
                                     query = query.replace('{1}',stat + parseInt(quantity));
                                     query = query.replace('{2}',userid);
                                     query = query.replace('{3}',charid);


                                     try {
                                          dataBaseModule.execute(query,function(result){
                                            var mensaje = 'se ha actualizado de forma efectiva la estadistica {0}, en un valor total de {1} puntos';
                                            mensaje = mensaje.replace('{0}',stattoupgrade);
                                            mensaje = mensaje.replace('{1}',quantity);
                                           res.send(mensaje)
                                       });
                                     } catch (e) {

                                     }


                                 }
                          });
                        } catch (e) {

                        }

                    }else{
                      res.send('no puede incrementar en numeros negativos o en cero una estadistica');
                    }

            }else{
              res.send('la estadistica que se quiere editar no existe')
            }
            }
        });
    } catch (e) {

    }




});

module.exports = router;
