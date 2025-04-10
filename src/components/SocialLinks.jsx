import "/src/styles/SocialLinks.css";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";

import facebook_img from "/src/assets/images/social/facebook.webp";
import twitter_img from "/src/assets/images/social/twitter-x.webp";
import discord_img from "/src/assets/images/social/discord.webp";
import bluesky_img from "/src/assets/images/social/bluesky.webp";
import github_img from "/src/assets/images/social/github.webp";

AOS.init({
  threshold: 0.05, // Animation starts when element is 10% in view
  duration: 800, // Animation duration in ms
});

const SocialLinks = () => {
  const medias = [
    [facebook_img, "https://www.facebook.com/obsidiandrakee"],
    [twitter_img, "https://x.com/obsidiandrakee"],
    [discord_img, "https://discordapp.com/users/622288266951131137"],
    [bluesky_img, "https://bsky.app/profile/obsidiandrake.bsky.social"],
    [github_img, "https://github.com/ObsidianDrake"],
  ];

  return (
    <div className="social">
      <div className="container">
        <SectionHead title="Social Link" />
        <div className="social-content">
          {medias.map((media, index) => (
            <div key={index}>
              <a href={media[1]} target="_blank" rel="noopener noreferrer">
                <img
                  className="media-icon"
                  src={`${media[0]}`}
                  alt={media[0].split(".")[0]}
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                  data-aos-offset="0"
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
