import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import moment from 'moment';
import { DocsLink } from "src/reusable";
import Keyboard3 from "./Keyboard3";
import StenoKeyBoard from "./StenoKeyBoard";

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState('02:00:00');
  // useEffect(() => {
  //   var interval = 1000;
  //   console.log(moment('00:02:00', 'HH:mm:ss').format('HH:mm:ss'));
  //   const intervalId = setInterval(function(){
  //     setTime(moment(time, 'HH:mm:ss').subtract(1, 'second').format('HH:mm:ss'));
  //   }, interval);
  //   return () => clearInterval(intervalId);
  // }, [time]);
  React.useEffect(() => {
    const id =
      setInterval(() => setTime(moment(time, 'HH:mm:ss').subtract(1, 'second').format('HH:mm:ss')), 1000);
    return () => clearInterval(id);
  }, [time]);
  
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CRow style={{ paddingTop: "18px" }}>
              <CCol xs="12" sm="2" style={{ marginLeft: "13px" }}>
                <p style={{ color: "#0eea0e" }}>29</p>
                <p>Hit</p>
              </CCol>
              <CCol xs="12" sm="2">
                <p style={{ color: "#ff0218" }}>29</p>
                <p>Mistroke</p>
              </CCol>
              <CCol xs="12" sm="2">
                <p style={{ color: "#000000" }}>29</p>
                <p>Mistroke again</p>
              </CCol>
              <CCol xs="12" sm="2">
                <p style={{ color: "#10f" }}>29</p>
                <p>Hint</p>
              </CCol>
              <CCol xs="12" sm="3">
                <p>{time}</p>
                <p>Time</p>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
        <CCol xs="12" sm="12">
          <CCard style={{ padding: "13px" }}>
            <CRow>
              <CCol xs="12" sm="1">
                <CButton color="success">Một</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="danger">Con</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="success">Vịt</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="danger">Xoè</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="success">Ra</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton  color="success">Ba</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="success">Một</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="success">Con</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="">Vịt</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton color="">Xoè</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton>Ra</CButton>
              </CCol>
              <CCol xs="12" sm="1">
                <CButton>Ba</CButton>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
        <CCol xs="12" sm="12">
          <CCard style={{ padding: "13px" }}>
            <CRow>
              <CCol xs="12" sm="6">
                <Keyboard3 />
              </CCol>
              <CCol xs="12" sm="6">
                <p>Tốc ký</p>
                <textarea style={{ width: "100%" }} />
                <CCard style={{ position: "sticky", top: "200px" }}>
                <StenoKeyBoard />
                </CCard>
                
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default BasicForms;
