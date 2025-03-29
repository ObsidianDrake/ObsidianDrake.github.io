import React, { useMemo } from 'react';
import '/src/styles/ProfileInfo.css';
import SectionHead from '/src/components/SectionHead';
import obsidianImage from '/src/assets/images/obsidian_angry.png';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const ProfileInfo = () => {
  const age = useMemo(() => new Date().getFullYear() - 2019, []);
  const details = useMemo(() => ({
    Name: 'Obsidian',
    Age: `${age} years`,
    Location: 'Hsinchu, Taiwan',
    Education: 'Master degree'
  }), [age]);

  return (
    <div className="intro">
      <div className="container">
        <SectionHead
          title="Profile"
          lead="“Difficulties mastered are opportunities won.”"
        />
        <div className="content">
          <div className="content-container detail-container">
            {Object.entries(details).map(([key, value], index) => (
              <div className="detail" key={key}>
                <div
                  className="item"
                  data-aos="fade-right"
                  data-aos-delay={100 * (index + 1)}
                  data-aos-offset="100"
                >
                  <strong className="key">{key}</strong>
                  <div className="value">{value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="img-container-profile">
            <img src={obsidianImage} alt="Obsidian" />
          </div>
          <div className="content-container about-container">
            <div className="about">
              <h2 data-aos="fade-left" data-aos-delay="100" data-aos-offset="120">
                About me
              </h2>
              <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="120">
                Hi, I am Obsidian.
                <br />
                I am looking forward to get in touch with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
