export default window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| callback => { window.setTimeout(callback, 1000 / 60) }
}
