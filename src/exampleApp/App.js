/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, Fragment  } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import FormInput from './components/FormInput'
// radio todo:
// https://codesandbox.io/s/pp99j7zq8q

import { changeStore, setSubmitErrorForDisplay } from '../redstone-form/redux/appDataActions'
import { numberNormalizer } from '../redstone-form/normalizers/numberNormalizer'
import FormInputControler from '../redstone-form/components/FormInputControler'


class App extends Component {
  render() {
    return (
      <Fragment>
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
                <Grid key={1} item>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">
                        We want to ask you the following:
                      </Typography>

                      <FormInputControler
                        name="theName"
                        path="thePath1"
                        normalizer={numberNormalizer}
                        inlineValidation={(v)=>{ return  v < 11 ? 'must be greater than 11' : undefined}}
                        formComponent={FormInput}
                      />
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => {
                        this.props.dispatch(setSubmitErrorForDisplay())
                      }}
                      >
                        setSubmitErrorForDisplay!
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid key={2} item>

                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">
                        We want to ask you the following:
                      </Typography>

                      <FormInputControler
                        name="theName"
                        path="thePath2"
                        normalizer={numberNormalizer}
                        inlineValidation={(v)=>{ return  v < 11 ? 'must be greater than 11' : undefined}}
                        formComponent={FormInput}
                      />
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => {
                        this.props.dispatch(setSubmitErrorForDisplay())
                      }}
                      >
                        setSubmitErrorForDisplay!
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </main>







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
      </Fragment >
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

