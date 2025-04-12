import React, { useState, useEffect } from "react";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";
import obsidian_oc from "/src/assets/images/commissions/虎丸_獸設.webp";
import archer from "/src/assets/images/commissions/capella_pera_archer.webp";
import nft from "/src/assets/images/commissions/Kutto_NFT.webp";
import mo_yu_1 from "/src/assets/images/commissions/Mo_Yu_獸與地下城.webp";
import mo_yu_2 from "/src/assets/images/commissions/Mo_Yu_聖誕節.webp";
import pika_sticker from "/src/assets/images/commissions/Pika_貼圖包.webp";
import slow_work_small_q from "/src/assets/images/commissions/Slow.work_小Q人.webp";
import slow_work_angry from "/src/assets/images/commissions/Slow.work_氣到對折.webp";
import tody_1 from "/src/assets/images/commissions/七柚_酒吞童子.webp";
import tody_2 from "/src/assets/images/commissions/七柚_除妖師.webp";
import janet_1 from "/src/assets/images/commissions/伊秋_獸獸鬥片.webp";
import Kaltespur_1 from "/src/assets/images/commissions/冷軌_屁屁.webp";
import Kaltespur_2 from "/src/assets/images/commissions/冷軌_翹屁屁.webp";
import KAi_K_1 from "/src/assets/images/commissions/凱K_富士山.webp";
import benten_1 from "/src/assets/images/commissions/弁天_勇者.webp";
import tai_lei_1 from "/src/assets/images/commissions/拓雷_內褲褲.webp";
import ras_soy_1 from "/src/assets/images/commissions/瑞樹_AppleWatch.webp";
import ras_soy_2 from "/src/assets/images/commissions/瑞樹_MagSafe.webp";
import ras_soy_3 from "/src/assets/images/commissions/瑞樹_杏鮑菇.webp";
import ras_soy_4 from "/src/assets/images/commissions/瑞樹_毛爪號.webp";
import ras_soy_5 from "/src/assets/images/commissions/瑞樹_櫛瓜.webp";
import ras_soy_6 from "/src/assets/images/commissions/瑞樹_萬聖節.webp";
import ras_soy_7 from "/src/assets/images/commissions/瑞樹_躺著.webp";
import ras_soy_8 from "/src/assets/images/commissions/瑞樹_飯友.webp";
import sark_1 from "/src/assets/images/commissions/薩克_驚喜1.webp";
import sabo_1 from "/src/assets/images/commissions/薩波_笨版.webp";
import Raier_1 from "/src/assets/images/commissions/雷邇_吸血鬼.webp";
import Raier_2 from "/src/assets/images/commissions/雷邇_法師.webp";
import FAIER_1 from "/src/assets/images/commissions/音川菲爾_名片.webp";
import telegram_stickers from "/src/assets/images/commissions/telegram_sticker.webp";
// Authors map with name and url
export const authorsMap = {
  "虎丸": {
    name: "虎丸",
    url: "https://www.facebook.com/profile.php?id=100005278380992"
  },
  "capella": {
    name: "capella",
    url: "https://x.com/capella_pera"
  },
  "Kutto": {
    name: "Kutto",
    url: "https://x.com/kuttoyaki"
  },
  "MoYu": {
    name: "Mo Yu",
    url: "https://www.facebook.com/yu.mo.90663"
  },
  "Pika": {
    name: "Pika",
    url: "https://www.facebook.com/profile.php?id=100092034562102"
  },
  "Slow.work": {
    name: "Slow.work",
    url: "https://www.facebook.com/slow.work.x"
  },
  "七柚": {
    name: "七柚",
    url: "https://www.facebook.com/profile.php?id=100025242585561"
  },
  "伊秋": {
    name: "伊秋",
    url: "https://www.facebook.com/janet.tse.30"
  },
  "冷軌": {
    name: "冷軌",
    url: "https://www.facebook.com/ksp200439"
  },
  "凱K": {
    name: "凱K",
    url: "https://www.facebook.com/oscar.chang.79274"
  },
  "弁天": {
    name: "弁天",
    url: "https://www.facebook.com/pukapukamode"
  },
  "拓雷": {
    name: "拓雷",
    url: "https://www.facebook.com/profile.php?id=100036810739744"
  },
  "瑞樹": {
    name: "瑞樹",
    url: "https://www.facebook.com/ruishuowo"
  },
  "薩克": {
    name: "薩克",
    url: "https://www.facebook.com/SARKthewolf"
  },
  "薩波": {
    name: "薩波",
    url: "https://www.facebook.com/profile.php?id=61566551514391"
  },
  "雷邇": {
    name: "雷邇",
    url: "https://www.facebook.com/CatAndPikachuRaier"
  },
  "音川菲爾": {
    name: "音川菲爾",
    url: "https://www.facebook.com/profile.php?id=100011879237722"
  },
  "Telegram": {
    name: "Telegram貼圖包",
    url: "https://t.me/addstickers/ObsidianVideoPersonal"
  },
};

// Complete commission data
export const commissionData = [
  {
    id: 1,
    title: "Archer",
    image: archer,
    authorKey: "capella"
  },
  {
    id: 2,
    title: "NFT",
    image: nft,
    authorKey: "Kutto"
  },
  {
    id: 3,
    title: "毛絨聖誕花圈",
    image: mo_yu_2,
    authorKey: "MoYu"
  },
  {
    id: 4,
    title: "獸與地下城",
    image: mo_yu_1,
    authorKey: "MoYu"
  },
  {
    id: 5,
    title: "氣到對折",
    image: slow_work_angry,
    authorKey: "Slow.work"
  },
  {
    id: 6,
    title: "酒吞童子",
    image: tody_1,
    authorKey: "七柚"
  },
  {
    id: 7,
    title: "除妖師",
    image: tody_2,
    authorKey: "七柚"
  },
  {
    id: 8,
    title: "獸獸鬥片",
    image: janet_1,
    authorKey: "伊秋"
  },
  {
    id: 9,
    title: "屁屁",
    image: Kaltespur_1,
    authorKey: "冷軌"
  },
  {
    id: 10,
    title: "翹屁屁",
    image: Kaltespur_2,
    authorKey: "冷軌"
  },
  {
    id: 11,
    title: "Apple Watch",
    image: ras_soy_1,
    authorKey: "瑞樹",
    description: "Apple Watch Wallpaper"
  },
  {
    id: 12,
    title: "MagSafe",
    image: ras_soy_2,
    authorKey: "瑞樹",
    description: "MagSafe iPhone 透明保護殼"
  },
  {
    id: 13,
    title: "杏鮑菇",
    image: ras_soy_3,
    authorKey: "瑞樹"
  },
  {
    id: 14,
    title: "毛爪號",
    image: ras_soy_4,
    authorKey: "瑞樹"
  },
  {
    id: 15,
    title: "櫛瓜",
    image: ras_soy_5,
    authorKey: "瑞樹"
  },
  {
    id: 16,
    title: "躺著",
    image: ras_soy_7,
    authorKey: "瑞樹"
  },
  {
    id: 17,
    title: "飯友",
    image: ras_soy_8,
    authorKey: "瑞樹",
  },
  {
    id: 18,
    title: "賴床",
    image: sark_1,
    authorKey: "薩克",
  },
  {
    id: 19,
    title: "笨",
    image: sabo_1,
    authorKey: "薩波",
  },
  {
    id: 20,
    title: "吸血鬼",
    image: Raier_1,
    authorKey: "雷邇",
  },
  {
    id: 21,
    title: "法師",
    image: Raier_2,
    authorKey: "雷邇",
  },
  {
    id: 22,
    title: "名片透卡",
    image: FAIER_1,
    authorKey: "音川菲爾",
  },
  {
    id: 23,
    title: "萬聖節",
    image: ras_soy_6,
    authorKey: "瑞樹",
    description: "萬聖節iPhone Wallpaper"
  },
  {
    id: 24,
    title: "Pika貼圖包",
    image: pika_sticker,
    authorKey: "Pika"
  },
  {
    id: 25,
    title: "內褲褲",
    image: tai_lei_1,
    authorKey: "拓雷"
  },
  {
    id: 26,
    title: "富士山",
    image: KAi_K_1,
    authorKey: "凱K"
  },
  {
    id: 27,
    title: "小Q人",
    image: slow_work_small_q,
    authorKey: "Slow.work"
  },
  {
    id: 28,
    title: "勇者",
    image: benten_1,
    authorKey: "弁天"
  },
  {
    id: 29,
    title: "Telegram貼圖包",
    image: telegram_stickers,
    authorKey: "Telegram"
  },
  {
    id: 30,
    title: "Obsidian OC",
    image: obsidian_oc,
    authorKey: "虎丸",
    description: "獸設重製"
  },
];

const CommissionsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [sortedCommissions, setSortedCommissions] = useState([]);
  
  useEffect(() => {
    // Sort commissions by ID in descending order (newest first)
    const sorted = [...commissionData].sort((a, b) => b.id - a.id);
    setSortedCommissions(sorted);

    // Initialize AOS
    AOS.init({
      once: true,
      threshold: 0.05,
      duration: 800,
    });
  }, []);

  const openLightbox = (commission) => {
    setSelectedImage(commission);
    setImageLoaded(false);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleAuthorClick = (e, url) => {
    e.stopPropagation(); // Prevent opening the lightbox when clicking author link
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && selectedImage) {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedImage]);

  return (
    <div className="commissions-page">
      <div className="container">
        <SectionHead title="Commissions" />
        <p className="commissions-intro">
          Here you can find all the commissioned artwork I've received from various talented artists.
        </p>
        <div className="commission-grid" data-aos="fade-up">
          {sortedCommissions.map((commission) => (
            <div 
              key={commission.id} 
              className="commission-item"
              data-aos="fade-up"
              data-aos-delay={100 * (commission.id % 3)}
              onClick={() => openLightbox(commission)}
            >
              <div className="commission-card">
                <img 
                  src={commission.image} 
                  alt={commission.title} 
                  className="commission-image"
                  loading="lazy"
                />
                <div className="commission-author">
                  <span>By: {authorsMap[commission.authorKey].name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for enlarged view */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="lightbox-image"
                onLoad={handleImageLoad}
                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <div className="lightbox-author">
                <span className="author-label">Artist:</span>
                <a 
                  href={authorsMap[selectedImage.authorKey].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-name"
                >
                  {authorsMap[selectedImage.authorKey].name}
                </a>
              </div>
              <p className="lightbox-description">{selectedImage.description}</p>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionsPage; 