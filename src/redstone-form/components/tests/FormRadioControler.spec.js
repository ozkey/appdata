import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Input from 'antd/lib/radio'
import { mount } from 'enzyme'

import rootReducer, { initState } from '../../redux/appDataReducer'
import FormRadioController from '../FormRadioController'
const realStore = createStore(rootReducer, initState)

describe(' form input ', () => {
  it('set value', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormRadioController
          name="theName"
          path="thePath"
          formComponent={Input}
          values={[
            { label: '5', value: 5, disabled: false },
            { label: '10', value: 10, disabled: false },
            { label: '20', value: 20, disabled: false },
            { label: '30', value: 30, disabled: false },
            { label: '40', value: 40, disabled: false }
          ]}
        />
      </Provider>
    )
    const expectedValue = {
      thePath: {
        theName: 'myval'
      }
    }
    expect(wrapper.find('input')).toHaveLength(1)
    // const instance = wrapper.find('FormInput').instance()
    // instance.onChangeInput({ target: { value: 'myval' } }) // This also works
    wrapper.find('input').simulate('change', { target: { value: 5 } })
    wrapper.update()
    expect(realStore.getState().value).toEqual(expectedValue)
  })
})
