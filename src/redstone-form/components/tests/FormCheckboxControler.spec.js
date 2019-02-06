import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import rootReducer, { initState } from '../../redux/appDataReducer'
import FormCheckboxController from '../FormCheckboxController'
import FormCheckbox from '../../../exampleApp/components/FormCheckbox'


const realStore = createStore(rootReducer, initState)

describe(' form input ', () => {
  it('set value', () => {
    const wrapper = mount(
      <Provider store={realStore}>
        <FormCheckboxController
          name="theName"
          path="thePath"
          formComponent={FormCheckbox}
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
        theName: [5]
      }
    }


    expect(wrapper.find('input')).toHaveLength(5)
    wrapper.find('input').first().simulate('change', { target: { value: 5 } })
    wrapper.update()
    expect(realStore.getState().value).toEqual(expectedValue)
  })
})
