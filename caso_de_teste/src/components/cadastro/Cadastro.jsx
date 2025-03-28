import React from 'react'

const Cadastro = () => {
  const cad = () => {
    let name = document.querySelector("input#username").value;
    let email = document.querySelector("input#usermail").value;
    let pass = document.querySelector("input#userpass").value;

    
  }
  
  return (
    <div>
      <h2>Registre-se</h2>

      <div className="name">
        <label htmlFor="">Nome: </label>
          <input type="text" id='username' />
      </div>

      <div className="email">
        <label htmlFor="">E-mail: </label>
          <input type="email" name="" id="usermail" />
      </div>

      <div className="pss">
        <label htmlFor="">Senha: </label>
          <input type="password" name="" id="userpass" />
      </div>

      <div className="btn">
        <button type="submit" onClick={cad}>Cadastrar</button>
      </div>
    </div>

  )
}

export default Cadastro