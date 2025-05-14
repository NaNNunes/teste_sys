import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from "react-bootstrap/Alert";

import { set, useForm } from "react-hook-form";
import { useState } from 'react';

import { verificadorCpf } from './verificador_cpf';

const VerificadorCpf = () => {

  const [alertClass, setAlertClass] = useState("d-none mb-5");
  const [alertMsg, setAlertMsg] = useState("");

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setAlertClass("p-3")
    if(verificadorCpf(data.cpf)){
      setAlertMsg("CPF válido");
    }
    else{
      setAlertMsg('CPF não válido')
    }
    e.preventDefault();
    window.location.reload();
  }
  const onError = (errors) =>{
    console.log(errors);
    setAlertClass("p-3")
    setAlertMsg("Ops algo deu errado.");   
    e.preventDefault();
    window.location.reload();
  }

  return (
    <Container className='shadow rounded-3 p-2'>
        <Form className='p-3' onSubmit={handleSubmit(onSubmit, onError)}>
            <Row>
              <Col>
                <h3>Verificador de CPF</h3>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <FloatingLabel
                  className='mb-3'
                  id='cpfInput'
                  label="CPF"
                >
                  <Form.Control
                    type='text'
                    placeholder=''
                    {
                      ...register("cpf",{
                        required: "Preencha o campo",
                        minLength: {
                          value: 11,
                          message: "O CPF precisa ter 11 números"
                        },
                        maxLength: {
                          value:11,
                          message: "O CPF precisa ter 11 números"
                        },
                        pattern:{
                          value: /^[0-9]+$/,
                          message: "Um cpf válido possui apenas números"
                        }
                      })
                    }
                  />
                  {
                    errors.cpf && 
                      <p className="error" 
                        style={{position: "absolute", marginTop:"1%", width: "100%", top:"100%", left:"0%"}}
                      >
                        {errors.cpf.message}
                      </p>
                  }
                </FloatingLabel>
              </Col>
              <Col xs='4'>
                <Button value="Verificar" type='submit' as="input" size='lg'/>
              </Col>
            </Row>
            <Alert className={alertClass}
              style={
                {
                  position:"absolute",
                  width:"30%",
                  left:"35%", 
                  top:"90%"
                }
              }
            >
              {alertMsg}
            </Alert>
        </Form>
    </Container>
  )
}

export default VerificadorCpf