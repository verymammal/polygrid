# polygrid

> A polymorphic UI grid for React.

[![NPM](https://img.shields.io/npm/v/polygrid.svg)](https://www.npmjs.com/package/polygrid)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The perfect storm of Flexbox and React to create a high performance,
lightweight, easy to use grid.

This grid aims to be the right choice for the most people, and as such
offers fewer options in exchange for a lower footprint.

* Takes an optional gap parameter to add space between the grid items
* All the behavior is calculated from the "min", "best" and "max" props
  on each grid item, and the gap. This is, hopefully, very intuitive.

## Install

```bash
yarn add polygrid # OR: npm install polygrid
```

## Usage

Example:

```jsx
import React, { Component } from 'react'

import { Polygrid, PolygridItem } from 'polygrid'

class ProductGrid extends Component {
  render () {
    return (
      <Polygrid gap="10">
        <PolygridItem min="320" best="400" max="650">
          <Product title="Product 1" price="$3.29" />
        </PolygridItem>
        <PolygridItem min="320" best="400" max="650">
          <Product title="Product 2" price="$3.99" />
        </PolygridItem>
        <PolygridItem min="320" best="400" max="650">
          <Product title="Product 3" price="$13.99" />
        </PolygridItem>
        <PolygridItem min="155" best="155" max="320">
          <Product title="Product 4" price="$2.99" />
        </PolygridItem>
        <PolygridItem min="155" best="155" max="320">
          <Product title="Product 5" price="$4.59" />
        </PolygridItem>
        <PolygridItem min="155" best="155" max="320">
          <Product title="Product 6" price="$2.29" />
        </PolygridItem>
      </Polygrid>
    )
  }
}

const Product = ({ title, price }) =>
  <div>
    <img
      src="https://via.placeholder.com/300/09f/fff.png"
      style={{ width: '100%' }}
    />
    <h2>{title}</h2>
    <p>{price}</p>
  </div>
```

### [See it in action!](https://verymammal.github.io/polygrid/)

For the avoidance of doubt, all units are given in pixels, and can be given as
a number or a string.

## Why not Flexbox?

Flexbox requires you to get the right combination of up to 19 different CSS
properties.

This project does use flexbox under the hood, but is much more dev friendly.

## Why not CSS Grid?

Browser support for Grid is not good enough for many people or organisations.

In the browsers it does support CSS Grid has compatibility and performance
issues, in particular, with flexible column layouts, which is a very common use
case.

## How does it work?

The rules of Polygrid layout are simple.

* The grid always wraps.
* The grid is always left to right, top to bottom
* The grid items' heights are sized from their contents
* A grid item with a min of `x` will never be less than `x` pixels wide
* A grid item with a max of `y` will never be more than `y` pixels wide

An algorithm then uses the min, best and max values to generate a score, which
is then used to determine how many items should fit on that row, and this
is repeated for each row. The polygrid's layout algorithm only needs to take
one loop over its items.

As this is an extremely fast operation, it can run every time the polygrid
container is resized. This is done by using Resize Observers (and uses
[a polyfill](https://github.com/que-etc/resize-observer-polyfill) for the
browsers that do not support it).

## What's on the horizon?

This is meant to be a lightweight library and will stay that way.

However, there are a few things I'd like to add:

* Repeated row patterns probably ought to be aligned with each other
* `rem` support, to get the "I read an article once" hipster devs onboard

## License

MIT © [verymammal](https://github.com/verymammal)
