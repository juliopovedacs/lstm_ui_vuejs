<template>
  <div class="about">
    <h1 id="aboutTitle">About</h1>
    <p>This is the UI of our proposed approach to train recurrent neural networks with Long-Short-Term Memory (LSTM) architecture to predict sequences of next events, their timestamps, and their associated resource pools.</p>
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
</style>