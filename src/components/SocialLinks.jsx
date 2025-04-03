import React from "react";
import "/src/styles/SocialLinks.css";
import SectionHead from '/src/components/SectionHead';
import { useInView } from "react-intersection-observer";
import facebook_img from '/src/assets/images/facebook.png';
import twitter_img from '/src/assets/images/twitter-x.png';
import discord_img from '/src/assets/images/discord.png';
import bluesky_img from '/src/assets/images/bluesky.png';
import github_img from '/src/assets/images/github.png';

const SocialLinks = () => {
  const medias = [
    [facebook_img, "https://www.facebook.com/obsidiandrakee"],
    [twitter_img, "https://x.com/obsidiandrakee"],
    [discord_img, "https://discordapp.com/users/622288266951131137"],
    [bluesky_img, "https://bsky.app/profile/obsidiandrake.bsky.social"],
    [github_img, "https://github.com/ObsidianDrake"],
  ];

  const { ref, inView } = useInView({
    // triggerOnce: true, // 動畫只觸發一次
    threshold: 0.2,     // 占容器 20% 高度就觸發
  });

  return (
    <div className="social">
      <div className="container">
        <SectionHead
          title="Social Link"
        />
        <div className="social-content">
          {medias.map((media, index) => (
            <div key={index}>
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
