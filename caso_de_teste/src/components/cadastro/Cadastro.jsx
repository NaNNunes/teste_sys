import React from 'react'

import style from './Cadastro.module.css'

const Cadastro = () => {
  const cad = () => {
    let name = document.querySelector("input#username").value;
    let email = document.querySelector("input#usermail").value;
    let pass = document.querySelector("input#userpass").value;
    let confirmPass = document.querySelector("input#confirmpass").value;
  
    alert(email.checkValidty());
  }

  const emailCheck = (email) => { // checking email, not finished
    for (let i = 0; i < email.length; i++){
      if(email[i] == "@"){
        return true;
      }
    }
    return false;
  }
  // senha e confirmar senha
  const confrmPass = (confirmPass, pass) => {
    return (pass == confirmPass);
  }
  // senha fraca
  const weakPass = (pass) => {
    return (pass.length < 8);
  }
  
  return (
    <div className={style.content}>
      <h2>Registre-se</h2>

      <div className={style.name}>
        <label htmlFor="">Nome: </label>
          <input type="text" id='username' />
      </div>

      <div className={style.email}>
        <label htmlFor="">E-mail: </label>
          <input type="email" name="" id="usermail" />
      </div>

      <div className={style.pss}>
        <label htmlFor="">Senha: </label>
          <input type="password" name="" id="userpass" />
      </div>

      <div className={style.pss}>
        <label htmlFor="">Confirmar: </label>
          <input type="password" name="" id="confirmpass" />
      </div>

      <div className={style.btn}>
        <button type="submit" onClick={cad}>Cadastrar</button>
      </div>
    </div>

  )
}

export default Cadastro