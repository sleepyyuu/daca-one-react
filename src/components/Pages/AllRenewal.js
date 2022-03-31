import { useEffect, useState } from "react";
import "./Renewal.css";
import uniqid from "uniqid";

export default function AllRenewal(props) {
  const { submission, averageTime, loadingElement, loading } = props;
  return loading ? (
    loadingElement
  ) : (
    <div className="informationContainer">
      <div className="averageRenewalBox">
        <div className="dataDisclaimer">Renewal Length</div>
        <div className="averageRenewalMonths">The average renewal from ALL obtainable submissions took</div>
        <div className="averageRenewalDays">{averageTime} days</div>
        <div className="detailDisclaimer">Renewal Details</div>
        <div className="allRenewalDetails">Pulled from {submission.length} data points</div>
        <table className="approvalLinkTable">
          <thead>
            <tr>
              <th>Length</th>
              <th>Approved</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {submission.map((post) => {
              return (
                <tr key={uniqid()}>
                  <td>{post.processingTime} days</td>
                  <td>{post.formattedApprovedDate}</td>
                  <td>
                    <a href={"https://www.reddit.com" + post.permalink} target="_blank" rel="noreferrer">
                      view post
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
