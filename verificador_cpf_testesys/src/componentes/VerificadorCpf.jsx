import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from "react-bootstrap/Alert";

import { useForm } from "react-hook-form";
import { useState } from 'react';

const VerificadorCpf = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => console.log(data);
  const onError = (errors) => console.log(errors)

  const [alertClass, setAlertClass] = useState("d-none mb-5");
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <Container className='shadow rounded-3 p-2'>
        <Form className='p-3' onSubmit={handleSubmit(onSubmit, onError)}>
            <Row>
              <Col>
                <h3>Verificador de CPF</h3>
              </Col>
            </Row>
            <Row>
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
                          message: "O CPF precisa ter 11 caracteres"
                        },
                        pattern:{
                          value: /^[0-9]/,
                          message: "Um cpf válido possui apenas números"
                        }
                      })
                    }
                  />
                  {errors.cpf && <p className="error">{errors.cpf.message}</p>}
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
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