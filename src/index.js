/**
 * Entry
 * @module
 */

import config from './config'
import requestAnimationFrame from './request-animation-frame'

Object.assign(config, {
  test: true
})

requestAnimationFrame(() => {
  console.log(1)
})
