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
          name: "1 - How to control the mind / සිත පාලනය කරන්න‍ේ කෙසේ ද?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1V-Gkm2FYNbGWgXDP8JY-oAADyYkUwK2T",
          url: "https://drive.google.com/uc?export=download&id=1V-Gkm2FYNbGWgXDP8JY-oAADyYkUwK2T",
          favorited: false
        },
        {
          name: "2 - Meditation / භාවනා",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ubChJSV1-SYL_H261Oirka6FeuRbXzAX",
          url: "https://drive.google.com/uc?export=download&id=1ubChJSV1-SYL_H261Oirka6FeuRbXzAX",
          favorited: true
        },
        {
          name: "3 - BuddhistTV Dharma Sermon / බෞද්ධ නාලිකා ධර්ම දේශනය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1tOeAJpL0FyQCmONK_pI9bMfNzRcbmCCN",
          url: "https://drive.google.com/uc?export=download&id=1tOeAJpL0FyQCmONK_pI9bMfNzRcbmCCN",
          favorited: false
        },
        {
          name: "4 - Anapana Sathi Bawanawa / ආනාපාන සති භාවනාව",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=17IHnwS_kBisuMn11lZyiPJBgm5RTMYev",
          url: "https://drive.google.com/uc?export=download&id=17IHnwS_kBisuMn11lZyiPJBgm5RTMYev",
          favorited: false
        },
        {
          name: "5 - Why do I feel sorrow? / ඇයි මගේ සිතේ දුක් ඇතිවන්නේ?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1baZE5f37JJd6plurN6gJFgiwmS6Z1nlH",
          url: "https://drive.google.com/uc?export=download&id=1baZE5f37JJd6plurN6gJFgiwmS6Z1nlH",
          favorited: true
        },
        {
          name: "6 - Patama Janethi Sutta / පඨම ජනේති සූත්‍රය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10ija1SmXCtjGZYuTn2iipCmemQpPUpiL",
          url: "https://drive.google.com/uc?export=download&id=10ija1SmXCtjGZYuTn2iipCmemQpPUpiL",
          favorited: false
        },
        {
          name: "7 - Vidarshana dharma sermon / විදර්ශන ධර්ම දේශනය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1_HeSKGtgRDWYmDvuHFV66AF4kh-UzvOa",
          url: "https://drive.google.com/uc?export=download&id=1_HeSKGtgRDWYmDvuHFV66AF4kh-UzvOa",
          favorited: true
        },
        {
          name: "8 - A sowan's nature of mind / සෝවාන් සිතක ස්වබාවය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10Oh1SdVZirudPoCrK2sN_qdL9w1rDyfK",
          url: "https://drive.google.com/uc?export=download&id=10Oh1SdVZirudPoCrK2sN_qdL9w1rDyfK",
          favorited: false
        },
        {
          name: "9 - Death week meditation / මරණානුස්සති භාවනාව",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1W-RB7d4w0_Zt-_Z9GbAv0JT3ydI5Nq65",
          url: "https://drive.google.com/uc?export=download&id=1W-RB7d4w0_Zt-_Z9GbAv0JT3ydI5Nq65",
          favorited: false
        },
        {
          name: "10 - Let us practice to grow in concentration / සමාධීය වඩන්නට පුහුණු වෙමු",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        },
        {
          name: "11 - The final message of the Buddha / බුදුරදුන්ගේ අවසාන පණිවිඩය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1GzmGaJ8lPHkFU-Eu3oVCvhIjM9fercaJ",
          url: "https://drive.google.com/uc?export=download&id=1GzmGaJ8lPHkFU-Eu3oVCvhIjM9fercaJ",
          favorited: false
        },
        {
          name: "12 - The Great Parinibbana Sutra / මහා පරිනිබ්බාන සූත්‍රය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1XVL-YIwMiQio9EDsoFyM_i8bpCD6efrc",
          url: "https://drive.google.com/uc?export=download&id=1XVL-YIwMiQio9EDsoFyM_i8bpCD6efrc",
          favorited: false
        },
        {
          name: "13 - Let us have the will for Nibbana / නිවන සඳහා කැමැත්ත ඇති කරගනිමු",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ZdfMtKL8D5b8RxCfZcNbmpZfaqOzQj8p",
          url: "https://drive.google.com/uc?export=download&id=1ZdfMtKL8D5b8RxCfZcNbmpZfaqOzQj8p",
          favorited: false
        },
        {
          name: "14 - Having a hopeless mind / බලාපොරොත්තු නැති සිතක් ඇතිකර ගැනීම",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1DArbK9Li3hQ5tO8h1pYvvLSdvJCEt5Ua",
          url: "https://drive.google.com/uc?export=download&id=1DArbK9Li3hQ5tO8h1pYvvLSdvJCEt5Ua",
          favorited: false
        },
        {
          name: "15 - Knowing the meaning correctly and acting accordingly / අර්ථය නිවැරදිව දැනගෙන කටයුතු කිරීම",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=11tRHoVN67ajkSbz2lhX492uA1rrxdiu0",
          url: "https://drive.google.com/uc?export=download&id=11tRHoVN67ajkSbz2lhX492uA1rrxdiu0",
          favorited: false
        },
        {
          name: "16 - The benefits of the Anapanasati meditation and solutions to problems / ආනාපානසති භාවනාවේ ප්‍රයෝජන සහ ඇතිවන ගැටළු සඳහා විසඳුම්",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ava46fOJA-SX2GkVB37-5now1QAX01u4",
          url: "https://drive.google.com/uc?export=download&id=1ava46fOJA-SX2GkVB37-5now1QAX01u4",
          favorited: false
        },
        {
          name: "17 - Discussion of Dhamma issues / ධර්ම ගැටලු සාකච්ඡා කිරීම",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1JFFixV003wFyVTrJbwx8lTsUPq0uBF5Z",
          url: "https://drive.google.com/uc?export=download&id=1JFFixV003wFyVTrJbwx8lTsUPq0uBF5Z",
          favorited: false
        },
        {
          name: "18 - Take refuge in yourself / තමන් තමන්ට සරණ වන්න",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1h8Uml9rpqjgQN-NLpHCkY12-gqtYyvfh",
          url: "https://drive.google.com/uc?export=download&id=1h8Uml9rpqjgQN-NLpHCkY12-gqtYyvfh",
          favorited: false
        },
        {
          name: "19 - The only advice the Lord Buddha gave before Parinibbana / බුදුරදුන් පරිනිර්වාණයට පෙර ලබාදුන් එකම අවවාදය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1xzSeU30cD6MpvEkwb28TEu_r4NYx9qEH",
          url: "https://drive.google.com/uc?export=download&id=1xzSeU30cD6MpvEkwb28TEu_r4NYx9qEH",
          favorited: false
        },
        {
          name: "20 - Have you attained Sowan? / ඔබ සොවන්ද? යන්න දැනගන්නා ආකාරය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/uk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1XBObwUJmgilVynjdlVJuzmn_nLe6grsK",
          url: "https://drive.google.com/uc?export=download&id=1XBObwUJmgilVynjdlVJuzmn_nLe6grsK",
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
