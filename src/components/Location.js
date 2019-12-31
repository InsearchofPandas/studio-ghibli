import React, { Component } from 'react'
import SideMenu from '../components/SideMenu.js'
import EntityLinks from '../components/EntityLinks.js'
import _ from 'lodash'

class Location extends React.Component {
  render() {
    const { params } = this.props.match
    const { locations } = this.props.data
    const location = _.find(locations, function(f) { return f.id === params.id })
    const links = this.props.getLinks(location)

    return (
      <div className="flex p-4">
        <SideMenu
          data={locations}
          entity="locations"
        />

      <div className=" w-2/3  bg-grey-lighter p-4 mb-4">
          <h3 className="font-normal text-2xl">
            {location.name}
          </h3>
          <p className="mt-2">
            Climate: {location.climate}
          </p>
          <p className="mt-2">
            Terrain: {location.terrain}
          </p>
          <p className="mt-2">
            Surface Water: {location.surface_water}
          </p>
          <EntityLinks
            entity="character"
            links={links.residents}
          />
          <EntityLinks
            entity="film"
            links={links.films}
          />
        </div>
      </div>
    )
  }
}

export default Location
