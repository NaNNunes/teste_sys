import React from "react";
import style from './login.module.css'

const users = [
  {
    id:0,
    nome: "user1",
    email: "user@gmail.com",
    senha: "12345678"
  },
  {
    id:1,
    nome: "user2",
    email: "usermail@gmail.com",
    senha: "87654321"
  },
  {
    id:2,
    nome: "user3",
    email: "user@hotmail.com",
    senha: "333777666"
  },
  {
    id:3,
    nome: "user4",
    email: "user.user@gmail.com",
    senha: "40028922_"
  },

]

const Login = () => {
  const log = () =>{
    let usermailField = document.querySelector("input#usermail");
    let passField = document.querySelector("input#userpass");

    const inputs = {
      mail: usermailField.value,
      pass: passField.value
    }

    searchMail(inputs.mail, users);
  }

  const searchMail = (email = "", users = []) => {
    // god
  }

  const searchPass = (pass = "", users = []) => {
    // god 2
  }

  return (

    <div className={style.conteiner}>
      <h2 className={style.title}>Login</h2>
      <div className={style.formulario}>

        <div className={style.mail}>
            <label htmlFor="">E-mail: </label>
              <input type="email" name="" id="usermail" />
        </div>

        <div className={style.pass}>
            <label htmlFor="">Senha: </label>
              <input type="password" name="" id="userpass" />
        </div>

        <button type="submit" className={style.btn} onClick={log}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
