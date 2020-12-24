import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CButton,
  CRow,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

const slides = [
  "data:image/png;base64,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",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
];

const Carousels = () => {
  const [activeIndex] = useState(1);

  return (
    <CRow>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader style={{margin:'auto'}}>Chúng ta của hiện tại</CCardHeader>
          <CCardBody>
            <div style={{display:'inline-flex'}} className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Tên bài: Chúng ta của hiện tại</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Độ khó: Cao</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Thời gian hoàn thành trung bình: 00:40:40</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Số từ: 560</p>
            </div>
            <a href="#/luyengophim"><CButton color="primary" style={{marginLeft: '43%'}}>Thi</CButton></a>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader style={{margin:'auto'}}>Đi thật xa để trở về</CCardHeader>
          <CCardBody>
            <div style={{display:'inline-flex'}} className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Tên bài: Đi thật xa để trở về</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Độ khó: Trung bình</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Thời gian hoàn thành trung bình: 00:40:30</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Số từ: 960</p>
            </div>
            <a href="#/luyengophim"><CButton color="primary" style={{marginLeft: '43%'}}>Thi</CButton></a>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader style={{margin:'auto'}}>Đi về nhà</CCardHeader>
          <CCardBody>
            <div style={{display:'inline-flex'}} className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Tên bài: Đi về nhà</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Độ khó: Thấp</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Thời gian hoàn thành trung bình: 00:40:40</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Số từ: 460</p>
            </div>
            <a href="#/luyengophim"><CButton color="primary" style={{marginLeft: '43%'}}>Thi</CButton></a>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader style={{margin:'auto'}}>Ngày mai sẽ đến</CCardHeader>
          <CCardBody>
            <div style={{display:'inline-flex'}} className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Tên bài: Ngày mai sẽ đến</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Độ khó: Cao</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilPencil" size="2xl"/>
              <p className="ptitle">Thời gian hoàn thành trung bình: 00:40:40</p>
            </div>
            <div className="divTitle">
            <CIcon name="cilSettings" size="2xl"/>
              <p className="ptitle">Số từ: 560</p>
            </div>
            <a href="#/luyengophim"><CButton color="primary" style={{marginLeft: '43%'}}>Thi</CButton></a>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Carousels;
