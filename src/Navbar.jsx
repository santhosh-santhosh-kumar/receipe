import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ background:'peru;'}}>
  <a class="navbar-brand" href="#">Food on Internet</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <ul class="navbar-nav login-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
      </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar