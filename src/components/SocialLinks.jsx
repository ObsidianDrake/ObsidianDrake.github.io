import React, { useEffect } from "react";
import "/src/styles/SocialLinks.css";
import SectionHead from '/src/components/SectionHead';
import { useInView } from "react-intersection-observer";
import facebook_img from '/src/assets/images/facebook.webp';
import twitter_img from '/src/assets/images/twitter-x.webp';
import discord_img from '/src/assets/images/discord.webp';
import bluesky_img from '/src/assets/images/bluesky.webp';
import github_img from '/src/assets/images/github.webp';

const SocialLinks = () => {
  const medias = [
    [facebook_img, "https://www.facebook.com/obsidiandrakee"],
    [twitter_img, "https://x.com/obsidiandrakee"],
    [discord_img, "https://discordapp.com/users/622288266951131137"],
    [bluesky_img, "https://bsky.app/profile/obsidiandrake.bsky.social"],
    [github_img, "https://github.com/ObsidianDrake"],
  ];

  const [socialRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  return (
    <div className="social">
      <div className="container">
        <SectionHead
          title="Social Link"
        />
        <div className="social-content" ref={socialRef}>
          {medias.map((media, index) => (
            <div 
              key={index} 
              className={`hidden ${inView ? 'fade-in-up' : ''}`} 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <a href={media[1]} target="_blank" rel="noopener noreferrer">
                <img
                  className="media-icon"
                  src={`${media[0]}`}
                  alt={media[0].split(".")[0]}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
