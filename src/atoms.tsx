import { atom } from "recoil";

export const MusicState = atom({
    key: "music",
    default: [
        {
            title: "ミツキヨ - YU.ME.NO",
            artist: "Mitsukiyo",
            src: "./music/ミツキヨ - YU.ME.NO.mp3"
        }, {
            title: "ミツキヨ - ユノのアトリエ",
            artist: "Mitsukiyo",
            src: "./music/ミツキヨ - ユノのアトリエ.mp3"
        }, {
            title: "ミツキヨ - ユメの喫茶店",
            artist: "Mitsukiyo",
            src: "./music/ミツキヨ - ユメの喫茶店.mp3"
        }, {
            title: "ミツキヨ - ようこそトロイメへ",
            artist: "Mitsukiyo",
            src: "./music/ミツキヨ - ようこそトロイメへ.mp3"
        }, {
            title: "ミツキヨ - 日差しの中のティータイム.mp3",
            artist: "Mitsukiyo",
            src: "./music/ミツキヨ - 日差しの中のティータイム.mp3"
        },
    ],
})