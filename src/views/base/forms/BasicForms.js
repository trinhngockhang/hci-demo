import React from "react";
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
import { DocsLink } from "src/reusable";
import Keyboard3 from "./Keyboard3";

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);

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
                <p>0:02:23</p>
                <p>Time</p>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
        <CCol xs="12" sm="12">
          <CCard style={{ padding: '13px' }}>
            <CRow>
            <CCol xs="12" sm="2">
              <CButton color="success">Một</CButton>
            </CCol>
            <CCol xs="12" sm="2">
              <CButton color="danger">Con</CButton>
            </CCol>
            <CCol xs="12" sm="2">
              <CButton color="success">Vịt</CButton>
            </CCol>
            <CCol xs="12" sm="2">
              <CButton color="danger">Xoè</CButton>
            </CCol>
            <CCol xs="12" sm="2">
              <CButton >Ra</CButton>
            </CCol>
            <CCol xs="12" sm="2">
              <CButton >Ba</CButton>
            </CCol>
            </CRow>
          </CCard>
        </CCol>
        <CCol xs="12" sm="12">
          <CCard style={{ padding: '13px' }}>
            <CRow>
            <CCol xs="12" sm="6">
             <Keyboard3/>
            </CCol>
            <CCol xs="12" sm="6">
              <p>Tốc ký</p>
              <textarea style={{width:'100%'}}/>
            </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default BasicForms;
