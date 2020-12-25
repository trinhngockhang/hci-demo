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
      <CCol xs="12" md="2" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
        <CCard>
          <CCardHeader>
            Table of Content
         </CCardHeader >
          <CCardBody>
            <ul style={{ marginLeft: '-2.5rem' }}>Lời mở đầu!</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 1: Vị trí để ngón và các phím</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 2: Thứ tự steno</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 3: Cấu tạo âm tiếng việt</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 4: Âm đầu</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 5: Âm chính</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 6: Biến âm (âm có dấu thanh)</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 7: Âm chính 2</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 8: Âm cuối</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 9: Số và kí tự</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Lesson 10: Từ điển cá nhân</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Appendix: Từ điển</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Appendix: Phao</ul>
            <ul style={{ marginLeft: '-2.5rem' }}>Glossary</ul>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
        <CCard>
          <CCardHeader>
            Nội dung
         </CCardHeader>

          <CCardBody style={{ height: '600px', overflow: 'auto' }} id="AAAA">
            <Content2 />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="4" style={{ paddingLeft: '2px', paddingRight: '2px' }}>

        <CCardHeader>
          Thử nghiệm
         </CCardHeader>
        <KeyBoadCustom1 />

      </CCol>
    </CRow>
  )
}

export default Badges
