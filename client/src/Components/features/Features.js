import React, { useEffect, useRef } from "react";
import "./Features.css";

const Features = () => {
  // Create a ref for each feature card
  const featureRefs = useRef([]);

  useEffect(() => {
    // Create an observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });

    // Observe each feature card
    featureRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    // Disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="features-container">
      <div ref={(el) => featureRefs.current.push(el)} className="feature-card survival">
        <h3 className="feature-name">Full Survival System</h3>
        <p className="feature-description">
          Sustain yourself by regularly eating and staying within human
          temperature range while you build, harvest and level up
        </p>
      </div>
      <div ref={(el) => featureRefs.current.push(el)} className="feature-card questing">
        <h3 className="feature-name">Questing</h3>
        <p className="feature-description">
          Progress through the game by completing various quests
        </p>
      </div>
      <div ref={(el) => featureRefs.current.push(el)} className="feature-card raids">
        <h3 className="feature-name">Group Raids</h3>
        <p className="feature-description">
          Join forces with other players to tackle challenging group raids
        </p>
      </div>
      <div ref={(el) => featureRefs.current.push(el)} className="feature-card pvp">
        <h3 className="feature-name">PVP</h3>
        <p className="feature-description">
          Engage in player vs player combat to test your skills against other
          players
        </p>
      </div>
      <div ref={el => featureRefs.current.push(el)} className="feature-card faction">
        <h3 className="feature-name">Faction Control</h3>
        <p className="feature-description">
          Choose a faction and control towns and cities, invade opposing
          factions' territories
        </p>
      </div>
      <div ref={el => featureRefs.current.push(el)} className="feature-card space">
        <h3 className="feature-name">Space Travel</h3>
        <p className="feature-description">
          Reach new heights by traveling to space and continue your adventure
        </p>
      </div>
    </div>
  );
};

export default Features;
