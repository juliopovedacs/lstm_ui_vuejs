<template>
  <div class="about">
    <h1 id="aboutTitle">About</h1>
    <p id="aboutText">This is the UI of our proposed approach to train recurrent neural networks with Long-Short-Term Memory (LSTM) architecture to predict sequences of next events, their timestamps, and their associated resource pools.</p>
    <iframe src="//www.slideshare.net/slideshow/embed_code/key/vN4ILR1wIFHbxb" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  }
}
</script>

<style scoped>
#aboutTitle {
  padding: 20px;
}

#aboutText {
  margin-bottom: 20px;
}

iframe {
  margin: auto;
  width: 60%;
  border: 3px solid #73AD21;
  padding: 10px;
  display: block;
}
</style>