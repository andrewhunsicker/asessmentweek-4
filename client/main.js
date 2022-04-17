


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

 const dogDisplay = document.getElementById("dog-display")
 const editZone = document.getElementById(`edit-zone`)
 const addForm = document.getElementById(`add-form`)

 const handleDisplay = arr => {
   while(dogDisplay.childNodes.length > 0) {
     dogDisplay.removeChild(dogDisplay.lastChild)
   }
   for(let i = 0; i < arr.length; i++) {
     displayDogs(arr[i])
   }
 }

 const displayDogs = dog => {
   console.log(`DM`, dog.id)

   let dogContainer = document.createElement("div")
   dogContainer.className = "dog-container"
   dogContainer.innerHTML = `<h2>Name:</h2> <p>${dog.name}</p>
        <h2>Breed:</h2> <p> ${dog.breed}</p>
        <h2>Color:</h2> <p> ${dog.color}</p>
        <button id='edit-id-${dog.id}'>Edit</button>
        <button id='delete-id-${dog.id}'>Delete</button>`

        dogDisplay.appendChild(dogContainer)

        document.getElementById(`edit-id-${dog.id}`).addEventListener(`click`, e => {
          editDog(dog)
        })

        console.log(document.getElementById(`delete-id-${dog.id}`))
        document.getElementById(`delete-id-${dog.id}`).addEventListener(`click`, e => {
          console.log(`event listener`)
          deleteDog(dog.id)
        })

      }

      const getDogs = () => {
        axios
          .get("http://localhost:4000/api/dogs/")
          .then(res => {
            handleDisplay(res.data)
          })
          .catch(err => console.log(err))
      }
  

      const addDog = e => {
        e.preventDefault()

        const newDog = {
          name: document.getElementById(`new-name`).value, 
          breed: document.getElementById(`new-breed`).value,  
          color: document.getElementById(`new-color`).value 
        }
        axios.post(`http://localhost:4000/api/dog/`, newDog)
        .then(res => {
          handleDisplay(res.data)
        })
        .catch(err => console.log(err))

         document.getElementById("new-name").value = "",
         document.getElementById("new-breed").value = "",  
         document.getElementById("new-color").value = ""
      }

      addForm.addEventListener(`submit`, addDog)

      const editDog = dog => {
        console.log(`hit`)
        const editForm = document.createElement("form")
        editForm.className = 'edit-form'
        editForm.innerHTML= `
        <input id= 'name-input' placeholder="Name" class= "form-input" value="${dog.name}"/>
       <input id= 'breed-input' placeholder="Breed" class= "form-input" value="${dog.breed}"/>
       <input id= 'color-input' placeholder="Color" class= "form-input" value="${dog.color}"/>
       <button>save changes</button>`

       editZone.appendChild(editForm)

       editForm.addEventListener("submit",e => {
         e.preventDefault()

         let updates = {
           name: document.getElementById('name-input').value,
           breed: document.getElementById('breed-input').value,
           color: document.getElementById('color-input').vlaue
         }

         axios.put(`http://localhost:4000/api/dog/${dog.id}`, updates)
         .then(res => {
           handleDisplay(res.data)
           editForm.remove()
         })
         .catch(err => console.log(err))
       })
      }


      const deleteDog = id => {
        console.log(`hit delete`)
        axios.delete(`http://localhost:4000/api/dog/${id}`)
        .then(res => {
          console.log(res)
          handleDisplay(res.data)
        })
        .catch(err => console.log(err))
      }
      getDogs()