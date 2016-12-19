'use strict';

import React, { Component , PropTypes} from 'react';
import { fetchData } from '../actions/action'

class Link extends Component{

  handleClick(){
    fetchData(333)
  }

  render(){
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           this.handleClick()
         }}
      >
        {this.props.children}
      </a>
    )
  }
}
 
Link.defaultProps = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link