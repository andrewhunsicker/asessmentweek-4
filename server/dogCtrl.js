let dogs = require('./dogs.json')
let globalId = dogs[dogs.length -1].id + 1

module.exports = {
    getDogs: (req, res) => {
        res.status(200).send(dogs)
    },
    addDog: (req, res) => {
        const {name, breed, color} = req.body
        let newDog = {
            name,
            breed,
            color,
            id: globalId
        }
        dogs.push(newDog)
        res.stauts(200).send(dogs)
        globalId++
    },
    updateDog: (req, res) => {
        const {id} = req.params
        const {name, breed, color} = req.body
        let updateFort = {
            name,
            breed,
            color,
            id
        }
        let index = dogs.findIndex(dog => dog.id === +id)
        dogs.splice(index,1,updateFort)
        res.status(200).send(dogs)
    },
    deleteDog: (req, res) => {
        const {id} = req.params
        let index = dogs.findIndex(dog => dog.id === +id)
        dogs.splice(index,1)
        console.log(`delete`,dogs)

        res.status(200).send(dogs)
    }


}