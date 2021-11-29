<template>
  <LiteYouTubeEmbed 
    id="VCTleEExTcw"
    title="Rick Astley - Never Gonna Give You Up "
    playlabel="Play: Keynote (Google I/O '18)"
  />
  <button >play</button>
</template>

<script>
import { defineComponent } from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/dist/style.css'

export default defineComponent({
    components: { LiteYouTubeEmbed },
})
</script>
