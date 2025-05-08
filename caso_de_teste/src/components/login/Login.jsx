import React from "react";
import style from './login.module.css'

import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const users = [
  {
    id: 0,
    nome: "user1",
    mail: "user@gmail.com",
    senha: "aA1234567@"
  },
  {
    id: 1,
    nome: "user2",
    mail: "usermail@gmail.com",
    senha: "87654321"
  },
  {
    id: 2,
    nome: "user3",
    mail: "user@hotmail.com",
    senha: "333777666"
  },
  {
    id: 3,
    nome: "user4",
    mail: "user.user@gmail.com",
    senha: "40028922_"
  }
]

const Login = () => {
  const navigate = useNavigate();
  const toCadastro = () => {
    navigate("/cadastro");
  }

  // objeto para registro(não entendi direito), hundleSubmit(não entendi direito), (não entendi 2 ).
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  // ao enviar
  const onSubmit = (data) => {
    console.log("Data:", data);
  }
  // erro mostra erro
  const onError = (errors) => {
    console.log("Errors:", errors);
  }
  // search email (email, users list)
  let searchMail = (emailField = "", users = []) => {
    // if email found
    for (let i = 0; i < users.length; i++) {
      if (emailField == users[i].mail) {
        // return user found
        return users[i];
      }
    }
    // user not found
    return false;
  }
  // checking pass
  let searchPass = (pass = "", user = {}) => {
    // pass inputed is equal user pswd?
    return (pass == user.senha)
  }

  return (

    <div className={style.conteiner}>
      <h2 className={style.title}>Login</h2>
      <form className={style.formulario} onSubmit={handleSubmit(onSubmit, onError)}>

        <div className={style.mail}>
          <label htmlFor="">
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              id="usermail"
              placeholder="user@gmail.com"

              {...register("email", {
                required: "Email de usuário é obrigatório", // caso requisito não preenchido envia mensagem
                pattern: {  // pai e suas obrigações
                  value: /^[A-Za-zç0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, // user + @ + dominio + estencao (min len)
                  message: "Email inválido" // msg de erro
                },
                validate: (value) => value.includes("@") || "Email inválido" // nao entendi 4
              })}
            />
          </label>
          {errors.email && <p className={style.error}>{errors.email.message}</p>}
        </div>

        <div className={style.pass}>
          <label htmlFor="">
            <span>Senha: </span>
            <input
              type="password"
              name=""
              id="userpass"
              placeholder="Digite sua senha"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 8,
                  message: "A senha deve ter pelo menos 8 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "A senha deve ter menos de 20 caracteres",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
                },
              })}
            />
          </label>
          {errors.userpass && <p className={style.error}>{errors.userpass.message}</p>}
        </div>

        <button
          type="submit"
          className={style.btn}
          // verificacao na mao
          onClick={() => {

            // to find user
            let userFound = {};

            // gettin values from inputs
            const inputs = {
              email: document.querySelector("input#usermail").value,
              pass: document.querySelector("input#userpass").value
            }

            // search email in users list
            userFound = searchMail(inputs.email, users);

            // if user Found, find your pswd and navigate to cadastro
            return (userFound != false)
              ? (searchPass(inputs.pass, userFound)
                ? toCadastro() : alert("Senha inválida"))
              : alert("User não encontrado");
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
