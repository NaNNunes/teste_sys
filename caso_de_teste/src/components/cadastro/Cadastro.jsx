import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

import style from './Cadastro.module.css'

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados:", data);
  };

  const onError = (errors) => {
    console.log("Erros:", errors)
  };

  const cad = () => {
    let nameField = document.querySelector("input#username");
    let emailField = document.querySelector("input#usermail");
    let passField = document.querySelector("input#userpass");
    let confirmPassField = document.querySelector("input#confirmpass");

    const user = {
      nome: nameField.value,
      email: emailField.value,
      senha: passField.value,
      confirmar: confirmPassField.value
    }

    return
  }



  return (
    <div className={style.content}>
      <h2>Registre-se</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={style.name}>
          <label htmlFor="">Nome: </label>
          <input type="text" id='username' 
            {...register("nome", {
              required: "O nome é obrigatório",
              minLength: {
                  value: 2,
                  message: "Tem que ter 2 caracteres"
              },
              maxLength: {
                  value: 20,
                  message: "O nome deve no máximo 20 caracteres"
              },
              pattern: {
                  value: /^[A-Za-zçã]+$/i, // apenas letras
                  message: "Apenas letras por favor"
              }
          })}
        />
        {errors.nome && <p>{errors.nome.message}</p>}
        </div>

        <div className={style.email}>
          <label htmlFor="">E-mail: </label>
          <input type="email" name="" id="usermail"
            {...register("email", {
              required: "email é obrigatório",
              pattern: {
                value: /^[A-Za-zç0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, // user @ dominio
                message: "Email inválido"
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={style.pss}>
          <label htmlFor="">Senha: </label>
          <input type="password" name="" id="senha"
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
        </div>

        <label>
          <span>Confirmar Senha:</span>
            <input
              type="password"
              {...register("confirmarSenha", {
                  required: "A confirmação de senha é obrigatória",
                  validate: (value) =>
                      value === watch("senha") || "As senhas não coincidem",
              })}
              placeholder="Confirmar Senha"
            />
            {errors.confirmarSenha && (
                <p>{errors.confirmarSenha.message}</p>
            )}
        </label>

        <div className={style.btn}>
          <button type="submit" onClick={cad}>Cadastrar</button>
        </div>
      </form>
    </div>

  )
}

export default Cadastro