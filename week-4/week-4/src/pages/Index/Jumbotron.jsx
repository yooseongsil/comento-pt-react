import React from "react"

export class Jumbotron extends React.Component {
  render() {
    return (
      <section id="hero" className="flex">
        <section id="heroImage" className="flex-1">
          <div className="overlay"></div>
          <img src="images/hero.jpg" height="600px" width="100%" alt="hero" />
        </section>
        <section id="heroText" className="flex-center">
          <div>
            <div className="border"></div>
            <br />
            <h1>JEWELS &<br />ACCESSORIES</h1>
            <p>for memorial moments</p>
          </div>
        </section>
      </section>
    )
  }
}

export default Jumbotron;