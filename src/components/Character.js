import React, { Component } from 'react'
import SideMenu from '../components/SideMenu.js'
import EntityLinks from '../components/EntityLinks.js'
import _ from 'lodash'

class Character extends React.Component {
  render() {
    const { params } = this.props.match
    const { characters } = this.props.data
    const character = _.find(characters, function(f) { return f.id === params.id })
    const links = this.props.getLinks(character)

    return (
      <div className="flex p-4">
        <SideMenu
          data={characters}
          entity="characters"
        />

      <div className=" w-2/3  bg-grey-lighter p-4">
          <h3 className="font-normal text-2xl mb-4">
            {character.name}
          </h3>
          <p className="mt-2">
            Gender: {character.gender}
          </p>
          <p className="mt-2">
            Age: {character.age}
          </p>
          <p className="mt-2">
            Eye Color: {character.eye_color}
          </p>
          <p className="mt-2">
            Hair Color: {character.hair_color}
          </p>
          <EntityLinks
            entity="film"
            links={links.films}
          />
          <EntityLinks
            entity="species"
            links={links.species}
          />
        </div>
      </div>
    )
  }
}

export default Character
