import { Component } from 'react';
import hero from 'assets/images/hero.jpg';

class Banner extends Component {
  render() {
    return (
      <section id="hero" className="flex">
        <section id="heroImage" className="flex-1">
          <div className="overlay" />
          <img src={hero} height="600px" width="100%" alt="" />
        </section>
        <section id="heroText" className="flex-center">
          <div>
            <div className="border" />
            <br />
            <h1>
              JEWELS &<br />
              ACCESSORIES
            </h1>
            <p>for memorial moments</p>
          </div>
        </section>
      </section>
    );
  }
}

export default Banner;
