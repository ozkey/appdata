import React from 'react'
import { createStore } from 'redux'

import rootReducer, { initState } from '../../redux/appDataReducer'
import { changeValue } from '../appDataActions'

const realStore = createStore(rootReducer, initState)


describe(' form input ', () => {
  it('should cean up empty parents from state', () => {
    realStore.dispatch(changeValue('test', 'testParam', 'testValue'))
    expect(realStore.getState().value).toEqual({
      test: {
        testParam: 'testValue'
      }
    })

    realStore.dispatch(changeValue('test', 'testParam', undefined))
    expect(realStore.getState().value).toEqual({})
  })
  it('should cean up empty props from state', () => {
    realStore.dispatch(changeValue('test', 'testParam', 'testValue'))
    realStore.dispatch(changeValue('test', 'testParam2', 'testValue'))
    expect(realStore.getState().value).toEqual({
      test: {
        testParam: 'testValue',
        testParam2: 'testValue'
      }
    })

    realStore.dispatch(changeValue('test', 'testParam2', undefined))
    expect(realStore.getState().value).toEqual({
      test: {
        testParam: 'testValue'
      }
    })
  })
  it('should cean up empty props and parents from state', () => {
    realStore.dispatch(changeValue('test', 'testParam', 'testValue'))
    realStore.dispatch(changeValue('test', 'testParam2', 'testValue'))
    realStore.dispatch(changeValue('test2', 'testParam', 'testValue'))
    expect(realStore.getState().value).toEqual({
      test: {
        testParam: 'testValue',
        testParam2: 'testValue'
      },
      test2: {
        testParam: 'testValue'
      }
    })

    realStore.dispatch(changeValue('test', 'testParam2', undefined))
    realStore.dispatch(changeValue('test2', 'testParam', undefined))
    expect(realStore.getState().value).toEqual({
      test: {
        testParam: 'testValue'
      }
    })
  })
})
