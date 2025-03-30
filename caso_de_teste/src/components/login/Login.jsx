import React from "react";
import style from './login.module.css'

const users = [
  {
    id:0,
    nome: "user1",
    mail: "user@gmail.com",
    senha: "12345678"
  },
  {
    id:1,
    nome: "user2",
    mail: "usermail@gmail.com",
    senha: "87654321"
  },
  {
    id:2,
    nome: "user3",
    mail: "user@hotmail.com",
    senha: "333777666"
  },
  {
    id:3,
    nome: "user4",
    mail: "user.user@gmail.com",
    senha: "40028922_"
  }

]

const Login = () => {
  const log = () =>{
    let usermailField = document.querySelector("input#usermail");
    let passField = document.querySelector("input#userpass");

    let userFound = {};

    const inputs = {
      email: usermailField.value,
      pass: passField.value
    }

    for (const input in inputs) {
      if(voidField(inputs[input])){
        alert("Preencha todos os campos")
        return false;
      }
    }

    if(emailCheck(inputs.email)){
      userFound = searchMail(inputs.email, users);
    }
    else{
      return alert("email inválido");
    }
    
    return (userFound != false)
      ? (searchPass(inputs.pass, userFound))
        ? alert("Bem-vindo")
        : alert("senha inválida")
      : alert("user não encontrado")

  }

  let emailCheck = (email = "") => {
    let user = email.substring(0, email.indexOf("@"));
    let domain = email.substring(email.indexOf("@")+1, email.length);

    if((user.length >= 1) && (domain.length > 2) && 
      (user.search("@") == -1) && (domain.search("@") == -1) &&
      (user.search(" ") == -1) && (domain.search(" " == -1)) &&
      (domain.search(".") != -1) && 
      (domain.indexOf(".") >= 1) && (domain.lastIndexOf(".") < domain.length -1))
    {
      return true;
    }
    else {
      return false;
    }
  }

  let searchMail = (emailField = "", users = []) => {
    for(let i = 0; i < users.length; i++){
      if(emailField == users[i].mail){
        return users[i];
      }
    }
    return false;
  }

  let searchPass = (pass = "", user = {}) => {
    return (pass == user.senha)
  }

  let voidField = (field) => {
    return (field == "");
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
