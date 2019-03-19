/**
 * @class PolygridItem
 */

import React, { Component } from 'react'
import { number, node } from 'prop-types'

export default class PolygridItem extends Component {
  static propTypes = {
    children: node.isRequired,
    width: number,
    height: number,
    max: (props, propName, componentName) => {
      if (!['number', 'string'].includes(typeof props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        )
      }
    }
  }

  render () {
    const {
      props: { width, height, max, children }
    } = this

    const maxWidth = max ? { max: ~~max } : {}

    return (
      <div style={{ width: width || '100%', height: height || '100%', ...maxWidth }}>
        {children}
      </div>
    )
  }
}
