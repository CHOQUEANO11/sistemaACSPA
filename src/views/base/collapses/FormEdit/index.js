import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
  CRow,
  CSelect
  // CDataTable,
} from "@coreui/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "../../../../services/firebase";
// import Carousels from "../../carousels/Carousels";
import Collapses from "../Collapses";
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
  if (!values.sede) {
    errors.sede = <p style={{ color: "red" }}>Esse Campo é Obrigátorio</p>;
  }

  return errors;
};
function FormEdit({ info }) {
  const [show, setShow] = useState(false);
  const [infoPerson] = useState(info);
  const [fileRGUrl, setFileRGUrl] = useState(info.rgMilitar);
  const [fileCCUrl, setFileCCUrl] = useState(info.contracheque);
  const [namedep, setNameDep] = useState(null);
  const [cpfDep, setCpfDep] = useState(null);
  const [dependentList, setDependentList] = useState(info.dependentes);
  const [info1, setInfo1] = useState("");

  function removeCustom() {
    let ts = dependentList;
    // let ta = ts.splice(ts.indexOf(info1.nome), 1);
    if (info1 !== "") {
      setDependentList(ts);
    } else {
      setTimeout(() => {
        setDependentList(ts);
      }, 1000);
    }
  }
  async function onFileChange(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileRGUrl(await fileRef.getDownloadURL());
  }
  async function onFileChange1(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileCCUrl(await fileRef.getDownloadURL());
  }

  const formik = useFormik({
    initialValues: {
      nome: infoPerson.nome,
      email: infoPerson.email,
      rg: infoPerson.rg,
      cpf: infoPerson.cpf,
      data: infoPerson.data,
      naturalidade: infoPerson.naturalidade,
      endereço: infoPerson.endereço,
      bairro: infoPerson.bairro,
      municipio: infoPerson.municipio,
      cep: infoPerson.cep,
      tel: infoPerson.tel,
      cel: infoPerson.cel,
      pai: infoPerson.pai,
      mae: infoPerson.mae,
      grad: infoPerson.grad,
      orgao: infoPerson.orgao,
      situacao: infoPerson.situacao,
      matricula: infoPerson.matricula,
      inclusao: infoPerson.inclusao,
      atuacao: infoPerson.atuacao,
      sede: infoPerson.sede,

      status: "ATIVO",
    },
    validate,
    onSubmit: (values) => {
      try {
        firebase.firestore().collection("users").doc(infoPerson.id).set({
          nome: values.nome,
          email: values.email,
          rg: values.rg,
          cpf: values.cpf,
          data: values.data,
          naturalidade: values.naturalidade,
          endereço: values.endereço,
          bairro: values.bairro,
          municipio: values.municipio,
          cep: values.cep,
          tel: values.tel,
          cel: values.cel,
          pai: values.pai,
          mae: values.mae,
          grad: values.grad,
          orgao: values.orgao,
          situacao: values.situacao,
          matricula: values.matricula,
          inclusao: values.inclusao,
          atuacao: values.atuacao,
          sede: values.sede,
          dependente: dependentList,
          contracheque: fileCCUrl,
          rgMilitar: fileRGUrl,
          status: "ATIVO",
        });
        toast.success("Militar reincluido com sucesso");
        formik.resetForm();
        setTimeout(() => {
          setShow(true);
        }, 1000);
      } catch {
        toast.error(
          "Ocorreu um erro, verifique sua internet e tente novamente"
        );
      }
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
                Formulário de Reinclusão
              </CCardHeader>
              <CCardBody>
                <div id="accordion">
                  <form onSubmit={formik.handleSubmit}>
                    <CCard className="mb-0">
                      <CCardBody>
                        <CCol xs="12" sm="12">
                          <CCard>
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
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="name">SEDE</CLabel>
                                    <CSelect
                                      custom
                                      name="sede"
                                      id="sede"
                                      onChange={formik.handleChange}
                                      value={formik.values.sede}
                                    >
                                      <option value="0">Selecionar</option>
                                      <option value="BELÉM">BELÉM</option>
                                      <option value="TUCURUÍ">TUCURUÍ</option>
                                    </CSelect>
                                    {formik.errors.sede ? (
                                      <div>{formik.errors.sede}</div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="date">
                                      {" "}
                                      NOME DO DEPENDENTE
                                    </CLabel>
                                    <CInput
                                      id="nomedep"
                                      name="nomedep"
                                      type="text"
                                      placeholder="digite o nome do dependente"
                                      onChange={(e) =>
                                        setNameDep(e.target.value)
                                      }
                                      value={namedep}
                                    />{" "}
                                  </CFormGroup>
                                </CCol>{" "}
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="date">
                                      {" "}
                                      CPF DO DEPENDENTE
                                    </CLabel>
                                    <CInput
                                      id="nomedep"
                                      name="nomedep"
                                      type="number"
                                      inputMode="numeric"
                                      placeholder="digite o CPF do dependente"
                                      onChange={(e) =>
                                        setCpfDep(e.target.value)
                                      }
                                      value={cpfDep}
                                    />{" "}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CButton
                                    color="success"
                                    style={{
                                      width: 100,
                                      marginTop: 10,
                                      marginLeft: 10,
                                    }}
                                    onClick={() => {
                                      setDependentList([
                                        ...dependentList,
                                        {
                                          nome: namedep,
                                          cpf: cpfDep,
                                        },
                                      ]);
                                    }}
                                  >
                                    {" "}
                                    Adicionar
                                  </CButton>{" "}
                                </CCol>
                                {dependentList.length !== 0 ? (
                                  <CCol>
                                    <CLabel htmlFor="date"> DEPENDENTES</CLabel>
                                    {dependentList.map((item) => {
                                      const info = item;
                                      return (
                                        <>
                                          <CFormGroup>
                                            <p>
                                              NOME: {item.nome} CPF: {item.cpf}{" "}
                                            </p>
                                          </CFormGroup>
                                          <CFormGroup>
                                            <CButton
                                              color="danger"
                                              style={{ width: 100 }}
                                              onClick={() => {
                                                setInfo1(info);
                                                removeCustom();
                                              }}
                                            >
                                              {" "}
                                              Remover
                                            </CButton>
                                          </CFormGroup>
                                        </>
                                      );
                                    })}
                                  </CCol>
                                ) : (
                                  <CCol xs="4"></CCol>
                                )}{" "}
                                <CCol xs="4"></CCol> <CCol xs="4"></CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="file-input">
                                      CONTRACHEQUE
                                    </CLabel>
                                    <CInputFile
                                      id="contracheque"
                                      name="contracheque"
                                      onChange={onFileChange1}
                                    />
                                    {fileCCUrl === null ? (
                                      <div>
                                        {" "}
                                        <p style={{ color: "red" }}>
                                          Preencha esse campo
                                        </p>
                                      </div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    {/* <CLabel htmlFor="file-input">
                                      Visualizar Contracheque
                                    </CLabel> */}
                                    <CButton
                                      color="success"
                                      style={{ width: 200, marginTop: 10 }}
                                      onClick={() => {
                                        window.open(fileCCUrl, "_blank");
                                      }}
                                    >
                                      {" "}
                                      Visualizar Contracheque
                                    </CButton>
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4"></CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    <CLabel htmlFor="file-input">
                                      RG MILITAR
                                    </CLabel>
                                    <CInputFile
                                      id="rgMilitar"
                                      name="rgMilitar"
                                      onChange={onFileChange}
                                    />
                                    {fileRGUrl === null ? (
                                      <div>
                                        {" "}
                                        <p style={{ color: "red" }}>
                                          Preencha esse campo
                                        </p>
                                      </div>
                                    ) : null}
                                  </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                  <CFormGroup>
                                    {/* <CLabel htmlFor="file-input">
                                      Visualizar RG
                                    </CLabel> */}
                                    <CButton
                                      color="success"
                                      style={{ width: 200, marginTop: 10 }}
                                      onClick={() => {
                                        window.open(fileRGUrl, "_blank");
                                      }}
                                    >
                                      {" "}
                                      Visualizar RG Militar
                                    </CButton>
                                  </CFormGroup>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row className="my-2">
                                <CCol className="mb-6 mb-xl-0 text-center">
                                  <CButton
                                    type="submit"
                                    style={{ marginTop: 20, width: 200 }}
                                    color="primary"
                                  >
                                    Reincluir a Associação
                                  </CButton>
                                </CCol>{" "}
                              </CFormGroup>
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
      ) : (
        <div>
          <Collapses />
        </div>
      )}
    </div>
  );
}

export default FormEdit;
