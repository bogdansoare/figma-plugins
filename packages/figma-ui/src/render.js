/** @jsx h */
import { h, render as preactRender } from 'preact'
import 'figma-plugin-ds/figma-plugin-ds.min.css'
import 'tachyons/css/tachyons.min.css'

export function render (Plugin) {
  return function (rootNode) {
    preactRender(<Plugin data={window.__data__} />, rootNode)
  }
}
