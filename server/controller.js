


module.exports= {
  getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",]

           let randomIndex = Math.floor(Math.random() * compliments.length);
           let randomCompliment = compliments[randomIndex];
           res.status(200).send(randomCompliment);
          },

  getFortune: (req, res) => {
    let fortunes = ["better grades are beyond the horizon",
					 "riches beyond comprehension are in a neighbors future.",
           "i bet you find a quarter on the floor today",
           "your youtube channel will see subcribers increase",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  }        

}