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
      <CCol xs="12" md="12" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
        {/* <h1>1.  TỔNG QUAN </h1>
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
        <h2 id="gr2.3.2">2.3.2.  Quy tắc gõ âm chính </h2> */}

        <h1>Lời mở đầu!</h1>
        <p>Đây là lời mở đầu</p>
        <h1>Lesson 1: Vị trí để ngón và các phím</h1>
        <img style={{ width: '100%' }} src="luyengo/ngon tay.png"></img>
        <h1>Lesson 2: Thứ tự steno</h1>
        <p>Trật tự gõ phím được cấu tạo như sau:</p>
        <img style={{ width: '100%' }} src="luyengo/thu tu steno.png"></img>
        <p>Khi viết theo chuỗi ra thì nó sẽ có trật tự như sau:</p>
        <p style={{ textAlign: 'center', }}><b>S T K P R H N H S * I U O E A W Y J N G T K</b></p>
        <p>Bất cứ tổ hợp phím nào phù hợp với trật tự này thì đều có thể gõ trong một lượt nhấn. Ví dụ: STKP, STRH, … là các tổ hợp gõ được trong một lượt nhấn. HPTK là tổ hợp không gõ được trong một lượt nhấn. Do đó, việc ghi nhớ trật tự này là rất quan trọng.</p>
        <h1>Lesson 3: Cấu tạo âm tiếng việt</h1>
        <p>Tổ hợp phím biểu diễn từ tiếng Việt được thiết kế theo cấu trúc âm tiết tiếng Việt. Âm tiết là đơn vị phát âm ngắn nhất trong lời nói của con người.
        Mỗi âm tiết không phải là một khối không thể chia cắt mà là một cấu trúc gồm 3 thành phần: âm đầu, vần và thanh điệu. Trong đó, vần tiếp tục được phân chia thành 3 thành phần là âm đệm, âm chính và âm cuối.</p>
        <br />
        <p>Mô hình âm tiết phục vụ cho gõ tốc ký được rút gọn thành 3 thành phần: âm đầu, âm giữa (bao gồm âm đệm, âm chính, và thanh điệu) và âm cuối. Nói cách khác, tổ hợp phím bấm cho phép biểu diễn từ tiếng Việt theo đúng quy tắc phát âm - phát âm thế nào thì gõ tốc ký như vậy.</p>
        <img style={{ width: '100%' }} src="luyengo/mo hinh am dieu.png"></img>
        <ul>
          <li>Khu vực bên tay trái gồm 6 phím là STKPRH – cấu tạo nên 22 âm đầu trong tiếng Việt</li>
          <li>Khu vực ở giữa gồm 11 phím là NHS*IUOEAWY- cấu tạo nên 177 âm chính trong tiếng Việt</li>
          <li>Khu vực tay phải gồm 5 phím JNGTK – cấu tạo nên 12 âm cuối trong tiếng Việt.</li>
        </ul>
        <img style={{ width: '100%' }} src="luyengo/phan bo phim steno.png"></img>
        <h1>Lesson 4: Âm đầu</h1>
        <p>Tiếng Việt có 22 âm đầu, sử dụng 6 phím STKPRH ở phía tay trái để gõ các âm đầu và tổ hợp âm đầu. Trong tiếng Việt, có nhiều âm vị âm đầu có từ 2 đến 3 cách thể hiện trên chữ viết khác nhau. Quy tắc gõ tốc ký âm đầu tiếng Việt như sau:</p>
        <img style={{ width: '100%' }} src="luyengo/steno am dau.png"></img>
        <p>Các âm vị phụ âm là một âm nhưng có nhiều cách viết khác nhau, khi gõ tốc ký sử dụng luật kết hợp với âm vị nguyên âm đi sau để phân biệt.</p>
        <table width="587" style={{ margin: '0 auto', borderCollapse: 'collapse' }} border="1px solid black" >
          <tbody>
            <tr>
              <td width="53">
                <p><strong>STT</strong></p>
              </td>
              <td width="68">
                <p><strong>&Acirc;m vị</strong></p>
              </td>
              <td width="94">
                <p><strong>Chữ viết</strong></p>
              </td>
              <td width="151">
                <p><strong>Luật kết hợp</strong></p>
              </td>
              <td colspan="2" width="222">
                <p><strong>V&iacute; dụ</strong></p>
              </td>
            </tr>
            <tr>
              <td rowspan="3" width="53">
                <ol>
                  <li>&nbsp;</li>
                </ol>
              </td>
              <td rowspan="3" width="68">
                <p>k</p>
              </td>
              <td width="94">
                <p>c</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với:</p>
                <p>&nbsp;a,</p>
                <p>ă,</p>
                <p>&acirc;,</p>
                <p>ơ,</p>
                <p>u,</p>
                <p>&nbsp;ư,</p>
                <p>o,</p>
                <p>&ocirc;,</p>
                <p>&nbsp;ươ,</p>
                <p>&nbsp;ưa,</p>
                <p>u&ocirc;,</p>
                <p>ua.</p>
              </td>
              <td width="100">
                <p>&nbsp;</p>
                <p>ca</p>
                <p>căn</p>
                <p>c&acirc;n</p>
                <p>cơ</p>
                <p>cu</p>
                <p>cư</p>
                <p>co</p>
                <p>c&ocirc;</p>
                <p>cương</p>
                <p>cưa</p>
                <p>cu&ocirc;ng</p>
                <p>cua</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>KA</p>
                <p>K*AN</p>
                <p>K*WN</p>
                <p>KW</p>
                <p>KIU</p>
                <p>KUW</p>
                <p>KO</p>
                <p>KOW</p>
                <p>KEWG</p>
                <p>KEW</p>
                <p>KUOG</p>
                <p>KUO</p>
              </td>
            </tr>
            <tr>
              <td width="94">
                <p>k</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với</p>
                <p>&nbsp;i,</p>
                <p>y,</p>
                <p>&ecirc;,</p>
                <p>e,</p>
                <p>i&ecirc;</p>
              </td>
              <td width="100">
                <p>&nbsp;</p>
                <p>ki</p>
                <p>ky</p>
                <p>k&ecirc;</p>
                <p>ke</p>
                <p>ki&ecirc;n</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>K*I</p>
                <p>KI</p>
                <p>KOE</p>
                <p>KE</p>
                <p>KIEN</p>
              </td>
            </tr>
            <tr>
              <td width="94">
                <p>q</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với &acirc;m đệm</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="100">
                <p>qui</p>
                <p>qu&ecirc;</p>
                <p>que</p>
                <p>quơ</p>
                <p>qua</p>
                <p>quăn</p>
                <p>qu&acirc;n</p>
                <p>quốc</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>STK*I</p>
                <p>STKOE</p>
                <p>STKE</p>
                <p>STKW</p>
                <p>STKA</p>
                <p>STK*UN</p>
                <p>STK*YN</p>
                <p>STK-SUONK</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="53">
                <ol>
                  <li>&nbsp;</li>
                </ol>
              </td>
              <td rowspan="2" width="68">
                <p>ng</p>
              </td>
              <td width="94">
                <p>ng</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với</p>
                <p>&nbsp;a,</p>
                <p>ă,</p>
                <p>&acirc;,</p>
                <p>ơ,</p>
                <p>u,</p>
                <p>ư,</p>
                <p>o,</p>
                <p>&nbsp;&ocirc;,</p>
                <p>&nbsp;ươ,</p>
                <p>&nbsp;ưa,</p>
                <p>&nbsp;u&ocirc;</p>
                <p>&nbsp;</p>
              </td>
              <td width="100">
                <p>&nbsp;</p>
                <p>nga</p>
                <p>ngăn</p>
                <p>ng&acirc;n</p>
                <p>ngơ</p>
                <p>ngu</p>
                <p>ngư</p>
                <p>ngo</p>
                <p>ng&ocirc;</p>
                <p>ngươi</p>
                <p>ngưa</p>
                <p>ngu&ocirc;i</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>KR-A</p>
                <p>KR*-AN</p>
                <p>KR*-WN</p>
                <p>KR-W</p>
                <p>KR-IU</p>
                <p>KR-UW</p>
                <p>KR-O</p>
                <p>KR-OW</p>
                <p>KR-EWJ</p>
                <p>KR-EW</p>
                <p>KR-UOJ</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="94">
                <p>ngh</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với</p>
                <p>&nbsp;i,</p>
                <p>&ecirc;,</p>
                <p>e,</p>
                <p>i&ecirc;</p>
              </td>
              <td width="100">
                <p>&nbsp;</p>
                <p>nghi</p>
                <p>ngh&ecirc;</p>
                <p>nghe</p>
                <p>nghi&ecirc;n</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>KR*-I</p>
                <p>KR-OE</p>
                <p>KR-E</p>
                <p>KR-IEN</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="53">
                <ol>
                  <li>&nbsp;</li>
                </ol>
              </td>
              <td rowspan="2" width="68">
                <p>g</p>
              </td>
              <td width="94">
                <p>g</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với</p>
                <p>&nbsp;a,</p>
                <p>ă,</p>
                <p>&acirc;,</p>
                <p>ơ,</p>
                <p>&nbsp;u,</p>
                <p>o,</p>
                <p>&nbsp;&ocirc;,</p>
                <p>&nbsp;ươ</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="100">
                <p>&nbsp;</p>
                <p>ga</p>
                <p>găng</p>
                <p>g&acirc;n</p>
                <p>gơ</p>
                <p>gu</p>
                <p>go</p>
                <p>g&ocirc;</p>
                <p>gương</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>KP-A</p>
                <p>KP*-AG</p>
                <p>KP*-WN</p>
                <p>KP-W</p>
                <p>KP-IU</p>
                <p>KP-O</p>
                <p>KP-OW</p>
                <p>KP-EWG</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="94">
                <p>gh</p>
              </td>
              <td width="151">
                <p>chỉ kết hợp với</p>
                <p>&nbsp;i,</p>
                <p>&nbsp;&ecirc;,</p>
                <p>&nbsp;e,</p>
                <p>&nbsp;i&ecirc;</p>
              </td>
              <td width="100">
                <p>&nbsp;</p>
                <p>ghi</p>
                <p>gh&ecirc;</p>
                <p>ghe</p>
                <p>ghiền</p>
              </td>
              <td width="122">
                <p>&nbsp;</p>
                <p>KP*-I</p>
                <p>KP-OE</p>
                <p>KP-E</p>
                <p>KP-HIEN</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="53">
                <ol>
                  <li>&nbsp;</li>
                </ol>
              </td>
              <td rowspan="2" width="68">
                <p>d</p>
              </td>
              <td width="94">
                <p>d</p>
              </td>
              <td width="151">
                <p>kh&ocirc;ng c&oacute; luật kết hợp</p>
              </td>
              <td width="100">
                <p>đi</p>
                <p>đ&ecirc;</p>
                <p>đe</p>
              </td>
              <td width="122">
                <p>TP*-I</p>
                <p>TP-OE</p>
                <p>TP-E</p>
              </td>
            </tr>
            <tr>
              <td width="94">
                <p>gi</p>
              </td>
              <td width="151">
                <p>kh&ocirc;ng c&oacute; luật kết hợp</p>
              </td>
              <td width="100">
                <p>g&igrave;</p>
                <p>gi&agrave;</p>
                <p>giờ</p>
              </td>
              <td width="122">
                <p>KP-H*I</p>
                <p>SH-HA</p>
                <p>SH-HW</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Bảng tổng hợp các tổ hợp phím biểu diễn âm đầu tiếng Việt:</h2>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', }} border="1px solid black">
          <tbody>
            <tr>
              <td rowspan="2">
                <p><strong>Stt</strong></p>
              </td>
              <td rowspan="2">
                <p><strong>&Acirc;m đầu tiếng Việt</strong></p>
              </td>
              <td>
                <p><strong>Kiểu g&otilde; tốc k&yacute;</strong></p>
              </td>
              <td colspan="3">
                <p><strong>V&iacute; dụ</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><strong>STKPRH</strong></p>
              </td>
              <td>
                <p><strong>Từ</strong></p>
              </td>
              <td>
                <p><strong>G&otilde; telex</strong></p>
              </td>
              <td>
                <p><strong>G&otilde; tốc k&iacute;</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>đ</p>
              </td>
              <td>
                <p>TP</p>
              </td>
              <td>
                <p>đa</p>
              </td>
              <td>
                <p>dda</p>
              </td>
              <td>
                <p>TPA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>kh</p>
              </td>
              <td>
                <p>KH</p>
              </td>
              <td>
                <p>kha</p>
              </td>
              <td>
                <p>kha</p>
              </td>
              <td>
                <p>KHA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>b</p>
              </td>
              <td>
                <p>P</p>
              </td>
              <td>
                <p>ba</p>
              </td>
              <td>
                <p>Ba</p>
              </td>
              <td>
                <p>PA</p>
              </td>
            </tr>
            <tr>
              <td rowspan="3">
                <p>4</p>
              </td>
              <td>
                <p>c</p>
              </td>
              <td>
                <p>K</p>
              </td>
              <td>
                <p>ca</p>
              </td>
              <td>
                <p>Ca</p>
              </td>
              <td>
                <p>KA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>k</p>
              </td>
              <td>
                <p>K</p>
              </td>
              <td>
                <p>ki</p>
              </td>
              <td>
                <p>Ki</p>
              </td>
              <td>
                <p>K*I</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>q</p>
              </td>
              <td>
                <p>STK</p>
              </td>
              <td>
                <p>qui</p>
              </td>
              <td>
                <p>qui</p>
              </td>
              <td>
                <p>STK*I</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <p>5</p>
              </td>
              <td>
                <p>d</p>
              </td>
              <td>
                <p>SP</p>
              </td>
              <td>
                <p>da</p>
              </td>
              <td>
                <p>Da</p>
              </td>
              <td>
                <p>SPA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>gi</p>
              </td>
              <td>
                <p>SH</p>
              </td>
              <td>
                <p>gia</p>
              </td>
              <td>
                <p>gia</p>
              </td>
              <td>
                <p>SHA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>6</p>
              </td>
              <td>
                <p>ch</p>
              </td>
              <td>
                <p>SK</p>
              </td>
              <td>
                <p>cha</p>
              </td>
              <td>
                <p>cha</p>
              </td>
              <td>
                <p>SKA</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <p>7</p>
              </td>
              <td>
                <p>g</p>
              </td>
              <td>
                <p>KP</p>
              </td>
              <td>
                <p>ga</p>
              </td>
              <td>
                <p>Ga</p>
              </td>
              <td>
                <p>KPA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>gh</p>
              </td>
              <td>
                <p>KP</p>
              </td>
              <td>
                <p>ghi</p>
              </td>
              <td>
                <p>ghi</p>
              </td>
              <td>
                <p>KP*I</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>8</p>
              </td>
              <td>
                <p>h</p>
              </td>
              <td>
                <p>H</p>
              </td>
              <td>
                <p>ha</p>
              </td>
              <td>
                <p>Ha</p>
              </td>
              <td>
                <p>HA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>l</p>
              </td>
              <td>
                <p>SR</p>
              </td>
              <td>
                <p>la</p>
              </td>
              <td>
                <p>La</p>
              </td>
              <td>
                <p>SRA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>10</p>
              </td>
              <td>
                <p>m</p>
              </td>
              <td>
                <p>RH</p>
              </td>
              <td>
                <p>ma</p>
              </td>
              <td>
                <p>ma</p>
              </td>
              <td>
                <p>RHA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>11</p>
              </td>
              <td>
                <p>n</p>
              </td>
              <td>
                <p>PR</p>
              </td>
              <td>
                <p>na</p>
              </td>
              <td>
                <p>Na</p>
              </td>
              <td>
                <p>PRA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>p</p>
              </td>
              <td>
                <p>SPH</p>
              </td>
              <td>
                <p>pa</p>
              </td>
              <td>
                <p>pa</p>
              </td>
              <td>
                <p>SPHA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>13</p>
              </td>
              <td>
                <p>r</p>
              </td>
              <td>
                <p>R</p>
              </td>
              <td>
                <p>ra</p>
              </td>
              <td>
                <p>ra</p>
              </td>
              <td>
                <p>RA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>14</p>
              </td>
              <td>
                <p>s</p>
              </td>
              <td>
                <p>S</p>
              </td>
              <td>
                <p>sa</p>
              </td>
              <td>
                <p>sa</p>
              </td>
              <td>
                <p>SA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>15</p>
              </td>
              <td>
                <p>t</p>
              </td>
              <td>
                <p>T</p>
              </td>
              <td>
                <p>ta</p>
              </td>
              <td>
                <p>ta</p>
              </td>
              <td>
                <p>TA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>16</p>
              </td>
              <td>
                <p>th</p>
              </td>
              <td>
                <p>TH</p>
              </td>
              <td>
                <p>tha</p>
              </td>
              <td>
                <p>tha</p>
              </td>
              <td>
                <p>THA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>17</p>
              </td>
              <td>
                <p>v</p>
              </td>
              <td>
                <p>SPR</p>
              </td>
              <td>
                <p>va</p>
              </td>
              <td>
                <p>va</p>
              </td>
              <td>
                <p>SPRA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>18</p>
              </td>
              <td>
                <p>ph</p>
              </td>
              <td>
                <p>PH</p>
              </td>
              <td>
                <p>pha</p>
              </td>
              <td>
                <p>pha</p>
              </td>
              <td>
                <p>PHA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>x</p>
              </td>
              <td>
                <p>ST</p>
              </td>
              <td>
                <p>xa</p>
              </td>
              <td>
                <p>xa</p>
              </td>
              <td>
                <p>STA</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <p>20</p>
              </td>
              <td>
                <p>ng</p>
              </td>
              <td>
                <p>KR</p>
              </td>
              <td>
                <p>nga</p>
              </td>
              <td>
                <p>nga</p>
              </td>
              <td>
                <p>KRA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>ngh</p>
              </td>
              <td>
                <p>KR</p>
              </td>
              <td>
                <p>nghi</p>
              </td>
              <td>
                <p>nghi</p>
              </td>
              <td>
                <p>KR*I</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>21</p>
              </td>
              <td>
                <p>nh</p>
              </td>
              <td>
                <p>TK</p>
              </td>
              <td>
                <p>nha</p>
              </td>
              <td>
                <p>nha</p>
              </td>
              <td>
                <p>TKA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>22</p>
              </td>
              <td>
                <p>tr</p>
              </td>
              <td>
                <p>TR</p>
              </td>
              <td>
                <p>tra</p>
              </td>
              <td>
                <p>tra</p>
              </td>
              <td>
                <p>TRA</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Lesson 5: Âm chính</h1>
        <img style={{ width: '100%' }} src="luyengo/steno am chinh.png"></img>
        <ul>
          <li>
            Sử dụng 11 phím ở giữa bàn phím để gõ âm chính là NHS*IUOEAWY. Trong đó sử dụng 3 phím NHS để gõ thanh điệu, 8 phím còn lại gõ phần âm đệm và âm chính.
          </li>
          <li>
            Các nguyên âm đơn ngắn là biến thể của các nguyên âm dài phân biệt bằng cách gõ thêm phím * ở trước.
          </li>
        </ul>
        <h2>Bảng tổng hợp quy tắc gõ tốc ký tổ hợp thanh điệu, âm đệm, âm chính tiếng Việt</h2>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', }} border="1" width="654" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td rowspan="2" width="52">
                <p><strong>STT</strong></p>
              </td>
              <td rowspan="2" width="140">
                <p><strong>Thanh điệu + &acirc;m đệm + nguy&ecirc;n &acirc;m</strong></p>
              </td>
              <td width="141">
                <p><strong>Kiểu g&otilde; tốc k&yacute;</strong></p>
              </td>
              <td colspan="3" width="321">
                <p><strong>V&iacute; dụ</strong></p>
              </td>
            </tr>
            <tr>
              <td width="141">
                <p><strong>NHS*IUOEAWY</strong></p>
              </td>
              <td width="97">
                <p><strong>Từ</strong></p>
              </td>
              <td width="97">
                <p><strong>G&otilde; telex</strong></p>
              </td>
              <td width="127">
                <p><strong>G&otilde; tốc k&iacute;</strong></p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="1" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uổ</p>
              </td>
              <td width="141">
                <p>-HSUO</p>
              </td>
              <td width="97">
                <p>tuổn</p>
              </td>
              <td width="97">
                <p>tuoonr</p>
              </td>
              <td width="127">
                <p>THSUON</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="2" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uỗ</p>
              </td>
              <td width="141">
                <p>N-SUO</p>
              </td>
              <td width="97">
                <p>tuỗn</p>
              </td>
              <td width="97">
                <p>tuoonx</p>
              </td>
              <td width="127">
                <p>TNSUON</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="3" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ă</p>
              </td>
              <td width="141">
                <p>*-A</p>
              </td>
              <td width="97">
                <p>tăn</p>
              </td>
              <td width="97">
                <p>tawn</p>
              </td>
              <td width="127">
                <p>T*AN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="4" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uộ</p>
              </td>
              <td width="141">
                <p>N-UO</p>
              </td>
              <td width="97">
                <p>tuộn</p>
              </td>
              <td width="97">
                <p>tuoonj</p>
              </td>
              <td width="127">
                <p>TNUON</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="5" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uớ</p>
              </td>
              <td width="141">
                <p>-SY</p>
              </td>
              <td width="97">
                <p>quớ</p>
              </td>
              <td width="97">
                <p>quows</p>
              </td>
              <td width="127">
                <p>STK-SY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="6" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uờ</p>
              </td>
              <td width="141">
                <p>-HY</p>
              </td>
              <td width="97">
                <p>quờ</p>
              </td>
              <td width="97">
                <p>quowf</p>
              </td>
              <td width="127">
                <p>STKHY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="7" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uở</p>
              </td>
              <td width="141">
                <p>-HSY</p>
              </td>
              <td width="97">
                <p>quở</p>
              </td>
              <td width="97">
                <p>quowr</p>
              </td>
              <td width="127">
                <p>STKHSY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="8" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&agrave;</p>
              </td>
              <td width="141">
                <p>-HU</p>
              </td>
              <td width="97">
                <p>tu&agrave;</p>
              </td>
              <td width="97">
                <p>tuaf</p>
              </td>
              <td width="127">
                <p>THUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="9" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&aacute;</p>
              </td>
              <td width="141">
                <p>-SU</p>
              </td>
              <td width="97">
                <p>tu&aacute;</p>
              </td>
              <td width="97">
                <p>tuas</p>
              </td>
              <td width="127">
                <p>TSUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="10" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&acirc;</p>
              </td>
              <td width="141">
                <p>*-Y</p>
              </td>
              <td width="97">
                <p>qu&acirc;n</p>
              </td>
              <td width="97">
                <p>quaan</p>
              </td>
              <td width="127">
                <p>STK*YN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="11" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&atilde;</p>
              </td>
              <td width="141">
                <p>N-SU</p>
              </td>
              <td width="97">
                <p>tu&atilde;</p>
              </td>
              <td width="97">
                <p>tuax</p>
              </td>
              <td width="127">
                <p>TNSUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="12" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oạ</p>
              </td>
              <td width="141">
                <p>N-U</p>
              </td>
              <td width="97">
                <p>choạc</p>
              </td>
              <td width="97">
                <p>choacj</p>
              </td>
              <td width="127">
                <p>SKN-UNK</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="13" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&egrave;</p>
              </td>
              <td width="141">
                <p>-HAY</p>
              </td>
              <td width="97">
                <p>qu&egrave;</p>
              </td>
              <td width="97">
                <p>quef</p>
              </td>
              <td width="127">
                <p>STKHAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="14" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&iacute;a</p>
              </td>
              <td width="141">
                <p>-SIE</p>
              </td>
              <td width="97">
                <p>t&iacute;a</p>
              </td>
              <td width="97">
                <p>tias</p>
              </td>
              <td width="127">
                <p>TSIE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="15" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oả</p>
              </td>
              <td width="141">
                <p>-HSU</p>
              </td>
              <td width="97">
                <p>hoả</p>
              </td>
              <td width="97">
                <p>hoar</p>
              </td>
              <td width="127">
                <p>H-HSU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="16" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&eacute;</p>
              </td>
              <td width="141">
                <p>-SAY</p>
              </td>
              <td width="97">
                <p>qu&eacute;</p>
              </td>
              <td width="97">
                <p>ques</p>
              </td>
              <td width="127">
                <p>STKSAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="17" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&ecirc;</p>
              </td>
              <td width="141">
                <p>-UE</p>
              </td>
              <td width="97">
                <p>qu&ecirc;</p>
              </td>
              <td width="97">
                <p>quee</p>
              </td>
              <td width="127">
                <p>STKUE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="18" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ửa</p>
              </td>
              <td width="141">
                <p>-HSEW</p>
              </td>
              <td width="97">
                <p>lửa</p>
              </td>
              <td width="97">
                <p>luwar</p>
              </td>
              <td width="127">
                <p>SR-HSEW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="19" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ia</p>
              </td>
              <td width="141">
                <p>-IE</p>
              </td>
              <td width="97">
                <p>tia</p>
              </td>
              <td width="97">
                <p>tia</p>
              </td>
              <td width="127">
                <p>TIE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="20" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ũa</p>
              </td>
              <td width="141">
                <p>N-SUO</p>
              </td>
              <td width="97">
                <p>dũa</p>
              </td>
              <td width="97">
                <p>duax</p>
              </td>
              <td width="127">
                <p>SPN-SUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="21" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uỳ</p>
              </td>
              <td width="141">
                <p>-HUY</p>
              </td>
              <td width="97">
                <p>chuỳ</p>
              </td>
              <td width="97">
                <p>chuyf</p>
              </td>
              <td width="127">
                <p>SK-HUY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="22" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&ocirc;</p>
              </td>
              <td width="141">
                <p>-UO</p>
              </td>
              <td width="97">
                <p>tu&ocirc;n</p>
              </td>
              <td width="97">
                <p>tuoon</p>
              </td>
              <td width="127">
                <p>TUON</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="23" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ụa</p>
              </td>
              <td width="141">
                <p>N-UO</p>
              </td>
              <td width="97">
                <p>lụa</p>
              </td>
              <td width="97">
                <p>luaj</p>
              </td>
              <td width="127">
                <p>SRN-UO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="24" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oắ</p>
              </td>
              <td width="141">
                <p>-S*U</p>
              </td>
              <td width="97">
                <p>xoắn</p>
              </td>
              <td width="97">
                <p>xoawns</p>
              </td>
              <td width="127">
                <p>STS*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="25" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uỵ</p>
              </td>
              <td width="141">
                <p>N-UY</p>
              </td>
              <td width="97">
                <p>khuỵ</p>
              </td>
              <td width="97">
                <p>khuyj</p>
              </td>
              <td width="127">
                <p>KHN-UY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="26" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oằ</p>
              </td>
              <td width="141">
                <p>-H*U</p>
              </td>
              <td width="97">
                <p>xoằn</p>
              </td>
              <td width="97">
                <p>xoawnf</p>
              </td>
              <td width="127">
                <p>STH*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="27" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uỷ</p>
              </td>
              <td width="141">
                <p>-HSUY</p>
              </td>
              <td width="97">
                <p>quỷ</p>
              </td>
              <td width="97">
                <p>quyr</p>
              </td>
              <td width="127">
                <p>STK-HSUY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="28" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oẳ</p>
              </td>
              <td width="141">
                <p>-HS*U</p>
              </td>
              <td width="97">
                <p>xoẳn</p>
              </td>
              <td width="97">
                <p>xoawnr</p>
              </td>
              <td width="127">
                <p>STHS*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="29" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uỹ</p>
              </td>
              <td width="141">
                <p>N-SUY</p>
              </td>
              <td width="97">
                <p>luỹ</p>
              </td>
              <td width="97">
                <p>luyx</p>
              </td>
              <td width="127">
                <p>SRN-SUY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="30" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oẵ</p>
              </td>
              <td width="141">
                <p>N-S*U</p>
              </td>
              <td width="97">
                <p>xoẵn</p>
              </td>
              <td width="97">
                <p>xoawnx</p>
              </td>
              <td width="127">
                <p>STNS*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="31" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oặ</p>
              </td>
              <td width="141">
                <p>N*-U</p>
              </td>
              <td width="97">
                <p>xoặn</p>
              </td>
              <td width="97">
                <p>xoawnj</p>
              </td>
              <td width="127">
                <p>STN*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="32" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u&yacute;</p>
              </td>
              <td width="141">
                <p>-SUY</p>
              </td>
              <td width="97">
                <p>hu&yacute;t</p>
              </td>
              <td width="97">
                <p>huyts</p>
              </td>
              <td width="127">
                <p>H-SUYNT</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="33" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ĩ</p>
              </td>
              <td width="141">
                <p>N-S*I</p>
              </td>
              <td width="97">
                <p>tĩ</p>
              </td>
              <td width="97">
                <p>tix</p>
              </td>
              <td width="127">
                <p>TNS*I</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="34" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oẹ</p>
              </td>
              <td width="141">
                <p>N-AY</p>
              </td>
              <td width="97">
                <p>toẹt</p>
              </td>
              <td width="97">
                <p>toetj</p>
              </td>
              <td width="127">
                <p>TN-AYNT</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="35" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ướ</p>
              </td>
              <td width="141">
                <p>-SEW</p>
              </td>
              <td width="97">
                <p>hướng</p>
              </td>
              <td width="97">
                <p>huowngs</p>
              </td>
              <td width="127">
                <p>HSEWG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="36" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oẻ</p>
              </td>
              <td width="141">
                <p>-HSAY</p>
              </td>
              <td width="97">
                <p>khoẻ</p>
              </td>
              <td width="97">
                <p>khoer</p>
              </td>
              <td width="127">
                <p>KH-HSAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="37" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ườ</p>
              </td>
              <td width="141">
                <p>-HEW</p>
              </td>
              <td width="97">
                <p>hường</p>
              </td>
              <td width="97">
                <p>huowngf</p>
              </td>
              <td width="127">
                <p>HHEWG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="38" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uă</p>
              </td>
              <td width="141">
                <p>*-U</p>
              </td>
              <td width="97">
                <p>quăn</p>
              </td>
              <td width="97">
                <p>quawn</p>
              </td>
              <td width="127">
                <p>STK*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="39" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oẽ</p>
              </td>
              <td width="141">
                <p>N-SAY</p>
              </td>
              <td width="97">
                <p>toẽ</p>
              </td>
              <td width="97">
                <p>toex</p>
              </td>
              <td width="127">
                <p>TN-SAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="40" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ưở</p>
              </td>
              <td width="141">
                <p>-HSEW</p>
              </td>
              <td width="97">
                <p>hưởng</p>
              </td>
              <td width="97">
                <p>huowngr</p>
              </td>
              <td width="127">
                <p>HHSEWG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="41" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ưỡ</p>
              </td>
              <td width="141">
                <p>N-SEW</p>
              </td>
              <td width="97">
                <p>hưỡng</p>
              </td>
              <td width="97">
                <p>huwowngx</p>
              </td>
              <td width="127">
                <p>HNSEWG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="42" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ượ</p>
              </td>
              <td width="141">
                <p>N-EW</p>
              </td>
              <td width="97">
                <p>hượng</p>
              </td>
              <td width="97">
                <p>huowngj</p>
              </td>
              <td width="127">
                <p>HNEWG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="43" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uya</p>
              </td>
              <td width="141">
                <p>-EY</p>
              </td>
              <td width="97">
                <p>khuya</p>
              </td>
              <td width="97">
                <p>khuya</p>
              </td>
              <td width="127">
                <p>KHEY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="44" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ữa</p>
              </td>
              <td width="141">
                <p>N-SEW</p>
              </td>
              <td width="97">
                <p>vữa</p>
              </td>
              <td width="97">
                <p>vuwax</p>
              </td>
              <td width="127">
                <p>SPRN-SEW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="45" type="1">
                </ol>
              </td>
              <td width="140">
                <p>o&agrave;</p>
              </td>
              <td width="141">
                <p>-HU</p>
              </td>
              <td width="97">
                <p>ho&agrave;</p>
              </td>
              <td width="97">
                <p>hoaf</p>
              </td>
              <td width="127">
                <p>H-HU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="46" type="1">
                </ol>
              </td>
              <td width="140">
                <p>o&aacute;</p>
              </td>
              <td width="141">
                <p>-SU</p>
              </td>
              <td width="97">
                <p>cho&aacute;ng</p>
              </td>
              <td width="97">
                <p>choangs</p>
              </td>
              <td width="127">
                <p>SK-SUG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="47" type="1">
                </ol>
              </td>
              <td width="140">
                <p>o&atilde;</p>
              </td>
              <td width="141">
                <p>N-SU</p>
              </td>
              <td width="97">
                <p>ho&atilde;n</p>
              </td>
              <td width="97">
                <p>hoawnx</p>
              </td>
              <td width="127">
                <p>HN-SUN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="48" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ĩa</p>
              </td>
              <td width="141">
                <p>N-SIE</p>
              </td>
              <td width="97">
                <p>tĩa</p>
              </td>
              <td width="97">
                <p>tiax</p>
              </td>
              <td width="127">
                <p>TNSIE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="49" type="1">
                </ol>
              </td>
              <td width="140">
                <p>o&egrave;</p>
              </td>
              <td width="141">
                <p>-HAY</p>
              </td>
              <td width="97">
                <p>ho&egrave;</p>
              </td>
              <td width="97">
                <p>hoef</p>
              </td>
              <td width="127">
                <p>H-HAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="50" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ủa</p>
              </td>
              <td width="141">
                <p>-HSUO</p>
              </td>
              <td width="97">
                <p>của</p>
              </td>
              <td width="97">
                <p>cuar</p>
              </td>
              <td width="127">
                <p>K-HSUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="51" type="1">
                </ol>
              </td>
              <td width="140">
                <p>o&eacute;</p>
              </td>
              <td width="141">
                <p>-SAY</p>
              </td>
              <td width="97">
                <p>kho&eacute;t</p>
              </td>
              <td width="97">
                <p>khoets</p>
              </td>
              <td width="127">
                <p>KH-SAYNT</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="52" type="1">
                </ol>
              </td>
              <td width="140">
                <p>a</p>
              </td>
              <td width="141">
                <p>-A</p>
              </td>
              <td width="97">
                <p>ta</p>
              </td>
              <td width="97">
                <p>ta</p>
              </td>
              <td width="127">
                <p>TA</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="53" type="1">
                </ol>
              </td>
              <td width="140">
                <p>e</p>
              </td>
              <td width="141">
                <p>-E</p>
              </td>
              <td width="97">
                <p>te</p>
              </td>
              <td width="97">
                <p>te</p>
              </td>
              <td width="127">
                <p>TE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="54" type="1">
                </ol>
              </td>
              <td width="140">
                <p>yế</p>
              </td>
              <td width="141">
                <p>-SIE</p>
              </td>
              <td width="97">
                <p>yến</p>
              </td>
              <td width="97">
                <p>yeens</p>
              </td>
              <td width="127">
                <p>SIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="55" type="1">
                </ol>
              </td>
              <td width="140">
                <p>yề</p>
              </td>
              <td width="141">
                <p>-HIE</p>
              </td>
              <td width="97">
                <p>yền</p>
              </td>
              <td width="97">
                <p>yeenf</p>
              </td>
              <td width="127">
                <p>HIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="56" type="1">
                </ol>
              </td>
              <td width="140">
                <p>i</p>
              </td>
              <td width="141">
                <p>*-I</p>
              </td>
              <td width="97">
                <p>ti</p>
              </td>
              <td width="97">
                <p>ti</p>
              </td>
              <td width="127">
                <p>T*I</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="57" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ũ</p>
              </td>
              <td width="141">
                <p>N-SIU</p>
              </td>
              <td width="97">
                <p>tũ</p>
              </td>
              <td width="97">
                <p>tux</p>
              </td>
              <td width="127">
                <p>TNSIU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="58" type="1">
                </ol>
              </td>
              <td width="140">
                <p>yể</p>
              </td>
              <td width="141">
                <p>-HSIE</p>
              </td>
              <td width="97">
                <p>yển</p>
              </td>
              <td width="97">
                <p>yeenr</p>
              </td>
              <td width="127">
                <p>HSIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="59" type="1">
                </ol>
              </td>
              <td width="140">
                <p>yễ</p>
              </td>
              <td width="141">
                <p>N-SIE</p>
              </td>
              <td width="97">
                <p>yễn</p>
              </td>
              <td width="97">
                <p>yeenx</p>
              </td>
              <td width="127">
                <p>NSIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="60" type="1">
                </ol>
              </td>
              <td width="140">
                <p>yệ</p>
              </td>
              <td width="141">
                <p>N-IE</p>
              </td>
              <td width="97">
                <p>yện</p>
              </td>
              <td width="97">
                <p>yeenj</p>
              </td>
              <td width="127">
                <p>NIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="61" type="1">
                </ol>
              </td>
              <td width="140">
                <p>o</p>
              </td>
              <td width="141">
                <p>-O</p>
              </td>
              <td width="97">
                <p>to</p>
              </td>
              <td width="97">
                <p>to</p>
              </td>
              <td width="127">
                <p>TO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="62" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oă</p>
              </td>
              <td width="141">
                <p>*-U</p>
              </td>
              <td width="97">
                <p>xoăn</p>
              </td>
              <td width="97">
                <p>xoawn</p>
              </td>
              <td width="127">
                <p>ST*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="63" type="1">
                </ol>
              </td>
              <td width="140">
                <p>u</p>
              </td>
              <td width="141">
                <p>-IU</p>
              </td>
              <td width="97">
                <p>tu</p>
              </td>
              <td width="97">
                <p>tu</p>
              </td>
              <td width="127">
                <p>TIU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="64" type="1">
                </ol>
              </td>
              <td width="140">
                <p>iế</p>
              </td>
              <td width="141">
                <p>-SIE</p>
              </td>
              <td width="97">
                <p>tiến</p>
              </td>
              <td width="97">
                <p>tieens</p>
              </td>
              <td width="127">
                <p>TSIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="65" type="1">
                </ol>
              </td>
              <td width="140">
                <p>iề</p>
              </td>
              <td width="141">
                <p>-HIE</p>
              </td>
              <td width="97">
                <p>tiền</p>
              </td>
              <td width="97">
                <p>tieenf</p>
              </td>
              <td width="127">
                <p>THIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="66" type="1">
                </ol>
              </td>
              <td width="140">
                <p>y</p>
              </td>
              <td width="141">
                <p>-I</p>
              </td>
              <td width="97">
                <p>ty</p>
              </td>
              <td width="97">
                <p>ty</p>
              </td>
              <td width="127">
                <p>TI</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="67" type="1">
                </ol>
              </td>
              <td width="140">
                <p>iể</p>
              </td>
              <td width="141">
                <p>-HSIE</p>
              </td>
              <td width="97">
                <p>tiển</p>
              </td>
              <td width="97">
                <p>tieenr</p>
              </td>
              <td width="127">
                <p>THSIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="68" type="1">
                </ol>
              </td>
              <td width="140">
                <p>iễ</p>
              </td>
              <td width="141">
                <p>N-SIE</p>
              </td>
              <td width="97">
                <p>tiễn</p>
              </td>
              <td width="97">
                <p>tieenx</p>
              </td>
              <td width="127">
                <p>TNSIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="69" type="1">
                </ol>
              </td>
              <td width="140">
                <p>iệ</p>
              </td>
              <td width="141">
                <p>N-IE</p>
              </td>
              <td width="97">
                <p>tiện</p>
              </td>
              <td width="97">
                <p>tieenj</p>
              </td>
              <td width="127">
                <p>TNIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="70" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&ugrave;a</p>
              </td>
              <td width="141">
                <p>-HUO</p>
              </td>
              <td width="97">
                <p>b&ugrave;a</p>
              </td>
              <td width="97">
                <p>buaf</p>
              </td>
              <td width="127">
                <p>P-HUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="71" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ua</p>
              </td>
              <td width="141">
                <p>-UO</p>
              </td>
              <td width="97">
                <p>tua</p>
              </td>
              <td width="97">
                <p>tua</p>
              </td>
              <td width="127">
                <p>TUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="72" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ue</p>
              </td>
              <td width="141">
                <p>-AY</p>
              </td>
              <td width="97">
                <p>que</p>
              </td>
              <td width="97">
                <p>que</p>
              </td>
              <td width="127">
                <p>STKAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="73" type="1">
                </ol>
              </td>
              <td width="140">
                <p>y&ecirc;</p>
              </td>
              <td width="141">
                <p>-IE</p>
              </td>
              <td width="97">
                <p>y&ecirc;n</p>
              </td>
              <td width="97">
                <p>yeen</p>
              </td>
              <td width="127">
                <p>IEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="74" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ựa</p>
              </td>
              <td width="141">
                <p>N-EW</p>
              </td>
              <td width="97">
                <p>cựa</p>
              </td>
              <td width="97">
                <p>cuwaj</p>
              </td>
              <td width="127">
                <p>KN-EW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="75" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uyế</p>
              </td>
              <td width="141">
                <p>-SEY</p>
              </td>
              <td width="97">
                <p>quyến</p>
              </td>
              <td width="97">
                <p>quyeens</p>
              </td>
              <td width="127">
                <p>STKSEYN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="76" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ứa</p>
              </td>
              <td width="141">
                <p>-SEW</p>
              </td>
              <td width="97">
                <p>dứa</p>
              </td>
              <td width="97">
                <p>duwas</p>
              </td>
              <td width="127">
                <p>SP-SEW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="77" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uyề</p>
              </td>
              <td width="141">
                <p>-HEY</p>
              </td>
              <td width="97">
                <p>quyền</p>
              </td>
              <td width="97">
                <p>quyeenf</p>
              </td>
              <td width="127">
                <p>STKHEYN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="78" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uyể</p>
              </td>
              <td width="141">
                <p>-HSEY</p>
              </td>
              <td width="97">
                <p>quyển</p>
              </td>
              <td width="97">
                <p>quyeenr</p>
              </td>
              <td width="127">
                <p>STKHSEYN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="79" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uyễ</p>
              </td>
              <td width="141">
                <p>N-SEY</p>
              </td>
              <td width="97">
                <p>quyễn</p>
              </td>
              <td width="97">
                <p>quyeenx</p>
              </td>
              <td width="127">
                <p>STKNSEYN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="80" type="1">
                </ol>
              </td>
              <td width="140">
                <p>i&ecirc;</p>
              </td>
              <td width="141">
                <p>-IE</p>
              </td>
              <td width="97">
                <p>ti&ecirc;n</p>
              </td>
              <td width="97">
                <p>tieen</p>
              </td>
              <td width="127">
                <p>TIEN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="81" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ơ</p>
              </td>
              <td width="141">
                <p>-W</p>
              </td>
              <td width="97">
                <p>tơ</p>
              </td>
              <td width="97">
                <p>tow</p>
              </td>
              <td width="127">
                <p>TW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="82" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ạ</p>
              </td>
              <td width="141">
                <p>N-A</p>
              </td>
              <td width="97">
                <p>tạ</p>
              </td>
              <td width="97">
                <p>taj</p>
              </td>
              <td width="127">
                <p>TNA</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="83" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uyệ</p>
              </td>
              <td width="141">
                <p>N-EY</p>
              </td>
              <td width="97">
                <p>quyện</p>
              </td>
              <td width="97">
                <p>quyeenj</p>
              </td>
              <td width="127">
                <p>STKNEYN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="84" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ả</p>
              </td>
              <td width="141">
                <p>-HSA</p>
              </td>
              <td width="97">
                <p>tả</p>
              </td>
              <td width="97">
                <p>tar</p>
              </td>
              <td width="127">
                <p>THSA</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="85" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uy</p>
              </td>
              <td width="141">
                <p>-UY</p>
              </td>
              <td width="97">
                <p>quy</p>
              </td>
              <td width="97">
                <p>quy</p>
              </td>
              <td width="127">
                <p>STKUY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="86" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ấ</p>
              </td>
              <td width="141">
                <p>-S*W</p>
              </td>
              <td width="97">
                <p>tấn</p>
              </td>
              <td width="97">
                <p>taans</p>
              </td>
              <td width="127">
                <p>TS*WN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="87" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ầ</p>
              </td>
              <td width="141">
                <p>-H*W</p>
              </td>
              <td width="97">
                <p>tần</p>
              </td>
              <td width="97">
                <p>taanf</p>
              </td>
              <td width="127">
                <p>TH*WN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="88" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&uacute;a</p>
              </td>
              <td width="141">
                <p>-SUO</p>
              </td>
              <td width="97">
                <p>b&uacute;a</p>
              </td>
              <td width="97">
                <p>buas</p>
              </td>
              <td width="127">
                <p>P-SUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="89" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẩ</p>
              </td>
              <td width="141">
                <p>-HS*W</p>
              </td>
              <td width="97">
                <p>tẩn</p>
              </td>
              <td width="97">
                <p>taanr</p>
              </td>
              <td width="127">
                <p>THS*WN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="90" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẫ</p>
              </td>
              <td width="141">
                <p>N-S*W</p>
              </td>
              <td width="97">
                <p>tẫn</p>
              </td>
              <td width="97">
                <p>taanx</p>
              </td>
              <td width="127">
                <p>TNS*WN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="91" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ậ</p>
              </td>
              <td width="141">
                <p>N*-W</p>
              </td>
              <td width="97">
                <p>tận</p>
              </td>
              <td width="97">
                <p>taanj</p>
              </td>
              <td width="127">
                <p>TN*WN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="92" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ắ</p>
              </td>
              <td width="141">
                <p>-S*A</p>
              </td>
              <td width="97">
                <p>tắn</p>
              </td>
              <td width="97">
                <p>tawns</p>
              </td>
              <td width="127">
                <p>TS*AN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="93" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ư</p>
              </td>
              <td width="141">
                <p>-UW</p>
              </td>
              <td width="97">
                <p>tư</p>
              </td>
              <td width="97">
                <p>tuw</p>
              </td>
              <td width="127">
                <p>TUW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="94" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ưa</p>
              </td>
              <td width="141">
                <p>-EW</p>
              </td>
              <td width="97">
                <p>tưa</p>
              </td>
              <td width="97">
                <p>tuwa</p>
              </td>
              <td width="127">
                <p>TEW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="95" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ằ</p>
              </td>
              <td width="141">
                <p>-H*A</p>
              </td>
              <td width="97">
                <p>tằn</p>
              </td>
              <td width="97">
                <p>tawnf</p>
              </td>
              <td width="127">
                <p>TH*AN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="96" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẳ</p>
              </td>
              <td width="141">
                <p>-HS*A</p>
              </td>
              <td width="97">
                <p>tẳn</p>
              </td>
              <td width="97">
                <p>tawnr</p>
              </td>
              <td width="127">
                <p>THS*AN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="97" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẵ</p>
              </td>
              <td width="141">
                <p>N-S*A</p>
              </td>
              <td width="97">
                <p>tẵn</p>
              </td>
              <td width="97">
                <p>tawnx</p>
              </td>
              <td width="127">
                <p>TNS*AN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="98" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ặ</p>
              </td>
              <td width="141">
                <p>N*-A</p>
              </td>
              <td width="97">
                <p>tặn</p>
              </td>
              <td width="97">
                <p>tawnj</p>
              </td>
              <td width="127">
                <p>TN*AN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="99" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẹ</p>
              </td>
              <td width="141">
                <p>N-E</p>
              </td>
              <td width="97">
                <p>tẹ</p>
              </td>
              <td width="97">
                <p>tej</p>
              </td>
              <td width="127">
                <p>TNE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="100" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẻ</p>
              </td>
              <td width="141">
                <p>-HSE</p>
              </td>
              <td width="97">
                <p>tẻ</p>
              </td>
              <td width="97">
                <p>ter</p>
              </td>
              <td width="127">
                <p>THSE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="101" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỉa</p>
              </td>
              <td width="141">
                <p>-HSIE</p>
              </td>
              <td width="97">
                <p>tỉa</p>
              </td>
              <td width="97">
                <p>tiar</p>
              </td>
              <td width="127">
                <p>THSIE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="102" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ẽ</p>
              </td>
              <td width="141">
                <p>N-SE</p>
              </td>
              <td width="97">
                <p>tẽ</p>
              </td>
              <td width="97">
                <p>tex</p>
              </td>
              <td width="127">
                <p>TNSE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="103" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ế</p>
              </td>
              <td width="141">
                <p>-SOE</p>
              </td>
              <td width="97">
                <p>tế</p>
              </td>
              <td width="97">
                <p>tees</p>
              </td>
              <td width="127">
                <p>TSOE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="104" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ề</p>
              </td>
              <td width="141">
                <p>-HOE</p>
              </td>
              <td width="97">
                <p>tề</p>
              </td>
              <td width="97">
                <p>teef</p>
              </td>
              <td width="127">
                <p>THOE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="105" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ể</p>
              </td>
              <td width="141">
                <p>-HSOE</p>
              </td>
              <td width="97">
                <p>tể</p>
              </td>
              <td width="97">
                <p>teer</p>
              </td>
              <td width="127">
                <p>THSOE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="106" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ễ</p>
              </td>
              <td width="141">
                <p>N-SOE</p>
              </td>
              <td width="97">
                <p>tễ</p>
              </td>
              <td width="97">
                <p>teex</p>
              </td>
              <td width="127">
                <p>TNSOE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="107" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ệ</p>
              </td>
              <td width="141">
                <p>N-OE</p>
              </td>
              <td width="97">
                <p>tệ</p>
              </td>
              <td width="97">
                <p>teej</p>
              </td>
              <td width="127">
                <p>TNOE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="108" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uy&ecirc;</p>
              </td>
              <td width="141">
                <p>-EY</p>
              </td>
              <td width="97">
                <p>quy&ecirc;n</p>
              </td>
              <td width="97">
                <p>quyeen</p>
              </td>
              <td width="127">
                <p>STKEYN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="109" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỉ</p>
              </td>
              <td width="141">
                <p>-HS*I</p>
              </td>
              <td width="97">
                <p>tỉ</p>
              </td>
              <td width="97">
                <p>tir</p>
              </td>
              <td width="127">
                <p>THS*I</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="110" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ị</p>
              </td>
              <td width="141">
                <p>N*-I</p>
              </td>
              <td width="97">
                <p>tị</p>
              </td>
              <td width="97">
                <p>tij</p>
              </td>
              <td width="127">
                <p>TN*I</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="111" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uạ</p>
              </td>
              <td width="141">
                <p>N-U</p>
              </td>
              <td width="97">
                <p>tuạ</p>
              </td>
              <td width="97">
                <p>tuaj</p>
              </td>
              <td width="127">
                <p>TNUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="112" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uơ</p>
              </td>
              <td width="141">
                <p>-Y</p>
              </td>
              <td width="97">
                <p>quơ</p>
              </td>
              <td width="97">
                <p>quow</p>
              </td>
              <td width="127">
                <p>STKY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="113" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ọ</p>
              </td>
              <td width="141">
                <p>N-O</p>
              </td>
              <td width="97">
                <p>tọ</p>
              </td>
              <td width="97">
                <p>toj</p>
              </td>
              <td width="127">
                <p>TNO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="114" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uả</p>
              </td>
              <td width="141">
                <p>-HSU</p>
              </td>
              <td width="97">
                <p>tuả</p>
              </td>
              <td width="97">
                <p>tuar</p>
              </td>
              <td width="127">
                <p>THSUO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="115" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỏ</p>
              </td>
              <td width="141">
                <p>-HSO</p>
              </td>
              <td width="97">
                <p>tỏ</p>
              </td>
              <td width="97">
                <p>tor</p>
              </td>
              <td width="127">
                <p>THSO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="116" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uấ</p>
              </td>
              <td width="141">
                <p>-S*Y</p>
              </td>
              <td width="97">
                <p>quấn</p>
              </td>
              <td width="97">
                <p>quaans</p>
              </td>
              <td width="127">
                <p>STKS*YN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="117" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ố</p>
              </td>
              <td width="141">
                <p>-SOW</p>
              </td>
              <td width="97">
                <p>tố</p>
              </td>
              <td width="97">
                <p>toos</p>
              </td>
              <td width="127">
                <p>TSOW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="118" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oa</p>
              </td>
              <td width="141">
                <p>-U</p>
              </td>
              <td width="97">
                <p>toa</p>
              </td>
              <td width="97">
                <p>toa</p>
              </td>
              <td width="127">
                <p>TU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="119" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uầ</p>
              </td>
              <td width="141">
                <p>-H*Y</p>
              </td>
              <td width="97">
                <p>quần</p>
              </td>
              <td width="97">
                <p>quaanf</p>
              </td>
              <td width="127">
                <p>STKH*YN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="120" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ồ</p>
              </td>
              <td width="141">
                <p>-HOW</p>
              </td>
              <td width="97">
                <p>tồ</p>
              </td>
              <td width="97">
                <p>toof</p>
              </td>
              <td width="127">
                <p>THOW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="121" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẩ</p>
              </td>
              <td width="141">
                <p>-HS*Y</p>
              </td>
              <td width="97">
                <p>quẩn</p>
              </td>
              <td width="97">
                <p>quaanr</p>
              </td>
              <td width="127">
                <p>STKHS*YN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="122" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ừa</p>
              </td>
              <td width="141">
                <p>-HEW</p>
              </td>
              <td width="97">
                <p>bừa</p>
              </td>
              <td width="97">
                <p>buwaf</p>
              </td>
              <td width="127">
                <p>P-HEW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="123" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ổ</p>
              </td>
              <td width="141">
                <p>-HSOW</p>
              </td>
              <td width="97">
                <p>tổ</p>
              </td>
              <td width="97">
                <p>toor</p>
              </td>
              <td width="127">
                <p>THSOW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="124" type="1">
                </ol>
              </td>
              <td width="140">
                <p>oe</p>
              </td>
              <td width="141">
                <p>-AY</p>
              </td>
              <td width="97">
                <p>xoe</p>
              </td>
              <td width="97">
                <p>xoe</p>
              </td>
              <td width="127">
                <p>STAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="125" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẫ</p>
              </td>
              <td width="141">
                <p>N-S*Y</p>
              </td>
              <td width="97">
                <p>quẫn</p>
              </td>
              <td width="97">
                <p>quaanx</p>
              </td>
              <td width="127">
                <p>STKNS*YN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="126" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỗ</p>
              </td>
              <td width="141">
                <p>N-SOW</p>
              </td>
              <td width="97">
                <p>tỗ</p>
              </td>
              <td width="97">
                <p>toox</p>
              </td>
              <td width="127">
                <p>TNSOW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="127" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uậ</p>
              </td>
              <td width="141">
                <p>N*-Y</p>
              </td>
              <td width="97">
                <p>quận</p>
              </td>
              <td width="97">
                <p>quaanj</p>
              </td>
              <td width="127">
                <p>STKN*YN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="128" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ộ</p>
              </td>
              <td width="141">
                <p>N-OW</p>
              </td>
              <td width="97">
                <p>tộ</p>
              </td>
              <td width="97">
                <p>tooj</p>
              </td>
              <td width="127">
                <p>TNOW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="129" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uắ</p>
              </td>
              <td width="141">
                <p>-S*U</p>
              </td>
              <td width="97">
                <p>quắn</p>
              </td>
              <td width="97">
                <p>quawns</p>
              </td>
              <td width="127">
                <p>STKS*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="130" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ớ</p>
              </td>
              <td width="141">
                <p>-SW</p>
              </td>
              <td width="97">
                <p>tớ</p>
              </td>
              <td width="97">
                <p>tows</p>
              </td>
              <td width="127">
                <p>TSW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="131" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uằ</p>
              </td>
              <td width="141">
                <p>-H*U</p>
              </td>
              <td width="97">
                <p>quằn</p>
              </td>
              <td width="97">
                <p>quawnf</p>
              </td>
              <td width="127">
                <p>STKH*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="132" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ờ</p>
              </td>
              <td width="141">
                <p>-HW</p>
              </td>
              <td width="97">
                <p>tờ</p>
              </td>
              <td width="97">
                <p>towf</p>
              </td>
              <td width="127">
                <p>THW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="133" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẳ</p>
              </td>
              <td width="141">
                <p>-HS*U</p>
              </td>
              <td width="97">
                <p>quẳn</p>
              </td>
              <td width="97">
                <p>quawnr</p>
              </td>
              <td width="127">
                <p>STKHS*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="134" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ở</p>
              </td>
              <td width="141">
                <p>-HSW</p>
              </td>
              <td width="97">
                <p>tở</p>
              </td>
              <td width="97">
                <p>towr</p>
              </td>
              <td width="127">
                <p>THSW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="135" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&agrave;</p>
              </td>
              <td width="141">
                <p>-HA</p>
              </td>
              <td width="97">
                <p>t&agrave;</p>
              </td>
              <td width="97">
                <p>taf</p>
              </td>
              <td width="127">
                <p>THA</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="136" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẵ</p>
              </td>
              <td width="141">
                <p>N-S*U</p>
              </td>
              <td width="97">
                <p>quẵn</p>
              </td>
              <td width="97">
                <p>quawnx</p>
              </td>
              <td width="127">
                <p>STKNS*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="137" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỡ</p>
              </td>
              <td width="141">
                <p>N-SW</p>
              </td>
              <td width="97">
                <p>tỡ</p>
              </td>
              <td width="97">
                <p>towx</p>
              </td>
              <td width="127">
                <p>TNSW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="138" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&aacute;</p>
              </td>
              <td width="141">
                <p>-SA</p>
              </td>
              <td width="97">
                <p>t&aacute;</p>
              </td>
              <td width="97">
                <p>tas</p>
              </td>
              <td width="127">
                <p>TSA</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="139" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&acirc;</p>
              </td>
              <td width="141">
                <p>*-W</p>
              </td>
              <td width="97">
                <p>t&acirc;n</p>
              </td>
              <td width="97">
                <p>taan</p>
              </td>
              <td width="127">
                <p>T*WN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="140" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uặ</p>
              </td>
              <td width="141">
                <p>N*-U</p>
              </td>
              <td width="97">
                <p>quặn</p>
              </td>
              <td width="97">
                <p>quawnj</p>
              </td>
              <td width="127">
                <p>STKN*UN</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="141" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ợ</p>
              </td>
              <td width="141">
                <p>N-W</p>
              </td>
              <td width="97">
                <p>tợ</p>
              </td>
              <td width="97">
                <p>towj</p>
              </td>
              <td width="127">
                <p>TNW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="142" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&atilde;</p>
              </td>
              <td width="141">
                <p>N-SA</p>
              </td>
              <td width="97">
                <p>t&atilde;</p>
              </td>
              <td width="97">
                <p>tax</p>
              </td>
              <td width="127">
                <p>TNSA</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="143" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẹ</p>
              </td>
              <td width="141">
                <p>N-AY</p>
              </td>
              <td width="97">
                <p>quẹ</p>
              </td>
              <td width="97">
                <p>quej</p>
              </td>
              <td width="127">
                <p>STKNAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="144" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ụ</p>
              </td>
              <td width="141">
                <p>N-IU</p>
              </td>
              <td width="97">
                <p>tụ</p>
              </td>
              <td width="97">
                <p>tuj</p>
              </td>
              <td width="127">
                <p>TNIU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="145" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẻ</p>
              </td>
              <td width="141">
                <p>-HSAY</p>
              </td>
              <td width="97">
                <p>quẻ</p>
              </td>
              <td width="97">
                <p>quer</p>
              </td>
              <td width="127">
                <p>STKHSAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="146" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ủ</p>
              </td>
              <td width="141">
                <p>-HSIU</p>
              </td>
              <td width="97">
                <p>tủ</p>
              </td>
              <td width="97">
                <p>tur</p>
              </td>
              <td width="127">
                <p>THSIU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="147" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&egrave;</p>
              </td>
              <td width="141">
                <p>-HE</p>
              </td>
              <td width="97">
                <p>t&egrave;</p>
              </td>
              <td width="97">
                <p>tef</p>
              </td>
              <td width="127">
                <p>THE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="148" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uẽ</p>
              </td>
              <td width="141">
                <p>N-SAY</p>
              </td>
              <td width="97">
                <p>quẽ</p>
              </td>
              <td width="97">
                <p>quex</p>
              </td>
              <td width="127">
                <p>STKNSAY</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="149" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&eacute;</p>
              </td>
              <td width="141">
                <p>-SE</p>
              </td>
              <td width="97">
                <p>t&eacute;</p>
              </td>
              <td width="97">
                <p>tes</p>
              </td>
              <td width="127">
                <p>TSE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="150" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ứ</p>
              </td>
              <td width="141">
                <p>-SUW</p>
              </td>
              <td width="97">
                <p>tứ</p>
              </td>
              <td width="97">
                <p>tuws</p>
              </td>
              <td width="127">
                <p>TSUW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="151" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&ecirc;</p>
              </td>
              <td width="141">
                <p>-OE</p>
              </td>
              <td width="97">
                <p>t&ecirc;</p>
              </td>
              <td width="97">
                <p>tee</p>
              </td>
              <td width="127">
                <p>TOE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="152" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uế</p>
              </td>
              <td width="141">
                <p>-SUE</p>
              </td>
              <td width="97">
                <p>quế</p>
              </td>
              <td width="97">
                <p>quees</p>
              </td>
              <td width="127">
                <p>STKSUE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="153" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ừ</p>
              </td>
              <td width="141">
                <p>-HUW</p>
              </td>
              <td width="97">
                <p>từ</p>
              </td>
              <td width="97">
                <p>tuwf</p>
              </td>
              <td width="127">
                <p>THUW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="154" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&igrave;</p>
              </td>
              <td width="141">
                <p>-H*I</p>
              </td>
              <td width="97">
                <p>t&igrave;</p>
              </td>
              <td width="97">
                <p>tif</p>
              </td>
              <td width="127">
                <p>TH*I</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="155" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uề</p>
              </td>
              <td width="141">
                <p>-HUE</p>
              </td>
              <td width="97">
                <p>quề</p>
              </td>
              <td width="97">
                <p>queef</p>
              </td>
              <td width="127">
                <p>STKHUE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="156" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&iacute;</p>
              </td>
              <td width="141">
                <p>-S*I</p>
              </td>
              <td width="97">
                <p>t&iacute;</p>
              </td>
              <td width="97">
                <p>tis</p>
              </td>
              <td width="127">
                <p>TS*I</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="157" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ử</p>
              </td>
              <td width="141">
                <p>-HSUW</p>
              </td>
              <td width="97">
                <p>tử</p>
              </td>
              <td width="97">
                <p>tuwr</p>
              </td>
              <td width="127">
                <p>THSUW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="158" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uể</p>
              </td>
              <td width="141">
                <p>-HSUE</p>
              </td>
              <td width="97">
                <p>xuể</p>
              </td>
              <td width="97">
                <p>xueer</p>
              </td>
              <td width="127">
                <p>ST-HSUE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="159" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ữ</p>
              </td>
              <td width="141">
                <p>N-SUW</p>
              </td>
              <td width="97">
                <p>tữ</p>
              </td>
              <td width="97">
                <p>tuwx</p>
              </td>
              <td width="127">
                <p>TNSUW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="160" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ự</p>
              </td>
              <td width="141">
                <p>N-UW</p>
              </td>
              <td width="97">
                <p>tự</p>
              </td>
              <td width="97">
                <p>tuwj</p>
              </td>
              <td width="127">
                <p>TNUW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="161" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ươ</p>
              </td>
              <td width="141">
                <p>-EW</p>
              </td>
              <td width="97">
                <p>hương</p>
              </td>
              <td width="97">
                <p>huwowng</p>
              </td>
              <td width="127">
                <p>HEWG</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="162" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&ograve;</p>
              </td>
              <td width="141">
                <p>-HO</p>
              </td>
              <td width="97">
                <p>t&ograve;</p>
              </td>
              <td width="97">
                <p>tof</p>
              </td>
              <td width="127">
                <p>THO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="163" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uệ</p>
              </td>
              <td width="141">
                <p>N-UE</p>
              </td>
              <td width="97">
                <p>quệ</p>
              </td>
              <td width="97">
                <p>queej</p>
              </td>
              <td width="127">
                <p>STKNUE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="164" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỳ</p>
              </td>
              <td width="141">
                <p>-HI</p>
              </td>
              <td width="97">
                <p>tỳ</p>
              </td>
              <td width="97">
                <p>tyf</p>
              </td>
              <td width="127">
                <p>THI</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="165" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&oacute;</p>
              </td>
              <td width="141">
                <p>-SO</p>
              </td>
              <td width="97">
                <p>t&oacute;</p>
              </td>
              <td width="97">
                <p>tos</p>
              </td>
              <td width="127">
                <p>TSO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="166" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&ocirc;</p>
              </td>
              <td width="141">
                <p>-OW</p>
              </td>
              <td width="97">
                <p>t&ocirc;</p>
              </td>
              <td width="97">
                <p>too</p>
              </td>
              <td width="127">
                <p>TOW</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="167" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỵ</p>
              </td>
              <td width="141">
                <p>N-I</p>
              </td>
              <td width="97">
                <p>tỵ</p>
              </td>
              <td width="97">
                <p>tyj</p>
              </td>
              <td width="127">
                <p>TNI</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="168" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&igrave;a</p>
              </td>
              <td width="141">
                <p>-HIE</p>
              </td>
              <td width="97">
                <p>t&igrave;a</p>
              </td>
              <td width="97">
                <p>tiaf</p>
              </td>
              <td width="127">
                <p>THIE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="169" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ịa</p>
              </td>
              <td width="141">
                <p>N-IE</p>
              </td>
              <td width="97">
                <p>tịa</p>
              </td>
              <td width="97">
                <p>tiaj</p>
              </td>
              <td width="127">
                <p>TNIE</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="170" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&otilde;</p>
              </td>
              <td width="141">
                <p>N-SO</p>
              </td>
              <td width="97">
                <p>t&otilde;</p>
              </td>
              <td width="97">
                <p>tox</p>
              </td>
              <td width="127">
                <p>TNSO</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="171" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỷ</p>
              </td>
              <td width="141">
                <p>-HSI</p>
              </td>
              <td width="97">
                <p>tỷ</p>
              </td>
              <td width="97">
                <p>tyr</p>
              </td>
              <td width="127">
                <p>THSI</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="172" type="1">
                </ol>
              </td>
              <td width="140">
                <p>ỹ</p>
              </td>
              <td width="141">
                <p>N-SI</p>
              </td>
              <td width="97">
                <p>tỹ</p>
              </td>
              <td width="97">
                <p>tyx</p>
              </td>
              <td width="127">
                <p>TNSI</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="173" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&ugrave;</p>
              </td>
              <td width="141">
                <p>-HIU</p>
              </td>
              <td width="97">
                <p>t&ugrave;</p>
              </td>
              <td width="97">
                <p>tuf</p>
              </td>
              <td width="127">
                <p>THIU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="174" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&uacute;</p>
              </td>
              <td width="141">
                <p>-SIU</p>
              </td>
              <td width="97">
                <p>t&uacute;</p>
              </td>
              <td width="97">
                <p>tus</p>
              </td>
              <td width="127">
                <p>TSIU</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="175" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uố</p>
              </td>
              <td width="141">
                <p>-SUO</p>
              </td>
              <td width="97">
                <p>tuốn</p>
              </td>
              <td width="97">
                <p>tuoons</p>
              </td>
              <td width="127">
                <p>TSUON</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="176" type="1">
                </ol>
              </td>
              <td width="140">
                <p>&yacute;</p>
              </td>
              <td width="141">
                <p>-SI</p>
              </td>
              <td width="97">
                <p>t&yacute;</p>
              </td>
              <td width="97">
                <p>tys</p>
              </td>
              <td width="127">
                <p>TSI</p>
              </td>
            </tr>
            <tr>
              <td width="52">
                <ol start="177" type="1">
                </ol>
              </td>
              <td width="140">
                <p>uồ</p>
              </td>
              <td width="141">
                <p>-HUO</p>
              </td>
              <td width="97">
                <p>tuồn</p>
              </td>
              <td width="97">
                <p>tuoonf</p>
              </td>
              <td width="127">
                <p>THUON</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Lesson 6: Âm cuối</h1>
        <img style={{ width: '100%' }} src="luyengo/steno am cuoi.png"></img>
        <p>Tiếng Việt có 8 âm vị âm cuối /p, t, k, m, n, ŋ, u, i/.  Trên bàn phím tốc ký sử dụng 5 phím JNGTK ở phía bên phải của bàn phím để biểu diễn các âm cuối.</p>
        <h2>Bảng tổng hợp các tổ hợp phím biểu diễn âm cuối</h2>

        <table style={{ margin: '0 auto', borderCollapse: 'collapse', }} border="1" width="654">
          <tbody>
            <tr>
              <td rowspan="2" width="48">
                <p><strong>STT</strong></p>
              </td>
              <td rowspan="2" width="147">
                <p><strong>&Acirc;m cuối tiếng Việt</strong></p>
              </td>
              <td width="152">
                <p><strong>Kiểu g&otilde; tốc k&yacute;</strong></p>
              </td>
              <td colspan="3" width="306">
                <p><strong>V&iacute; dụ</strong></p>
              </td>
            </tr>
            <tr>
              <td width="152">
                <p><strong>JNGTK</strong></p>
              </td>
              <td width="107">
                <p><strong>Từ</strong></p>
              </td>
              <td width="107">
                <p><strong>g&otilde; telex</strong></p>
              </td>
              <td width="92">
                <p><strong>g&otilde; tốc k&iacute;</strong></p>
              </td>
            </tr>
            <tr>
              <td width="48">
                <p>1</p>
              </td>
              <td width="147">
                <p>p</p>
              </td>
              <td width="152">
                <p>-TK</p>
              </td>
              <td width="107">
                <p>&aacute;p</p>
              </td>
              <td width="107">
                <p>aps</p>
              </td>
              <td width="92">
                <p>SATK</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="48">
                <p>2</p>
              </td>
              <td width="147">
                <p>t</p>
              </td>
              <td width="152">
                <p>-NT</p>
              </td>
              <td width="107">
                <p>&aacute;t</p>
              </td>
              <td width="107">
                <p>ats</p>
              </td>
              <td width="92">
                <p>SANT</p>
              </td>
            </tr>
            <tr>
              <td width="147">
                <p>c</p>
              </td>
              <td width="152">
                <p>-NK</p>
              </td>
              <td width="107">
                <p>&aacute;c</p>
              </td>
              <td width="107">
                <p>acs</p>
              </td>
              <td width="92">
                <p>SANK</p>
              </td>
            </tr>
            <tr>
              <td width="48">
                <p>3</p>
              </td>
              <td width="147">
                <p>ch</p>
              </td>
              <td width="152">
                <p>-GK</p>
              </td>
              <td width="107">
                <p>&aacute;ch</p>
              </td>
              <td width="107">
                <p>achs</p>
              </td>
              <td width="92">
                <p>-SAGK</p>
              </td>
            </tr>
            <tr>
              <td width="48">
                <p>4</p>
              </td>
              <td width="147">
                <p>m</p>
              </td>
              <td width="152">
                <p>-T</p>
              </td>
              <td width="107">
                <p>am</p>
              </td>
              <td width="107">
                <p>am</p>
              </td>
              <td width="92">
                <p>-AT</p>
              </td>
            </tr>
            <tr>
              <td width="48">
                <p>5</p>
              </td>
              <td width="147">
                <p>n</p>
              </td>
              <td width="152">
                <p>-N</p>
              </td>
              <td width="107">
                <p>an</p>
              </td>
              <td width="107">
                <p>an</p>
              </td>
              <td width="92">
                <p>-AN</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="48">
                <p>6</p>
              </td>
              <td width="147">
                <p>ng</p>
              </td>
              <td width="152">
                <p>-G</p>
              </td>
              <td width="107">
                <p>ang</p>
              </td>
              <td width="107">
                <p>ang</p>
              </td>
              <td width="92">
                <p>-AG</p>
              </td>
            </tr>
            <tr>
              <td width="147">
                <p>nh</p>
              </td>
              <td width="152">
                <p>-K</p>
              </td>
              <td width="107">
                <p>anh</p>
              </td>
              <td width="107">
                <p>anh</p>
              </td>
              <td width="92">
                <p>-AK</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="48">
                <p>7</p>
              </td>
              <td width="147">
                <p>u</p>
              </td>
              <td width="152">
                <p>-JG</p>
              </td>
              <td width="107">
                <p>au</p>
              </td>
              <td width="107">
                <p>au</p>
              </td>
              <td width="92">
                <p>-AJG</p>
              </td>
            </tr>
            <tr>
              <td width="147">
                <p>o</p>
              </td>
              <td width="152">
                <p>-JK</p>
              </td>
              <td width="107">
                <p>ao</p>
              </td>
              <td width="107">
                <p>ao</p>
              </td>
              <td width="92">
                <p>-AJK</p>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="48">
                <p>8</p>
              </td>
              <td width="147">
                <p>i</p>
              </td>
              <td width="152">
                <p>-J</p>
              </td>
              <td width="107">
                <p>ai</p>
              </td>
              <td width="107">
                <p>ai</p>
              </td>
              <td width="92">
                <p>-AJ</p>
              </td>
            </tr>
            <tr>
              <td width="147">
                <p>y</p>
              </td>
              <td width="152">
                <p>-JN</p>
              </td>
              <td width="107">
                <p>bay</p>
              </td>
              <td width="107">
                <p>bay</p>
              </td>
              <td width="92">
                <p>P-AJN</p>
              </td>
            </tr>
          </tbody>
        </table>


        <h1>Lesson 7: Số và kí tự</h1>
        <h2>Quy tắc gõ số</h2>
        <p>Trên phía đầu của bàn phím tốc ký có một thanh số. Để nhập số, ta nhấn vào thanh số ở đầu bàn phím cùng lúc với các phím khác, giống như phím Shift trên bàn phím thường:</p>
        <ul>
          <li><strong>'1': #S</strong></li>
          <li><strong>'2': #K-</strong></li>
          <li><strong>'3': #R-</strong></li>
          <li><strong>'4': #N-</strong></li>
          <li><strong>'5': #-H</strong></li>
          <li><strong>'0': #O</strong></li>
          <li><strong>'6': #-W</strong></li>
          <li><strong>'7': #-J</strong></li>
          <li><strong>'8': #-N</strong></li>
          <li><strong>'9': #-T</strong></li>
          <li><strong>&lsquo;-1&rsquo;: #T-</strong></li>
          <li><strong>&lsquo;-2&rsquo;: #P-</strong></li>
          <li><strong>&lsquo;-3&rsquo;: #H-</strong></li>
          <li><strong>&lsquo;-4&rsquo;: #-S</strong></li>
          <li><strong>&lsquo;-5&rsquo;: #-I</strong></li>
          <li><strong>&lsquo;-6&rsquo;: #-Y</strong></li>
          <li><strong>&lsquo;-7&rsquo;: #-G</strong></li>
          <li><strong>&lsquo;-8&rsquo;: #-K</strong></li>
          <li><strong>&lsquo;-9&rsquo;: #-E</strong></li>
        </ul>
        <h2>Quy tắc gõ ký tự</h2>
        <p>{"Để nhập các ký hiệu đặc biệt, nguyên tắc chung là: Ký tự đặc biệt có dấu ^ ở đâu thì không có khoảng trắng ở đó (Ngoại trừ những ký tự đặc biệt sau: {.}; {:}; {;}; {?} là chỉ có khoảng trắng với từ liền sau)"}</p>
        <p>Những ký hiệu đặc biệt được tạo bởi 12 phím trên bàn phím tốc ký: #*IEAWYJNGTK .</p>
        <p>Để gõ các ký hiệu đặc biệt, NSD sử dụng những tổ hợp phím sau:</p>

        <table style={{ margin: '0 auto', borderCollapse: 'collapse', }} border="1" width="654">
          <tbody>
            <tr>
              <td width="62">
                <p><strong>STT</strong></p>
              </td>
              <td width="115">
                <p><strong>Tổ hợp phím gõ tốc ký</strong></p>
              </td>
              <td width="84">
                <p><strong>Ký hiệu</strong></p>
              </td>
              <td width="123">
                <p><strong>Cách biểu diễn trong từ điển</strong></p>
              </td>
              <td width="270">
                <p><strong>Giải thích ý nghĩa</strong></p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>1</p>
              </td>
              <td width="115">
                <p>-GK</p>
              </td>
              <td width="84">
                <p>  ! </p>
              </td>
              <td width="123">
                <p>{`{!}`}</p>
              </td>
              <td width="270">
                <p>Dấu ! có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>2</p>
              </td>
              <td width="115">
                <p>-JN</p>
              </td>
              <td width="84">
                <p>  "  </p>
              </td>
              <td width="123">
                <p>{`{"^}`}</p>
              </td>
              <td width="270">
                <p>Dấu “ không có khoảng trắng với từ liền sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>3</p>
              </td>
              <td width="115">
                <p>-JT</p>
              </td>
              <td width="84">
                <p>  #  </p>
              </td>
              <td width="123">
                <p>{`{#^}`}</p>
              </td>
              <td width="270">
                <p>Dấu # không có khoảng trắng với từ liền sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>4</p>
              </td>
              <td width="115">
                <p>-JG</p>
              </td>
              <td width="84">
                <p>  $  </p>
              </td>
              <td width="123">
                <p>{`{$^}`}</p>
              </td>
              <td width="270">
                <p>Dấu $ không có khoảng trắng với từ liền sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>5</p>
              </td>
              <td width="115">
                <p>-JK</p>
              </td>
              <td width="84">
                <p>  % </p>
              </td>
              <td width="123">
                <p>{`{&amp;%}`}</p>
              </td>
              <td width="270">
                <p>Dấu % có dấu cách cả phía trước và phía sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>6</p>
              </td>
              <td width="115">
                <p>-NG</p>
              </td>
              <td width="84">
                <p>  '  </p>
              </td>
              <td width="123">
                <p>{`{'^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ‘ không có khoảng trắng với từ liền sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>7</p>
              </td>
              <td width="115">
                <p>-NK</p>
              </td>
              <td width="84">
                <p>  (  </p>
              </td>
              <td width="123">
                <p>{`{(^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ( không có khoảng trắng với từ liền sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>8</p>
              </td>
              <td width="115">
                <p>-GT</p>
              </td>
              <td width="84">
                <p>  , </p>
              </td>
              <td width="123">
                <p>{`{,}`}</p>
              </td>
              <td width="270">
                <p>Dấu , không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>9</p>
              </td>
              <td width="115">
                <p>-TK</p>
              </td>
              <td width="84">
                <p>  -| </p>
              </td>
              <td width="123">
                <p>{`{-|}`}</p>
              </td>
              <td width="270">
                <p>Tương tự như khi nhấn Shift và giữ 1 phím - Dùng để viết hoa đầu dòng, không có khoảng trắng giữa 2 từ sử dụng tổ hợp phím này(ViệtNam)</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>10</p>
              </td>
              <td width="115">
                <p>-J</p>
              </td>
              <td width="84">
                <p>  . </p>
              </td>
              <td width="123">
                <p>{`{.}`}</p>
              </td>
              <td width="270">
                <p>Dấu . không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>11</p>
              </td>
              <td width="115">
                <p>-N</p>
              </td>
              <td width="84">
                <p>  : </p>
              </td>
              <td width="123">
                <p>{`{:}`}</p>
              </td>
              <td width="270">
                <p>Dấu : không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>12</p>
              </td>
              <td width="115">
                <p>-G</p>
              </td>
              <td width="84">
                <p>  ; </p>
              </td>
              <td width="123">
                <p>{`{;}`}</p>
              </td>
              <td width="270">
                <p>Dấu ; không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>13</p>
              </td>
              <td width="115">
                <p>-T</p>
              </td>
              <td width="84">
                <p>  ? </p>
              </td>
              <td width="123">
                <p>{`{?}`}</p>
              </td>
              <td width="270">
                <p>Dấu ? không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>14</p>
              </td>
              <td width="115">
                <p>-WJT</p>
              </td>
              <td width="84">
                <p>  [  </p>
              </td>
              <td width="123">
                <p>{`{[^}`}</p>
              </td>
              <td width="270">
                <p>Dấu [ không có khoảng trắng phía sau</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>15</p>
              </td>
              <td width="115">
                <p>-K</p>
              </td>
              <td width="84">
                <p>      </p>
              </td>
              <td width="123">
                <p>{`{^ ^}`}</p>
              </td>
              <td width="270">
                <p>Dấu cách (space)</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>16</p>
              </td>
              <td width="115">
                <p>-NT</p>
              </td>
              <td width="84">
                <p>         -| </p>
              </td>
              <td width="123">
                <p>{`{^ ^}{-|}`}</p>
              </td>
              <td width="270">
                <p>Tương tự như khi nhấn Shift và giữ 1 phím - Dùng để viết hoa, khoảng trắng giữa 2 từ sử dụng tổ hợp phím này(Việt Nam)</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>17</p>
              </td>
              <td width="115">
                <p>*AY</p>
              </td>
              <td width="84">
                <p>   !  </p>
              </td>
              <td width="123">
                <p>{`{^!^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ! không có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>18</p>
              </td>
              <td width="115">
                <p>-IJG</p>
              </td>
              <td width="84">
                <p>   "  </p>
              </td>
              <td width="123">
                <p>{`{^"^}`}</p>
              </td>
              <td width="270">
                <p>Dấu “ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>19</p>
              </td>
              <td width="115">
                <p>*WJ</p>
              </td>
              <td width="84">
                <p>   " </p>
              </td>
              <td width="123">
                <p>{`{^"}`}</p>
              </td>
              <td width="270">
                <p>Dấu “ không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>20</p>
              </td>
              <td width="115">
                <p>-IEY</p>
              </td>
              <td width="84">
                <p>   '  </p>
              </td>
              <td width="123">
                <p>{`{^'^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ‘ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>21</p>
              </td>
              <td width="115">
                <p>-IJ</p>
              </td>
              <td width="84">
                <p>   ' </p>
              </td>
              <td width="123">
                <p>{`{^'}`}</p>
              </td>
              <td width="270">
                <p>Dấu ‘ không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>22</p>
              </td>
              <td width="115">
                <p>-ANG</p>
              </td>
              <td width="84">
                <p>   (  </p>
              </td>
              <td width="123">
                <p>{`{^(^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ( không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>23</p>
              </td>
              <td width="115">
                <p>-AWJ</p>
              </td>
              <td width="84">
                <p>   )  </p>
              </td>
              <td width="123">
                <p>{`{^)^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ) không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>24</p>
              </td>
              <td width="115">
                <p>-EYJ</p>
              </td>
              <td width="84">
                <p>   ) </p>
              </td>
              <td width="123">
                <p>{`{^)}`}</p>
              </td>
              <td width="270">
                <p>Dấu ) không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>25</p>
              </td>
              <td width="115">
                <p>-IEW</p>
              </td>
              <td width="84">
                <p>   *  </p>
              </td>
              <td width="123">
                <p>{`{^*^}`}</p>
              </td>
              <td width="270">
                <p>Dấu * không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>26</p>
              </td>
              <td width="115">
                <p>-EWY</p>
              </td>
              <td width="84">
                <p>   +  </p>
              </td>
              <td width="123">
                <p>{`{^+^}`}</p>
              </td>
              <td width="270">
                <p>Dấu + không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>27</p>
              </td>
              <td width="115">
                <p>*AW</p>
              </td>
              <td width="84">
                <p>   ,  </p>
              </td>
              <td width="123">
                <p>{`{^,^}`}</p>
              </td>
              <td width="270">
                <p>Dấu , không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>28</p>
              </td>
              <td width="115">
                <p>-AJN</p>
              </td>
              <td width="84">
                <p>   -  </p>
              </td>
              <td width="123">
                <p>{`{^-^}`}</p>
              </td>
              <td width="270">
                <p>Dấu - không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>29</p>
              </td>
              <td width="115">
                <p>-AGK</p>
              </td>
              <td width="84">
                <p>   .  </p>
              </td>
              <td width="123">
                <p>{`{^.^}`}</p>
              </td>
              <td width="270">
                <p>Dấu . không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>30</p>
              </td>
              <td width="115">
                <p>-WGK</p>
              </td>
              <td width="84">
                <p>   /  </p>
              </td>
              <td width="123">
                <p>{`{^/^}`}</p>
              </td>
              <td width="270">
                <p>Dấu / không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>31</p>
              </td>
              <td width="115">
                <p>-YNT</p>
              </td>
              <td width="84">
                <p>   :  </p>
              </td>
              <td width="123">
                <p>{`{^:^}`}</p>
              </td>
              <td width="270">
                <p>Dấu : không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>32</p>
              </td>
              <td width="115">
                <p>-WY</p>
              </td>
              <td width="84">
                <p>   ;  </p>
              </td>
              <td width="123">
                <p>{`{^;^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ; không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>33</p>
              </td>
              <td width="115">
                <p>-EY</p>
              </td>
              <td width="84">
                <p>   &lt;  </p>
              </td>
              <td width="123">
                <p>{`{^&lt;^}`}</p>
              </td>
              <td width="270">
                <p>Dấu &lt; không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>34</p>
              </td>
              <td width="115">
                <p>-ANT</p>
              </td>
              <td width="84">
                <p>   =  </p>
              </td>
              <td width="123">
                <p>{`{^=^}`}</p>
              </td>
              <td width="270">
                <p>Dấu = không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>35</p>
              </td>
              <td width="115">
                <p>-IY</p>
              </td>
              <td width="84">
                <p>   &gt;  </p>
              </td>
              <td width="123">
                <p>{`{^&gt;^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ‘ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>36</p>
              </td>
              <td width="115">
                <p>-EAY</p>
              </td>
              <td width="84">
                <p>   ?  </p>
              </td>
              <td width="123">
                <p>{`{^?^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ? không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>37</p>
              </td>
              <td width="115">
                <p>-AWY</p>
              </td>
              <td width="84">
                <p>   @  </p>
              </td>
              <td width="123">
                <p>{`{^@^}`}</p>
              </td>
              <td width="270">
                <p>Dấu @ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>38</p>
              </td>
              <td width="115">
                <p>-YJG</p>
              </td>
              <td width="84">
                <p>   [  </p>
              </td>
              <td width="123">
                <p>{`{^[^}`}</p>
              </td>
              <td width="270">
                <p>Dấu [ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>39</p>
              </td>
              <td width="115">
                <p>-IYJ</p>
              </td>
              <td width="84">
                <p>   \  </p>
              </td>
              <td width="123">
                <p>{`{^\^}`}</p>
              </td>
              <td width="270">
                <p>Dấu \ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>40</p>
              </td>
              <td width="115">
                <p>#*I</p>
              </td>
              <td width="84">
                <p>   ]  </p>
              </td>
              <td width="123">
                <p>{`{^]^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ] không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>41</p>
              </td>
              <td width="115">
                <p>*IE</p>
              </td>
              <td width="84">
                <p>   ] </p>
              </td>
              <td width="123">
                <p>{`{^]}`}</p>
              </td>
              <td width="270">
                <p>Dấu ] không có khoảng trắng với từ liền trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>42</p>
              </td>
              <td width="115">
                <p>*JG</p>
              </td>
              <td width="84">
                <p>^      </p>
              </td>
              <td width="123">
                <p>{`{^^^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ^ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>43</p>
              </td>
              <td width="115">
                <p>*GK</p>
              </td>
              <td width="84">
                <p>   _  </p>
              </td>
              <td width="123">
                <p>{`{^_^}`}</p>
              </td>
              <td width="270">
                <p>Dấu _ không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>44</p>
              </td>
              <td width="115">
                <p>-WNK</p>
              </td>
              <td width="84">
                <p>   `  </p>
              </td>
              <td width="123">
                <p>{"{^`^}"}</p>
              </td>
              <td width="270">
                <p>Dấu ` không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>45</p>
              </td>
              <td width="115">
                <p>-JTK</p>
              </td>
              <td width="84">
                <p> eror</p>
              </td>
              <td width="123">
                <p>{`{^{^}`}</p>
              </td>
              <td width="270">
                <p>{"Dấu { không  có khoảng trắng giữa 2 từ"}</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>46</p>
              </td>
              <td width="115">
                <p>-WJN</p>
              </td>
              <td width="84">
                <p>   |  </p>
              </td>
              <td width="123">
                <p>{`{^|^}`}</p>
              </td>
              <td width="270">
                <p>Dấu | không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>47</p>
              </td>
              <td width="115">
                <p>-NGK</p>
              </td>
              <td width="84">
                <p>       </p>
              </td>
              <td width="123">
                <p>{`{^}^}`}</p>
              </td>
              <td width="270">
                <p>{"Dấu } không  có khoảng trắng giữa 2 từ"}</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>48</p>
              </td>
              <td width="115">
                <p>-AYJ</p>
              </td>
              <td width="84">
                <p>{"       }"}</p>
              </td>
              <td width="123">
                <p>{`{^}}`}</p>
              </td>
              <td width="270">
                <p>{"Dấu } không có khoảng trắng  phía trước"}</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>49</p>
              </td>
              <td width="115">
                <p>-WNT</p>
              </td>
              <td width="84">
                <p>   ~  </p>
              </td>
              <td width="123">
                <p>{`{^~^}`}</p>
              </td>
              <td width="270">
                <p>Dấu ~  không  có khoảng trắng giữa 2 từ</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>50</p>
              </td>
              <td width="115">
                <p>-YJN</p>
              </td>
              <td width="84">
                <p>   ~ </p>
              </td>
              <td width="123">
                <p>{`{^~}`}</p>
              </td>
              <td width="270">
                <p>Dấu ~ không có khoảng trắng phía trước</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>51</p>
              </td>
              <td width="115">
                <p>-YGK</p>
              </td>
              <td width="84">
                <p>{"   {   "}</p>
              </td>
              <td width="123">
                <p>{`{{^}`}</p>
              </td>
              <td width="270">
                <p>{"Dấu { không có khoảng trắng phía sau"}</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>52</p>
              </td>
              <td width="115">
                <p>-YJK</p>
              </td>
              <td width="84">
                <p>Enter</p>
              </td>
              <td width="123">
                <p> </p>
              </td>
              <td width="270">
                <p>Xuống dòng</p>
              </td>
            </tr>
            <tr>
              <td width="62">
                <p>53</p>
              </td>
              <td width="115">
                <p>-AWG</p>
              </td>
              <td width="84">
                <p>&amp;</p>
              </td>
              <td width="123">
                <p>&amp;</p>
              </td>
              <td width="270">
                <p>Dấu &amp; không có khoảng trắng giữa 2 từ liên tiếp</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <br />
        <h1>Lesson 8: Từ điển cá nhân</h1>
        <h1>Appendix: Từ điển</h1>
        <h1>Appendix: Phao</h1>
        <h1>Glossary</h1>
      </CCol>
    </CRow >
  )
}

export default Content2
