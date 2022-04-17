const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 

 const ctrl = require(`./controller.js`)
const dogCtrl = require(`./dogCtrl.js`)


app.get(`/api/compliment`, ctrl.getCompliment)
app.get(`/api/fortune`, ctrl.getFortune)

app.get(`api/dogs`, dogCtrl.getDogs)
app.post(`/api/dog`, dogCtrl.addDog)
app.put(`/api/dog/:id`, dogCtrl.updateDog)
app.delete(`/api/dog/:id`, dogCtrl.deleteDog)

app.listen(4000, () => console.log("Server running on 4000"));
