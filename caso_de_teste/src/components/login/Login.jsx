import React from "react";
import style from './login.module.css'

const Login = () => {
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

        <button type="submit" className={style.btn}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
