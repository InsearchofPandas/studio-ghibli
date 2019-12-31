import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

class MainMenuItems extends React.Component {

  render() {

    return (
      <div className="w-3/4 flex items-center justify-end">
        <div className="mx-4">
          <Link to={"/film/2baf70d1-42bb-4437-b551-e5fed5a87abe"} className="text-red no-underline">
            Films
          </Link>
        </div>
        <div className="mx-4">
          <Link to={"/character/ba924631-068e-4436-b6de-f3283fa848f0"} className="text-red no-underline">
            Characters
          </Link>
        </div>
        <div className="mx-4">
          <Link to={"/location/11014596-71b0-4b3e-b8c0-1c4b15f28b9a"} className="text-red no-underline">
            Locations
          </Link>
        </div>
        <div className="mx-4">
          <Link to={"/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"} className="text-red no-underline">
            Species
          </Link>
        </div>
      </div>
    )
  }
}

export default MainMenuItems
