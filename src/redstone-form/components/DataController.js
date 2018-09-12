import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// actions
import {
  changeValue, setSubmitErrorForDisplay
} from '../redux/appDataActions'


class DataController extends Component {
  static _dispatch

  static setSubmitErrorForDisplay = () => {
    DataController._dispatch(setSubmitErrorForDisplay())
  }

  constructor(props) {
    super(props)
    DataController._dispatch = this.props.dispatch
  }

  render() {
    const {
      children
    } = this.props

    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
}

DataController.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
}

DataController.defaultProps = {
}

function mapStateToProps(store) {
  return {
    formData: store.appData
  }
}

export default connect(mapStateToProps)(DataController)
