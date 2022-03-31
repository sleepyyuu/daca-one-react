import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Renewal.css";
import uniqid from "uniqid";

export default function AverageRenewal(props) {
  const { submission, averageTime, loadingElement, loading } = props;
  const location = useLocation();
  const { month } = location.state;
  const monthText = Object.keys(month)[0];
  return loading ? (
    loadingElement
  ) : (
    <div className="informationContainer">
      <div className="averageRenewalBox">
        <div className="dataDisclaimer">Renewal Length</div>
        <div className="averageRenewalMonths">The average renewal in the past {month[monthText]} month(s) took</div>
        <div className="averageRenewalDays">{averageTime[monthText]} days</div>
        <div className="detailDisclaimer">Renewal Details</div>
        <div className="averageRenewalDetail">Pulled from {submission[monthText].length} data points</div>
        <table className="approvalLinkTable">
          <thead>
            <tr>
              <th>Length</th>
              <th>Approved</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {submission[monthText].map((post) => {
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
