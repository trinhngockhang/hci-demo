import React, { useEffect, useState } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CRow,
  CCol,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { DocsLink } from "src/reusable";

const HoangPhung = () => {
  const [modal, setModal] = useState(false)
  const placements = [
    "Giáo dục",
    "Văn hoá",
    "Thể thao",
    "Ca nhạc",
    "Anime",
    "Wibu",
  ];

  return (
    <>
     <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Luyện tập theo văn bản tự chọn</CModalTitle>
              </CModalHeader>
              <CModalBody style={{margin: 'auto', width: '100%'}}>
                <p>Vui lòng nhập nội dung luyện tập</p>
                <textarea style={{width:"100%", height:'140px'}}/>
              </CModalBody>
              <CModalFooter>
                <a href="#/luyengophim"><CButton color="primary">Thi</CButton>{' '}</a>
                <CButton 
                  color="secondary" 
                  onClick={() => setModal(false)}
                >Back</CButton>
              </CModalFooter>
            </CModal>
      <CCard>
        <CCardHeader>
          Lựa chọn chủ đề
        </CCardHeader>
        <CCardBody>
          <div className="my-3">
            <CRow>
              <CCol md="12" className="py-4 text-center" key={'AA'}>
              <CButton onClick={() =>{setModal(true)}} style={{    borderRadius:'51%', height: '90px', backgroundColor:'green'}} color="primary">Văn bản tự chọn</CButton>
              </CCol>
            </CRow>
            <CRow>
              {placements.map((placement) => {
                return (
                  <CCol md="4" className="py-4 text-center" key={placement}>
                    <CTooltip
                      content={`Tooltip with placement: ${placement}`}
                      placement={placement}
                    >
                     <a href="#/theme/luyengo1"><CButton color="primary"  style={{ width:'130px', borderRadius:'51%', height: '80px'}}>{placement}</CButton></a> 
                    </CTooltip>
                  </CCol>
                );
              })}
            </CRow>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default HoangPhung;
