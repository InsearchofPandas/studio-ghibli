import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class SideMenu extends React.Component {
  render() {
    const entity = this.props.entity
    const data = this.props.data
    const entitySingle = (entity === 'species') ? 'species' : entity.slice(0, entity.length - 1)
    const nameField = (entity === 'films') ? 'title' : 'name'

    return (
      <div className="w-1/3 p-4">
        <h2 className="font-normal">
          {entity.charAt(0).toUpperCase() + entity.slice(1) }
        </h2>
        <ul className="mt-4 list-reset">
          {data.map((item, i) =>
            <li key={i.toString()} className="mb-1">
              <Link to={"/" + entitySingle + "/" + item.id}
                className="text-red no-underline">
                {item[nameField]}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


export default SideMenu
