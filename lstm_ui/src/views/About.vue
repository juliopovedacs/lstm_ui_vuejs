<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# About.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div class="about">
    <h1 id="aboutTitle">About</h1>
    <p id="aboutText">This is the UI of our proposed approach to train recurrent neural networks with Long-Short-Term Memory (LSTM) architecture to predict sequences of next events, their timestamps, and their associated resource pools.</p>
    <iframe src="//www.slideshare.net/slideshow/embed_code/key/vN4ILR1wIFHbxb" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MarlonDumas/learning-accurate-lstm-models-of-business-processes" title="Learning Accurate LSTM Models of Business Processes" target="_blank">Learning Accurate LSTM Models of Business Processes</a> </strong> from <strong><a href="https://www.slideshare.net/MarlonDumas" target="_blank">Marlon Dumas</a></strong> </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: "About",
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  }
}
</script>

<!-- CSS -->
<style scoped>
#aboutTitle {
  padding: 20px;
}

#aboutText {
  margin-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
}

iframe {
  margin: auto;
  width: 60%;
  border: 3px solid #73AD21;
  padding: 10px;
  display: block;
}
</style>