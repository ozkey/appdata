import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import rootReducer, { initState } from '../../redux/appDataReducer'
import FormInputController from '../FormInputController'

import FormInput from '../../../exampleApp/components/FormInput'


const realStore = createStore(rootReducer, initState)

describe(' form input ', () => {
  it('set value', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormInputController
          name="theName"
          path="thePath"
          formComponent={FormInput}
        />

      </Provider>
    )
    const expectedValue = {
      thePath: {
        theName: 'myval'
      }
    }
    expect(wrapper.find('input')).toHaveLength(1)
    wrapper.find('input').simulate('change', { target: { value: 'myval' } })
    wrapper.update()
    expect(realStore.getState().value).toEqual(expectedValue)
  })
})
