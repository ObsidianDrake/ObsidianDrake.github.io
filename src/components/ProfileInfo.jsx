import React, { useMemo } from 'react';
import '/src/styles/ProfileInfo.css';
import SectionHead from '/src/components/SectionHead';
import obsidianImage from '/src/assets/images/little_q.webp';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from '../i18n/LanguageContext';

AOS.init()

const ProfileInfo = () => {
  const { t, locale } = useTranslation();

  const details = useMemo(() => ({
    [t.profile.details.name]: t.profile.values.name,
    [t.profile.details.location]: t.profile.values.location,
    [t.profile.details.interests]: t.profile.values.interests,
    [t.profile.details.favarAnimate]: t.profile.values.favarAnimate
  }), [t]);

  return (
    <div className="intro">
      <div className="container">
        <SectionHead
          title={t.profile.title}
          lead={t.profile.lead.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        />
        <div className="profile-content">
          <div className="detail-container">
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
            <img 
              src={obsidianImage} 
              alt="Obsidian" 
              data-aos="fade-up" 
              data-aos-delay="150" 
              data-aos-offset="110"
            />
          </div>
          <div className="about-container">
            <div className="about">
              <h2 data-aos="fade-left" data-aos-delay="100" data-aos-offset="120">
                {t.profile.aboutMe}
              </h2>
              <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="120">
                {t.profile.bio.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
