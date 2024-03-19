import React from 'react'
import MenuList from './menu-list'
import menus from './data'
import './style.css'

const TreeView = ({menu = []}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus}/>
    </div>
  )
}

export default TreeView