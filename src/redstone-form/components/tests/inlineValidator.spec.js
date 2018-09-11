import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Input from 'antd/lib/input'
import { mount } from 'enzyme';

import rootReducer, { initState } from '../../redux/appDataReducer'
import FormInput from '../FormInputController'

const realStore = createStore(rootReducer, initState)

describe(' form input ', () => {
  it('No InlineError', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormInput
          name="theName"
          path="thePath"
          formComponent={Input}
        />
      </Provider>
    )
    const expectedValue = {
      thePath: {
        theName: 'myval'
      }
    }
    const expectedError = {}
    expect(wrapper.find('input')).toHaveLength(1)
    // const instance = wrapper.find('FormInput').instance()
    // instance.onChangeInput({ target: { value: 'myval' } }) // This also works
    wrapper.find('input').simulate('change', { target: { value: 'myval' } })
    wrapper.update()

    expect(realStore.getState().value).toEqual(expectedValue)
    expect(realStore.getState().inlineError).toEqual(expectedError)
  })


  it('InlineError', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormInput
          name="theName"
          path="thePath"
          formComponent={Input}
          inlineValidation={(v)=>{ return 'InlineError'}}
        />
      </Provider>
    )
    const expectedValue = {
      thePath: {
        theName: 'myval'
      }
    }
    const expectedError = {
      thePath: {
        theName: 'InlineError'
      }
    }
    expect(wrapper.find('input')).toHaveLength(1)
    wrapper.find('input').simulate('change', { target: { value: 'myval' } })
    wrapper.update()

    expect(realStore.getState().value).toEqual(expectedValue)
    expect(realStore.getState().inlineError).toEqual(expectedError)
  })

  it('InlineError 2 validators', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormInput
          name="theName"
          path="thePath"
          formComponent={Input}
          inlineValidation={[
            (v)=>{ return v === 'myval' ? undefined : `did not expect ${v}` },
            (v)=>{ return 'correct InlineError'}
          ]}
        />
      </Provider>
    )
    const expectedValue = {
      thePath: {
        theName: 'myval'
      }
    }
    const expectedError = {
      thePath: {
        theName: 'correct InlineError'
      }
    }
    expect(wrapper.find('input')).toHaveLength(1)
    wrapper.find('input').simulate('change', { target: { value: 'myval' } })
    wrapper.update()

    expect(realStore.getState().value).toEqual(expectedValue)
    expect(realStore.getState().inlineError).toEqual(expectedError)
  })
})
