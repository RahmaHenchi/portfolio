import React from 'react'


function Projects() {
  return (
    <div class='col-12' style={{display:'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>

      <div class="card" style={{ width: 350, marginBottom: 20 }}>
        <img src='/Image1.png' class="card-img-top" alt="Counter" />
        <div class="card-body">
          <h5 class="card-title">Advanced Counter</h5>
        </div>
      </div>

      <div class="card" style={{ width: 350, marginBottom: 20 }}>
        <img src='/Image2.png' class="card-img-top" alt="ToDom" />
        <div class="card-body">
          <h5 class="card-title">ToDom</h5>
        </div>
      </div>

      <div class="card" style={{ width: 350, marginBottom: 20 }}>
        <img src='/Image3.png' class="card-img-top" alt="Business" />
        <div class="card-body">
          <h5 class="card-title">Business Land</h5>
        </div>
      </div>

      <div class="card" style={{ width: 350, marginBottom: 20 }}>
        <img src='/mercado.png' class="card-img-top" alt="Mercado" />
        <div class="card-body">
          <h5 class="card-title">Mercado</h5>
        </div>
      </div>

      <div class="card" style={{ width: 350, marginBottom: 20 }}>
        <img src='/agenda1.png' class="card-img-top" alt="Agenda" />
        <div class="card-body">
          <h5 class="card-title">Agenda</h5>
        </div>
      </div>

    </div>
  )
}
export default Projects