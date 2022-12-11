import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { FaTools } from "@react-icons/all-files/fa/FaTools";
import consultationImage from "../assets/consultation-image.jpg"
import consultationImage2 from "../assets/consultation-image2.jpg"
import consultationImage3 from "../assets/consultation-image3.jpg"
import { useNavigate } from "react-router";


export default function ConsultationPage() {
    const navigate = useNavigate ()
  return (
    <>
      <Navigation />
      <main className="consultation-page">
        <div className="box-page-consultation">
          <div className="item-consultation__title">
            <h1>Konsultasi</h1>
            <small>SegeraHadir!</small>
          </div>
          <div className="item-consultation__body">
            <h2>Dalam Tahap Pengembangan</h2>

            <div className="construction-icon">
              <FaTools className="construction-icon__tools"/>
            </div>
            <div className="consultation-page__images">
              <img className="image-consul-1" src={consultationImage} alt="consultationImage" />
              <img className="image-consul-2" src={consultationImage2} alt="consultationImage2" />
              <img className="image-consul-3" src={consultationImage3} alt="consultationImage3" />
            </div>
          </div>
          <button className="btn-home-consultation" onClick={()=> navigate("/")}>Back to Home</button>
        </div>
      </main>
    </>
  );
}
