import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  // CCardFooter,
  CCardHeader,
  // CForm,
  CFormGroup,
  CCol,
  // CCollapse,
  CInput,
  CLabel,
  CSelect,
  // CFade,
  CInputFile,
  CRow 
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
// import routes from '../../../routes'


const Cards = () => {
  // const [collapse, setCollapse] = useState(false)
  // const [collapseMulti, setCollapseMulti] = useState([false, false])
  // // const [accordion, setAccordion] = useState(1)
  // const [fade, setFade] = useState(true)

  // const toggle = (e) => {
  //   setCollapse(!collapse)
  //   e.preventDefault()
  // }

  // const toggleMulti = (type) => {
  //   let newCollapse = collapseMulti.slice()
  //   switch (type) {
  //     case "left":
  //       newCollapse[0] = !collapseMulti[0];
  //       break;
  //     case "right":
  //       newCollapse[1] = !collapseMulti[1];
  //       break;
  //     case "both":
  //       newCollapse[0] = !collapseMulti[0];
  //       newCollapse[1] = !collapseMulti[1];
  //       break;
  //     default:
  //   }
  //   setCollapseMulti(newCollapse)
  // }

  // const toggleFade = () => {
  //   setFade(!fade)
  // }
  return (
    <CRow>
      {/* <CCol xl="6">
        <CCard>
          <CCardHeader>
            Collapse
            <DocsLink name="CCollapse"/>
          </CCardHeader>
          <CCollapse show={collapse}>
            <CCardBody>
              <p>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
              </p>
              <p>
                Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean
                elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras
                ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus.
                Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis
                sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis
                purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non
                augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget
                faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu,
                vehicula sagittis elit leo id nisi.
              </p>
            </CCardBody>
          </CCollapse>
          <CCardFooter>
            <CButton
              color="primary"
              onClick={toggle}
              className={'mb-1'}
            >Toggling button</CButton>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardHeader>
            Collapse
            <small> multi target</small>
          </CCardHeader>
            <CCardBody>
              <p>
                <CButton color="primary" onClick={()=>{toggleMulti('left')}}>
                  Left</CButton>{' '}
                <CButton color="primary" onClick={()=>{toggleMulti('right')}}>
                  Right</CButton>{' '}
                <CButton color="primary" onClick={()=>{toggleMulti('both')}}>
                  Both</CButton>{' '}
              </p>
              <CRow>
                <CCol>
                  <CCollapse show={collapseMulti[0]}>
                    <CCard>
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
                <CCol className="col-sm-12 col-md-6">
                  <CCollapse show={collapseMulti[1]}>
                    <CCard>
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CRow>
            </CCardBody>
        </CCard>

        <hr/>

        <CCard>
          <CCardHeader>
            Fade
            <DocsLink name="CFade"/>
          </CCardHeader>
          <CCardBody>
            <CFade timeout={300} in={fade} tag="h5" className="mt-3">
              This content will fade in and out as the button is pressed...
            </CFade>
          </CCardBody>
          <CCardFooter>
            <CButton color="primary" onClick={toggleFade}>Toggle Fade</CButton>
          </CCardFooter>
        </CCard>
      </CCol> */}
      <CCol xl="12">
        <CCard>
          <CCardHeader style={{fontSize: 20, textAlign: 'center'}}>
            Formulário de Exclusão
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                {/* <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 style={{textAlign: 'center'}} className="m-0 p-0">Formulário de inclusão</h5>
                  </CButton>
                </CCardHeader> */}
                {/* <CCollapse show={accordion === 0}> */}
                  <CCardBody>
                  <CCol xs="12" sm="12">
          <CCard>
            {/* <CCardHeader>
              Company
              <small> Form</small>
            </CCardHeader> */}
            <CCardBody>
            <CFormGroup>
                    <CLabel htmlFor="name">NOME</CLabel>
                    <CInput id="name" placeholder="Digite o nome completo" required />
              </CFormGroup>
              <CFormGroup row className="my-0">
              <CCol xs="8">
              <CFormGroup>
                <CLabel htmlFor="vat">EMAIL</CLabel>
                <CInput type="email" id="email-input" name="email-input" placeholder="Digite o Email" autoComplete="email"/>
              </CFormGroup>
              </CCol>
              <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="vat">RG</CLabel>
                <CInput type="text" id="text" name="textt" placeholder="Digite o RG"/>
              </CFormGroup>
              </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
              <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cpf">CPF</CLabel>
                <CInput type="cpf" id="cpf" name="cpf" placeholder="Digite o cpf" autoComplete="email"/>
              </CFormGroup>
              </CCol>
              <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="vat">DATA DE NASCIMENTO</CLabel>
                <CInput type="text" id="text" name="textt" placeholder="Digite a data de nascimento"/>
              </CFormGroup>
              </CCol>
              <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="vat">NATURALIDADE</CLabel>
                <CInput type="text" id="text" name="textt" placeholder="Digite a naturalidade"/>
              </CFormGroup>
              </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
              <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="street">ENDEREÇO</CLabel>
                <CInput id="street" placeholder="Digite o endereço" />
              </CFormGroup>
              </CCol>
              <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="street">BAIRRO</CLabel>
                <CInput id="street" placeholder="Digite o bairro" />
              </CFormGroup>
              </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="city">MUNICÍPIO</CLabel>
                    <CInput id="city" placeholder="Digite o município" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">CEP</CLabel>
                    <CInput id="postal-code" placeholder="Digite o cep" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">TELEFONE FIXO</CLabel>
                    <CInput id="postal-code" placeholder="Digite o telefone fixo" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">TELEFONE CELULAR (ZAP)</CLabel>
                    <CInput id="postal-code" placeholder="Digite o celular" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
              <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">NOME DO PAI</CLabel>
                <CInput id="name" placeholder="Digite o nome do pai" />
              </CFormGroup>
              </CCol>
              <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">NOME DO MÃE</CLabel>
                <CInput id="name" placeholder="Digite o nome da mãe" />
              </CFormGroup>
              </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
              <CCol xs="3" md="3">
              <CFormGroup>
                <CLabel htmlFor="name">POST/GRAD</CLabel>
                <CSelect custom name="select" id="select">
                      <option value="0">Selecionar</option>
                      <option value="1">CORONEL</option>
                      <option value="2">TENENTE COTONEL</option>
                      <option value="3">MAJOR</option>
                      <option value="4">CAPITÃO</option>
                      <option value="5">1º TENENTE</option>
                      <option value="6">2º TENENTE</option>
                      <option value="7">ASPIRANTE A OFICIAL</option>
                      <option value="8">ALUNO OFICIAL</option>
                      <option value="9">SUB TENENTE</option>
                      <option value="10">1º SARGENTO</option>
                      <option value="11">2º SARGENTO</option>
                      <option value="12">3º SARGENTO</option>º
                      <option value="13">CABO</option>
                      <option value="14">SOLDADO</option>
                      <option value="15">ALUNO SOLDADO</option>
                </CSelect>
              </CFormGroup>
              </CCol>
              <CCol xs="3" md="3">
              <CFormGroup>
                <CLabel htmlFor="name">ORGÃO</CLabel>
                <CSelect custom name="select" id="select">
                      <option value="0">Selecionar</option>
                      <option value="1">POLÍCIA MILITAR</option>
                      <option value="2">CORPO DE BOMBEIRO</option>
                </CSelect>
              </CFormGroup>
              </CCol>
              <CCol xs="3" md="3">
              <CFormGroup>
                <CLabel htmlFor="name">SITUAÇÃO FUNCIONAL</CLabel>
                <CSelect custom name="select" id="select">
                      <option value="0">Selecionar</option>
                      <option value="1">ATIVA</option>
                      <option value="2">RESERVA REMUNERADA</option>
                </CSelect>
              </CFormGroup>
              </CCol>
              <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="text">MATRICULA FUNCIONAL</CLabel>
                <CInput id="text" placeholder="Digite a matricula" />
              </CFormGroup>
              </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
              
              <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="date">DATA DA INCLUSÃO</CLabel>
                <CInput id="date" placeholder="digite a data" />
              </CFormGroup>
              </CCol>
              {/* <CFormGroup> */}
                  <CCol xs="4">
                  <CFormGroup>
                  <CLabel col md="6" htmlFor="file-input">contra-cheque</CLabel>
                    <CInputFile id="file-input" name="file-input"/>
                    </CFormGroup>
                  </CCol>
                {/* </CFormGroup> */}
                <CCol xs="4" >
                <CFormGroup>
                  <CLabel col md="6" htmlFor="file-input">RG</CLabel>
                    <CInputFile id="file-input" name="file-input"/>
                    </CFormGroup>
                  </CCol>
                  </CFormGroup>
                <CFormGroup row className="my-0">
              <CCol xs="6" className="mb-6 mb-xl-0 text-center">
              {/* <CLabel htmlFor="text"></CLabel> */}
              {/* <CFormGroup> */}
              <CButton  color="success">Salvar formulário</CButton>
              {/* </CFormGroup> */}
            </CCol>
            <CCol xs="6" className="mb-6 mb-xl-0 text-center">
              {/* <CFormGroup> */}
              <CButton color="primary">atualizar dados</CButton>
              {/* </CFormGroup> */}
            </CCol>
            </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
                  </CCardBody>
                {/* </CCollapse> */}
              </CCard>
              {/* <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 style={{textAlign: 'center'}} className="m-0 p-0">Formulário de desligamento</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard> */}
              {/* <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 style={{textAlign: 'center'}} className="m-0 p-0">Formulário de reinclusão</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard> */}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
