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

const Content2 = () => {
  return (
    <CRow>
      <CCol xs="12" md="12" style={{paddingLeft: '2px', paddingRight:'2px'}}>
        <h1>1.  TỔNG QUAN </h1>
        <h2>1.1. Mục đích </h2>
        <p>Tài liệu này cung cấp các quy tắc, hướng dẫn cách gõ tốc ký một cách nhanh chóng và chính xác. Đồng thời, tài liệu này hướng dẫn cách sử dụng các chức năng của phần mềm bộ gõ tốc ký tiếng Việt.</p>
        <h2>1.2 Phạm vi </h2>
        <p>Tài liệu này phục vụ đối tượng là: NSD cuối cùng</p>
        <h1>2. NGUYÊN TẮC GÕ TỐC KÝ </h1>
        <h2>2.1   Bàn phím gõ tốc ký </h2>

        <p>Bàn phím tốc ký như minh hoạ trong Hình II.1 gồm 23 phím. Trong đó, 22 phím dùng để gõ từ và cụm từ, đặc biệt có 2 phím S, 2 phím T, 2 phím H. Ngoài ra, còn có thêm 1 phím phía trên (thanh số) để chuyển đổi chế độ gõ số.</p>
        <img style={{width:'100%'}} src="avatars/a1.png"></img>
        <p>Ánh xạ các phím của bàn phím gõ tốc ký lên bàn phím QWERTY thông thường được mô tả trong Hình II.2. Trong đó, phím dải số (1234567890) của bàn phím QWERTY tương ứng với thanh số, các phím khác được gán nhãn tương ứng. </p>
        <h2>2.2.  Trật tự của bàn phím tốc ký </h2>
        <h2>2.3.  Quy tắc gõ từ tiếng Việt  </h2>
        <h2>2.3.1.  Quy tắc gõ âm đầu </h2>
        <h2 id="gr2.3.2">2.3.2.  Quy tắc gõ âm chính </h2>
      </CCol>
    </CRow>
  )
}

export default Content2
