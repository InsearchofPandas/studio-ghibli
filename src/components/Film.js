import React, { Component } from 'react'
import SideMenu from '../components/SideMenu.js'
import EntityLinks from '../components/EntityLinks.js'
import _ from 'lodash'

class Film extends React.Component {
  render() {
    const { params } = this.props.match
    const { films } = this.props.data
    const filmId = params.id ? params.id : this.props.defaultId
    const film = _.find(films, function(f) { return f.id === filmId })
    const links = this.props.getLinks(film)

    return (
      <div className="flex p-4">
        <SideMenu
          data={films}
          entity="films"
        />

      <div className=" w-2/3  bg-grey-lighter p-4">
          <h3 className="font-normal text-2xl mb-4">
            {film.title}
          </h3>
          <p className="mt-2">
            {film.description}
          </p>
          <p className="mt-2">
            Director: {film.director}
          </p>
          <p className="mt-2">
            Producer: {film.producer}
          </p>
          <p className="mt-2">
            Year: {film.release_date}
          </p>
          <p className="mt-2">
            Rotten Tomatoes Score: {film.rt_score}
          </p>
          <EntityLinks
            entity="species"
            links={links.species}
          />
        </div>
      </div>
    )
  }
}

export default Film
