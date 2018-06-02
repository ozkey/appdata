/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DatePicker, Button, Radio, Input ,Row, Col, Card, Layout, Menu} from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import { changeStore } from './redstone-form/redux/appDataActions'
import FormInput from './redstone-form/components/FormInput'

import FormRadio from './redstone-form/components/FormRadio'

const {Header, Content, Footer, Sider} = Layout
const RadioGroup = Radio.Group

class App extends Component {
  render() {
    return (

      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content>
            <Row gutter={16}>
              <Col span={1} />
              <Col span={11} >
                <Card>
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
                </Card>
              </Col>
              <Col span={1} />
              <Col span={11} >
                TODO DISPLAY DATA
              </Col>
            </Row>

          </Content>

        </Layout>
        <Footer>footer</Footer>
      </Layout>
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

