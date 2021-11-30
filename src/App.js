import contacts from '../src/contacts.json'
import './App.css';
import { useState } from 'react'



function App() {
  const [contact, setContacts] = useState(contacts.slice(0, 5))
  //console.log(contact)
  //console.log(setContacts)
  

  function handleDelete(id){
    let filteredCelebs = contact.filter((elem) => {
        return elem.id !== id
    })
    // Updating the state 'allPeople' with the filtered list
    setContacts(filteredCelebs)
}

function handleSortName(){
  let clone = JSON.parse(JSON.stringify(contact))
  clone.sort((first, second) => {
      if (first.name > second.name) {
          return 1
      }
      else if (first.name < second.name) {
          return -1
      }
      else {
          return 0
      }
  })

  setContacts(clone)
}

function handleSortPopularity(){
  let clone = JSON.parse(JSON.stringify(contact))
  clone.sort((first, second) => {
      if (first.popularity > second.popularity) {
          return -1
      }
      else if (first.popularity < second.popularity) {
          return 1
      }
      else {
          return 0
      }
  })

  setContacts(clone)
}



  function handleRandom(){
    let randomElem = contacts[Math.floor(Math.random() * contacts.length)]
    let newArray = [randomElem, ...contact]
    setContacts(newArray)
}

  return (
    <div className="App">
      <h1> IronContacts </h1>
      <button onClick={handleRandom} > Random Contact </button>
      <button onClick={handleSortName}> Sort Name</button>
      <button onClick={handleSortPopularity}> Sort Popularity</button>
      <div className='celebs'>
      {
     contact.map((elem, index) => {
       return (

        <div key={`${elem.id}${index}`}>
          
     <hr />
     <h5>Picture: </h5>
      <img src={elem.pictureUrl} alt="celebrity"/> 
      <h5>Name: </h5>  
      <p>{elem.name}</p>
      <h5>Popularity: </h5>
      {elem.popularity}
      <h5>Won Oscar: </h5>
      {elem.wonOscar == true && '🏆'}
      <h5>Won Emmy: </h5>
      {elem.wonEmmy == true && '🏆'}
      <button onClick={() => { handleDelete(elem.id) }}>Delete</button>
      <hr />
      </div>
     )}) }
     </div>
    </div>
  )
}

export default App;