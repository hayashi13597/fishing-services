import React from "react";

const MapScreen = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71421.55241001902!2d106.6075776018345!3d10.748307898794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4e3e1baf21%3A0x71992461b247bff5!2zSOG7kyBjw6J1IGPDoSBnaeG6o2kgdHLDrSDhu5BjIMSQ4bqjbyBL4buzIMSQw6A!5e0!3m2!1svi!2s!4v1697100335563!5m2!1svi!2s"
      className="w-full h-[600px]"
      style={{
        border: "0",
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapScreen;
