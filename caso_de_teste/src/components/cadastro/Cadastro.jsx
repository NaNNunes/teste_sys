import React from 'react'
import { useState } from 'react'

import style from './Cadastro.module.css'

const Cadastro = () => {
  const cad = () => {
    let nameField = document.querySelector("input#username");
    let emailField = document.querySelector("input#usermail");
    let passField = document.querySelector("input#userpass");
    let confirmPassField = document.querySelector("input#confirmpass");

    // cleaning
    nameField.value = "";
    emailField.value = "";
    passField.value = "";
    confirmPassField.value = "";

    const user = {
      nome: nameField.value,
      email: emailField.value,
      senha: passField.value,
      confirmar: confirmPassField.value
    }

    for (const key in user) {
      if(isVoidField(user[key])){
        return alert(`Certifique-se de que todos os campos estão preenchidos`)
      }
    }

    return (emailCheck(user.email)) 
        ? (weakPass(user.pass)) 
          ? (confrmPass(user.confPass, user.pass)) 
            ? alert("Cadastro realizado com sucesso!")
            : alert("Senhas não coincidem")
          : alert("Senha Fraca, use uma senha com no mínimo 8 caracteres")
        : alert("E-mail inválido")
  }

  // checking email, using logical, not js string methods
  const emailCheck = (email = "") => {
    let user = "";
    let 
    domain = "";
    let mailLen = email.length;
    let atIndex = 0
    let i = 0;

    // checking all mail
      // hunting void spaces
      for (i = 0; i < mailLen; i++){
        if(email[i] == " "){
          return false;
        }
      }

      i = 0; // recicling

      // hunting at || .indexOf("@")
      while(email[i] != "@"){
        user += email[i];
        if(i++ > mailLen){
          return false;
        }
      }

      if(!(user.length >= 1)){
        return false;
      }

    // checking domain
      atIndex = i;  // backup
      i = 0;        // restarting
      for(i = atIndex+1; i < mailLen; i++){
        if
          ( // verificação incompleta de caracteres invalidos
            ((i == atIndex+1) && (email[i] == ".") || (email[i] == ";") || (email[i] == ",")) 
            || 
            ((i == mailLen-1) && (email[i] == ".") || (email[i] == ";") || (email[i] == ","))
          )
        { 
          return false; 
        } 
        else 
        { 
          domain += email[i]; 
        }
      }

      if(domain.length < 3){
        return false;
      }

      i = 0;
      while(domain[i] != "."){
        if(i++ > domain.length){
          return false;
        }
      }

      return true;

      // let user = email.substring(0, email.indexOf("@"));
      // let domain = email.substring(email.indexOf("@")+1, email.length);
  
      // if((user.length >= 1) && (domain.length > 2) && 
      //   (user.search("@") == -1) && (domain.search("@") == -1) &&
      //   (user.search(" ") == -1) && (domain.search(" " == -1)) &&
      //   (domain.search(".") != -1) && 
      //   (domain.indexOf(".") >= 1) && (domain.lastIndexOf(".") < domain.length -1))
      // {
      //   return true;
      // }
      // else {
      //   return false;
      // }
  }
  
  // senha e confirmar senha
  const confrmPass = (confirmPass, pass) => {
    return (pass == confirmPass);
  }
  // senha fraca
  const weakPass = (pass = "") => {
    return (pass.length >= 8);
  }

  const isVoidField = (fieldValue) =>{
    return fieldValue == "";
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