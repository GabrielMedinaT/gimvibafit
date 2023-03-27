import Aos from "aos";
import "./acerca.css";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function ScrollAnimation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="acerca">
      <div className="descripcion1" data-aos="fade-left"></div>
      <div className="descripcion2" data-aos="zoom"></div>
      <div className="video">
        <iframe
          className="videoYoutube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oZWXrT3KDLs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="mapaGoogle"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.47627063403!2d-15.51036748805881!3d28.10881113909417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4093c72e5abe07%3A0x83f1157a939e3d70!2sViba%20Fit%20Vive%20Bailando!5e0!3m2!1ses!2ses!4v1679750723796!5m2!1ses!2ses"
          width="600"
          height="450"
        ></iframe>
      </div>
    </div>
  );
}

export default ScrollAnimation;
