/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DatePicker, Button, Radio, Input } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import { changeStore } from './redstone-form/redux/appDataActions'
import FormInput from './redstone-form/components/FormInput'

import FormRadio from './redstone-form/components/FormRadio'


const RadioGroup = Radio.Group

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker />
        Input:
        <FormInput
          name="theName"
          path="thePath"
          formComponent={Input}
        />
        <br />
        Radio:
        <br />
        <FormRadio
          name="myRadio"
          path="thePath"
          formComponent={RadioGroup}
          values={[
            { label: 'one', value: 1, disabled: false },
            { label: 'two', value: 2, disabled: false }
          ]}
        />
        Input:
        <br />
        <Input value={"sss"} />
        <Button onClick={() => {
          this.props.dispatch(changeStore('path', 'name', 'myValue'))
        }}
        >
          Hello world!
        </Button>
        <RadioGroup
          name="testRadio"
          options={[
            { label: '1', value: 1, disabled: false },
            { label: '2', value: 2, disabled: false }
          ]}
        />
      </div>
    )
  }
}

App.propTypes = {
  appData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapState(store) {
  return {
    appData: store.appData
  }
}

function mapDispatch(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapState, mapDispatch)(App)

