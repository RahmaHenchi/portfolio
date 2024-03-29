import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Skills() {
  const [technologies, setTechnologies] = useState([])
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then(response => setTechnologies(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='row'>
      {technologies.map(item => (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3' style={{ marginBottom: 20 }}>
          <div class="card" style={{ padding: 15 }}>
            <img src={item.image} class="card-img-top" alt="Tech" />
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <Link to={`/skills/${item.id}`} class="btn btn-primary">Learn about</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills