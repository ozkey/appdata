import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { DatePicker, Button , Radio} from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const RadioGroup = Radio.Group;

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <DatePicker />
                <Button>Hello world!</Button>
                <RadioGroup
                    name = "testRadio"
                    options={[
                        {label: "1", value: 1, disabled: false},
                        {label: "2", value: 2, disabled: false}
                    ]}
                />

            </div>
        )
    }
}

export default App;
