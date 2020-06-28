import React, { Component } from "react";
import Preview from "./Preview";
import Speed from "./Speed";
import getText from "./getText";

const div = {
  position: "relative",
  margin: "30px 30px",
  width: "800px",
  height: "500px",
  border: "2px solid black",
  backgroundColor: " lightblue"
};

const textArea = {
  position: "absolute",
  margin: "120px 50px 50px 50px",
  width: "500px",
  height: "100px",
  border: "2px solid black",
  backgroundColor: "lightgrey",
  color: "black",
  fontWeight: "bold"
};
const button = {
  position: "absolute",
  margin: "300px 0px 0px 480px",
  width: "60px",
  height: "30px",
  border: "2px solid black",
  backgroundColor: "#f08080",
  color: "black",
  fontWeight: "bolder",
  textAlign: "center"
};
const button1 = {
  position: "absolute",
  margin: "250px 0px 0px 280px",
  width: "160px",
  height: "30px",
  border: "2px solid black",
  backgroundColor: "green",
  color: "black",
  fontWeight: "bolder",
  textAlign: "center"
};
const speed = {
  position: "absolute",
  margin: "300px 0px 0px 50px",
  width: "200px",
  height: "30px",
  border: "2px solid black",
  backgroundColor: "PaleGreen",
  
  fontWeight: "bolder",
  textAlign: "center"
};
const testtext = {
  position: "absolute",
  margin: "10px 50px 50px 50px",
  width: "500px",
  height: "100px",
  border: "2px solid black",
  backgroundColor: "Thistle",
  color: "black",
  fontWeight: "bolder"
};
const title = {
  margin: " 0px 100px"
};

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
};

class App extends Component {
  state = initialState;

  onRestart = () => {
    this.setState({
      userInput: "",
      symbols: 0,
      sec: 0,
      started: false,
      finished: false
    });
    console.log("fdfd");
  };

  onClicked = () => {
    this.setState({
      text: getText()
    });
  };
  onUserInputChange = e => {
    const v = e.target.value;
    this.setTimer();
    this.onFinish(v);
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    });
  };

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      });
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }

  render() {
    return (
      <div style={div}>
        <div>
          <div style={title}>
            <h1>Typing Speed Calculator</h1>
          </div>
          <div>
            <div style={testtext}>
  
              <Preview
                text={this.state.text}
                userInput={this.state.userInput}
              />
            </div>
            <textarea
              style={textArea}
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              placeholder="Start typing..."
              readOnly={this.state.finished}
            />
            <div style={speed}>
              
              <Speed sec={this.state.sec} symbols={this.state.symbols} />
            </div>
            <div className="text-right">
              <button style={button} onClick={this.onRestart}>
                Restart
              </button>
              <button style={button1} onClick={this.onClicked}>
                Try another Para
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
