import React from "react";
import profilePhoto from "../assets/images/profile.jpeg";
const Usercard = () => {
//   const profilePhoto = "https://via.placeholder.com/150";
  const name = "Vignesh Angamuthu";
  const email = "vignesh.a.s76@kalvium.community";
  const phone = "+91 82200 00318";
  const address = "Coimbatore";

  return (
    <div className="bg-red-100 shadow-lg rounded-2xl p-6 w-80 text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{address}</p>
    </div>
  );
};

export default Usercard;
