import React, { Component } from 'react'
import SideMenu from '../components/SideMenu.js'
//import EntityLinks from '../components/EntityLinks.js'
//import _ from 'lodash'

class NoMatch extends React.Component {

  render() {
    const { films } = this.props.data

    return (
      <div className="flex p-4">
        <SideMenu
          data={films}
          entity="films"
        />

      <div className=" w-2/3  bg-grey-lighter p-4 text-2xl">
          The requested page could not be found.
        </div>
      </div>
    )
  }
}

export default NoMatch
