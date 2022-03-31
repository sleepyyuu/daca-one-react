import { useEffect, useState } from "react";
import "./Renewal.css";

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
        <div className="averageRenewalDetail">Pulled from {submission.length} data points</div>
        <table className="approvalLinkTable">{}</table>
      </div>
    </div>
  );
}
