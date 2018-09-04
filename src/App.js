/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import FormInput from './components/FormInput'

//radio todo:
// https://codesandbox.io/s/pp99j7zq8q

import 'antd/dist/antd.css'
import './App.css'
import { changeStore, setSubmitErrorForDisplay } from './redstone-form/redux/appDataActions'
import {numberNormalizer} from './redstone-form/normalizers/numberNormalizer'
import FormInputControler from './redstone-form/components/FormInputControler'
import FormRadio from './redstone-form/components/FormRadioControler'



class App extends Component {
  render() {
    return (

      <div>
        App Input:
        <FormInputControler
          name="theName"
          path="thePath2"
          normalizer={numberNormalizer}
          inlineValidation={(v)=>{ return  v < 11 ? 'must be greater than 11' : undefined}}
          formComponent={FormInput}
        />
        <br />
        {/*Radio:*/}
        {/*<br />*/}
        {/*<FormRadio*/}
        {/*name="myRadio"*/}
        {/*path="thePath"*/}
        {/*formComponent={RadioGroup}*/}
        {/*values={[*/}
        {/*{ label: 'one', value: 1, disabled: false },*/}
        {/*{ label: 'two', value: 2, disabled: false }*/}
        {/*]}*/}
        {/*/>*/}
        {/*Input:*/}
        {/*<br />*/}
        {/*<Input value={"sss"} />*/}
        <Button onClick={() => {
          this.props.dispatch(changeStore('path', 'name', 'myValue'))
        }}
        >
         x
        </Button>

        <Button onClick={() => {
          this.props.dispatch(changeStore('path', 'name', 'not myValue'))
        }}
        >
          y
        </Button>

        <Button onClick={() => {
          this.props.dispatch(setSubmitErrorForDisplay())
        }}
        >
          setSubmitErrorForDisplay!
        </Button>
        {/*<RadioGroup*/}
        {/*name="testRadio"*/}
        {/*options={[*/}
        {/*{ label: '1', value: 1, disabled: false },*/}
        {/*{ label: '2', value: 2, disabled: false }*/}
        {/*]}*/}
        {/*/>*/}
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

