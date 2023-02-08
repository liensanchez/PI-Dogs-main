import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch} from 'react-redux';
import {allDogs} from '../../redux/action/action'


const DivContainer = styled.div`
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:#ede1e1;
  width: 400px;
  padding: 40px;
  border-radius:10px;
  box-shadow: 6px 6px 18px;
`

const FormContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InputForm = styled.input`
  margin-top:5px;
  margin-bottom: 5px;
  border: none;
  border-radius: 5px;
  height: 25px;
`

const Button = styled.button`
  &:hover{
    transform: scale(1.15);
  }
  background-color:#8d7070;
  color:#ede1e1;
  border-radius: 5px;
  padding:5px;
  border: none;
  box-shadow: #2c2c2c 1px 1px 2px;
  font-size: 15px;
  transition: all 0.8s;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  display:flex;
  justify-content: center;
`

const ErrorText = styled.p`
  color: red;
`


function Form() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

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
    image: '',
    temperament: ''
  });

  const [error, setError] = useState({
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
    image: '',
    temperament: ''
  });

  const regexName = /^[a-zA-Z]{3,14}$/


  const validate = (breed) => {

    const error = {} 

    if (!breed.name) error.name = 'This field is required';
    if (!regexName.test(breed.name)) error.name = 'Must have between 3 to 14 letters';
    if (breed.name.lenght > 10) error.name = 'This name is to large';
    if (breed.minHeight < 0) error.minHeight = 'Only positive numbers'
    if (breed.maxHeight < 0) error.maxHeight = 'Only positive numbers'
    if (breed.maxHeight < breed.minHeight) error.maxHeight = 'The maximum height must be greater than the minimum'
    if (breed.minWeight < 0) error.minWeight = 'Only positive numbers'
    if (breed.maxWeight < 0) error.maxWeight = 'Only positive numbers'
    if (breed.maxWeight < breed.minWeight) error.maxWeight= 'The maximum weight must be greater than the minimum'
    if (breed.minLifeSpan < 0) error.minLifeSpan = 'Only positive numbers'
    if (breed.maxLifeSpan < 0) error.maxLifeSpan = 'Only positive numbers'
    if (breed.maxLifeSpan < breed.minLifeSpan) error.maxLifeSpan= 'The maximum life span must be greater than the minimum'
    if (!breed.temperament) error.temperament = 'This field is required';


    return error 
  }


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

    setError(

      validate({

        ...breed,

        [e.target.name] : e.target.value
      })
    )
  })

  const submit = (e) => {
    e.preventDefault()
    if((!breed.name)){
      alert('the breed needs a name')
    }else if((!error.name) || (!error.temperament)){
      axios({
        method: "post",
        url: "/dogs",
        data:{
          name: breed.name,
          height: breed.height,
          weight: breed.weight,
          lifeSpan: breed.lifeSpan,
          image: breed.image,
          temperament: breed.temperament
        }
      })
      dispatch(allDogs())
      navigate('/home') 
    }else if(error.name){
      alert('the breed needs a name') 
    }
  }


  return (
    <DivContainer>
    <Container>
      <Link to='/home'>
        <Button>Back to Home</Button>
      </Link>


    <form onSubmit={submit}>
      <FormContainer>

      <label htmlFor="">Breed Name</label>
      <InputForm type="text" name="name" id="" value={breed.name} onChange={handleChange}/>
      <ErrorText >{error.name && error.name} </ErrorText>

      <label htmlFor="">Minimun Height</label>
      <InputForm type="number" name="minHeight" id="" value={breed.minHeight} onChange={handleChange}/>
      <ErrorText >{error.minHeight && error.minHeight} </ErrorText>

      <label htmlFor="">Maximum Height</label>
      <InputForm type="number" name="maxHeight" id="" value={breed.maxHeight} onChange={handleChange}/>
      <ErrorText >{error.maxHeight && error.maxHeight} </ErrorText>

      <label htmlFor="">Minimun Weight</label>
      <InputForm type="number" name="minWeight" id="" value={breed.minWeight} onChange={handleChange}/>
      <ErrorText >{error.minWeight && error.minWeight} </ErrorText>

      <label htmlFor="">Maximum Weight</label>
      <InputForm type="number" name="maxWeight" id="" value={breed.maxWeight} onChange={handleChange}/>
      <ErrorText >{error.maxWeight && error.maxWeight} </ErrorText>

      <label htmlFor="">Minimun Life Span</label>
      <InputForm type="number" name="minLifeSpan" id="" value={breed.minLifeSpan} onChange={handleChange}/>
      <ErrorText >{error.minLifeSpan && error.minLifeSpan} </ErrorText>

      <label htmlFor="">Maximum Life Span</label>
      <InputForm type="number" name="maxLifeSpan" id="" value={breed.maxLifeSpan} onChange={handleChange}/>
      <ErrorText >{error.maxLifeSpan && error.maxLifeSpan} </ErrorText>

      <label htmlFor="">Image URL</label>
      <InputForm type="text" name="image" id="" value={breed.image} onChange={handleChange}/>

      <label htmlFor="">Temperaments</label>
      <InputForm type="text" name="temperament" id="" value={breed.temperament} onChange={handleChange} />
      <ErrorText >{error.temperament && error.temperament} </ErrorText>

      </FormContainer>

      <ButtonContainer>
        <Button type='submit'>Create Breed</Button>
      </ButtonContainer>

    </form>


    </Container>
    </DivContainer>

  )
}

export default Form


