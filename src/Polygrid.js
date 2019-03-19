/* globals self */

/**
 * @class Polygrid
 */

import React, { Component } from 'react'
import { node, number } from 'prop-types'
import PolygridItem from './PolygridItem'
import ResizeObserver from 'resize-observer-polyfill'

const root = (
  (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this
)

root.checkItemProps = root.checkItemProps || (
  ({ min, best, max }) => {
    min = ~~min
    best = ~~best
    max = ~~max
    if (max < best || best < min) {
      throw new Error('props passed to PolygridItem must satisfy (min ≤ best ≤ max)')
    } else if (Math.min(min, best, max) < 0) {
      throw new Error('props passed to PolygridItem must satisfy (0 ≤ {min, best, max})')
    }
    return [min, best, max]
  }
)

root.polygridScore = root.polygridScore || (
  (x, min, best, max) => {
    [min, best, max] = root.checkItemProps({ min, best, max })
    if (x < min || max < x) {
      return 0
    } else if (x === best) {
      return 1
    } else if (x < best) {
      return (x / (best - min)) - (min / (best - min))
    } else if (best < x) {
      return (x / (best - max)) - (max / (best - max))
    } else {
      throw Error('Unexpected (x, min, best, max) combination')
    }
  }
)

root.fitPolygridRow = root.fitPolygridRow || (
  (
    W,
    row,
    firstRow,
    minTotal = row.reduce(([a], [b]) => (a + b), 0),
    bestTotal = row.reduce(([, a], [, b]) => (a + b), 0),
    maxTotal = row.reduce(([,, a], [,, b]) => (a + b), 0)
  ) => {
    const toFill = W - bestTotal
    if (toFill === 0) {
      return row.map(([, best], i) => [best, firstRow, !i])
    } else if (toFill < 0) {
      return row.map(([min, best], i) => [(best + (toFill * ((best - min) / (bestTotal - minTotal)))), firstRow, !i])
    } else if (maxTotal <= W) {
      return row.map(([,, max], i) => [max, firstRow, !i])
    } else {
      return row.map(([, best, max], i) => [(best + (toFill * ((max - best) / (maxTotal - bestTotal)))), firstRow, !i])
    }
  }
)

root.generatePolygrid = root.generatePolygrid || (
  (W, G, ...items) => {
    if (~W) {
      let row = []
      let minTotal = 0
      let bestTotal = 0
      let maxTotal = 0
      const allButLastRow = items.reduce((output, item, i, arr) => {
        const [min, best, max] = root.checkItemProps(item.props)
        const gap = row.length ? G : 0
        const _minTotal = minTotal + gap + min
        const _bestTotal = bestTotal + gap + best
        const _maxTotal = maxTotal + gap + max
        if (_bestTotal > W) {
          const prevScore = root.polygridScore(W, minTotal, bestTotal, maxTotal)
          const nextScore = root.polygridScore(W, _minTotal, _bestTotal, _maxTotal)
          if (prevScore >= nextScore || _minTotal > W) {
            const rowSizes = root.fitPolygridRow(W, row, !output.length, minTotal, bestTotal, maxTotal)
            row = []
            minTotal = bestTotal = maxTotal = 0
            row.push([min, best, max])
            minTotal = min
            bestTotal = best
            maxTotal = max
            return [...output, ...rowSizes]
          } else {
            row.push([min, best, max])
            const rowSizes = root.fitPolygridRow(W, row, !output.length, _minTotal, _bestTotal, _maxTotal)
            row = []
            minTotal = bestTotal = maxTotal = 0
            return [...output, ...rowSizes]
          }
        } else {
          row.push([min, best, max])
          minTotal = _minTotal
          bestTotal = _bestTotal
          maxTotal = _maxTotal
          return output
        }
      }, [])

      return [...allButLastRow, ...row.map(([, best], i) => [best, !allButLastRow.length, !i])]
    }
  }
)

export default class Polygrid extends Component {
  static propTypes = {
    children: node,
    gap: number
  }

  static defaultProps = {
    gap: 0
  }

  ResizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const { width } = entry.contentRect
      if (width !== this.state.width) this.setState({ width })
    })
  })

  state = {
    width: -1
  }

  componentDidMount () {
    this.ResizeObserver.observe(this.el)
  }

  shouldComponentUpdate ({ gap, children }, { width }) {
    return gap !== this.props.gap || children !== this.props.children || width !== this.state.width
  }

  render () {
    const {
      props: { gap, children },
      state: { width }
    } = this

    if (~width) {
      this.layout = root.generatePolygrid(
        width,
        gap,
        ...React.Children.toArray(children)
      ) || {}
    }

    return (
      <div ref={el => { this.el = el }}>
        {
          this.layout
            ? (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                  React.Children.map(children, (child, i) => {
                    if (child.type !== PolygridItem) {
                      throw new Error(`All \`Polygrid\` children must be \`PolygridItem\`s`)
                    }

                    const [itemWidth, inFirstRow, inFirstCol] = this.layout[i]

                    return (
                      <div
                        style={{
                          width: itemWidth,
                          marginTop: inFirstRow ? 0 : gap,
                          marginLeft: inFirstCol ? 0 : gap
                        }}
                      >
                        { child }
                      </div>
                    )
                  })
                }
              </div>
            )
            : null
        }
      </div>
    )
  }
}
