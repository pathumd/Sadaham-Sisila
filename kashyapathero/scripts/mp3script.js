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
          name: "1. How to control the mind / සිත පාලනය කරන්න‍ේ කෙසේ ද?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1V-Gkm2FYNbGWgXDP8JY-oAADyYkUwK2T",
          url: "https://drive.google.com/uc?export=download&id=1V-Gkm2FYNbGWgXDP8JY-oAADyYkUwK2T",
          favorited: false
        },
        {
          name: "2. Meditation / භාවනා",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ubChJSV1-SYL_H261Oirka6FeuRbXzAX",
          url: "https://drive.google.com/uc?export=download&id=1ubChJSV1-SYL_H261Oirka6FeuRbXzAX",
          favorited: true
        },
        {
          name: "3. BuddhistTV Dharma Sermon / බෞද්ධ නාලිකා ධර්ම දේශනය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1tOeAJpL0FyQCmONK_pI9bMfNzRcbmCCN",
          url: "https://drive.google.com/uc?export=download&id=1tOeAJpL0FyQCmONK_pI9bMfNzRcbmCCN",
          favorited: false
        },
        {
          name: "4. Anapana Sathi Bawanawa / ආනාපාන සති භාවනාව",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=17IHnwS_kBisuMn11lZyiPJBgm5RTMYev",
          url: "https://drive.google.com/uc?export=download&id=17IHnwS_kBisuMn11lZyiPJBgm5RTMYev",
          favorited: false
        },
        {
          name: "5. Why do I feel sorrow? / ඇයි මගේ සිතේ දුක් ඇතිවන්නේ?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1baZE5f37JJd6plurN6gJFgiwmS6Z1nlH",
          url: "https://drive.google.com/uc?export=download&id=1baZE5f37JJd6plurN6gJFgiwmS6Z1nlH",
          favorited: true
        },
        {
          name: "6. Patama Janethi Sutta / පඨම ජනේති සූත්‍රය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10ija1SmXCtjGZYuTn2iipCmemQpPUpiL",
          url: "https://drive.google.com/uc?export=download&id=10ija1SmXCtjGZYuTn2iipCmemQpPUpiL",
          favorited: false
        },
        {
          name: "7. Vidarshana dharma sermon / විදර්ශන ධර්ම දේශනය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1_HeSKGtgRDWYmDvuHFV66AF4kh-UzvOa",
          url: "https://drive.google.com/uc?export=download&id=1_HeSKGtgRDWYmDvuHFV66AF4kh-UzvOa",
          favorited: true
        },
        {
          name: "8. A sowan's nature of mind / සෝවාන් සිතක ස්වබාවය",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10Oh1SdVZirudPoCrK2sN_qdL9w1rDyfK",
          url: "https://drive.google.com/uc?export=download&id=10Oh1SdVZirudPoCrK2sN_qdL9w1rDyfK",
          favorited: false
        },
        {
          name: "9. Death week meditation / මරණානුස්සති භාවනාව",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1W-RB7d4w0_Zt-_Z9GbAv0JT3ydI5Nq65",
          url: "https://drive.google.com/uc?export=download&id=1W-RB7d4w0_Zt-_Z9GbAv0JT3ydI5Nq65",
          favorited: false
        },
        {
          name: "10. Let us practice to grow in concentration / සමාධීය වඩන්නට පුහුණු වෙමු",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        },
        {
          name: "11. Why is there more effort in other things than in trying to attain Nirvana? / නිවන් දකින්න තියෙන උත්සාහයට වඩා අනිත් දේවල් වලට උත්සාහය වැඩි ඇයි?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        },
        {
          name: "12. This is a valuable sermon to listen to if you want to develop an unwavering mind even when the world is turned upside down / ලෝකේ පෙරලුනත් නොසැලෙන සිතක් හදාගන්න නම් ඇසිය යුතුම වටිනා දේශනාවක්",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        },
        {
          name: "13. Do you just go with the flow and get rid of clutter you don't need? / නවග්‍රහ මුදු යන්තර දාපු පමණින් ඔබේ සියලු අපල දුරුවෙනව ද?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        },
        {
          name: "14. How do you do all this cool stuff without spending a dime? / සතයක්වත් වියදම් නොකර මහා පින්කම් රැසක් කරගන්නේ කොහොමද?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        },
        {
          name: "15. What can you do to stay happy for the rest of your life, no matter what the problems? / මොන ප්‍රශ්න ආවත් ජීවිත කාලේ පුරාම සතුටින් ඉන්න නම් කරන්න ඕන මොනවාද?",
          artist: "Ududumbara Kashyapa Thero",
          cover: "img/cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          url: "https://drive.google.com/uc?export=download&id=1o1gBLGifPszBn2UVNhar8JPgNIjH8QTe",
          favorited: false
        }
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
