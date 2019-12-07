<template>
  <div class="contactUs">
    <h1 id="contactUsTitle">Contact us</h1>
    <p>If you have any question regarding our work, please contact us:</p>
    <ul>
      <li>Manuel Camargo - manuel.camargo@ut.ee</li>
      <li>Marlon Dumas - marlon.dumas@ut.ee</li>
      <li>Oscar González-Rojas - o-gonza1@uniandes.edu.co</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  }
}
</script>

<style scoped>
#contactUsTitle {
  padding: 20px;
}
</style>