import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CFormGroup,
  CCol,
  CInput,
  CLabel,
  CSelect,
  CInputFile,
  CRow,
} from "@coreui/react";

import { useFormik } from "formik";
import firebase from "../../../services/firebase";
import Carousels from "../carousels/Carousels";

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
  } else if (values.rg.length > 20) {
    errors.rg = "Must be 20 characters or less";
  }
  if (!values.cpf) {
    errors.cpf = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  } else if (values.cpf.length > 20) {
    errors.cpf = "Must be 20 characters or less";
  }
  if (!values.data) {
    errors.data = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.naturalidade) {
    errors.naturalidade = (
      <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>
    );
  }
  if (!values.endereço) {
    errors.endereço = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.bairro) {
    errors.bairro = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.municipio) {
    errors.municipio = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.cep) {
    errors.cep = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.tel) {
    errors.tel = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.cel) {
    errors.cel = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.pai) {
    errors.pai = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.mae) {
    errors.mae = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.grad) {
    errors.grad = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.orgao) {
    errors.orgao = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.situacao) {
    errors.situacao = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.matricula) {
    errors.matricula = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.inclusao) {
    errors.inclusao = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.atuacao) {
    errors.atuacao = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  if (!values.contracheque) {
    errors.contracheque = (
      <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>
    );
  }
  if (!values.rgMilitar) {
    errors.rgMilitar = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }
  return errors;
};
export default function Breadcrumbs() {
  // const [nome, setNome] = useState("");
  // const [email, setEmail] = useState('');
  // const [rg, setRg] = useState('');
  // const [cpf, setCpf] = useState('');
  // const [nasc, setNasc] = useState('');
  // const [natur, setNatur] = useState('');
  // const [end, setEnd] = useState('');
  // const [bairro, setBairro] = useState('');
  // const [munic, setMunic] = useState('');
  // const [cep, setCep] = useState('');
  // const [tel, setTel] = useState('');
  // const [cel, setCel] = useState('');
  // const [pai, setPai] = useState('');
  // const [mae, setMae] = useState('');
  // const [posto, setPosto] = useState('');
  // const [orgao, setOrgao] = useState('');
  // const [funcional, setFuncional] = useState('');
  // const [matricula, setMatricula] = useState('');
  // const [inclusao, setInclusao] = useState('');
  // const [cheque, setCheque] = useState('');
  // const [crg, setCrg] = useState('');
  // const [status, setStatus] = useState('');
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      rg: "",
      cpf: "",
      data: "",
      naturalidade: "",
      endereço: "",
      bairro: "",
      municipio: "",
      cep: "",
      tel: "",
      cel: "",
      pai: "",
      mae: "",
      grad: "",
      orgao: "",
      situacao: "",
      matricula: "",
      inclusao: "",
      atuacao: "",
      contracheque: "",
      rgMilitar: "",
    },
    validate,
    onSubmit: (values) => {
      const data = firebase.firestore().collection("users");
      const result = data.add(values);
      console.log(result);
      alert(JSON.stringify(values, null, 2));

      formik.resetForm();

      // setShow(true);
    },
  });
  return (
    <div>
      {show === false ? (
        <CRow>
          <CCol xl="12">
            <CCard>
              <CCardHeader style={{ fontSize: 20, textAlign: "center" }}>
                Formulário de Inclusão
              </CCardHeader>
              <CCardBody>
                <div id="accordion">
                  <form onSubmit={formik.handleSubmit}>
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
                              <CFormGroup row className="my-0">
                                <CCol xs="8">
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
                              </CFormGroup>
                              <CFormGroup row className="my-0">
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
                                    <CLabel htmlFor="vat">
                                      DATA DE NASCIMENTO
                                    </CLabel>
                                    <CInput
                                      type="date"
                                      id="data"
                                      name="data"
                                      onChange={formik.handleChange}
                                      value={formik.values.data}
                                      placeholder="Digite a data de nascimento"
                                    />
                                    {formik.errors.data ? (
                                      <div>{formik.errors.data}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="vat">NATURALIDADE</CLabel>
                                    <CInput
                                      type="text"
                                      name="naturalidade"
                                      id="naturalidade"
                                      placeholder="Digite a naturalidade"
                                      onChange={formik.handleChange}
                                      value={formik.values.naturalidade}
                                    />
                                    {formik.errors.naturalidade ? (
                                      <div>{formik.errors.naturalidade}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-0">
                                <CCol xs="6">
                                  <CFormGroup>
                                    <CLabel htmlFor="street">ENDEREÇO</CLabel>
                                    <CInput
                                      id="endereço"
                                      type="text"
                                      name="endereço"
                                      placeholder="Digite o endereço"
                                      onChange={formik.handleChange}
                                      value={formik.values.endereço}
                                    />
                                    {formik.errors.endereço ? (
                                      <div>{formik.errors.endereço}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="6">
                                  <CFormGroup>
                                    <CLabel htmlFor="street">BAIRRO</CLabel>
                                    <CInput
                                      id="bairro"
                                      type="text"
                                      name="bairro"
                                      placeholder="Digite o bairro"
                                      onChange={formik.handleChange}
                                      value={formik.values.bairro}
                                    />
                                    {formik.errors.bairro ? (
                                      <div>{formik.errors.bairro}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-0">
                                <CCol xs="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="city">MUNICÍPIO</CLabel>
                                    <CInput
                                      id="municipio"
                                      type="text"
                                      name="municipio"
                                      placeholder="Digite o município"
                                      onChange={formik.handleChange}
                                      value={formik.values.municipio}
                                    />
                                    {formik.errors.municipio ? (
                                      <div>{formik.errors.municipio}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="postal-code">CEP</CLabel>
                                    <CInput
                                      id="cep"
                                      type="number"
                                      name="cep"
                                      placeholder="Digite o cep"
                                      onChange={formik.handleChange}
                                      value={formik.values.cep}
                                    />
                                    {formik.errors.cep ? (
                                      <div>{formik.errors.cep}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="postal-code">
                                      TELEFONE FIXO
                                    </CLabel>
                                    <CInput
                                      id="tel"
                                      type="number"
                                      name="tel"
                                      placeholder="Digite o telefone fixo"
                                      onChange={formik.handleChange}
                                      value={formik.values.tel}
                                    />
                                    {formik.errors.tel ? (
                                      <div>{formik.errors.tel}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="postal-code">
                                      TELEFONE CELULAR (ZAP)
                                    </CLabel>
                                    <CInput
                                      id="cel"
                                      type="number"
                                      name="cel"
                                      placeholder="Digite o celular"
                                      onChange={formik.handleChange}
                                      value={formik.values.cel}
                                    />
                                    {formik.errors.cel ? (
                                      <div>{formik.errors.cel}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-0">
                                <CCol xs="6">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">NOME DO PAI</CLabel>
                                    <CInput
                                      id="pai"
                                      type="text"
                                      name="pai"
                                      placeholder="Digite o nome do pai"
                                      onChange={formik.handleChange}
                                      value={formik.values.pai}
                                    />
                                    {formik.errors.pai ? (
                                      <div>{formik.errors.pai}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="6">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">NOME DO MÃE</CLabel>
                                    <CInput
                                      id="mae"
                                      type="text"
                                      name="mae"
                                      placeholder="Digite o nome da mãe"
                                      onChange={formik.handleChange}
                                      value={formik.values.mae}
                                    />{" "}
                                    {formik.errors.mae ? (
                                      <div>{formik.errors.mae}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-0">
                                <CCol xs="3" md="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">POST/GRAD</CLabel>
                                    <CSelect
                                      custom
                                      name="grad"
                                      id="grad"
                                      onChange={formik.handleChange}
                                      value={formik.values.grad}
                                    >
                                      <option value="0">Selecionar</option>
                                      <option value="CORONEL">CORONEL</option>
                                      <option value="TENENTE COTONEL">
                                        TENENTE COTONEL
                                      </option>
                                      <option value="MAJOR">MAJOR</option>
                                      <option value="CAPITÃO">CAPITÃO</option>
                                      <option value="1º TENENTE">
                                        1º TENENTE
                                      </option>
                                      <option value="2º TENENTE">
                                        2º TENENTE
                                      </option>
                                      <option value="ASPIRANTE A OFICIAL">
                                        ASPIRANTE A OFICIAL
                                      </option>
                                      <option value="ALUNO OFICIAL">
                                        ALUNO OFICIAL
                                      </option>
                                      <option value="SUB TENENTE">
                                        SUB TENENTE
                                      </option>
                                      <option value="1º SARGENTO">
                                        1º SARGENTO
                                      </option>
                                      <option value="2º SARGENTO">
                                        2º SARGENTO
                                      </option>
                                      <option value="3º SARGENTO">
                                        3º SARGENTO
                                      </option>
                                      <option value="CABO">CABO</option>
                                      <option value="SOLDADO">SOLDADO</option>
                                      <option value="ALUNO SOLDADO">
                                        ALUNO SOLDADO
                                      </option>
                                    </CSelect>
                                    {formik.errors.grad ? (
                                      <div>{formik.errors.grad}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="3" md="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">ORGÃO</CLabel>
                                    <CSelect
                                      custom
                                      name="orgao"
                                      id="orgao"
                                      onChange={formik.handleChange}
                                      value={formik.values.orgao}
                                    >
                                      <option value="0">Selecionar</option>
                                      <option value="POLÍCIA MILITAR">
                                        POLÍCIA MILITAR
                                      </option>
                                      <option value="CORPO DE BOMBEIROS">
                                        CORPO DE BOMBEIROS
                                      </option>
                                    </CSelect>
                                    {formik.errors.orgao ? (
                                      <div>{formik.errors.orgao}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="3" md="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">
                                      SITUAÇÃO FUNCIONAL
                                    </CLabel>
                                    <CSelect
                                      custom
                                      name="situacao"
                                      id="situacao"
                                      onChange={formik.handleChange}
                                      value={formik.values.situacao}
                                    >
                                      <option value="0">Selecionar</option>
                                      <option value="ATIVA">ATIVA</option>
                                      <option value="RESERVA REMUNERADA">
                                        RESERVA REMUNERADA
                                      </option>
                                    </CSelect>
                                    {formik.errors.situacao ? (
                                      <div>{formik.errors.situacao}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="3">
                                  <CFormGroup>
                                    <CLabel htmlFor="text">
                                      MATRICULA FUNCIONAL
                                    </CLabel>
                                    <CInput
                                      name="matricula"
                                      id="matricula"
                                      type="number"
                                      inputMode="number"
                                      placeholder="Digite a matricula"
                                      onChange={formik.handleChange}
                                      value={formik.values.matricula}
                                    />
                                    {formik.errors.matricula ? (
                                      <div>{formik.errors.matricula}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-0">
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="date">
                                      DATA DA INCLUSÃO
                                    </CLabel>
                                    <CInput
                                      id="inclusao"
                                      name="inclusao"
                                      type="date"
                                      placeholder="digite a data"
                                      onChange={formik.handleChange}
                                      value={formik.values.inclusao}
                                    />
                                    {formik.errors.inclusao ? (
                                      <div>{formik.errors.inclusao}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="date">
                                      LOCAL ATUAL DE ATUAÇÃO
                                    </CLabel>
                                    <CInput
                                      id="atuacao"
                                      name="atuacao"
                                      type="text"
                                      placeholder="digite o local"
                                      onChange={formik.handleChange}
                                      value={formik.values.atuacao}
                                    />{" "}
                                    {formik.errors.atuacao ? (
                                      <div>{formik.errors.atuacao}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4"></CCol>
                                {/* <CFormGroup> */}
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel col htmlFor="file-input">
                                      CONTRACHEQUE
                                    </CLabel>
                                    <CInputFile
                                      id="contracheque"
                                      name="contracheque"
                                      onChange={formik.handleChange}
                                      value={formik.values.contracheque}
                                    />
                                    {formik.errors.contracheque ? (
                                      <div>{formik.errors.contracheque}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                {/* </CFormGroup> */}
                                <CCol xs="4"></CCol>
                                <CCol xs="4"></CCol>

                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel col md="6" htmlFor="file-input">
                                      RG MILITAR
                                    </CLabel>
                                    <CInputFile
                                      id="rgMilitar"
                                      name="rgMilitar"
                                      onChange={formik.handleChange}
                                      value={formik.values.rgMilitar}
                                    />
                                    {formik.errors.rgMilitar ? (
                                      <div>{formik.errors.rgMilitar}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-2">
                                <CCol className="mb-6 mb-xl-0 text-center">
                                  {/* <CLabel htmlFor="text"></CLabel> */}
                                  {/* <CFormGroup> */}
                                  <CButton
                                    type="submit"
                                    style={{ marginTop: 20 }}
                                    color="success"
                                  >
                                    Salvar formulário
                                  </CButton>
                                  {/* </CFormGroup> */}
                                </CCol>
                                {/* <CCol xs="6" className="mb-6 mb-xl-0 text-center">
                           
                            <CButton color="primary">atualizar dados</CButton>
                          
                          </CCol> */}
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
                  </form>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      ) : (
        <div>
          <Carousels />
        </div>
      )}
    </div>
  );
}
