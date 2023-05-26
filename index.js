const URL="http://localhost:3000/dogs"
fetch(URL)
.then(response=>response.json())
.then(dogs=>{
    dogs.forEach(dog=>createDog(dog))
})
const addDogForm=document.querySelector("form#add-dog-form")
addDogForm.addEventListener("submit",addNewDog)

function createDog(dog){
    const dogList=document.querySelector("#dogs")
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
}

function addNewDog(event){
    event.preventDefault()
    
    /*const name=document.querySelector("input#name").value
    const breed=document.querySelector("input#breed").value
    const owner=document.querySelector("input#owner").value
    const age=document.querySelector("input#age").value
    const image=document.querySelector("input#image").value*/

    //alternate method of reading from form
    const name=event.target.name.value
    const breed=event.target.breed.value
    const owner=event.target.owner.value
    const age=event.target.age.value
    const image=event.target.image.value

    /*const newDog={}
    newDog.name=name
    newDog.breed=breed
    newDog.owner=owner
    newDog.age=age
    newDog.image=image
    console.log(newDog)*/

    //alternate method to create new dog object
    const newDog={name,breed,owner,age,image}
    
    fetch(URL,{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
       },
       body:JSON.stringify(newDog)
    })
    .then(response=>response.json())
    .then(newDog=>createDog(newDog))
    .catch(e=>alert(e.message))

}