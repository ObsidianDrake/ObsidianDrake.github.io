import React, { useMemo } from 'react';
import '/src/styles/ProfileInfo.css';
import SectionHead from '/src/components/SectionHead';
import obsidianImage from '/src/assets/images/little_q.webp';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from '../i18n/LanguageContext';

AOS.init()

const ProfileInfo = () => {
  const { t } = useTranslation();

  const details = useMemo(() => ({
    [t.profile.details.name]: t.profile.values.name,
    [t.profile.details.location]: t.profile.values.location,
    [t.profile.details.interests]: t.profile.values.interests,
    [t.profile.details.languageLearning]: t.profile.values.languageLearning
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
        <div className="mobile-profile">
          <header className="mobile-profile-header">
            <img src={obsidianImage} alt="" width="104" height="120" loading="lazy" />
            <div className="mobile-profile-identity">
              <h2>{t.profile.values.name}</h2>
              <p>{t.profile.values.location}</p>
            </div>
          </header>

          <section className="mobile-profile-about" aria-labelledby="mobile-about-title">
            <h3 id="mobile-about-title">{t.profile.aboutMe}</h3>
            {t.profile.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section className="mobile-profile-interests" aria-labelledby="mobile-interests-title">
            <h3 id="mobile-interests-title">{t.profile.details.interests}</h3>
            <ul className="profile-interest-tags">
              {t.profile.values.interests.split(/[,、]/).map((interest) => (
                <li key={interest}>{interest.trim()}</li>
              ))}
            </ul>
          </section>

          <section className="mobile-profile-languages" aria-labelledby="mobile-languages-title">
            <h3 id="mobile-languages-title">{t.profile.details.languageLearning}</h3>
            <dl className="profile-language-list">
              {t.profile.values.languageLearning.split('\n').map((line) => {
                const [language, ...level] = line.split(/[:：]/);
                return (
                  <div className="profile-language-row" key={language}>
                    <dt>{language.trim()}</dt>
                    <dd>{level.join(':').trim()}</dd>
                  </div>
                );
              })}
            </dl>
          </section>
        </div>
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
                  <div className="value">
                    {value.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
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
