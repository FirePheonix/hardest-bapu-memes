// The meme archive. Add one object per meme; the wall renders them in order.
//
//   src      (required) URL or path to an image, a video file, or a YouTube link
//   type     (optional) "image" | "video" | "youtube" — guessed from the URL when omitted
//   caption  (optional) bold line under the media
//   credit   (optional) small line under the caption
//   poster   (optional) still frame shown before a video loads
//
// Local files work too: drop them in assets/ and use "assets/whatever.mp4".

export const MEMES = [
  { src: "assets/1.mp4", caption: "Bapu after one chai", credit: "certified classic" },
  { src: "assets/2.mp4", caption: "Ahimsa, but make it loud", credit: "volume: spiritual" },
  { src: "assets/3.mp4", caption: "This still won't get us banned", credit: "famous last words" },
  { src: "assets/4.mp4", caption: "I Miss You Gandhi Ji", credit: "himnebih"},
  { src: "assets/5.mp4", caption: "Fambruh FT. First Speech", credit: "vittyvipul"},
  { src: "assets/6.mp4", caption: "Gandhi Ji OP,Summon gandhi ji for help", credit: "zalzala.pathan"}
];
