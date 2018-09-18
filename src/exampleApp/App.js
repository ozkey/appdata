/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, Fragment  } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { changeStore, setSubmitErrorForDisplay } from '../redstone-form/redux/appDataActions'

import CardsFormCheckbox from './miniExamples/CardsFormCheckbox'
import CardsFormRadio from './miniExamples/CardsFormRadio'
import CardsFormInput from './miniExamples/CardsFormInput'

import DataController from '../redstone-form/components/DataController'

class App extends Component {
  render() {
    return (
      <DataController>
        <CssBaseline />
        <AppBar position="absolute" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              This is an example form
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <br />
        <br />
        <main>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={16}>
                <CardsFormInput />
                <CardsFormRadio />
                <CardsFormCheckbox />

              </Grid>
            </Grid>
          </Grid>
        </main>



        <br />

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
      </DataController >
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

