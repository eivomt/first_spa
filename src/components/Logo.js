import React, { Component } from 'react';

class Logo extends Component {
  render(props) {
    return(
<svg id={this.props.id} className={this.props.name} data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 624 624"><title>Logo</title><path class="cls-1" d="M548.12,104.88A312,312,0,0,0,106.88,546.12,312,312,0,0,0,548.12,104.88ZM327.5,43.5a280.79,280.79,0,0,1,126.88,30H200.62A280.79,280.79,0,0,1,327.5,43.5ZM128.1,524.9a282,282,0,0,1,0-398.8c1.77-1.78,3.57-3.53,5.38-5.25l0,409.31Q130.77,527.56,128.1,524.9Zm199.4,82.6a280.79,280.79,0,0,1-126.86-30H454.36A280.79,280.79,0,0,1,327.5,607.5Zm164-90.29a30.31,30.31,0,0,1-30.31,30.3H193.8a30.31,30.31,0,0,1-30.3-30.3V339.5h328Zm0-207.71h-328V133.81a30.29,30.29,0,0,1,30.3-30.31h267.4a30.31,30.31,0,0,1,30.31,30.31Zm35.4,215.4c-1.78,1.79-3.58,3.53-5.4,5.26V120.84c1.82,1.73,3.62,3.47,5.4,5.26a282,282,0,0,1,0,398.8Z" transform="translate(-15.5 -13.5)"/></svg>
      );
  }
}

export default Logo;
