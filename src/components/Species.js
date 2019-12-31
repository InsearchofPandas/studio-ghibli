import React, { Component } from 'react'
import SideMenu from '../components/SideMenu.js'
import EntityLinks from '../components/EntityLinks.js'
import _ from 'lodash'

class Species extends React.Component {
  render() {
    const { params } = this.props.match
    const { species } = this.props.data
    const speciesItem = _.find(species, function(s) { return s.id === params.id })
    const links = this.props.getLinks(speciesItem)
  
    return (
      <div className="flex p-4">
        <SideMenu
          data={species}
          entity="species"
        />

      <div className=" w-2/3  bg-grey-lighter p-4 mb-4">
          <h3 className="heading-3">
            {speciesItem.name}
          </h3>
          <p className="mt-2">
            Classification: {speciesItem.classification}
          </p>
          <p className="mt-2">
            Eye Colors: {speciesItem.eye_colors}
          </p>
          <p className="mt-2">
            Hair Colors: {speciesItem.hair_colors}
          </p>
          <EntityLinks
            entity="character"
            links={links.people}
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

export default Species
