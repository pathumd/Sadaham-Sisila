new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "1 - Blessings when worshiping the Buddha / මොහොතක් බුදුන් වැඳීමේ පින කොතරම්‍ද",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=13g7Vs79tOkhE44LP9e_VxvlrDwKwrxsx",
          url: "https://drive.google.com/uc?export=download&id=13g7Vs79tOkhE44LP9e_VxvlrDwKwrxsx",
          favorited: false
        },
        {
          name: "2 - How to cultivate Maitreya meditation / මෛත්‍රී භාවනාව මුල සිට වඩනා ආකාරය",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=122NPchas6OSG223Fg1oZaA6_187YtvqO",
          url: "https://drive.google.com/uc?export=download&id=122NPchas6OSG223Fg1oZaA6_187YtvqO",
          favorited: true
        },
        {
          name: "3 - The 17 great anisansa pinkama / මහා කල්ප 17ක් ආනිසංස ලැබෙන පිංකම",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ihrPT1pUtPbLt80ax7Cy6gsdiyJkmb39",
          url: "https://drive.google.com/uc?export=download&id=1ihrPT1pUtPbLt80ax7Cy6gsdiyJkmb39",
          favorited: false
        },
        {
          name: "4 - The lord Buddha still lives today / අදත් බුදු රජාණන් වහන්සේ වැඩසිටින සේක",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1MykGqSXYKBTbYSvjd_OR1HazP4fnHPV-",
          url: "https://drive.google.com/uc?export=download&id=1MykGqSXYKBTbYSvjd_OR1HazP4fnHPV-",
          favorited: false
        },
        {
          name: "5 - The great Satipattana Sutra / මහා සතිපට්‍ඨාන සුත්‍රය",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1C5-W7HfBuTosO8efDmD2HgVW2UW37FOz",
          url: "https://drive.google.com/uc?export=download&id=1C5-W7HfBuTosO8efDmD2HgVW2UW37FOz",
          favorited: true
        },
        {
          name: "6 - The cause of grief / දුකට හෙතුව",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=18HNZDrMjn58XcZYMir1Bq1SmckOk1YM8",
          url: "https://drive.google.com/uc?export=download&id=18HNZDrMjn58XcZYMir1Bq1SmckOk1YM8",
          favorited: false
        },
        {
          name: "7 - To get help from God, stay in these virtues / දෙවියන්ගෙන් පිහිට ලබන්නට නම්‍ මෙි ගුණ ධර්ම වල පිහිටන්න",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=18UKTzua02DAb-R7NvF_QtbO2r3_Bv7LY",
          url: "https://drive.google.com/uc?export=download&id=18UKTzua02DAb-R7NvF_QtbO2r3_Bv7LY",
          favorited: true
        },
        {
          name: "8 - Death Week Meditation / මරණ සති භාවනාව",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=11LtDGVPVIRKGzeYsOChKn0NhNE1ROFxB",
          url: "https://drive.google.com/uc?export=download&id=11LtDGVPVIRKGzeYsOChKn0NhNE1ROFxB",
          favorited: false
        },
        {
          name: "9 - The best way to cleanse the mind / සිත පිරිසිදු කරන මනාවු ක්‍රමය",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Xtbu961LGkzkPE6JfLeEfSDHUhyVIw-m",
          url: "https://drive.google.com/uc?export=download&id=1Xtbu961LGkzkPE6JfLeEfSDHUhyVIw-m",
          favorited: false
        },
        {
          name: "10 - Muni Siripa Varana / මුනි සිරිපා වරැණ",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=16CQchcNn4GMqdeulDv8h2ZvjHiRuBos1",
          url: "https://drive.google.com/uc?export=download&id=16CQchcNn4GMqdeulDv8h2ZvjHiRuBos1",
          favorited: false
        },
        {
          name: "11 - Buddhism that quenches the mind just by hearing / ඇසූ පමණින් සිත නිවීයන බුදුගුණ",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10tYAczeqxgurHoEY-sjUWEZxwLgbuRJY",
          url: "https://drive.google.com/uc?export=download&id=10tYAczeqxgurHoEY-sjUWEZxwLgbuRJY",
          favorited: false
        },
        {
          name: "12 - Benefits of chanting the Karani Metta Sutta 21 times a day / දිනකට 21ක් වතාවක් කරණීය මෙත්ත සූත්‍රය සජ්ජායනාවෙන් ලැබෙන ආනිසංස",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1doU6uJzNWfgX1F8A_ZPK7hLwA7Wg279P",
          url: "https://drive.google.com/uc?export=download&id=1doU6uJzNWfgX1F8A_ZPK7hLwA7Wg279P",
          favorited: false
        },
        {
          name: "13 - For those who seek refuge without being helpless / අසරණ නොවී සරණ සොයන ඔබට",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Mc9rYVIHvVot29LHwXacigTifvB3P6Og",
          url: "https://drive.google.com/uc?export=download&id=1Mc9rYVIHvVot29LHwXacigTifvB3P6Og",
          favorited: false
        },
        {
          name: "14 - What is the value of enlightenment? / සිත පහදවා ගැනීම මොනතරම්‍ වටිනවද?",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1zxT7oPaNGVSmCzXzU3DP92yvtHvGjCTl",
          url: "https://drive.google.com/uc?export=download&id=1zxT7oPaNGVSmCzXzU3DP92yvtHvGjCTl",
          favorited: false
        },
        {
          name: "15 - To pay homage to all the departed Lords / අපවත් වී වදාළ සියළු ස්වාමින් වහන්සේලාට පූණ්‍යානුමෝදනා පිණිස",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1fuS_XmXHJjnSs8v1VcRYKbz3qmGheRrs",
          url: "https://drive.google.com/uc?export=download&id=1fuS_XmXHJjnSs8v1VcRYKbz3qmGheRrs",
          favorited: false
        },
        {
          name: "16 - It is very important for you to ask wisely and see this truth / නුවණින් විමසා මෙි ඇත්ත දකින්න ඔබට ඉතා වැදගත්",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1BIHU2N9gH5Y22ZDe-dhR702BVrnOMTds",
          url: "https://drive.google.com/uc?export=download&id=1BIHU2N9gH5Y22ZDe-dhR702BVrnOMTds",
          favorited: false
        },
        {
          name: "17 - Valuable alms that can be done by the wise / නුවණ තියන අයට කර ගන්න පුළුවන් වටිනා පින්කම්‍",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1IEGzZ5sGMKfQbpNeBgC2nZTQYBPshLXy",
          url: "https://drive.google.com/uc?export=download&id=1IEGzZ5sGMKfQbpNeBgC2nZTQYBPshLXy",
          favorited: false
        },
        {
          name: "18 - The innumerable blessings received from the offering of sal flowers / සල් මල් පූජාවෙන් ලැබුණ අප්‍රමාණ ආනිසංස",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1PttfFiCfvfnOyQ1vVnIeRHKo9U3fNHSl",
          url: "https://drive.google.com/uc?export=download&id=1PttfFiCfvfnOyQ1vVnIeRHKo9U3fNHSl",
          favorited: false
        },
        {
          name: "19 - When thinking of evil thoughts, remember this / අකුසලයට සිත යොමුවන විට මෙසේ සිහි කරන්න",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1M94fA9hiqRHIm6Bxj--iJ9aqAqI4ZeKr",
          url: "https://drive.google.com/uc?export=download&id=1M94fA9hiqRHIm6Bxj--iJ9aqAqI4ZeKr",
          favorited: false
        },
        {
          name: "20 - You will get great protection while chanting these Piriths / මෙි පිරිත සජ්ඣායනා කරන ඔබට විශාල ආරක්ෂාවක් ලැබෙනවා",
          artist: "Ven. Balangoda Radha Thero",
          cover: "img/br_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1B2UJzQQ2IZOsnHpJ1P0XyzzkrStiJDV9",
          url: "https://drive.google.com/uc?export=download&id=1B2UJzQQ2IZOsnHpJ1P0XyzzkrStiJDV9",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.thero_header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.thero_header .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.thero_header .letter',
    opacity: 100,
  });
