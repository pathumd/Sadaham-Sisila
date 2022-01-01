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
          name: "1 - Vesak Poya Bana / වෙසක් පෝයා ධර්ම දේශනය",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1G_k4Yo1lVtKltgPFyGDdN2yy6zcnMyxu",
          url: "https://drive.google.com/uc?export=download&id=1G_k4Yo1lVtKltgPFyGDdN2yy6zcnMyxu",
          favorited: false
        },
        {
          name: "2 - Poson Poya Bana / පොසන් පොයා ධර්ම දේශනය",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1jEPul91A15CyOhpIFZ1yuvgoSVJ7Wu5S",
          url: "https://drive.google.com/uc?export=download&id=1jEPul91A15CyOhpIFZ1yuvgoSVJ7Wu5S",
          favorited: true
        },
        {
          name: "3 - The phone that influences powerful psychics / බලවත්වූ මනෝ කර්මයන්ට බලපාන දුරකතනය",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1DNkWz3ZOz_k8r8WRcfMEW-Ns6UY_Tmd4",
          url: "https://drive.google.com/uc?export=download&id=1DNkWz3ZOz_k8r8WRcfMEW-Ns6UY_Tmd4",
          favorited: false
        },
        {
          name: "4 - Raise a beautiful doctrine through the corona / කොරෝනාව තුළින් සුන්දර ධර්මයක් මතුකරගන්න",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o9sy560Qn9IfW-FD49SmcneEkNAh6zPK",
          url: "https://drive.google.com/uc?export=download&id=1o9sy560Qn9IfW-FD49SmcneEkNAh6zPK",
          favorited: false
        },
        {
          name: "5 - Dharma discussion at University of Paradeniya / පරදේනියා විශ්ව විද්‍යාලයේ ධර්ම සාකච්ඡාව",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1rLkQZf7suxAHLMA0JzUYzhm6GgZHpMIP",
          url: "https://drive.google.com/uc?export=download&id=1rLkQZf7suxAHLMA0JzUYzhm6GgZHpMIP",
          favorited: true
        },
        {
          name: "6 - If you hear this, you will be impatient / මෙය ඇසුවොත්, ඔබ අප්‍රමාදී වේවි",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=15y5MAOxYEQgmXx4w4sc9DUuHVevUTyBg",
          url: "https://drive.google.com/uc?export=download&id=15y5MAOxYEQgmXx4w4sc9DUuHVevUTyBg",
          favorited: false
        },
        {
          name: "7 - Dhamma discussion held at Budugalle / බුදුගල්ලෙනදී පැවති ධර්ම සාකච්ඡාව",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1FEnoatGukACh-YO6Dr06ft8Q2GSsNi60",
          url: "https://drive.google.com/uc?export=download&id=1FEnoatGukACh-YO6Dr06ft8Q2GSsNi60",
          favorited: true
        },
        {
          name: "8 - Identifying the right things in a world full of everything / සියල්ලෙන් පිරුණු ලෝකය තුල නිවැරදි දේ හදුනාගැනීම",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1PsFqPyZP_u1PL0J4f8GNg8rEVwhHxt0q",
          url: "https://drive.google.com/uc?export=download&id=1PsFqPyZP_u1PL0J4f8GNg8rEVwhHxt0q",
          favorited: false
        },
        {
          name: "9 - What the truth is hidden from - සත්වයා කුමකින් වැසි තිබෙිද",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1i2UycOvT4CUI1_RWz-XsLs7HL8xTMGbk",
          url: "https://drive.google.com/uc?export=download&id=1i2UycOvT4CUI1_RWz-XsLs7HL8xTMGbk",
          favorited: false
        },
        {
          name: "10 - The evil mind is overbearing / අකුසල සිත් ආතිවාන්නි අයියි",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1HWaF-anfj-Iqci_okrc0tZ89y5uvN93m",
          url: "https://drive.google.com/uc?export=download&id=1HWaF-anfj-Iqci_okrc0tZ89y5uvN93m",
          favorited: false
        },
        {
          name: "11 - Pansil Maluwa 2021/12/19 / පන්සිල් මළුව 2021/12/19",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1cb7VeeUC7oEl0lVf4G5l9Pp2i231LK1f",
          url: "https://drive.google.com/uc?export=download&id=1cb7VeeUC7oEl0lVf4G5l9Pp2i231LK1f",
          favorited: false
        },
        {
          name: "12 - Vidarshana Rathriya 2021/12/18 / විදර්ශනා රාත්‍රිය 2021/12/18",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1k3C6UYX55HD2VwCYn8uQgDVfNM2DPTFi",
          url: "https://drive.google.com/uc?export=download&id=1k3C6UYX55HD2VwCYn8uQgDVfNM2DPTFi",
          favorited: false
        },
        {
          name: "13 - Pansil Maluwa 2021/11/21 / පන්සිල් මළුව 2021/11/21",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10EjOLVwOJo8GyXVmri-DyfErPmncum2F",
          url: "https://drive.google.com/uc?export=download&id=10EjOLVwOJo8GyXVmri-DyfErPmncum2F",
          favorited: false
        },
        {
          name: "14 - Vidarshana Rathriya 2021/10/20 / විදර්ශනා රාත්‍රිය 2021/10/20",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=154ZhTerqClysDFmyJWcSAiCYQB7e5hxV",
          url: "https://drive.google.com/uc?export=download&id=154ZhTerqClysDFmyJWcSAiCYQB7e5hxV",
          favorited: false
        },
        {
          name: "15 - Pansil Maluwa 2021/10/17 / පන්සිල් මළුව 2021/10/17",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Z6k_RkXo2wowp1E1sELtjCtYuWUE58H8",
          url: "https://drive.google.com/uc?export=download&id=1Z6k_RkXo2wowp1E1sELtjCtYuWUE58H8",
          favorited: false
        },
        {
          name: "16 - Pansil Maluwa 2021/09/19 / පන්සිල් මළුව 2021/09/19",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1BG4D-1nThuuU-Ms1r3ArCp-ZjCAGuiBp",
          url: "https://drive.google.com/uc?export=download&id=1BG4D-1nThuuU-Ms1r3ArCp-ZjCAGuiBp",
          favorited: false
        },
        {
          name: "17 - Walking meditation / සක්මන් භාවනාව නිවැරදිව වඩනා ආකාරය සහ ථීනමිද්දය දුරු කිරීම",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10M2zq4HtOPSx6XohKbrjWyiLCdWpxj8D",
          url: "https://drive.google.com/uc?export=download&id=10M2zq4HtOPSx6XohKbrjWyiLCdWpxj8D",
          favorited: false
        },
        {
          name: "18 - Do not fall into the trap of inspiration / ආශ්වාදයේ අන්තයට හසු නොවන්න",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1CRfBcwSkLjMCOfyCcAliUEUVk4gVUXYL",
          url: "https://drive.google.com/uc?export=download&id=1CRfBcwSkLjMCOfyCcAliUEUVk4gVUXYL",
          favorited: false
        },
        {
          name: "19 - A signal of light / ආලෝක සංඥාව",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1EoTwEDky40xgYt7IISYZ0LVEjp41-atT",
          url: "https://drive.google.com/uc?export=download&id=1EoTwEDky40xgYt7IISYZ0LVEjp41-atT",
          favorited: false
        },
        {
          name: "20 - Samma concepts / සම්මා සංකප්ප",
          artist: "Rajagiriye Ariyagnana Thero",
          cover: "img/ra_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1qNetUXRSg7dhtBrZEJAYwxcn_p1h3_Vg",
          url: "https://drive.google.com/uc?export=download&id=1qNetUXRSg7dhtBrZEJAYwxcn_p1h3_Vg",
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
