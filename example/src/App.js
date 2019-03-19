import React, { Component } from 'react'

/* eslint-disable */
import { Polygrid, PolygridItem } from 'polygrid'

export default class App extends Component {
  constructor (props) {
    super(props)

    const bigLorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    const lilLorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

    this.state = {
      gap: 10,
      items: [
        [250, 300, 400, bigLorem],
        [250, 300, 400, bigLorem],
        [250, 300, 400, bigLorem],
        [150, 200, 300, lilLorem],
        [150, 200, 300, lilLorem],
        [150, 200, 300, lilLorem],
        [150, 200, 300, lilLorem],
        [150, 200, 300, lilLorem]
      ]
    }
  }

  render () {
    const { items, gap } = this.state

    return (
      <div style={{ padding: 24 }}>
        <h1 style={{ marginTop: 0 }}>Simple Polygrid Demo</h1>
        <div style={{ marginBottom: 12 }}>
          Change grid gap:
          <br />
          <input type="range" min="0" max="40" onChange={ev => this.setState({ gap: ~~ev.target.value })} value={gap} />
          {gap}px
        </div>
        <div style={{ border: "1px dashed" }}>
          <Polygrid gap={gap}>
            {
              items
                .map(([min, best, max, text], i) => (
                  <PolygridItem key={i} min={min} best={best} max={max}>
                    <img src={`https://via.placeholder.com/${best}/09f/fff.png`} style={{ width: "100%" }} />
                    <div style={{ marginTop: 12 }}>{text}</div>
                  </PolygridItem>
                ))
            }
          </Polygrid>
        </div>
      </div>
    )
  }
}
