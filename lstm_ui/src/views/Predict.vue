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
    <RunningCase id="runningCase" ref="runningCaseChild" v-if="showRunningCase" v-bind:nodes="selectedRunningCaseNodeDataArray" v-bind:links="selectedRunningCaseLinkDataArray" v-bind:lastActivityKey="selectedRunningCaseLastActivityKey" @lastActivityKeyChanged="updateLastActivityKey" @nextEvent="predictNextEvent" />
  </div>
</template>

<!-- JavaScript -->
<script>
import axios from "axios";
import SelectRunningCaseForm from "../components/SelectRunningCaseForm";
import RunningCase from "../components/RunningCase";

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
      selectedRunningCaseName: "",
      showRunningCase: false,
      selectedRunningCaseNodeDataArray: [],
      selectedRunningCaseLinkDataArray: [],
      selectedRunningCaseLastActivityKey: 0,
      runningCases: [],
      timesRunningCaseSelectedInSameView: 0,
    };
  },
  methods: {
    showResults() {
      this.$router.push("results");
    },
    showSelectedRunningCase(runningCaseName) {
      console.log("Predict: received request to show " + runningCaseName);
      this.timesRunningCaseSelectedInSameView = this.timesRunningCaseSelectedInSameView + 1;

      this.showRunningCase = false;

      if (runningCaseName === "Running Case 1")
      {
        console.log("Predict: Configuring Running Case 1");
        this.selectedRunningCaseNodeDataArray = runningCase1NodeDataArray;
        this.selectedRunningCaseLinkDataArray = runningCase1LinkDataArray;
        this.selectedRunningCaseLastActivityKey = runningCase1NodeDataArray.length;
      }
      else if (runningCaseName === "Running Case 2")
      {
        console.log("Predict: Configuring Running Case 2");
        this.selectedRunningCaseNodeDataArray = runningCase2NodeDataArray;
        this.selectedRunningCaseLinkDataArray = runningCase2LinkDataArray;
        this.selectedRunningCaseLastActivityKey = runningCase2NodeDataArray.length;
      }
      else if (runningCaseName === "Running Case 3")
      {
        console.log("Predict: Configuring Running Case 3");
        this.selectedRunningCaseNodeDataArray = runningCase3NodeDataArray;
        this.selectedRunningCaseLinkDataArray = runningCase3LinkDataArray;
        this.selectedRunningCaseLastActivityKey = runningCase3NodeDataArray.length;
      }
      
      if (this.timesRunningCaseSelectedInSameView > 1)
      {
        // Update diagram when user selects another running case
        this.$refs.runningCaseChild.updateDiagram();
      }

      this.showRunningCase = true;

    },
    updateLastActivityKey(newLastActivityKeyParamater) {
      console.log("Predict: last activity key changed");
      console.log("New last activity key should be " + newLastActivityKeyParamater);
      this.selectedRunningCaseLastActivityKey = newLastActivityKeyParamater;
     },
     predictNextEvent() {
       var newActivityKey = this.selectedRunningCaseLastActivityKey + 1;
       runningCase1NodeDataArray.push({ key: newActivityKey, text: "Activity " + newActivityKey, color: "lightblue" });
       runningCase1LinkDataArray.push({ from: this.selectedRunningCaseLastActivityKey, to: newActivityKey });
       this.selectedRunningCaseLastActivityKey = newActivityKey;
       this.$refs.runningCaseChild.updateDiagram();
     }
  },
  mounted() {
    var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;
    console.log(eventLogId);
    axios
      .get(`http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/`)
      .then(res => (this.runningCases = res.data))
      .catch(err => console.log(err));
  }
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