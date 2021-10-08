import React from "react";
import "./MainBar.css";
import appImage from "./Image.png";
import tokkoicon from "./playstore-icon 1.png";
import homeIcon from "./Icon.png";
import catalogIcon from "./Icon (1).png";
import ordersIcon from "./Icon (2).png";
import marketingIcon from "./Icon (3).png";
import settingsIcon from "./Icon (4).png";
import storeIcon from "./Store.png";
import Card from "./Card/Card";
import img1 from "./usp image.png";
import img2 from "./usp image (1).png";
import img3 from "./usp.png";
import img4 from "./usp (1).png";

const mainData = [
  {
    name: "Home",
    imgp: homeIcon,
  },
  {
    name: "Catalog",
    imgp: catalogIcon,
  },
  {
    name: "Orders",
    imgp: ordersIcon,
  },
  {
    name: "Marketing",
    imgp: marketingIcon,
  },
  {
    name: "Settings",
    imgp: settingsIcon,
  },
];
const subData = [{ name: "Online Store", imgp: storeIcon }];
const Mainbar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h3>
          <span>
            <img src={tokkoicon} alt=""></img>
          </span>
          Tokko <i> Free</i>
        </h3>
        {mainData.map((id, index) => (
          <div className="sub">
            <p>
              <span>
                <img src={id.imgp}></img>
              </span>
              {id.name}
            </p>
          </div>
        ))}
        <p>SALES CHANNEL</p>
        {subData.map((id, index) => (
          <div className="sub">
            <p>
              <span>
                <img src={id.imgp}></img>
              </span>
              {id.name}
            </p>
          </div>
        ))}
      </div>
      <div className="rightPage">
        <div className="Mainbar">
          <div className="side1">
            <h3>Create Ads in Google and Social Media</h3>
            <p className="p1">
              Utilize the biggest internet platform such as Google, Facebook,
              and Instagram to improve your customer base.
            </p>
            <button className="p2">Subscribe to Unlock Ads</button>
          </div>
          <div className="side2">
            <img src={appImage} alt=""></img>
          </div>
        </div>
        <div className="cardcomps">
          <Card
            name="Easy to Set Up"
            content="No more confusion from setting up digital ads. We make everything easy to understand for you!"
            image={img1}
          />
          <Card
            name="All-in-one Dashboard"
            content="Stop losing track of your ads across channels. Manage all of them easily with our all-in-one dashboard!"
            image={img2}
          />
          <Card
            name="Virtual Ads Assistant"
            content="Don’t know how to do ads? Don’t worry, your campaigns will be optimized by your Virtual Ads Assistant!"
            image={img3}
          />
          <Card
            name="Affordable Cost"
            content="No more wasted marketing spends. Unlock your ads’ potential and get more sales!"
            image={img4}
          />
        </div>
        <div className="accordiondata">Frequently Asked Questions</div>
      </div>
    </div>
  );
};

export default Mainbar;
