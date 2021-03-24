import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import firebase from '../../../services/firebase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory()


  function handleSubmit(){
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log('USER', user)
    // eslint-disable-next-line no-unused-expressions
    history.push('/home')
  })
  .catch((error) => {
    console.log("ERROR", error)
  });
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <p className="text-muted">Digite seus dados para prosseguir</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput  
                      type="email" 
                      placeholder="Digite seu email" 
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                       />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                      type="password" 
                      placeholder="Digite sua senha" 
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                       />
                    </CInputGroup>
                    <CRow>

                      <CCol xs="6">
                        <CButton onClick={handleSubmit} color="primary" className="px-4">Entrar</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Esqueceu a senha?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2 style={{marginTop: 10}}>ACSPMBMPA</h2>
                    <img src={'avatars/fotoLogo.png'} style={{width: 170, height: 170, textAlign: 'center', borderRadius: 100}} alt="admin@bootstrapmaster.com" />
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p> */}
                    {/* <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link> */}
                    <h5 style={{marginTop: 10}}>Diretoria União e Justiça.</h5>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
