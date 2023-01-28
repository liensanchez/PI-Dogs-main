import React from 'react'
import { useState} from 'react'

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

    setBreed({

    ...breed, 
      
    [e.target.name] : e.target.value
  })

  console.log(breed)
})





  return (
    <>

    <form action="" method="post">

      <label htmlFor="">Breed Name</label>
      <input type="text" name="name" id="" value={breed.name} onChange={handleChange}/>

      <label htmlFor="">Minimun Height</label>
      <input type="number" name="minHeight" id="" value={breed.minHeight} onChange={handleChange}/>

      <label htmlFor="">Maximum Height</label>
      <input type="number" name="maxHeight" id="" value={breed.maxHeight} onChange={handleChange}/>

      <label htmlFor="">Minimun Weight</label>
      <input type="number" name="minWeight" id="" value={breed.minWeight} onChange={handleChange}/>

      <label htmlFor="">Maximum Weight</label>
      <input type="number" name="maxWeight" id="" value={breed.maxWeight} onChange={handleChange}/>

      <label htmlFor="">Minimun Life Span</label>
      <input type="number" name="minLifeSpan" id="" value={breed.minLifeSpan} onChange={handleChange}/>

      <label htmlFor="">Maximum Life Span</label>
      <input type="number" name="maxLifeSpan" id="" value={breed.maxLifeSpan} onChange={handleChange}/>

      <label htmlFor="">Temperaments</label>
      <input type="text" name="temperament1" id="" />
      <input type="text" name="temperament2" id="" />
      <input type="text" name="temperament3" id="" />

      <button>Create Breed</button>
    </form>


    </>
  )
}

export default Form


/* 
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;



  //funcion validadora
export function validate (inputs) {

  const errors = {}
  if (!inputs.name) errors.name = 'Se requiere un nombre';
  if (!regexEmail.test(inputs.email)) errors.email = 'Debe ser un correo electrónico';
  if (inputs.phone < 0) errors.phone = 'Sólo números positivos'
  if (!inputs.subject) errors.subject = 'Se requiere un asunto'
  if (!inputs.message) errors.message = 'Se requiere un mensaje'

  return errors 
}




export default function Contact () {

    //seteo de error
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }); 



    //funcion  para los inputs y el error
  const handleChange = ((e) => {

      //seteamos inputs
    setInputs({
  
        //con spread operator lo invocamos llamamos a todos xq los "copia" y solo modificamos uno
      ...inputs, 
        
        //seteamos el input name mediante el event target
      [e.target.name] : e.target.value
    })


      //seteamos errors
    setErrors(

        //llamamos a la funcion
      validate({


        ...inputs,


        [e.target.name] : e.target.value
      })
    ) 
  })



    //funcion de envio
  function handleSubmit (e){
    e.preventDefault() 
    if (Object.keys(errors).length === 0){
      return window.alert('Datos completos')
    } else {
      return window.alert('Debes corregir los errores')
    }
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="">Nombre:</label>
      <input type="text" name='name' placeholder='Escribe tu nombre...' value={inputs.name} onChange={handleChange} className={errors.name && 'warning'} />
      <p className='danger'>{errors.name && errors.name} </p>
    <label htmlFor="">Correo Electrónico:</label>
      <input type="text" name='email' placeholder='Escribe tu email...' value={inputs.email} onChange={handleChange} className={errors.email && 'warning'} />
      <p className='danger'>{errors.email && errors.email} </p>
    <label htmlFor="">Teléfono:</label>
      <input type="number" name='phone' placeholder='Escribe un teléfono...' value={inputs.phone} onChange={handleChange} className={errors.phone && 'warning'} />
      <p className='danger'>{errors.phone && errors.phone} </p>
    <label htmlFor="">Asunto:</label>
      <input type="text" name='subject' placeholder='Escribe el asunto...' value={inputs.subject} onChange={handleChange} className={errors.subject && 'warning'} />
      <p className='danger'>{errors.subject && errors.subject} </p>
    <label htmlFor="">Mensaje:</label>
      <textarea name='message' placeholder='Escribe tu mensaje...' type='text' id="" cols="30" rows="10" value={inputs.message} onChange={handleChange} className={errors.message && 'warning'} ></textarea>
      <p className='danger'>{errors.message && errors.message} </p>
    <button type='submit'>Enviar</button> 
    </form>
}

*/