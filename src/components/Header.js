import requestData from "../assets/requestData";
import { ReactComponent as QuestionImage } from "../assets/question.svg";
import "./Header.css";
import "./ButtonStylings.css";
import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export default function Header(props) {
  const dropDownRef = useRef(null);
  const [dropDownActive, setDropDownActive] = useState(false);
  const dropDownClick = () => {
    setDropDownActive((dropDownActive) => {
      return !dropDownActive;
    });
  };
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target)) {
        setDropDownActive(!dropDownActive);
      }
    };

    if (dropDownActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropDownActive]);
  return (
    <div className="header">
      <div className="headerTop">
        <div className="contactButton"></div>
        <div className="headerText">&nbsp;&nbsp;&nbsp;DACA | Processing Times</div>
        <button className="infoButton">
          <svg id="questionImageButton">
            <QuestionImage height="40px" width="40px" />
          </svg>
        </button>
      </div>
      <div className="informationLinks">
        <Link to="/">
          <button className="latestRenewalTimeButton">Latest renewal</button>
        </Link>

        <div ref={dropDownRef} className="averageDropDownMenuContainer">
          <button className="averageRenewalTimeButton" onClick={dropDownClick}>
            Average renewal
          </button>
          <div className={dropDownActive ? "averageDropDownMenuShow" : "averageDropDownMenu"}>
            <Link to="/averageRenewal/oneMonth">
              <button className="oneMonthButton">1 month</button>
            </Link>
            <Link to="/averageRenewal/threeMonth">
              <button className="threeMonthButton">3 month</button>
            </Link>
            <Link to="/averageRenewal/sixMonth">
              <button className="sixMonthButton">6 month</button>
            </Link>
          </div>
        </div>
        <Link to="/allRenewal">
          <button className="allRenewalTimeButton">All renewals</button>
        </Link>
      </div>
      <div className="alertContainer">
        <div className="welcomeAlert">
          <h1>
            <b>Notice</b>: This site aggregates form I-821D and form I-765 DACA(deferred action for childhood arrivals)
            renewal case processing times to provide time estimates for renewal applicants.
          </h1>
        </div>
        <div className="officialUscisAlert">
          <b>Info</b>: The information here is obtained from Reddit submissions and is <b>not</b> official. Use the
          information here with official USCIS case processing times presented
          <a href="https://egov.uscis.gov/processing-times/" alt="USCIS Link" target="_blank" rel="noreferrer">
            here
          </a>
        </div>
      </div>
    </div>
  );
}
