const URL="http://localhost:3000/dogs"
fetch(URL)
.then(response=>response.json())
.then(dogs=>{
    const dogList=document.querySelector("#dogs")
    dogs.forEach(dog=>{
        //add dog name
        const name=document.createElement("p")
        name.textContent=dog.name
        //add dog breed
        const breed=document.createElement("p")
        breed.textContent=dog.breed
        //add dog owner
        const owner=document.createElement("p")
        owner.textContent=dog.owner
        //add dog age
        const age=document.createElement("p")
        age.textContent=dog.age
        //add dog image
        const image=document.createElement("img")
        image.src=dog.image

        const dogDiv=document.createElement("div")
        dogDiv.classList.add("dog")
        dogDiv.append(name,breed,owner,age,image)
        dogList.append(dogDiv)
    })
})