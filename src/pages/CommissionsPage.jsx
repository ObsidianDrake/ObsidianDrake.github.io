import React, { useState, useEffect, useRef } from "react";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";
import obsidian_oc from "/src/assets/images/commissions/thumbnails/虎丸_獸設.webp";
import archer from "/src/assets/images/commissions/thumbnails/capella_pera_archer.webp";
import nft from "/src/assets/images/commissions/thumbnails/Kutto_NFT.webp";
import mo_yu_1 from "/src/assets/images/commissions/thumbnails/Mo_Yu_獸與地下城.webp";
import mo_yu_2 from "/src/assets/images/commissions/thumbnails/Mo_Yu_聖誕節.webp";
import pika_sticker from "/src/assets/images/commissions/thumbnails/Pika_貼圖包.webp";
import slow_work_small_q from "/src/assets/images/commissions/thumbnails/Slow.work_小Q人.webp";
import slow_work_angry from "/src/assets/images/commissions/thumbnails/Slow.work_氣到對折.webp";
import tody_1 from "/src/assets/images/commissions/thumbnails/七柚_酒吞童子.webp";
import tody_2 from "/src/assets/images/commissions/thumbnails/七柚_除妖師.webp";
import janet_1 from "/src/assets/images/commissions/thumbnails/伊秋_獸獸鬥片.webp";
import Kaltespur_1 from "/src/assets/images/commissions/thumbnails/冷軌_屁屁.webp";
import Kaltespur_2 from "/src/assets/images/commissions/thumbnails/冷軌_翹屁屁.webp";
import KAi_K_1 from "/src/assets/images/commissions/thumbnails/凱K_富士山.webp";
import benten_1 from "/src/assets/images/commissions/thumbnails/弁天_勇者.webp";
import tai_lei_1 from "/src/assets/images/commissions/thumbnails/拓雷_內褲褲.webp";
import ras_soy_1 from "/src/assets/images/commissions/thumbnails/瑞樹_AppleWatch.webp";
import ras_soy_2 from "/src/assets/images/commissions/thumbnails/瑞樹_MagSafe.webp";
import ras_soy_3 from "/src/assets/images/commissions/thumbnails/瑞樹_杏鮑菇.webp";
import ras_soy_4 from "/src/assets/images/commissions/thumbnails/瑞樹_毛爪號.webp";
import ras_soy_5 from "/src/assets/images/commissions/thumbnails/瑞樹_櫛瓜.webp";
import ras_soy_6 from "/src/assets/images/commissions/thumbnails/瑞樹_萬聖節.webp";
import ras_soy_7 from "/src/assets/images/commissions/thumbnails/瑞樹_躺著.webp";
import ras_soy_8 from "/src/assets/images/commissions/thumbnails/瑞樹_飯友.webp";
import sark_1 from "/src/assets/images/commissions/thumbnails/薩克_驚喜1.webp";
import sabo_1 from "/src/assets/images/commissions/thumbnails/薩波_笨版.webp";
import Raier_1 from "/src/assets/images/commissions/thumbnails/雷邇_吸血鬼.webp";
import Raier_2 from "/src/assets/images/commissions/thumbnails/雷邇_法師.webp";
import FAIER_1 from "/src/assets/images/commissions/thumbnails/音川菲爾_名片.webp";
import telegram_stickers from "/src/assets/images/commissions/thumbnails/telegram_sticker.webp";

// Import full-size images for lightbox
import obsidian_oc_full from "/src/assets/images/commissions/虎丸_獸設.webp";
import archer_full from "/src/assets/images/commissions/capella_pera_archer.webp";
import nft_full from "/src/assets/images/commissions/Kutto_NFT.webp";
import mo_yu_1_full from "/src/assets/images/commissions/Mo_Yu_獸與地下城.webp";
import mo_yu_2_full from "/src/assets/images/commissions/Mo_Yu_聖誕節.webp";
import pika_sticker_full from "/src/assets/images/commissions/Pika_貼圖包.webp";
import slow_work_small_q_full from "/src/assets/images/commissions/Slow.work_小Q人.webp";
import slow_work_angry_full from "/src/assets/images/commissions/Slow.work_氣到對折.webp";
import tody_1_full from "/src/assets/images/commissions/七柚_酒吞童子.webp";
import tody_2_full from "/src/assets/images/commissions/七柚_除妖師.webp";
import janet_1_full from "/src/assets/images/commissions/伊秋_獸獸鬥片.webp";
import Kaltespur_1_full from "/src/assets/images/commissions/冷軌_屁屁.webp";
import Kaltespur_2_full from "/src/assets/images/commissions/冷軌_翹屁屁.webp";
import KAi_K_1_full from "/src/assets/images/commissions/凱K_富士山.webp";
import benten_1_full from "/src/assets/images/commissions/弁天_勇者.webp";
import tai_lei_1_full from "/src/assets/images/commissions/拓雷_內褲褲.webp";
import ras_soy_1_full from "/src/assets/images/commissions/瑞樹_AppleWatch.webp";
import ras_soy_2_full from "/src/assets/images/commissions/瑞樹_MagSafe.webp";
import ras_soy_3_full from "/src/assets/images/commissions/瑞樹_杏鮑菇.webp";
import ras_soy_4_full from "/src/assets/images/commissions/瑞樹_毛爪號.webp";
import ras_soy_5_full from "/src/assets/images/commissions/瑞樹_櫛瓜.webp";
import ras_soy_6_full from "/src/assets/images/commissions/瑞樹_萬聖節.webp";
import ras_soy_7_full from "/src/assets/images/commissions/瑞樹_躺著.webp";
import ras_soy_8_full from "/src/assets/images/commissions/瑞樹_飯友.webp";
import sark_1_full from "/src/assets/images/commissions/薩克_驚喜1.webp";
import sabo_1_full from "/src/assets/images/commissions/薩波_笨版.webp";
import Raier_1_full from "/src/assets/images/commissions/雷邇_吸血鬼.webp";
import Raier_2_full from "/src/assets/images/commissions/雷邇_法師.webp";
import FAIER_1_full from "/src/assets/images/commissions/音川菲爾_名片.webp";
import telegram_stickers_full from "/src/assets/images/commissions/telegram_sticker.webp";

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

// Complete commission data with both thumbnail and full-size images
export const commissionData = [
  {
    id: 1,
    title: "Archer",
    image: archer,
    fullImage: archer_full,
    authorKey: "capella"
  },
  {
    id: 2,
    title: "NFT",
    image: nft,
    fullImage: nft_full,
    authorKey: "Kutto"
  },
  {
    id: 3,
    title: "毛絨聖誕花圈",
    image: mo_yu_2,
    fullImage: mo_yu_2_full,
    authorKey: "MoYu"
  },
  {
    id: 4,
    title: "獸與地下城",
    image: mo_yu_1,
    fullImage: mo_yu_1_full,
    authorKey: "MoYu"
  },
  {
    id: 5,
    title: "氣到對折",
    image: slow_work_angry,
    fullImage: slow_work_angry_full,
    authorKey: "Slow.work"
  },
  {
    id: 6,
    title: "酒吞童子",
    image: tody_1,
    fullImage: tody_1_full,
    authorKey: "七柚"
  },
  {
    id: 7,
    title: "除妖師",
    image: tody_2,
    fullImage: tody_2_full,
    authorKey: "七柚"
  },
  {
    id: 8,
    title: "獸獸鬥片",
    image: janet_1,
    fullImage: janet_1_full,
    authorKey: "伊秋"
  },
  {
    id: 9,
    title: "屁屁",
    image: Kaltespur_1,
    fullImage: Kaltespur_1_full,
    authorKey: "冷軌"
  },
  {
    id: 10,
    title: "翹屁屁",
    image: Kaltespur_2,
    fullImage: Kaltespur_2_full,
    authorKey: "冷軌"
  },
  {
    id: 11,
    title: "Apple Watch",
    image: ras_soy_1,
    fullImage: ras_soy_1_full,
    authorKey: "瑞樹",
    description: "Apple Watch Wallpaper"
  },
  {
    id: 12,
    title: "MagSafe",
    image: ras_soy_2,
    fullImage: ras_soy_2_full,
    authorKey: "瑞樹",
    description: "MagSafe iPhone 透明保護殼"
  },
  {
    id: 13,
    title: "杏鮑菇",
    image: ras_soy_3,
    fullImage: ras_soy_3_full,
    authorKey: "瑞樹"
  },
  {
    id: 14,
    title: "毛爪號",
    image: ras_soy_4,
    fullImage: ras_soy_4_full,
    authorKey: "瑞樹"
  },
  {
    id: 15,
    title: "櫛瓜",
    image: ras_soy_5,
    fullImage: ras_soy_5_full,
    authorKey: "瑞樹"
  },
  {
    id: 16,
    title: "躺著",
    image: ras_soy_7,
    fullImage: ras_soy_7_full,
    authorKey: "瑞樹"
  },
  {
    id: 17,
    title: "飯友",
    image: ras_soy_8,
    fullImage: ras_soy_8_full,
    authorKey: "瑞樹",
  },
  {
    id: 18,
    title: "賴床",
    image: sark_1,
    fullImage: sark_1_full,
    authorKey: "薩克",
  },
  {
    id: 19,
    title: "笨",
    image: sabo_1,
    fullImage: sabo_1_full,
    authorKey: "薩波",
  },
  {
    id: 20,
    title: "吸血鬼",
    image: Raier_1,
    fullImage: Raier_1_full,
    authorKey: "雷邇",
  },
  {
    id: 21,
    title: "法師",
    image: Raier_2,
    fullImage: Raier_2_full,
    authorKey: "雷邇",
  },
  {
    id: 22,
    title: "名片透卡",
    image: FAIER_1,
    fullImage: FAIER_1_full,
    authorKey: "音川菲爾",
  },
  {
    id: 23,
    title: "萬聖節",
    image: ras_soy_6,
    fullImage: ras_soy_6_full,
    authorKey: "瑞樹",
    description: "萬聖節iPhone Wallpaper"
  },
  {
    id: 24,
    title: "Pika貼圖包",
    image: pika_sticker,
    fullImage: pika_sticker_full,
    authorKey: "Pika"
  },
  {
    id: 25,
    title: "內褲褲",
    image: tai_lei_1,
    fullImage: tai_lei_1_full,
    authorKey: "拓雷"
  },
  {
    id: 26,
    title: "富士山",
    image: KAi_K_1,
    fullImage: KAi_K_1_full,
    authorKey: "凱K"
  },
  {
    id: 27,
    title: "小Q人",
    image: slow_work_small_q,
    fullImage: slow_work_small_q_full,
    authorKey: "Slow.work"
  },
  {
    id: 28,
    title: "勇者",
    image: benten_1,
    fullImage: benten_1_full,
    authorKey: "弁天"
  },
  {
    id: 29,
    title: "Telegram貼圖包",
    image: telegram_stickers,
    fullImage: telegram_stickers_full,
    authorKey: "Telegram"
  },
  {
    id: 30,
    title: "Obsidian OC",
    image: obsidian_oc,
    fullImage: obsidian_oc_full,
    authorKey: "虎丸",
    description: "獸設重製"
  },
];

const CommissionsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [sortedCommissions, setSortedCommissions] = useState([]);
  const [visibleCommissions, setVisibleCommissions] = useState([]);
  const [page, setPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);
  const ITEMS_PER_PAGE = 8;

  // 将预加载函数移到useEffect外部，避免循环依赖
  useEffect(() => {
    // Sort commissions by ID in descending order (newest first)
    const sorted = [...commissionData].sort((a, b) => b.id - a.id);
    setSortedCommissions(sorted);
    
    // 立即显示前ITEMS_PER_PAGE张图片
    setVisibleCommissions(sorted.slice(0, ITEMS_PER_PAGE));
    
    // 预加载下一批图片
    const preloadNextBatch = () => {
      const nextBatchStart = ITEMS_PER_PAGE;
      const nextBatchEnd = Math.min(nextBatchStart + ITEMS_PER_PAGE, sorted.length);
      
      for (let i = nextBatchStart; i < nextBatchEnd; i++) {
        if (sorted[i]) {
          const img = new Image();
          img.src = sorted[i].image;
          img.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [sorted[i].id]: true
            }));
          };
        }
      }
    };
    
    // 延迟预加载以避免与初始渲染冲突
    const timer = setTimeout(preloadNextBatch, 1000);

    // 初始化AOS
    AOS.init({
      once: true,
      threshold: 0.02,
      duration: 600,
      easing: 'ease-out-cubic'
    });

    // 清理函数
    return () => {
      clearTimeout(timer);
    };
  }, []); // 空依赖数组，只在组件挂载时运行一次

  useEffect(() => {
    if (!sortedCommissions.length) return; // 防止在sortedCommissions初始化前运行
    
    // Setup Intersection Observer with earlier trigger
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;
            const start = 0;
            const end = nextPage * ITEMS_PER_PAGE;
            
            // 更新可见的commission
            setVisibleCommissions(sortedCommissions.slice(start, end));
            
            // 预加载下一批，但不依赖state更新
            const preloadNextBatch = () => {
              const nextBatchStart = end;
              const nextBatchEnd = Math.min(nextBatchStart + ITEMS_PER_PAGE, sortedCommissions.length);
              
              for (let i = nextBatchStart; i < nextBatchEnd; i++) {
                if (sortedCommissions[i]) {
                  const img = new Image();
                  img.src = sortedCommissions[i].image;
                  img.onload = () => {
                    setImagesLoaded(prev => ({
                      ...prev,
                      [sortedCommissions[i].id]: true
                    }));
                  };
                }
              }
            };
            
            // 使用setTimeout延迟预加载
            setTimeout(preloadNextBatch, 300);
            
            return nextPage;
          });
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '500px' // 更早触发加载
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sortedCommissions]); // 只在sortedCommissions变化时运行

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
          {visibleCommissions.map((commission) => (
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
                  loading="eager"
                  style={{ 
                    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                    transform: 'scale(1)',
                    opacity: imagesLoaded[commission.id] ? 1 : 0.5
                  }}
                  onLoad={() => {
                    setImagesLoaded(prev => ({
                      ...prev,
                      [commission.id]: true
                    }));
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="commission-author">
                  <span>By: {authorsMap[commission.authorKey].name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={loadMoreRef} style={{ height: '50px' }} />
      </div>

      {/* Lightbox for enlarged view */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.fullImage} 
                alt={selectedImage.title} 
                className="lightbox-image"
                onLoad={handleImageLoad}
                style={{ 
                  opacity: imageLoaded ? 1 : 0, 
                  transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: imageLoaded ? 'scale(1)' : 'scale(0.98)',
                  transformOrigin: 'center center'
                }}
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