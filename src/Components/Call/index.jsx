import React, { useEffect } from "react";
import "./style.css";
import Loader from "../Loader";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE = "http://localhost:8000";

const index = () => {
  const { val } = useParams();

  const getVoice = async () => {
    try {
      await axios.get(`${BASE}/${val}`);
      return;
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getVoice();
  }, []);
  return (
    <div id="recording-container">
      <div id="recording-animation"></div>
    </div>
  );
};

export default index;
