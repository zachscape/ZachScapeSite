import React, { Component } from "react";
import Patreon from "../contribute/Patreon";
import Email from "../email/Email";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="heading-section">
          <h1>Andromasoft</h1>
          <p>A Solo-Dev Video Game Company</p>
        </section>
        <div className="content">
        <section className="why-section">
          <h2>Why Afterlands</h2>
          <p>
            Andromasoft is a game development company founded by a single
            developer who is passionate about creating unique and engaging
            games. By working alone, the developer is able to focus on the
            creative process and bring a personal touch to each game.fdasfdsfdsafdsfsdfsafsdafdsafdsfdsfdsfadsf fsdafdsa fdsfsdf dsfdsa fdsafdsf sdf safdsf
          </p>
        </section>
        <section className="how-section">
          <h2>How?</h2>
          <p>
            Andromasoft uses a combination of industry-standard tools and
            innovative techniques to create its games. The developer works
            closely with the community to gather feedback and make sure each
            game is polished and enjoyable to play.
          </p>
        </section>
        </div>
        <Patreon />
        <Email />
      </div>
    );
  }
}
