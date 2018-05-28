import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../redux/appDataReducer'
import { initState }  from '../redux/appDataReducer'
import FormInput from './FormInput'
import { Input } from 'antd/lib/index'
import { mount } from 'enzyme';

const realStore = createStore(rootReducer, initState)


describe(' form input ', () => {

  it('should show an inline form error for incorrect input', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormInput
          name="theName"
          path="thePath"
          formComponent={Input}
        />
      </Provider>
    )

    const instance = wrapper.find('FormInput').instance()

    wrapper.update()

    console.log(wrapper)
    expect(wrapper.find('input')).toHaveLength(1)
    // wrapper.find('input').prop('onChange')({ target: {value: 'myval'} })
    // wrapper.find('input').simulate('change', { target: { value: '7' } })
    wrapper.find('input').props().onChange({})
    wrapper.update()

    expect(realStore.getState().appData).toEqual({})
  })

})
