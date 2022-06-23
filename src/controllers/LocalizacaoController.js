 const {
     Util
 } = require('../util/index')
 class LocalizacaoControler {

     inicio(req, res) {

         res.redirect('index.html')

     }

     async transformarcep(req, res) {
         const { pesquisa } = req.body

         if (pesquisa == null || pesquisa.length != 8) {
             res.redirect('index.html')
         }

         const cep = await Util.getCep(pesquisa)

         if (!cep) {
             res.redirect('index.html')
         }

         console.log(cep)

         res.render('home')

     }






 }

 module.exports = { LocalizacaoControler }