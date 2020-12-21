import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
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

export default class Keyboard2 extends Component {
  constructor(props){
    super(props);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }
  state = {
    layoutName: "default",
    input: "",
    modal: true
  };

  onChange = input => {
    this.setState({ input });
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    const input = event.target.value;
    this.setState({ input });
    console.log("SET INPUT A");
    this.keyboard.setInput(input);
    console.log("SET INPUT B");
  };
  _handleKeyDown = function(e) {
    console.log(e);
    if (e.key === 'Enter') {
      console.log("dada");
      this.setState({ input: '' });
      this.props.setResulting(true);
    }
  }
  changeModal = () => {
    this.setState({...this.state, modal: !this.state.modal})
  }
  render() {
    return (
      <div>
        <input
         border
          style={{width: '100%', height: '50px'}}
          value={this.state.input}
          placeholder={"Điền câu trả lời của bạn"}
          onChange={this.onChangeInput}
          onKeyDown={this._handleKeyDown}
        />
        <br/>
        <Keyboard
          keyboardRef={r => (this.keyboard = r)}
          layoutName={this.state.layoutName}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          physicalKeyboardHighlight={true}
        />
      </div>
    );
  }
}
