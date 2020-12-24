import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default class StenoKeyBoard extends Component {
  render() {
    return (
      <div id="stenoKeyboard">
        <div className="stenoUpperBank">
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-0"
            data-priority={1}
            data-keyqwerty={81}
            data-valueqwerty="q"
            style={{
              backgroundColor: "rgb(252, 202, 203)",
              color: "rgb(0, 0, 0)",
            }}
          >
            S
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-1"
            data-priority={3}
            data-keyqwerty={87}
            data-valueqwerty="w"
            style={{
              backgroundColor: "rgb(252, 215, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            K
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-2"
            data-priority={5}
            data-keyqwerty={69}
            data-valueqwerty="e"
            style={{
              backgroundColor: "rgb(248, 248, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            R
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-3"
            data-priority={7}
            data-keyqwerty={82}
            data-valueqwerty="r"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            N
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-4"
            data-priority={8}
            data-keyqwerty={84}
            data-valueqwerty="t"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            H
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-5"
            data-priority={10}
            data-keyqwerty={85}
            data-valueqwerty="u"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            *
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-6"
            data-priority={16}
            data-keyqwerty={73}
            data-valueqwerty="i"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            W
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-7"
            data-priority={18}
            data-keyqwerty={79}
            data-valueqwerty="o"
            style={{
              backgroundColor: "rgb(248, 248, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            J
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-8"
            data-priority={19}
            data-keyqwerty={80}
            data-valueqwerty="p"
            style={{
              backgroundColor: "rgb(252, 215, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            N
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-9"
            data-priority={21}
            data-keyqwerty={219}
            data-valueqwerty="["
            style={{
              backgroundColor: "rgb(252, 202, 203)",
              color: "rgb(0, 0, 0)",
            }}
          >
            T
          </div>
        </div>
        <div className="stenoLowerBank">
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-10"
            data-priority={2}
            data-keyqwerty={65}
            data-valueqwerty="a"
            style={{
              backgroundColor: "rgb(252, 202, 203)",
              color: "rgb(0, 0, 0)",
            }}
          >
            T
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-11"
            data-priority={4}
            data-keyqwerty={83}
            data-valueqwerty="s"
            style={{
              backgroundColor: "rgb(252, 215, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            P
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-12"
            data-priority={6}
            data-keyqwerty={68}
            data-valueqwerty="d"
            style={{
              backgroundColor: "rgb(248, 248, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            H
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-13"
            data-priority={7}
            data-keyqwerty={70}
            data-valueqwerty="f"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            N
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-14"
            data-priority={9}
            data-keyqwerty={71}
            data-valueqwerty="g"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            S
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-15"
            data-priority={11}
            data-keyqwerty={74}
            data-valueqwerty="j"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            I
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-16"
            data-priority={17}
            data-keyqwerty={75}
            data-valueqwerty="k"
            style={{
              backgroundColor: "rgb(179, 249, 163)",
              color: "rgb(0, 0, 0)",
            }}
          >
            Y
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-17"
            data-priority={18}
            data-keyqwerty={76}
            data-valueqwerty="l"
            style={{
              backgroundColor: "rgb(248, 248, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            J
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-18"
            data-priority={20}
            data-keyqwerty={186}
            data-valueqwerty=";"
            style={{
              backgroundColor: "rgb(252, 215, 162)",
              color: "rgb(0, 0, 0)",
            }}
          >
            G
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-19"
            data-priority={22}
            data-keyqwerty={222}
            data-valueqwerty="'"
            style={{
              backgroundColor: "rgb(252, 202, 203)",
              color: "rgb(0, 0, 0)",
            }}
          >
            K
          </div>
        </div>
        <div className="stenoVowelKeys">
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-20"
            data-priority={12}
            data-keyqwerty={67}
            data-valueqwerty="c"
            style={{
              backgroundColor: "rgb(186, 207, 250)",
              color: "rgb(0, 0, 0)",
            }}
          >
            U
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-21"
            data-priority={13}
            data-keyqwerty={86}
            data-valueqwerty="v"
            style={{
              backgroundColor: "rgb(186, 207, 250)",
              color: "rgb(0, 0, 0)",
            }}
          >
            O
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-22"
            data-priority={14}
            data-keyqwerty={78}
            data-valueqwerty="n"
            style={{
              backgroundColor: "rgb(186, 207, 250)",
              color: "rgb(0, 0, 0)",
            }}
          >
            E
          </div>
          <div
            className="stenoKey rounded-steno"
            id="stenoKey-23"
            data-priority={15}
            data-keyqwerty={77}
            data-valueqwerty="m"
            style={{
              backgroundColor: "rgb(186, 207, 250)",
              color: "rgb(0, 0, 0)",
            }}
          >
            A
          </div>
        </div>
      </div>
    );
  }
}
