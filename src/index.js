import Polygrid from './Polygrid'
import PolygridItem from './PolygridItem'

// export Foo and Bar as named exports
export { Polygrid, PolygridItem }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you can optionally also set a default export for your module
export default { Polygrid, PolygridItem }
