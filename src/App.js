/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

//radio todo:
// https://codesandbox.io/s/pp99j7zq8q

import 'antd/dist/antd.css'
import './App.css'
import { changeStore } from './redstone-form/redux/appDataActions'
import {numberNormalizer} from './redstone-form/normalizers/numberNormalizer'
import FormInput from './redstone-form/components/FormInputControler'
import FormRadio from './redstone-form/components/FormRadioControler'



class App extends Component {
  render() {
    return (

      <div>
        Input:
        <FormInput
          name="theName"
          path="thePath"
          normalizer={numberNormalizer}
          inlineValidation={(e,v)=>{ return 'InlineError'}}
          formComponent={Input}
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
          Hello world!
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

