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
    <RunningCase
      id="runningCase"
      ref="runningCaseChild"
      v-if="showRunningCase"
      v-bind:nodes="selectedRunningCaseNodeDataArray"
      v-bind:links="selectedRunningCaseLinkDataArray"
      v-bind:lastActivityKey="selectedRunningCaseLastActivityKey"
      @lastActivityKeyChanged="updateLastActivityKey"
      @predictNext="predictNextEvent"
      @predictAll="predictAll"
    />
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
var runningCase2LinkDataArray = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 }
];

var runningCase3NodeDataArray = [
  { key: 1, text: "Activity 1", color: "lightblue" },
  { key: 2, text: "Activity 2", color: "lightblue" },
  { key: 3, text: "Activity 3", color: "lightblue" },
  { key: 4, text: "Activity 4", color: "lightblue" },
  { key: 5, text: "Activity 5", color: "lightblue" }
];
var runningCase3LinkDataArray = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 }
];

export default {
  name: "Predict",
  components: {
    SelectRunningCaseForm,
    RunningCase
  },
  data() {
    return {
      selectedEventLogId: 0,
      selectedEventLogName: "",
      runningCases: [],
      showRunningCase: false,
      selectedRunningCaseName: "",
      selectedRunningCaseId: 0,
      selectedRunningCaseNodeDataArray: [],
      selectedRunningCaseLinkDataArray: [],
      selectedRunningCaseLastActivityKey: 0,
      selectedRunningCaseActivities: [],
      timesRunningCaseSelectedInSameView: 0
    };
  },
  methods: {
    showResults() {
      this.$router.push({
        path: "/results",
        query: {
          eventLogId: this.selectedEventLogId,
          eventLogName: this.selectedEventLogName
        }
      });
    },
    showSelectedRunningCase(runningCaseName, runningCaseId) {
      console.log("Predict: received request to show " + runningCaseName);

      this.showRunningCase = true;

      this.selectedRunningCaseName = runningCaseName;
      this.selectedRunningCaseId = runningCaseId;
      this.selectedRunningCaseNodeDataArray = this.selectedRunningCaseNodeDataArray.splice(0, this.selectedRunningCaseNodeDataArray.length);
      this.selectedRunningCaseLinkDataArray = this.selectedRunningCaseLinkDataArray.splice(0, this.selectedRunningCaseLinkDataArray.length);

      this.timesRunningCaseSelectedInSameView =
      this.timesRunningCaseSelectedInSameView + 1;

      var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;

      axios
        .get(
          `http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/${this.selectedRunningCaseId}/activities/`
        )
        .then(res => (this.selectedRunningCaseActivities = res.data))
        .catch(err => console.log(err));

      if (runningCaseName === "Running Case 1") {
        console.log("Predict: Configuring Running Case 1");
        this.selectedRunningCaseNodeDataArray = runningCase1NodeDataArray;
        this.selectedRunningCaseLinkDataArray = runningCase1LinkDataArray;
        this.selectedRunningCaseLastActivityKey =
          runningCase1NodeDataArray.length;
      } else if (runningCaseName === "Running Case 2") {
        console.log("Predict: Configuring Running Case 2");
        this.selectedRunningCaseNodeDataArray = runningCase2NodeDataArray;
        this.selectedRunningCaseLinkDataArray = runningCase2LinkDataArray;
        this.selectedRunningCaseLastActivityKey =
          runningCase2NodeDataArray.length;
      } else if (runningCaseName === "Running Case 3") {
        console.log("Predict: Configuring Running Case 3");
        this.selectedRunningCaseNodeDataArray = runningCase3NodeDataArray;
        this.selectedRunningCaseLinkDataArray = runningCase3LinkDataArray;
        this.selectedRunningCaseLastActivityKey =
          runningCase3NodeDataArray.length;
      }

      if (this.timesRunningCaseSelectedInSameView > 1) {
        console.log("User already had a running case selected");
        console.log(
          "Before updateDiagram, Predict running case has " +
            this.selectedRunningCaseNodeDataArray.length +
            " nodes"
        );
        
        // Check functions
        this.$refs.runningCaseChild.updateDiagram();
      }      
    },
    updateLastActivityKey(newLastActivityKeyParamater) {
      console.log("Predict: last activity key changed");
      console.log(
        "New last activity key should be " + newLastActivityKeyParamater
      );
      this.selectedRunningCaseLastActivityKey = newLastActivityKeyParamater;
    },
    predictNextEvent() {
      var newActivity = {};
      console.log(newActivity);

      var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;

      axios
        .get(
          `http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/${this.selectedRunningCaseId}/activities/predict_next/`
        )
        .then(res => (newActivity = res.data))
        .catch(err => console.log(err));

      var newActivityKey = this.selectedRunningCaseLastActivityKey + 1;

      runningCase1NodeDataArray.push({
        key: newActivityKey,
        text: "Activity " + newActivityKey,
        color: "lightblue"
      });
      runningCase1LinkDataArray.push({
        from: this.selectedRunningCaseLastActivityKey,
        to: newActivityKey
      });
      this.selectedRunningCaseLastActivityKey = newActivityKey;
      this.$refs.runningCaseChild.updateDiagram();
    },
    predictAll() {
      var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;
      var nextEvents = [];

      console.log(nextEvents);

      axios
        .get(
          `http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/${this.selectedRunningCaseId}/activities/predict_all/`
        )
        .then(res => (nextEvents = res.data))
        .catch(err => console.log(err));

      var newActivityKey = this.selectedRunningCaseLastActivityKey + 1;
      runningCase1NodeDataArray.push({
        key: newActivityKey,
        text: "Activity " + newActivityKey,
        color: "lightblue"
      });

      runningCase1LinkDataArray.push({
        from: this.selectedRunningCaseLastActivityKey,
        to: newActivityKey
      });

      this.selectedRunningCaseLastActivityKey = newActivityKey;
      this.$refs.runningCaseChild.updateDiagram();
    }
  },
  mounted() {
    var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;
    var eventLogName = document.getElementById("selectedLogName").innerHTML;

    console.log(eventLogName);
    console.log(eventLogId);
    
    this.selectedEventLogId = eventLogId;
    this.selectedEventLogName = eventLogName;

    axios
      .get(`http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/`)
      .then(res => (this.runningCases = res.data))
      .catch(err => console.log(err));

    this.runningCases = [
      {
        id: 1,
        name: "Running Case 1"
      },
      {
        id: 2,
        name: "Running Case 2"
      },
      {
        id: 3,
        name: "Running Case 3"
      }
    ];
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