import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class EntityLinks extends React.Component {
  render() {
    const links = this.props.links
    const entity = this.props.entity
    const displayEntity = entity === 'species' ? 'species' : entity + 's'
    if (!links.length) return null

    return (
      <div>
        <h4 className="text-xl font-normal mt-4 mb-2">
          {displayEntity.charAt(0).toUpperCase() + displayEntity.slice(1)}
        </h4>
        <ul className="list-reset">
        {links.map((link, i) =>
          <li key={i.toString()} className="mb-1">
            <Link to={"/" + entity + "/" + link.id} className="text-red no-underline">
              {link.name}
            </Link>
          </li>
        )}
        </ul>
      </div>
    )
  }
}


export default EntityLinks
