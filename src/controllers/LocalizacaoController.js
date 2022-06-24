 const {
     Util
 } = require('../util/index')
 class LocalizacaoControler {

     inicio(req, res) {

         res.redirect('index.html')

     }

     async transformarcep(req, res) {
         const { pesquisa } = req.body
         const pesquisasempontos =  Util.apenasNumeros(pesquisa)
         console.log(pesquisasempontos)
         if (pesquisasempontos == null || pesquisasempontos.length != 8) {
             res.redirect('index.html')
         }
         const cep = await Util.getCep(pesquisasempontos)

         if (!cep) {
             res.redirect('index.html')
         }

         let tempo = await Util.getTempo(cep)
         console.log(tempo)
         if (!tempo) {
            res.redirect('index.html')
        }
      

         res.render('home', {cep: cep, tempo: tempo.main})

     }






 }

 module.exports = { LocalizacaoControler }