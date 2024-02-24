import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./Afterlands.css";

//Survival Images
const gatheringImg = require("../../images/gathering.png")
const foodWaterHealthImg = require("../../images/foodWaterHealthImg.png")
const staminaSleepImg = require("../../images/StaminaSleepingImg.png")
const buildImg = require("../../images/buildingImg.png")
//Factions PvP PvE and Territory COntrol Images
const factionsImg = require("../../images/FeatureImageSoon.png")
const pvpImg = require("../../images/pvpImg.png")
const pveImg = require("../../images/pveImg.png")
const territoryImg = require("../../images/FeatureImageSoon.png")
const questImg = require("../../images/FeatureImageSoon.png")
const smartNpcImg = require("../../images/FeatureImageSoon.png")
//Open Earth Moon Mars and Space Images
const earthImg = require("../../images/earthImg.jpg")
const moonImg = require("../../images/moonImg.jpg")
const marsImg = require("../../images/marsImg.jpg")
const spaceImg = require("../../images/FeatureImageSoon.png")
const marsLandscapeImg = require("../../images/FeatureImageSoon.png")
const moonLandscapeImg = require("../../images/FeatureImageSoon.png")
//Live Action First and Third Person Combat
const firstPersonRangedImg = require("../../images/firstPersonRanged.png")
const firstPersonMeleeImg = require("../../images/firstPersonMelee.png")
const thirdPersonRangedImg = require("../../images/thirdPersonRanged.png")
const thirdPersonMeleeImg = require("../../images/thirdPersonMelee.png")

const Afterlands = () => {
  return (
    <div className="afterlands">
        <h2>Play your way in the Afterlands</h2>
        <p>Open World Survival RPG</p>
      <div className="feature-card right">
        <h3>Survival</h3>
        <div className="image-row">
        <div className="image-container">
          <img src={gatheringImg} alt="Survival 1" />
          <h4>Harvest</h4>
        </div>
        <div className="image-container">
          <img src={foodWaterHealthImg} alt="Survival 1" />
          <h4>Gather</h4>
        </div>
        <div className="image-container">
          <img src={staminaSleepImg } alt="Survival 1" />
          <h4>Food & Water or</h4>
        </div>
        <div className="image-container">
          <img src={buildImg} alt="Survival 1" />
          <h4>Craft and Build</h4>
        </div>
        </div>
      </div>

      <div className="feature-card left">
        <h3>Factions PvP PvE and Territory Control</h3>
        <div className="image-row">
        <div className="image-container">
          <LazyLoadImage effect="blur" src={factionsImg} alt="Survival 1" />
          <h4>Play one of 3 Factions</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={pvpImg} alt="Survival 1" />
          <h4>PvP</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={pveImg} alt="Survival 1" />
          <h4>PvE</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={territoryImg} alt="Survival 1" />
          <h4>Territory Control</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={questImg} alt="Survival 1" />
          <h4>Quest to skill up and Earn</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={smartNpcImg} alt="Survival 1" />
          <h4>AI-powered NPC's</h4>
        </div>
        </div>
      </div>

      <div className="feature-card right">
        <h3>Open Earth Moon Mars and Space</h3>
        <div className="image-row">
        <div className="image-container">
          <LazyLoadImage effect="blur" src={earthImg} alt="Survival 1" />
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={moonImg} alt="Survival 1" />
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={marsImg} alt="Survival 1" />
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={marsLandscapeImg} alt="Survival 1" />
          <h4>Mars from space</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={spaceImg} alt="Survival 1" />
          <h4>Open Space Travel</h4>
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={moonLandscapeImg} alt="Survival 1" />
          <h4>Ground Level Moon</h4>
        </div>
        </div>
      </div><div className="feature-card left">
        <h3>Live Action First and Third Person Combat</h3>
        <div className="image-row">
        <div className="image-container">
          <LazyLoadImage effect="blur" src={firstPersonMeleeImg} alt="Survival 1" />
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={firstPersonRangedImg} alt="Survival 1" />
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={thirdPersonMeleeImg} alt="Survival 1" />
        </div>
        <div className="image-container">
          <LazyLoadImage effect="blur" src={thirdPersonRangedImg} alt="Survival 1" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Afterlands;
