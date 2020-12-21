import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import Keyboard2 from 'src/views/charts/Keyboard2'
import KeyBoadCustom1 from './KeyBoardCustom1';
import Content from './Content';

const Badges = () => {
  return (
    <CRow>
      <CCol xs="12" md="2" style={{paddingLeft: '2px', paddingRight:'2px'}}>
        <CCard>
         <CCardHeader>
           Đề mục
         </CCardHeader>
         <CCardBody>
           <ul style={{marginLeft:'-2rem'}}>I. Tổng quan</ul>
           <ul style={{marginLeft:'-2rem'}}>2. Nguyên tắc gõ tốc ký
            <ol style={{marginLeft:'-1.5rem'}}> 1. Bàn phím gõ tốc ký</ol>
            <ol style={{marginLeft:'-1.5rem'}}> 2. Trật tự của bàn phím</ol>
            <ol style={{marginLeft:'-1.5rem'}}> 3. Quy tắc gõ</ol>
            </ul>
           <ul style={{marginLeft:'-2rem'}}>3. Hướng dẫn sử dụng</ul>
         </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6" style={{paddingLeft: '2px', paddingRight:'2px'}}>
        <CCard>
        <CCardHeader>
           Nội dung
         </CCardHeader>

         <CCardBody style={{height:'600px'}}>
          <Content/>
         </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="4" style={{paddingLeft: '2px', paddingRight:'2px'}}>
  
        <CCardHeader>
           Thử nghiệm
         </CCardHeader>
          <KeyBoadCustom1/>
        
      </CCol>
    </CRow>
  )
}

export default Badges
