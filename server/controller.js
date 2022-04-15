
let golbalId = 4

module.exports= {

    createFortune: (req, res) => {
        let {type} = req.type
        let newFortune = {
          id: globalId,
          type,
        }
        fortunes.push(newFortune)
        res.status(200).send(fortunes)
        globalId++
      },

}