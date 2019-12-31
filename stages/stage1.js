import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './css/tailwind.css'
import _ from 'lodash'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="">

          <MainMenu

          />

        <div className="flex justify-center w-full bg-green-dark">
            <div className=" w-5/6 h-64">

              <Route
                exact
                path='/'
                render={(props) =>
                  <Film {...props}

                  />
                }
              />

              <Route
                path='/film/:id'
                render={(props) =>
                  <Film {...props}

                  />
                }
              />

              <Route
                path='/character/:id'
                render={(props) =>
                  <Character {...props}

                  />
                }
              />

              <Route
                path='/species/:id'
                render={(props) =>
                  <Species {...props}

                  />
                }
              />

              <Route
                path='/location/:id'
                render={(props) =>
                  <Location {...props}

                  />
                }
              />

              <Route
                path='/location/:id'
                render={(props) =>
                  <Vehicle {...props}

                  />
                }
              />

            </div>
          </div>

          <Footer />

        </div>
      </Router>
    )
  }
}

const MainMenu = ({   }) => {

    return (
      <div className="flex justify-center w-full bg-yellow-dark">
        <div className=" w-11/12 flex h-16">

          <MainMenuTitle

          />
          <MainMenuItems

          />

        </div>
      </div>
    )
}

const MainMenuTitle = ({   }) => {

    return (
      <div className="w-1/4 bg-yellow h-16">

      </div>
    )
}

const MainMenuItems = ({   }) => {

      return (
        <div className="w-3/4 bg-yellow-lighter ">

        </div>
      )
}

const Film = ({   }) => {

      return (
        <div className="flex ">
          <SideMenu

          />

          <div className=" w-2/3  bg-green-lighter ">

          </div>
        </div>
      )
}

const Character = ({   }) => {

      return (
        <div className="flex ">
          <SideMenu

          />

          <div className=" w-2/3  bg-green-lighter ">

          </div>
        </div>
      )
}

const Species = ({   }) => {

      return (
        <div className="flex ">
          <SideMenu

          />

          <div className=" w-2/3  bg-green-lighter ">

          </div>
        </div>
      )
}

const Location = ({   }) => {

      return (
        <div className="flex ">
          <SideMenu

          />

          <div className=" w-2/3  bg-green-lighter ">

          </div>
        </div>
      )
}

const Vehicle = ({   }) => {

      return (
        <div className="flex ">
          <SideMenu

          />

          <div className=" w-2/3  bg-green-lighter ">

          </div>
        </div>
      )
}

const SideMenu = ({   }) => {

    return (
      <div className="w-1/3 bg-green h-64">

      </div>
    )
}


const Footer = ({   }) => {

    return (
      <div className="flex justify-center w-full">
        <div className=" w-full bg-yellow-lighter h-16">

        </div>
      </div>
    )
}

export default App;
