import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default function AverageRenewal(props) {
  const { averageMonths } = useParams();
  return <div>average renewal {averageMonths}</div>;
}
