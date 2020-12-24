import React, { useEffect, useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CProgress,
  CProgressBar,
  CRow,
  CTabContent,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CButton,
  CTabPane,
} from "@coreui/react";
import ProgressBar from "react";
import { DocsLink } from "src/reusable";
import Keyboard2 from "./Keyboard2";

const ListGroups = () => {
  const [trueAnswer, setTrueAnswer] = useState();
  const [resulting, setResulting] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [ramdomWord, setRandomWord] = useState();
  const [listWord, setListWord] = useState([
    "Mong",
    "đợi",
    "giang",
    "chờ",
    "học",
    "nghiêng",
    "thuyền",
  ]);
  
  const [time, setTime] = useState(100);

  React.useEffect(() => {
    console.log("AĐSAĐẤ");
    const id =
      setInterval(() => setTime(time-1), 1000);
    return () => clearInterval(id);
  }, [time]);
  return (
    <>
      <CRow>
        <CCol sm="12" xl="3">
          <CCard>
            <CCardHeader>Các từ hay sai</CCardHeader>
            <CCardBody>
              <CListGroup>
                {listWord.map((word) => (
                  <CListGroupItem>{word}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol sm="12" xl="9">
          <CCard>
            <CCardHeader>Luyện tập từ sai</CCardHeader>
            <CCardBody>
              <h3>Từ cần học: Mong</h3>
              {
                resulting?
                <>Kết quả: {Math.random() > 0.5? "Chính xác" : "Không chính xác"}</>
                :
                <></>
              }
              <p>Thời gian còn lại</p>
              <CProgress
                color="success"
                value={time}
                showValue
                className="mb-1 bg-white"
              />
              <Keyboard2 setResulting={setResulting}/>
            </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>
    </>
  );
};

export default ListGroups;
