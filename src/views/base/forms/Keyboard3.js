import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import KeyboardEventHandler from 'react-keyboard-event-handler';


export default class Keyboard3 extends Component {
  state = {
    layoutName: "default",
    input: ""
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

  render() {
    return (
      <div>
        
        <p>Từ đã gõ</p>
        <textarea
          style={{width: '100%'}}
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={this.onChangeInput}
        />
        <KeyboardEventHandler
          handleKeys={['shift+a', 'b+a']}
          onKeyEvent={(key, e) => console.log(`do something upon keydown event of ${key}`)} />
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
