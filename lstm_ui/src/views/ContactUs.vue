<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# ContactUs.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div class="contactUs">
    <h1 id="contactUsTitle">Contact us</h1>
    <p id="contactUsText">If you have any question regarding our work, please contact us:</p>
    <ul>
      <li>Manuel Camargo - manuel.camargo@ut.ee</li>
      <li>Marlon Dumas - marlon.dumas@ut.ee</li>
      <li>Oscar González-Rojas - o-gonza1@uniandes.edu.co</li>
    </ul>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: "ContactUs",
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  }
}
</script>

<!-- CSS -->
<style scoped>
#contactUsTitle {
  padding: 20px;
}

#contactUsText {
  margin-bottom: 20px;
}
</style>