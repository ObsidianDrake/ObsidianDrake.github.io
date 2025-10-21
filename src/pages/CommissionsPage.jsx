import React, { useState, useEffect, useRef } from "react";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";
import { useTranslation } from '../i18n/LanguageContext';
import { Link } from "react-router-dom";
import LanguageSwitcher from '../components/LanguageSwitcher';
import obsidian_oc from "/src/assets/images/commissions/thumbnails/虎丸_獸設.webp";
import archer from "/src/assets/images/commissions/thumbnails/capella_pera_archer.webp";
import nft from "/src/assets/images/commissions/thumbnails/Kutto_NFT.webp";
import mo_yu_1 from "/src/assets/images/commissions/thumbnails/Mo_Yu_獸與地下城.webp";
import mo_yu_2 from "/src/assets/images/commissions/thumbnails/Mo_Yu_聖誕節.webp";
import pika_sticker from "/src/assets/images/commissions/thumbnails/Pika_貼圖包.webp";
import slow_work_small_q from "/src/assets/images/commissions/thumbnails/Slow.work_小Q人.webp";
import slow_work_angry from "/src/assets/images/commissions/thumbnails/Slow.work_氣到對折.webp";
import slow_work_meat from "/src/assets/images/commissions/thumbnails/Slow.work_肉粽串.webp";
import slow_work_friend from "/src/assets/images/commissions/thumbnails/Slow.work_ともよし.webp";
import slow_work_flight from "/src/assets/images/commissions/thumbnails/Slow.work_flight_ticket.webp";
import tody_1 from "/src/assets/images/commissions/thumbnails/七柚_酒吞童子.webp";
import tody_2 from "/src/assets/images/commissions/thumbnails/七柚_除妖師.webp";
import janet_1 from "/src/assets/images/commissions/thumbnails/伊秋_獸獸鬥片.webp";
import Kaltespur_1 from "/src/assets/images/commissions/thumbnails/冷軌_屁屁.webp";
import Kaltespur_2 from "/src/assets/images/commissions/thumbnails/冷軌_翹屁屁.webp";
import KAi_K_1 from "/src/assets/images/commissions/thumbnails/凱K_富士山.webp";
import benten_1 from "/src/assets/images/commissions/thumbnails/弁天_勇者.webp";
import tai_lei_1 from "/src/assets/images/commissions/thumbnails/拓雷_內褲褲.webp";
import ras_soy_1 from "/src/assets/images/commissions/thumbnails/瑞樹_AppleWatch.webp";
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
import guruminn_1 from "/src/assets/images/commissions/thumbnails/guruminn_1.webp";
import guruminn_2 from "/src/assets/images/commissions/thumbnails/guruminn_2.webp";
import guruminn_3 from "/src/assets/images/commissions/thumbnails/guruminn_3.webp";
import kogi_mordekaiser from "/src/assets/images/commissions/thumbnails/Kogi_Mordekaiser.webp";
import makotoo_tennis from "/src/assets/images/commissions/thumbnails/マコトウ_打網球.webp";

// Import full-size images for lightbox
import obsidian_oc_full from "/src/assets/images/commissions/虎丸_獸設.webp";
import archer_full from "/src/assets/images/commissions/capella_pera_archer.webp";
import nft_full from "/src/assets/images/commissions/Kutto_NFT.webp";
import mo_yu_1_full from "/src/assets/images/commissions/Mo_Yu_獸與地下城.webp";
import mo_yu_2_full from "/src/assets/images/commissions/Mo_Yu_聖誕節.webp";
import pika_sticker_full from "/src/assets/images/commissions/Pika_貼圖包.webp";
import slow_work_small_q_full from "/src/assets/images/commissions/Slow.work_小Q人.webp";
import slow_work_angry_full from "/src/assets/images/commissions/Slow.work_氣到對折.webp";
import slow_work_meat_full from "/src/assets/images/commissions/Slow.work_肉粽串.webp";
import slow_work_friend_full from "/src/assets/images/commissions/Slow.work_ともよし.webp";
import slow_work_flight_full from "/src/assets/images/commissions/Slow.work_flight_ticket.webp";
import tody_1_full from "/src/assets/images/commissions/七柚_酒吞童子.webp";
import tody_2_full from "/src/assets/images/commissions/七柚_除妖師.webp";
import janet_1_full from "/src/assets/images/commissions/伊秋_獸獸鬥片.webp";
import Kaltespur_1_full from "/src/assets/images/commissions/冷軌_屁屁.webp";
import Kaltespur_2_full from "/src/assets/images/commissions/冷軌_翹屁屁.webp";
import KAi_K_1_full from "/src/assets/images/commissions/凱K_富士山.webp";
import benten_1_full from "/src/assets/images/commissions/弁天_勇者.webp";
import tai_lei_1_full from "/src/assets/images/commissions/拓雷_內褲褲.webp";
import ras_soy_1_full from "/src/assets/images/commissions/瑞樹_AppleWatch.webp";
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
import guruminn_1_full from "/src/assets/images/commissions/guruminn_1.webp";
import guruminn_2_full from "/src/assets/images/commissions/guruminn_2.webp";
import guruminn_3_full from "/src/assets/images/commissions/guruminn_3.webp";
import kogi_mordekaiser_full from "/src/assets/images/commissions/Kogi_Mordekaiser.webp";
import makotoo_tennis_full from "/src/assets/images/commissions/マコトウ_打網球.webp";

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
    url: "https://slow.work/"
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
  "ぐるみん": {
    name: "ぐるみん",
    url: "https://x.com/guruminn_M"
  },
  "Kogi": {
    name: "Kogi",
    url: "https://ko-fi.com/c/3ddc03fd98"
  },
  "マコトウ": {
    name: "マコトウ",
    url: "https://x.com/mako_makotoo"
  },
};

// Complete commission data with both thumbnail and full-size images
export const commissionData = [
  {
    title: "黑曜石 獸設",
    image: obsidian_oc,
    fullImage: obsidian_oc_full,
    authorKey: "虎丸",
    description: "獸設重製"
  },
  {
    title: "Telegram貼圖包",
    image: telegram_stickers,
    fullImage: telegram_stickers_full,
    authorKey: "Telegram"
  },
  {
    image: makotoo_tennis,
    fullImage: makotoo_tennis_full,
    authorKey: "マコトウ"
  },
  {
    title: "麻吉阿魯巴!!",
    image: slow_work_friend,
    fullImage: slow_work_friend_full,
    authorKey: "Slow.work",
    description: "銀太 チビシロン 黑月影狼"
  },
  {
    title: "氣到對折",
    image: slow_work_angry,
    fullImage: slow_work_angry_full,
    authorKey: "Slow.work"
  },
  {
    title: "魔鬥黑曜龍",
    image: kogi_mordekaiser,
    fullImage: kogi_mordekaiser_full,
    authorKey: "Kogi",
    description: "參考英雄聯盟造型-魔鬥凱薩 死灰墓騎"
  },
  {
    title: "勇者",
    image: benten_1,
    fullImage: benten_1_full,
    authorKey: "弁天"
  },
  {
    title: "名片",
    image: FAIER_1,
    fullImage: FAIER_1_full,
    authorKey: "音川菲爾",
    description: "名片透卡"
  },
  {
    title: "內褲褲",
    image: tai_lei_1,
    fullImage: tai_lei_1_full,
    authorKey: "拓雷"
  },
  {
    title: "萬聖節",
    image: ras_soy_6,
    fullImage: ras_soy_6_full,
    authorKey: "瑞樹",
    description: "萬聖節iPhone Wallpaper"
  },
  {
    image: guruminn_3,
    fullImage: guruminn_3_full,
    authorKey: "ぐるみん",
    description: "結婚三週年委託"
  },
  {
    image: slow_work_flight,
    fullImage: slow_work_flight_full,
    authorKey: "Slow.work",
    description: "買機票囉"
  },
  {
    title: "富士山",
    image: KAi_K_1,
    fullImage: KAi_K_1_full,
    authorKey: "凱K",
    description: "與火柴神父合作委託"
  },
  {
    title: "端午節肉粽串",
    image: slow_work_meat,
    fullImage: slow_work_meat_full,
    authorKey: "Slow.work"
  },
  {
    title: "小Q人",
    image: slow_work_small_q,
    fullImage: slow_work_small_q_full,
    authorKey: "Slow.work"
  },
  {
    image: guruminn_1,
    fullImage: guruminn_1_full,
    authorKey: "ぐるみん",
  },
  {
    image: guruminn_2,
    fullImage: guruminn_2_full,
    authorKey: "ぐるみん",
  },
  {
    title: "笨",
    image: sabo_1,
    fullImage: sabo_1_full,
    authorKey: "薩波",
  },
  {
    image: sark_1,
    fullImage: sark_1_full,
    authorKey: "薩克",
    description: "驚喜包委託"
  },
  {
    title: "飯友",
    image: ras_soy_8,
    fullImage: ras_soy_8_full,
    authorKey: "瑞樹",
  },
  {
    image: ras_soy_7,
    fullImage: ras_soy_7_full,
    authorKey: "瑞樹"
  },
  {
    title: "我眼裡的黑曜石",
    image: ras_soy_1,
    fullImage: ras_soy_1_full,
    authorKey: "瑞樹",
    description: "Apple Watch Wallpaper"
  },
  {
    title: "Pika貼圖包",
    image: pika_sticker,
    fullImage: pika_sticker_full,
    authorKey: "Pika"
  },
  {
    title: "法師",
    image: Raier_2,
    fullImage: Raier_2_full,
    authorKey: "雷邇",
    description: "獸無限-獸與地下城主題名牌"
  },
  {
    title: "吸血鬼",
    image: Raier_1,
    fullImage: Raier_1_full,
    authorKey: "雷邇",
    description: "以茶會毛-百毛夜行主題名牌"
  },
  {
    title: "我最愛吃的櫛瓜",
    image: ras_soy_5,
    fullImage: ras_soy_5_full,
    authorKey: "瑞樹"
  },
  {
    title: "毛爪號",
    image: ras_soy_4,
    fullImage: ras_soy_4_full,
    authorKey: "瑞樹"
  },
  {
    title: "杏鮑菇也很好吃",
    image: ras_soy_3,
    fullImage: ras_soy_3_full,
    authorKey: "瑞樹"
  },
  {
    title: "翹屁屁",
    image: Kaltespur_2,
    fullImage: Kaltespur_2_full,
    authorKey: "冷軌"
  },
  {
    title: "屁屁",
    image: Kaltespur_1,
    fullImage: Kaltespur_1_full,
    authorKey: "冷軌"
  },
  {
    title: "獸獸鬥片",
    image: janet_1,
    fullImage: janet_1_full,
    authorKey: "伊秋"
  },
  {
    title: "除妖師",
    image: tody_2,
    fullImage: tody_2_full,
    authorKey: "七柚"
  },
  {
    title: "酒吞童子",
    image: tody_1,
    fullImage: tody_1_full,
    authorKey: "七柚"
  },
  {
    title: "獸與地下城",
    image: mo_yu_1,
    fullImage: mo_yu_1_full,
    authorKey: "MoYu"
  },
  {
    title: "毛絨聖誕花圈",
    image: mo_yu_2,
    fullImage: mo_yu_2_full,
    authorKey: "MoYu"
  },
  {
    title: "NFT",
    image: nft,
    fullImage: nft_full,
    authorKey: "Kutto"
  },
  {
    title: "Archer",
    image: archer,
    fullImage: archer_full,
    authorKey: "capella"
  }
];

const CommissionsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [sortedCommissions, setSortedCommissions] = useState([]);
  const [visibleCommissions, setVisibleCommissions] = useState([]);
  const [page, setPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);
  const ITEMS_PER_PAGE = 8;
  const { t } = useTranslation();

  // 監聽滾動以決定是否顯示回到頂部按鈕
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 回到頂部功能
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Move preload function into useEffect to avoid circular dependencies
  useEffect(() => {
    // Use the original order of the array
    setSortedCommissions([...commissionData]);
    
    // Display the first ITEMS_PER_PAGE images immediately
    setVisibleCommissions(commissionData.slice(0, ITEMS_PER_PAGE));
    
    // Preload the next batch of images
    const preloadNextBatch = () => {
      const nextBatchStart = ITEMS_PER_PAGE;
      const nextBatchEnd = Math.min(nextBatchStart + ITEMS_PER_PAGE, commissionData.length);
      
      for (let i = nextBatchStart; i < nextBatchEnd; i++) {
        if (commissionData[i]) {
          const img = new Image();
          img.src = commissionData[i].image;
          img.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [i]: true
            }));
          };
        }
      }
    };
    
    // Delay preloading to avoid conflict with initial rendering
    const timer = setTimeout(preloadNextBatch, 1000);

    // Initialize AOS
    AOS.init({
      once: true,
      threshold: 0.02,
      duration: 600,
      easing: 'ease-out-cubic'
    });

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array, runs only once when component mounts

  useEffect(() => {
    if (!sortedCommissions.length) return; // Prevent running before sortedCommissions is initialized
    
    // Setup Intersection Observer with earlier trigger
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;
            const start = 0;
            const end = nextPage * ITEMS_PER_PAGE;
            
            // Update visible commissions
            setVisibleCommissions(sortedCommissions.slice(start, end));
            
            // Preload next batch without dependency on state update
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
                      [i]: true
                    }));
                  };
                }
              }
            };
            
            // Use setTimeout to delay preloading
            setTimeout(preloadNextBatch, 300);
            
            return nextPage;
          });
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '500px' // Trigger loading earlier
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
  }, [sortedCommissions]); // Only runs when sortedCommissions changes

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
    <div className="commissions-page even">
      <LanguageSwitcher />

      {/* 回到首頁按鈕 */}
      <Link to="/" className="back-to-home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>{t.commissionsPage.backToHome || "Back to Home"}</span>
      </Link>

      <div className="container">
        <SectionHead title={t.commissionsPage.title} />
        <p className="commissions-intro">
          {t.commissionsPage.intro.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="commission-grid" data-aos="fade-up">
          {visibleCommissions.map((commission, index) => (
            <div 
              key={index} 
              className="commission-item"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
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
                    opacity: imagesLoaded[index] ? 1 : 0.5
                  }}
                  onLoad={() => {
                    setImagesLoaded(prev => ({
                      ...prev,
                      [index]: true
                    }));
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="commission-author">
                  <span>{t.commission.by}: {authorsMap[commission.authorKey].name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={loadMoreRef} style={{ height: '50px' }} />
      </div>

      {/* 回到頂部按鈕 */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

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
                <span className="author-label">{t.commissionsPage.artist}:</span>
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
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                <path 
                  d="M15 1L1 15M1 1L15 15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionsPage; 