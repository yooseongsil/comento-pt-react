import React, { createRef } from 'react';
 
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handler = null;
    this.headerRef = createRef()
  }

  componentDidMount() {
    this.handler = () => {
      if (this.headerRef.current) {
        if (window.scrollY > 40) {
          this.headerRef.current.style.backgroundColor = 'rgba(255,255,255,0.6)';
        } else {
          this.headerRef.current.style = '';
        }
      }
    };
    window.addEventListener('scroll', this.handler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handler);
  }
  
  render() {
    return (
      <header ref={this.headerRef} id="header">
        <div id="logo">MOMENTUM</div>
        <nav id="gnb" className="container">
          <div className="nav-item">NEW</div>
          <div className="nav-item">COLLECTION</div>
          <div className="nav-item">SEASONAL</div>
          <div className="flex-1"></div>
          <div className="nav-item">PIERCING</div>
          <div className="nav-item">RING</div>
          <div className="nav-item">NECKLESS</div>
        </nav>
      </header>
    )
  }
}

export default Header;
