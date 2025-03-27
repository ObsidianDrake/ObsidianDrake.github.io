import React from "react";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import Events from "../components/Events";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function ProfilePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-6">
        <ProfileInfo />
        <Events />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
