import {
  CButton,
  CCard,
  CCardHeader,
  CCol,
  CDataTable,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalBody,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import firebase from "../../../services/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Cards() {
  const [modal, setModal] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [infoPerson, setInfoPerson] = useState({});
  const toggle = () => {
    setModal(!modal);
  };
  async function handleUpdate() {
    try {
      firebase.firestore().collection("users").doc(infoPerson.id).set({
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
        // contracheque: infoPerson.contracheque,
        // rgMilitar: infoPerson.rgMilitar,
        status: "INATIVO",
      });

      toast.success("Desligamento efetuado com sucesso");
      toggle();
      setTimeout(() => {
        teste();
      }, 1000);
    } catch {
      toast.error("Não foi possível efetuar desligamento");
      toggle();
    }
  }

  async function teste() {
    const ts = [];
    await firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const user = {
            id: doc.id,
            dados: doc.data(),
          };

          ts.push(user);
        });
      });

    const ref = ts.map((item) => ({
      id: item.id,
      nome: item.dados.nome,
      email: item.dados.email,
      rg: item.dados.rg,
      cpf: item.dados.cpf,
      data: item.dados.data,
      naturalidade: item.dados.naturalidade,
      endereço: item.dados.endereço,
      bairro: item.dados.bairro,
      municipio: item.dados.municipio,
      cep: item.dados.cep,
      tel: item.dados.tel,
      cel: item.dados.cel,
      pai: item.dados.pai,
      mae: item.dados.mae,
      grad: item.dados.grad,
      orgao: item.dados.orgao,
      situacao: item.dados.situacao,
      matricula: item.dados.matricula,
      inclusao: item.dados.inclusao,
      atuacao: item.dados.atuacao,
      contracheque: item.dados.contracheque,
      rgMilitar: item.dados.rgMilitar,
      status: item.dados.status,
    }));
    setDataList(ref.filter((item) => item.status === "ATIVO"));
  }

  useEffect(() => {
    teste();
  }, []);
  const fields = [
    { key: "nome", label: "NOME", _style: { width: "40%" } },
    { key: "cpf", label: "CPF", _style: { width: "40%" } },

    { key: "grad", label: "GRADUAÇÃO", _style: { width: "20%" } },
    {
      key: "status",
      label: "STATUS",
      _style: { width: "20%" },
      sorter: false,
      filter: false,
    },
    {
      key: "show_details",
      label: "Ação",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <div>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>
          Tem Certeza que deseja Desligar o(a) {infoPerson.nome} da associação?
        </CModalHeader>
        {/* <CModalBody>Lorem ipsum dolor...</CModalBody> */}
        <CModalFooter>
          <CButton
            onClick={() => {
              handleUpdate();
            }}
            color="danger"
          >
            SIM
          </CButton>{" "}
          <CButton color="primary" onClick={toggle}>
            NÃO
          </CButton>
        </CModalFooter>
      </CModal>
      <CCol xl="12">
        <CCard style={{ padding: 10 }}>
          <CCardHeader style={{ fontSize: 20, textAlign: "center" }}>
            Lista de Associados
          </CCardHeader>
          <CDataTable
            items={dataList}
            fields={fields}
            columnFilter
            footer
            itemsPerPageSelect
            itemsPerPage={10}
            hover
            sorter
            pagination
            scopedSlots={{
              show_details: (item, index) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        setInfoPerson(item);
                        toggle();
                      }}
                    >
                      Exclusão
                    </CButton>
                  </td>
                );
              },
            }}
          />{" "}
        </CCard>
      </CCol>
    </div>
  );
}
