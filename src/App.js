import React, { Component } from 'react';
import './App.css';

var colors = {
   0: '000',
   1: '000',
}

var is_black = true;
var input;

class App extends Component {
    onClick() {
        if (is_black !== true) {
            document.body.style.backgroundColor = '#000';
            is_black = true;
        } else {
            is_black = false;
            document.body.style.backgroundColor = '#' + colors[Math.round(Math.random())];
        }
    };
    onInputKeyup() {
        document.getElementById("p1").innerHTML = input.value;
    };

    getColor(number) {
        let url='http://www.colr.org/json/color/random'
            fetch(url)
            .then(function(response) {
                  return response.json();
                  })
        .then(function(myJson) {
              colors[number] = myJson.new_color;
              });
    };
    componentDidMount() {
        document.body.addEventListener('click', this.onClick, true);
        this.getColor(0);
        this.getColor(1);
        input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("value", "Text");
        input.addEventListener("keyup", this.onInputKeyup, true);
        document.body.appendChild(input);
    };

    render() {
        document.body.style.backgroundColor = '#000';
        return (
                <div>
                <body>
                <p id="p1">
                Text
                </p>
                </body>
                </div>
               );
    }
}

export default App;
