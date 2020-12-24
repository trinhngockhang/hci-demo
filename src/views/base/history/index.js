import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const usersData = [
    {stt: 0, name: 'Chúng ta của hiện tại', score: '900', time: '00:30:30', level:'Khó', date:'25/12/2020'},
    {stt: 1, name: 'Đi về nhà', score: '890', time: '00:30:25', level: 'Dễ', date: '12/12/2020'},
    {stt: 2, name: 'Chúng ta của hiện tại', score: '900', time: '00:30:30', level:'Khó', date:'25/12/2020'},
    {stt: 3, name: 'Đi về nhà', score: '890', time: '00:30:25', level: 'Dễ', date: '12/12/2020'},
    {stt: 4, name: 'Chúng ta của hiện tại', score: '900', time: '00:30:30', level:'Khó', date:'25/12/2020'},
    {stt: 5, name: 'Đi về nhà', score: '890', time: '00:30:25', level: 'Dễ', date: '12/12/2020'},
    {stt: 6, name: 'Chúng ta của hiện tại', score: '900', time: '00:30:30', level:'Khó', date:'25/12/2020'},
    {stt: 7, name: 'Đi về nhà', score: '890', time: '00:30:25', level: 'Dễ', date: '12/12/2020'},

  ]
  
const fields = ['stt','name', 'score', 'time', 'level', 'date']

const History = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Lịch sử của bạn
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
              
            />
            </CCardBody>
          </CCard>
        </CCol>

       
      </CRow>
    </>
  )
}

export default History
