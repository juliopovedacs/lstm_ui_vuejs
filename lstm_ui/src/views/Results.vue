<template>
  <div class="results">
    <h1 id="resultsTitle">Results</h1>
    <p id="resultsText">These are the results</p>
  </div>
</template>

<script>
export default {
  name: "Results",
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  }
}
</script>

<style scoped>
#resultsTitle {
  padding: 20px;
}

#resultsText {
  margin-bottom: 20px;
}
</style>