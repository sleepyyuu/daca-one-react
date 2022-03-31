import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Renewal.css";

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
        <table className="approvalLinkTable">{}</table>
      </div>
    </div>
  );
}
