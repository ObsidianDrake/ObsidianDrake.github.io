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

  const aboutMe = `Hi, I am Obsidian.
I am looking forward to get in touch with you!`;

  const age = useMemo(() => {
    const birthDate = new Date('2019-09-27');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    return locale === 'zh' ? `${age} 歲` : `${age} years`;
  }, [locale]);

  const details = useMemo(() => ({
    [t.profile.details.name]: 'Obsidian',
    [t.profile.details.age]: age,
    [t.profile.details.location]: 'Hsinchu, Taiwan',
    [t.profile.details.education]: locale === 'zh' ? '碩士學位' : 'Master degree'
  }), [t, age, locale]);

  return (
    <div className="intro">
      <div className="container">
        <SectionHead
          title={t.profile.title}
          lead={t.profile.lead}
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
