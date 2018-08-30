/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-nested-ternary */

import React, { Component, createContext } from 'react'

const DEFAULT_STATE = {}

const Context = createContext(DEFAULT_STATE)

export const Consumer = Mixin =>
  class extends Component {
    render() {
      return (
        <Context.Consumer>
          {context => <Mixin {...this.props} {...context} />}
        </Context.Consumer>
      )
    }
  }
export class Provider extends Component {
  state = DEFAULT_STATE

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
