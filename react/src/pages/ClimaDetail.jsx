import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function ClimaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="clima-detail">
      <div className="container"></div>
    </div>
  );
}

export default ClimaDetail;
