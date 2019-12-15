<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# Predict.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div class="row justify-content-center">
    <h1 id="predictTitle">Predict</h1>
    <b>Selected log:</b>
    <p id="selectedLogName">{{ this.$route.query.log.name }}</p>
    <p id="eventLogIdParagraph" hidden>{{ this.$route.query.log.id }}</p>
    <b id="runningCasesTitle">Running Cases:</b>
    <SelectRunningCaseForm :runningCases="runningCases" id="runningCasesComboBox" />
    <!--<RunningCase v-if="showRunningCase" /> -->
  </div>
</template>

<!-- JavaScript -->
<script>
import axios from "axios";
import SelectRunningCaseForm from "../components/SelectRunningCaseForm";
//import RunningCase from "../components/RunningCase";

export default {
  name: "Predict",
  components: {
    SelectRunningCaseForm,
    //RunningCase
  },
  data() {
    return {
      runningCases: [],
      showRunningCase: true,
    };
  },
  methods: {
    showResults() {
      this.$router.push("results");
    }
  },
  mounted() {
    var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;
    console.log(eventLogId);
    axios
      .get(`http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/`)
      .then(res => (this.runningCases = res.data))
      .catch(err => console.log(err));
  },
};
</script>

<!-- CSS -->
<style scoped>
#predictTitle {
  padding: 20px;
}

#selectedLogName {
  margin-bottom: 20px;
}

#runningCasesComboBox {
  margin-bottom: 20px;
}

#eventLogParagraph {
  display: none;
}
</style>