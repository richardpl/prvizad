import React, { Component } from 'react';
import './App.css';

var colors = {
   0: '000',
   1: '000',
}

class App extends Component {
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
        this.getColor(0);
        this.getColor(1);
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
