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
    <RunningCase ref="runningCase" v-if="showRunningCase" v-bind:nodes="runningCaseNodeDataArray" v-bind:links="runningCaseLinkDataArray" />
  </div>
</template>

<!-- JavaScript -->
<script>
import axios from "axios";
import SelectRunningCaseForm from "../components/SelectRunningCaseForm";
import RunningCase from "../components/RunningCase";

var numberOfTimesRunningCaseSelected = 0;

var runningCase1NodeDataArray = [
  { key: 1, text: "Activity 1", color: "lightblue" },
  { key: 2, text: "Activity 2", color: "lightblue" },
  { key: 3, text: "Activity 3", color: "lightblue" }
];
var runningCase1LinkDataArray = [{ from: 1, to: 2 }, { from: 2, to: 3 }];

var runningCase2NodeDataArray = [
  { key: 1, text: "Activity 1", color: "lightblue" },
  { key: 2, text: "Activity 2", color: "lightblue" },
  { key: 3, text: "Activity 3", color: "lightblue" },
  { key: 4, text: "Activity 4", color: "lightblue" }
];
var runningCase2LinkDataArray = [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }];

var runningCase3NodeDataArray = [
  { key: 1, text: "Activity 1", color: "lightblue" },
  { key: 2, text: "Activity 2", color: "lightblue" },
  { key: 3, text: "Activity 3", color: "lightblue" },
  { key: 4, text: "Activity 4", color: "lightblue" },
  { key: 5, text: "Activity 5", color: "lightblue" }
];
var runningCase3LinkDataArray = [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }];

export default {
  name: "Predict",
  components: {
    SelectRunningCaseForm,
    RunningCase
  },
  data() {
    return {
      runningCases: [],
      showRunningCase: false,
      runningCaseNodeDataArray: Array,
      runningCaseLinkDataArray: Array,
    };
  },
  methods: {
    showResults() {
      this.$router.push("results");
    },
    showSelectedRunningCase(runningCaseName) {
      console.log("Predict received instruction to show " + runningCaseName);
      numberOfTimesRunningCaseSelected = numberOfTimesRunningCaseSelected + 1;

      if (runningCaseName === "Running Case 1")
      {
        console.log("Configure 1");
        this.runningCaseNodeDataArray = runningCase1NodeDataArray;
        this.runningCaseLinkDataArray = runningCase1LinkDataArray;

      }
      else if (runningCaseName === "Running Case 2")
      {
        console.log("Configure 2");
        this.runningCaseNodeDataArray = runningCase2NodeDataArray;
        this.runningCaseLinkDataArray = runningCase2LinkDataArray;
      }
      else if (runningCaseName === "Running Case 3")
      {
        console.log("Configure 3");
        this.runningCaseNodeDataArray = runningCase3NodeDataArray;
        this.runningCaseLinkDataArray = runningCase3LinkDataArray;
      }
      
      this.showRunningCase = true;

      if (numberOfTimesRunningCaseSelected > 1)
      {
        console.log("User selected new running case");
        // Update diagram when user selects a running case
        this.$refs.runningCase.updateDiagram();
      }
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