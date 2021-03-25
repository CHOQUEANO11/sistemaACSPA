import React from 'react'
import {
  CCard,
  CCardBody,
  // CCardGroup,
  CCardHeader,
  CButton,
  // CCard,
  // CCardBody,
  // CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  // CInputFile,
  CLabel,
  CRow,
  CSelect,
} from '@coreui/react'
import { useFormik } from "formik";
import firebase from "../../services/firebase";
import { toast } from "react-toastify";

const validate = (values) => {
  const errors = {};
  if (!values.nome) {
    errors.nome = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }

  if (!values.email) {
    errors.email = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Insira um Email Válido";
  }

  if (!values.rg) {
    errors.rg = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }

  if (!values.cpf) {
    errors.cpf = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }

  if (!values.password) {
    errors.password = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  } else if (values.password.length < 6) {
    errors.password = <p style={{ color: "red" }}>A senha deve conter 6 ou mais caracteres!</p>;
  }

  if (!values.status) {
    errors.status = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }

  if (!values.sede) {
    errors.sede = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  } else if (values.sede.length > 20) {
    errors.sede = "Must be 20 characters or less";
  }
  return errors;
};

const Charts = () => {


  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      rg: "",
      cpf: "",
      sede: "",
      password: "",
      status: ""
    },
    validate,
    onSubmit: (values) =>  {
      if (values) {
        const data =  firebase.firestore().collection("admin");
        data.add({
          nome: values.nome,
          email: values.email,
          rg: values.rg,
          cpf: values.cpf,
          sede: values.sede,
          // password: values.password,
          status: values.status,
        });
        datas()

        toast.success("Militar foi Inserido com sucesso");
        formik.resetForm();
        // setShow(true);
      } else {
        toast.error("Insira a cópia do ContraCheque ou RG Militar ");
      }
      // setShow(true);
    },
  });

  const datas = () => {
    const email = formik.values.email
    const password = formik.values.password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
      console.log("DADOS", user)
    // Signed in
    // ...
      })
    .catch((error) => {
    console.log('errado', error);
    // ..
    });
  }

  return (
    <CRow>
          <CCol xl="12">
            <CCard>
              <CCardHeader style={{ fontSize: 20, textAlign: "center" }}>
                Cadastro de administradores
              </CCardHeader>
              <CCardBody>
                <div id="accordion">
                  <form onSubmit={formik.handleSubmit}>
                    <CCard className="mb-0">
                      <CCardBody>
                        <CCol xs="12" sm="12">
                          <CCard>
                            <CCardBody>
                            <CFormGroup row className="my-0">
                              <CCol xs="8">
                              <CFormGroup>
                                <CLabel htmlFor="name">NOME</CLabel>
                                <CInput
                                  id="nome"
                                  name="nome"
                                  type="text"
                                  placeholder="Digite o nome completo"
                                  onChange={formik.handleChange}
                                  value={formik.values.nome}
                                />
                                {formik.errors.nome ? (
                                  <div>{formik.errors.nome}</div>
                                ) : null}
                              </CFormGroup>
                              </CCol>
                              <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="status">STATUS</CLabel>
                                    <CSelect
                                      custom
                                      name="status"
                                      id="status"
                                      onChange={formik.handleChange}
                                      value={formik.values.status}
                                    >
                                      <option value="o">Selecione</option>
                                      <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                    </CSelect>
                                    {formik.errors.status ? (
                                      <div>{formik.errors.status}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-0">
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="vat">EMAIL</CLabel>
                                    <CInput
                                      type="email"
                                      id="email"
                                      name="email"
                                      placeholder="Digite o Email"
                                      autoComplete="email"
                                      onChange={formik.handleChange}
                                      value={formik.values.email}
                                    />
                                    {formik.errors.email ? (
                                      <div>{formik.errors.email}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="vat">RG</CLabel>
                                    <CInput
                                      type="number"
                                      id="rg"
                                      name="rg"
                                      placeholder="Digite o RG"
                                      inputMode="number"
                                      onChange={formik.handleChange}
                                      value={formik.values.rg}
                                    />
                                    {formik.errors.rg ? (
                                      <div>{formik.errors.rg}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="cpf">CPF</CLabel>
                                    <CInput
                                      type="number"
                                      id="cpf"
                                      name="cpf"
                                      placeholder="Digite o cpf"
                                      onChange={formik.handleChange}
                                      value={formik.values.cpf}
                                    />
                                    {formik.errors.cpf ? (
                                      <div>{formik.errors.cpf}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="vat">SENHA</CLabel>
                                    <CInput
                                      type="text"
                                      name="password"
                                      id="password"
                                      placeholder="Digite a naturalidade"
                                      onChange={formik.handleChange}
                                      value={formik.values.password}
                                    />
                                    {formik.errors.password ? (
                                      <div>{formik.errors.password}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                                              <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">GRÊMIO</CLabel>
                                    <CSelect
                                      custom
                                      name="sede"
                                      id="sede"
                                      onChange={formik.handleChange}
                                      value={formik.values.sede}
                                    >
                                      <option value="0">Selecionar</option>
                                      <option value="BELÉM">BELÉM</option>
                                      <option value="CASTANHAL">CASTANHAL</option>
                                      <option value="CAPANEMA">CAPANEMA</option>
                                      <option value="PARAGOMINAS">PARAGOMINAS</option>
                                      <option value="MARABÁ">MARABÁ</option>
                                      <option value="PARAUAPEBAS">PARAUAPEBAS</option>
                                      <option value="CONCEIÇÃO DO ARAGUAIA">CONCEIÇÃO DO ARAGUAIA</option>
                                      <option value="XINGUARA">XINGUARA</option>
                                      <option value="REDENÇÃO">REDENÇÃO</option>
                                      <option value="SOURE">SOURE</option>
                                      <option value="TUCURUÍ">TUCURUÍ</option>
                                      <option value="SANTARÉM">SANTARÉM</option>
                                      <option value="MONTE ALEGRE">MONTE ALEGRE</option>
                                      <option value="ORIXIMINÁ">ORIXIMINÁ</option>
                                      <option value="ALTAMIRA">ALTAMIRA</option>
                                      <option value="ITAITUBA">ITAITUBA</option>
                                    </CSelect>
                                    {formik.errors.sede ? (
                                      <div>{formik.errors.sede}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                <CCol className="mb-6 mb-xl-0 text-center">
                                  {/* <CLabel htmlFor="text"></CLabel> */}
                                  {/* <CFormGroup> */}
                                  <CButton
                                    type="submit"
                                    style={{ marginTop: 20, width: 200 }}
                                    color="primary"
                                  >
                                    Salvar formulário
                                  </CButton>
                                  {/* </CFormGroup> */}
                                </CCol>
                                </CCol>
                              </CFormGroup>
                              {/* <CFormGroup row className="my-0"> */}
                                
                                {/* </CFormGroup> */}
                              {/* <CFormGroup row className="my-2">
                                <CCol className="mb-6 mb-xl-0 text-center">
                                  
                                  <CButton
                                    type="submit"
                                    style={{ marginTop: 20, width: 200 }}
                                    color="primary"
                                  >
                                    Salvar formulário
                                  </CButton>
                                  
                                </CCol>
                                </CFormGroup> */}
                                </CCardBody>
                                </CCard>
                            </CCol>    
                        </CCardBody>        
                     </CCard>
                  </form>
               </div>                 
            </CCardBody>
         </CCard>                              
      </CCol>                        
    </CRow>                        
  )
}

export default Charts
