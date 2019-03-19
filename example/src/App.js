import React, { Component } from 'react'

/* eslint-disable */
import { Polygrid, PolygridItem } from 'polygrid'

export default class App extends Component {
  render () {
    /* eslint-disable jsx-a11y/alt-text */
    const imgProps = { style: { width: "100%" } }
    return (
      <div style={{ padding: 24 }}>
        <Polygrid gap={10}>
          <PolygridItem min="250" best="300" max="400">
            <img src="https://via.placeholder.com/300/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </PolygridItem>
          <PolygridItem min="250" best="300" max="400">
            <img src="https://via.placeholder.com/300/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </PolygridItem>
          <PolygridItem min="250" best="300" max="400">
            <img src="https://via.placeholder.com/300/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </PolygridItem>
          <PolygridItem min="250" best="300" max="400">
            <img src="https://via.placeholder.com/300/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </PolygridItem>
          <PolygridItem min="150" best="200" max="300">
            <img src="https://via.placeholder.com/200/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </PolygridItem>
          <PolygridItem min="150" best="200" max="300">
            <img src="https://via.placeholder.com/200/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </PolygridItem>
          <PolygridItem min="150" best="200" max="300">
            <img src="https://via.placeholder.com/200/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </PolygridItem>
          <PolygridItem min="150" best="200" max="300">
            <img src="https://via.placeholder.com/200/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </PolygridItem>
          <PolygridItem min="150" best="200" max="300">
            <img src="https://via.placeholder.com/200/09f/fff.png" {...imgProps} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </PolygridItem>
        </Polygrid>
      </div>
    )
  }
}
