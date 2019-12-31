import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Film from './components/Film.js'
import Character from './components/Character.js'
import Location from './components/Location.js'
import Species from './components/Species.js'
import NoMatch from './components/NoMatch.js'
import MainMenuItems from './components/MainMenuItems.js'
import './css/tailwind.css'
import _ from 'lodash'
import characters from './data/characters.json'
import films from './data/films.json'
import locations from './data/locations.json'
import species from './data/species.json'
import vehicles from './data/vehicles.json'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 'films',
      data: {
        'characters': characters,
        'films': films,
        'locations': locations,
        'species': species,
        'vehicles': vehicles
      }
    }
  }

  setPage = (page) => {
    this.setState ({ page: page })
  }

  // Create links from a single record to its related entities.
  // The record has only id numbers.  This routine gets the
  // name or title associated with the id for display in a link.
  getLinks = (item) => {
    let links = {
      people: [],
      residents: [],
      films: [],
      species: [],
      vehicles: []
    }
      // People
    let charactersData = this.state.data.characters
    if (item.people) {
      for (let x = 0; x < item.people.length; x++) {
        const p = item.people[x]
        const pArray = p.split("/")
        const id = pArray[4]
        if (id) {
          const cItem = _.find(charactersData, function(ch) { return ch.id === id })
          links.people.push({id: id, name: cItem.name})
        }
      }
    }
    // Residents
    charactersData = this.state.data.characters
    if (item.residents) {
      for (let x = 0; x < item.residents.length; x++) {
        const r = item.residents[x]
        const rArray = r.split("/")
        const id = rArray[4]
        if (id) {
          const cItem = _.find(charactersData, function(ch) { return ch.id === id })
          links.residents.push({id: id, name: cItem.name})
        }
      }
    }
    // Films
    const filmsData = this.state.data.films
    if (item.films) {
      for (let x = 0; x < item.films.length; x++) {
        const f = item.films[x]
        const fArray = f.split("/")
        const id = fArray[4]
        if (id) {
          const fItem = _.find(filmsData, function(fi) { return fi.id === id })
          links.films.push({id: id, name: fItem.title})
        }
      }
    }
    // Species
    const speciesData = this.state.data.species
    if (item.species) {
      if (typeof(item.species) === 'string') {
        const s = item.species
        const sArray = s.split("/")
        const id = sArray[4]
        if (id) {
          const sItem = _.find(speciesData, function(sp) { return sp.id === id })
          links.species.push({id: id, name: sItem.name})
        }
      }
      else {
        for (let x = 0; x < item.species.length; x++) {
          const s = item.species[x]
          const sArray = s.split("/")
          const id = sArray[4]
          if (id) {
            const sItem = _.find(speciesData, function(sp) { return sp.id === id })
            links.species.push({id: id, name: sItem.name})
          }
        }
      }
    }
    // Vehicles
    const vehiclesData = this.state.data.vehicles
    if (item.vehicles) {
      for (let x = 0; x < item.vehicles.length; x++) {
        const v = item.vehicles[x]
        const vArray = v.split("/")
        const id = vArray[4]
        if (id) {
          const vItem = _.find(vehiclesData, function(ve) { return ve.id === id })
          links.vehicles.push({id: id, name: vItem.name})
        }
      }
    }
    return links
  }

  render() {

    const defaultFilmId = '2baf70d1-42bb-4437-b551-e5fed5a87abe'

    return (
      <Router>
        <div className="">

          <MainMenu
            page={this.state.page}
          />

        <div className="flex justify-center w-full">
            <div className=" w-5/6 ">
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) =>
                    <Film {...props}
                      data={this.state.data}
                      defaultId={defaultFilmId}
                      getLinks={this.getLinks}
                      setPage={this.setPage}
                    />
                  }
                />

                <Route
                  path='/film/:id'
                  render={(props) =>
                    <Film {...props}
                      data={this.state.data}
                      getLinks={this.getLinks}
                      setPage={this.setPage}
                    />
                  }
                />

                <Route
                  path='/character/:id'
                  render={(props) =>
                    <Character {...props}
                      data={this.state.data}
                      getLinks={this.getLinks}
                      setPage={this.setPage}
                    />
                  }
                />

                <Route
                  path='/species/:id'
                  render={(props) =>
                    <Species {...props}
                      data={this.state.data}
                      getLinks={this.getLinks}
                      setPage={this.setPage}
                    />
                  }
                />

                <Route
                  path='/location/:id'
                  render={(props) =>
                    <Location {...props}
                      data={this.state.data}
                      getLinks={this.getLinks}
                      setPage={this.setPage}
                    />
                  }
                />

                <Route
                  render={(props) =>
                    <NoMatch {...props}
                      data={this.state.data}
                      setPage={this.setPage}
                    />
                  }
                />

              </Switch>
            </div>
          </div>

          <Footer />

        </div>
      </Router>
    )
  }
}

const MainMenu = ({ page  }) => {

    return (
      <div className="flex justify-center w-full bg-grey-light">
        <div className=" w-11/12 flex justify-between">

          <MainMenuTitle

          />
          <MainMenuItems
            page={page}
          />

        </div>
      </div>
    )
}

const MainMenuTitle = ({   }) => {

    return (
      <div className="w-1/4 flex items-center h-16">
        <h1 className="text-3xl font-normal">
          <Link to={"/film/2baf70d1-42bb-4437-b551-e5fed5a87abe"} className="text-black no-underline">
            Studio Ghibli
          </Link>
        </h1>
      </div>
    )
}

const Footer = () => {

    return (
      <footer class="flex justify-center flex-col lg:flex-row w-full py-10 bg-grey-light">
        <a href="https://kylehumphrey.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
          Made by Kyle Humphrey
        </a>
        <a href="https://github.com/InsearchofPandas/studio-ghibli" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
          View Code on GitHub
        </a>
        <a href="https://github.com/janaipakos/ghibliapi" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
            Data by Studio Ghibli API
        </a>
      </footer>
      )
}

export default App;
