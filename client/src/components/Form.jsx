import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { Link } from 'react-router-dom';


function Form() {

  const [breed, setBreed] = useState({
    name: '',
    minHeight: '',
    maxHeight: '',
    height: '', 
    minWeight: '',
    maxWeight: '',
    weight: '',
    minLifeSpan: '',
    maxLifeSpan: '',
    lifeSpan: '',
    temperament: ''
  });

  const handleChange = ((e) => {

    if (e.target.name === "minHeight" || e.target.name === "maxHeight" || e.target.name === "minWeight" || e.target.name === "maxWeight" || e.target.name === "minLifeSpan" || e.target.name === "maxLifeSpan" || e.target.name === "maxLifeSpan") {
      setBreed({
          ...breed,
          [e.target.name]: e.target.value,
          height: `${breed.minHeight}-${breed.maxHeight}`,
          weight: `${breed.minWeight}-${breed.maxWeight}`,
          lifeSpan: `${breed.minLifeSpan}-${breed.maxLifeSpan}`,
      });
    } else {
      setBreed({
          ...breed,
          [e.target.name]: e.target.value
      });
    }


  })

  const submit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: "http://localhost:3003/dogs",
      data:{
        name: breed.name,
        height: breed.height,
        weight: breed.weight,
        lifeSpan: breed.lifeSpan,
        temperament: breed.temperament
      }
    })
  }


  return (
    <>
      <Link to='/home'>
        <button>Back to Home</button>
      </Link>

    <form onSubmit={submit}>

      <label htmlFor="">Breed Name</label>
      <input type="text" name="name" id="" value={breed.name} onChange={handleChange}/>

      <label htmlFor="">Minimun Height</label>
      <input type="text" name="minHeight" id="" value={breed.minHeight} onChange={handleChange}/>

      <label htmlFor="">Maximum Height</label>
      <input type="text" name="maxHeight" id="" value={breed.maxHeight} onChange={handleChange}/>

      <label htmlFor="">Minimun Weight</label>
      <input type="text" name="minWeight" id="" value={breed.minWeight} onChange={handleChange}/>

      <label htmlFor="">Maximum Weight</label>
      <input type="text" name="maxWeight" id="" value={breed.maxWeight} onChange={handleChange}/>

      <label htmlFor="">Minimun Life Span</label>
      <input type="text" name="minLifeSpan" id="" value={breed.minLifeSpan} onChange={handleChange}/>

      <label htmlFor="">Maximum Life Span</label>
      <input type="text" name="maxLifeSpan" id="" value={breed.maxLifeSpan} onChange={handleChange}/>

      <label htmlFor="">Temperaments</label>
      <input type="text" name="temperament" id="" value={breed.temperament} onChange={handleChange} />

      <button type='submit'>Create Breed</button>
    </form>


    </>
  )
}

export default Form


