import React from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CFormGroup,
  CForm,
  CLabel,
  CInputCheckbox,
  CCardHeader,
  CInput,
  CCol,
  CRow,
} from "@coreui/react";
const Feedback = () => {
  return (
    <CForm className="px-4 py-3">
      <CFormGroup>
        <CLabel htmlFor="exampleDropdownFormEmail1">Email của bạn</CLabel>
        <CInput
          className="form-control"
          id="exampleDropdownFormEmail1"
          type="email"
          placeholder="email@example.com"
          autoComplete="email"
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="exampleDropdownFormEmail1">Ý kiến của bạn về hệ thống</CLabel>
        <CInput
          className="form-control"
          id="exampleDropdownFormEmail1"
          type="email"
          placeholder="VD: Trang web quá đẹp"
          autoComplete="email"
        />
      </CFormGroup>
      <CFormGroup className="mt-2">
        <CButton color="primary" type="submit" onClick={() => alert("Feedback của bạn đã được ghi nhận")}>
          Gửi
        </CButton>
      </CFormGroup>
    </CForm>
  );
};

export default Feedback;
