import { useEffect, useState, useRef } from "react";
import moment from "moment";

export default function LatestRenewal(props) {
  const { submission } = props;
  console.log(submission);
  return submission.length === 0 ? null : (
    <div className="informationContainer">
      <div className="latestRenewalBox">
        <div className="dataDisclaimer">Renewal Length</div>
        <div className="latestRenewalLength">The latest renewal took</div>
        <div className="latestRenewalDays">{submission[0].processingTime} days</div>
        <div className="detailDisclaimer">Renewal Details</div>
        <div className="latestRenewalDetail">Card produced/approved on {submission[0].formattedApprovedDate}</div>
        <div className="latestRenewalLink">
          <a href={"https://www.reddit.com" + submission[0].submissionData.permalink} target="_blank" rel="noreferrer">
            view post
          </a>
        </div>
      </div>
    </div>
  );
}
