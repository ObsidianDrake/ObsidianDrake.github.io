import React from "react";
import "/src/styles/SocialLinks.css";
import SectionHead from '/src/components/SectionHead';
import { useInView } from "react-intersection-observer";

const SocialLinks = () => {
  const medias = [
    ["facebook.png", "https://www.facebook.com/obsidiandrakee"],
    ["twitter-x.png", "https://x.com/obsidiandrakee"],
    ["discord.png", "https://discordapp.com/users/622288266951131137"],
    ["bluesky.png", "https://bsky.app/profile/obsidiandrake.bsky.social"],
    ["github.png", "https://github.com/ObsidianDrake"],
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
                  src={`/src/assets/images/${media[0]}`}
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
