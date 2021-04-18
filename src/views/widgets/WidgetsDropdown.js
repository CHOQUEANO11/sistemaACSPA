import React, {useState} from 'react'
import firebase from "../../services/firebase";
import {
  CWidgetDropdown,
  CRow,
  CCol,
  // CDropdown,
  // CDropdownMenu,
  // CDropdownItem,
  // CDropdownToggle
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
// import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  const [data, setData] = useState([])
  const ts = []
  firebase.firestore().collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const user = {
        dados: doc.data(),
      };
      ts.push(user);
      setData(ts.length)
    });
  });
  
  // const item = data.length
  // render
  return (
    <CRow>
      <CCol sm="8" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={data}
          text="Total de associados"
          footerSlot={
            <ChartLineSimple
              // pointed
              // className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              // dataPoints={data.map((item) => item.email)}
              // pointHoverBackgroundColor="primary"
              // label="Members"
              // labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="0"
          text="Total de atendimentos jurídicos"
          footerSlot={
            <ChartLineSimple
              // pointed
              // className="mt-3 mx-3"
              style={{height: '70px'}}
              // dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              // pointHoverBackgroundColor="info"
              // options={{ elements: { line: { tension: 0.00001 }}}}
              // label="Members"
              // labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="0"
          text="Total de atendimento dentista"
          footerSlot={
            <ChartLineSimple
              // className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              // dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              // options={{ elements: { line: { borderWidth: 2.5 }}}}
              // pointHoverBackgroundColor="warning"
              // label="Members"
              // labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="0"
          text="Total de atendimento barbeiro"
          footerSlot={
            <ChartLineSimple
              // className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              // label="Members"
              // labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
