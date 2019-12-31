import React from 'react'
import {Link} from "react-router-dom"

class MainMenu extends React.Component {

  render() {

    return (<div className="bg-grey-light w-3/5 flex items-center justify-end ">
      <Link to="/films/2baf70d1-42bb-4437-b551-e5fed5a87abe" name="film" className="text-red no-underline mx-4">Films</Link>
      <Link to="/characters/ba924631-068e-4436-b6de-f3283fa848f0" name="character" className="text-red no-underline mx-4">Characters</Link>
      <Link to="/locations/11014596-71b0-4b3e-b8c0-1c4b15f28b9a" name="location" className="text-red no-underline mx-4">Locations</Link>
    </div>)
  }
}

export default MainMenu
