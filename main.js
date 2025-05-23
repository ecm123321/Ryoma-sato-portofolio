gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ delay: 6 });

if (window.innerWidth >= 1024) {
  // ✅ PC用アニメーション
  tl.fromTo(".site_icon",
    {
      top: "50vh",
      left: "43vw",
      x: "-50%",
      y: "-50%",
      fontSize: "5rem",
    },
    {
      top: "2rem",
      left: "1rem",
      x: "0%",
      y: "0%",
      fontSize: "2rem",
      duration: 2,
      ease: "power2.out"
    }
  );

  tl.from(".spell-a", { left: "3.1rem", duration: 2, ease: "power2.out" }, "<");
  tl.from(".spell-t--fall", { left: "6.7rem", duration: 2, ease: "power2.out" }, "<");
  tl.from(".spell-o", { left: "10.5rem", duration: 2, ease: "power2.out" }, "<");

  tl.to(".spell-t--fall", {
    y: "1.25rem",
    duration: 2,
    ease: "sine.inOut"
  }, "+=0.5");

} else {
  // ✅ SP用アニメーション
  tl.fromTo(".site_icon",
    {
      top: "50vh",
      left: "50vw",
      x: "-50%",
      y: "-50%",
      fontSize: "4rem",
    },
    {
      top: "1.5rem",
      left: "1rem",
      x: "0%",
      y: "0%",
      fontSize: "1.5rem",
      duration: 2,
      ease: "power2.out"
    }
  );

  tl.from(".spell-s", { left: "-5.75rem", duration: 2, ease: "power2.out" }, "<");
  tl.from(".spell-a", { left: "-3.1rem", duration: 2, ease: "power2.out" }, "<");
  tl.from(".spell-t--fall", { left: "-0.1rem", duration: 2, ease: "power2.out" }, "<");
  tl.from(".spell-o", { left: "3rem", duration: 2, ease: "power2.out" }, "<");

  tl.to(".spell-s", { left: "0rem", duration: 2 }, "<");
  tl.to(".spell-a", { left: "0.9rem", duration: 2 }, "<");
  tl.to(".spell-t--fall", { left: "2.1rem", duration: 2 }, "<");
  tl.to(".spell-o", { left: "3.3rem", duration: 2 }, "<");
  tl.to(".spell-t--fall", {
    y: "1rem",
    duration: 2,
    ease: "sine.inOut"
  }, "+=0.5");
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".header_myname", {
  scrollTrigger: {
    trigger: ".header_myname",
    start: "top 60%", // 要素の上端が画面の80%に来たら
    toggleActions: "play none none none",
    once: true // 一度だけ
  },
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "circ.inOut"
});
// ① ふわっと表示（最初のまま）
gsap.to(".animeTitle1", {
  scrollTrigger: {
    trigger: ".animeTitle1",
    start: "top 60%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "sine.inOut",
  overwrite: true
});





gsap.to(".animeTitle2", {
  scrollTrigger: {
    trigger: ".animeTitle2",
    start: "top 60%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "sine.inOut",
  overwrite: true
});
gsap.to(".animeTitle3", {
  scrollTrigger: {
    trigger: ".animeTitle3",
    start: "top 50%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "sine.inOut",
  overwrite: true
});
gsap.to(".animeTitle4", {
  scrollTrigger: {
    trigger: ".animeTitle4",
    start: "top 50%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "sine.inOut",
  overwrite: true
});
gsap.to(".animeTitle5", {
  scrollTrigger: {
    trigger: ".animeTitle5",
    start: "top 30%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 3,
  ease: "sine.inOut",
  overwrite: true
});

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

// 出現 + 固定まとめてタイムラインで管理
const introAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro_txt1  ",
    start: "top 20%",       // 画面中央で発動
    end: "+=500",             // 固定時間
    scrub: true,               // スクロールに応じて動く
    pin: true,                 // ピタッと固定！
    anticipatePin: 0,
  }
});
const introAnim2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro_txt2  ",
    start: "top 60%",       // 画面中央で発動
    end: "+=350",             // 固定時間
    scrub: true,               // スクロールに応じて動く
    pin: true,                 // ピタッと固定！
    anticipatePin: 0,
  }
});
gsap.to(".intro_txt1", {
  scrollTrigger: {
    trigger: ".intro_txt1",
    start: "top 40%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "sine.inOut",
  overwrite: true
});
gsap.to(".intro_txt2", {
  scrollTrigger: {
    trigger: ".intro_txt2",
    start: "top 80%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "sine.inOut",
  overwrite: true
});
// ふわっと出現 → 止まる


gsap.registerPlugin(ScrollTrigger);



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger); // 必須！

  // .pinAnime1 → 画面の80%位置で出現
  gsap.to(".pinAnime1", {
    scrollTrigger: {
      trigger: ".pinAnime1",
      start: "top 65%",
      toggleActions: "play none none none",
      once: true
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "sine.out"
  });

  // .pinAnime2 → 画面の65%位置で出現
  gsap.to(".pinAnime2", {
    scrollTrigger: {
      trigger: ".pinAnime2",
      start: "top 70%",
      toggleActions: "play none none none",
      once: true
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "sine.out"
  });

  // .pinAnime3 → 画面の50%位置で出現（やや早め）
  gsap.to(".pinAnime3", {
    scrollTrigger: {
      trigger: ".pinAnime3",
      start: "top 75%",
      toggleActions: "play none none none",
      once: true
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "sine.out"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 各 .works_list-items に個別でふわっとアニメ
  gsap.utils.toArray(".works_list-items").forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 60%",
        toggleActions: "play none none none",
        once: true
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "sine.out",
      delay: i * 0.2 // 0.2秒ずつディレイ
    });
  });

  gsap.to(".btn_responsive", {
    scrollTrigger: {
      trigger: ".btn",
      start: "top 90%",
      toggleActions: "play none none none",
      once: true
    },
    opacity: 1,
    y: 0,
    duration: 2, // ← 倍の時間
    ease: "sine.out"
  });
});



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // about_contents-topic
  gsap.fromTo(
    ".about_contents-topic",
    {
      opacity: 0,
      y: 30,
      filter: "blur(50px)"
    },
    {
      scrollTrigger: {
        trigger: ".about_contents-topic",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }
  );

  // about_contents-items--txt
  gsap.fromTo(
    ".about_contents-items--txt",
    {
      opacity: 0,
      y: 30,
      filter: "blur(50px)"
    },
    {
      scrollTrigger: {
        trigger: ".about_contents-items--txt",
        start: "top 60%",
        toggleActions: "play none none none",
        once: true
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      delay: 1,
      ease: "power2.out"
    }
  );

  // about_mainVisual img
  gsap.fromTo(
    ".about_mainVisual img",
    {
      opacity: 0,
      y: 30,
      filter: "blur(50px)"
    },
    {
      scrollTrigger: {
        trigger: ".about_mainVisual",
        start: "top 25%",
        toggleActions: "play none none none",
        once: true
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      delay: 2,
      ease: "power2.out"
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // .footer_contents-list をふわっと出す
  gsap.fromTo(
    ".footer_contents-list",
    {
      opacity: 0,
      y: 30,
      filter: "blur(50px)"
    },
    {
      scrollTrigger: {
        trigger: ".footer_contents-list",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 2,
      delay: 2,
      ease: "power2.out"
    }
  );

  // .footer_footer をふわっと出す（やや遅延）
  gsap.fromTo(
    ".footer_footer",
    {
      opacity: 0,
      y: 30,
      filter: "blur(50px)"
    },
    {
      scrollTrigger: {
        trigger: ".footer_footer",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 2,
      delay: 2,
      ease: "power2.out"
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const dots = document.querySelectorAll(".menu-toggle span");
  const menuDotTarget = document.querySelector(".menu_item span");

  let isOpen = false;

  menuToggle.addEventListener("click", () => {
    if (!isOpen) {
      // 1. ドットをターゲット位置に集結
      const targetRect = menuDotTarget.getBoundingClientRect();
      const toggleRect = menuToggle.getBoundingClientRect();

      dots.forEach(dot => {
        const dotRect = dot.getBoundingClientRect();
        const dx = targetRect.left - dotRect.left;
        const dy = targetRect.top - dotRect.top;

        gsap.to(dot, {
          x: dx,
          y: dy,
          scale: 0.5,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      // 2. メニュー表示 & ターゲットドット表示
      menu.classList.add("open");
    } else {
      // 戻す処理
      dots.forEach(dot => {
        gsap.to(dot, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut"
        });
      });

      menu.classList.remove("open");
    }

    isOpen = !isOpen;
  });
});
// ヒーローアニメーション関数
function playHeroAnimation() {
  // スクロール無効化
  document.body.style.overflow = "hidden";

  const tl = gsap.timeline({
    onComplete: () => {
      // アニメーション完了後にスクロール許可
      document.body.style.overflow = "auto";
    }
  });

  tl.from(".hero", {
    y: 0,
    duration: 7,
    ease: "power3.out"
  })
    .to(".site-icon", {
      scale: 1.2,
      duration: 7,
      ease: "back.out(1.7)"
    }, "-=1");
}

document.addEventListener("DOMContentLoaded", playHeroAnimation);
