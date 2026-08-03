# Video Assets

Videos must live in `public/videos/` — **not** `src/assets/videos/`.

Vite only serves files from `public/` as static assets accessible via URL.
Files inside `src/` are bundled and hashed, which breaks direct `<video src>` references.

## Where to place videos

```
public/
└── videos/
    └── hero.mp4     ← put it here
```

## Requirements
- Format: H.264 MP4
- Resolution: 1920×1080 minimum (16:9)
- Duration: 10–30 seconds (seamlessly loopable)
- File size: Target under 8MB (compress with HandBrake or FFmpeg)
- No audio track required (video is muted)

## Compression Command (FFmpeg)
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset slow -vf "scale=1920:-2" -an hero.mp4
```

## Usage in HeroSection.jsx
```jsx
<VideoHero src="/videos/hero.mp4" overlayOpacity={0.32}>
  ...
</VideoHero>
```
