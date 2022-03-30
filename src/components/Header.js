import requestData from "../assets/requestData";
import { ReactComponent as QuestionImage } from "../assets/question.svg";
import "./Header.css";
import "./ButtonStylings.css";

export default function Header(props) {
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
        <button className="latestRenewalTimeButton">Latest renewal</button>
        <div className="averageDropDownMenuContainer">
          <button className="averageRenewalTimeButton">Average renewal</button>
          <div className="averageDropDownMenu">
            <button className="oneMonthButton">1 month</button>
            <button className="threeMonthButton">3 month</button>
            <button className="sixMonthButton">6 month</button>
          </div>
        </div>
        <button className="allRenewalTimeButton">All renewals</button>
      </div>
      <div className="alertContainer">
        <div className="welcomeAlert">
          <h1>
            <b>Notice</b>: This site aggregates form I-821D and form I-765 DACA(deferred action for childhood arrivals)
            renewal case processing times to provide time estimates for renewal applicants.
          </h1>
        </div>
        <div class="officialUscisAlert">
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
