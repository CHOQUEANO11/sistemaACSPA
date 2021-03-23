import { CButton, CCard, CCardHeader, CCol, CDataTable } from "@coreui/react";
import React, { useEffect, useState } from "react";
import firebase from "../../../services/firebase";
import FormEdit from "./FormEdit";

export default function Collapses() {
  const [show, setShow] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [infoPerson, setInfoPerson] = useState({});
  const [showForm, setShowForm] = useState(false);
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
    setDataList(ref.filter((item) => item.status === "INATIVO"));
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
  async function form() {
    setShowForm(!showForm);
  }

  return (
    <div>
      {showForm === false ? (
        <CCol xl="12">
          <CCard style={{ padding: 10 }}>
            <CCardHeader style={{ fontSize: 20, textAlign: "center" }}>
              Lista de Associados Inativos
            </CCardHeader>
            <CDataTable
              items={dataList}
              fields={fields}
              columnFilter
              tableFilter
              footer
              itemsPerPageSelect
              itemsPerPage={5}
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
                          form();
                        }}
                      >
                        Reinclusão
                      </CButton>
                    </td>
                  );
                },
              }}
            />{" "}
          </CCard>
        </CCol>
      ) : (
        <FormEdit info={infoPerson} />
      )}
    </div>
  );
}
