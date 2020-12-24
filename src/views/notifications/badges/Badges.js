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
import Content2 from './Content2';

const Badges = () => {
  const scrollIntoView = (el) => {
    var myElement = document.getElementById(el);
    var topPos = myElement.offsetTop;
    console.log(topPos);
    document.getElementById('AAAA').scrollTop = topPos;
  }
  return (
    <CRow>
      <CCol xs="12" md="2" style={{paddingLeft: '2px', paddingRight:'2px'}}>
        <CCard>
         <CCardHeader>
           Đề mục
         </CCardHeader>
         <CCardBody>
           <ul style={{marginLeft:'-2rem'}}>1. Tổng quan</ul>
           <ol style={{marginLeft:'-1.5rem'}}> 1.1 Mục đích </ol>
           <ol style={{marginLeft:'-1.5rem'}}> 1.2 Phạm vi </ol>
           <ul style={{marginLeft:'-2rem'}}>2. Nguyên tắc gõ tốc ký
            <ol style={{marginLeft:'-1.5rem'}}>2.1   Bàn phím gõ tốc ký </ol>
            <ol style={{marginLeft:'-1.5rem'}}>2.2  Trật tự của bàn phím tốc ký</ol>
            <ol style={{marginLeft:'-1.5rem'}}>2.3  Quy tắc gõ từ tiếng Việt
            <ol style={{marginLeft:'-1.5rem'}}>2.3.1  Quy tắc gõ âm đầu</ol>
            <ol style={{marginLeft:'-1.5rem'}} onClick={() => {
              scrollIntoView('gr2.3.2')
            }} >2.3.2  Quy tắc gõ âm chính</ol>
            </ol>
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

         <CCardBody style={{height:'600px', overflow:'auto'}}  id="AAAA">
          <Content2/>
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
