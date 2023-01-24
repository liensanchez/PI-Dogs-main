import React from 'react'
import { Link } from 'react-router-dom'

function Index() {

  return (
    <>
      <Link to='/home'>
        <button>Pagina Principal</button>
      </Link>
    </>
  )
}

export default Index