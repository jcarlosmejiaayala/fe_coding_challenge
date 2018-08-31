/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-nested-ternary */

import React, { Component, createContext } from 'react'

const PER_PAGE = 100
const DEFAULT_STATE = {
  page: 1,
  user: {},
  followers: []
}

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

  mapUserInfo = ({ avatar_url: avatarUrl, followers, login }) => ({
    avatarUrl,
    followers,
    login
  })

  getFollowers = async (login = this.state.user.login) =>
    (await (await fetch(
      `https://api.github.com/users/${login}/followers?per_page=${PER_PAGE}&page=${
        this.state.page
      }`
    )).json()).map(this.mapUserInfo)

  handleOnSubmit = async event => {
    event.preventDefault()

    const data = new FormData(event.target)

    const search = data.get('search')

    if (search) {
      const user = this.mapUserInfo(
        await (await fetch(`https://api.github.com/users/${search}`)).json()
      )

      const followers = await this.getFollowers(user.login)

      this.setState({
        page: 1,
        user,
        followers
      })
    }
  }

  handleOnClickUpdateFollowers = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      async () => {
        const followers = await this.getFollowers()

        this.setState(prevState => ({
          followers: [...followers, ...prevState.followers]
        }))
      }
    )
  }

  render() {
    return (
      <Context.Provider
        value={{
          handleOnSubmit: this.handleOnSubmit,
          handleOnClickUpdateFollowers: this.handleOnClickUpdateFollowers,
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
