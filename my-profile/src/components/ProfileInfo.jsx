import React from 'react';
import '/src/styles/ProfileInfo.css';
import obsidianImage from '/src/assets/images/obsidian_angry.png';

const ProfileInfo = () => {
  const year = new Date().getFullYear();
  const age = year - 2019;

  const details = {
    Name: 'Obsidian',
    Age: `${age} years`,
    Location: 'Hsinchu, Taiwan',
    Education: 'Master degree',
  };

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
            <div
              className="fb-like"
              data-href="https://bennolin.com"
              data-width=""
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-share="true"
            ></div>
          </div>
          <div className="img-container">
            <img src={obsidianImage} alt="Obsidian Angry" />
          </div>
          <div className="content-container about-container">
            <div className="about">
              <h2 data-aos="fade-left" data-aos-delay="100" data-aos-offset="120">
                About me
              </h2>
              <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="120">
                Hi, I'm Obsidian.
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

const SectionHead = ({ title, lead }) => (
  <div className="section-head">
    <h1>{title}</h1>
    <p>{lead}</p>
  </div>
);

export default ProfileInfo;
