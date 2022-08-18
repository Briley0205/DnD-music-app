import { atom } from "recoil";

export const MusicState = atom({
  key: "music",
  default: [
    {
      title: "YU.ME.NO",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - YU.ME.NO.mp3",
    },
    {
      title: "꿈의 아틀리에",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - ユノのアトリエ.mp3",
    },
    {
      title: "Dream Café",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - ユメの喫茶店.mp3",
    },
    {
      title: "Welcome to Troime",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - ようこそトロイメへ.mp3",
    },
    {
      title: "따스한 햇살 속 티타임",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - 日差しの中のティータイム.mp3",
    },
  ],
});
