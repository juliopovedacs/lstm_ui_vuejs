<template>
  <div class="row justify-content-center">
    <h1 id="predictTitle">Predict</h1>
    <b>Selected log:</b>
    <p id="selectedLogName">{{ this.$route.query.log.name }}</p>
    <p id="eventLogIdParagraph" hidden>{{ this.$route.query.log.id }}</p>
    <button id="predictNextEventButton" @click="addNode">Predict Next Event</button>
  </div>
</template>

<script>
import axios from "axios";

var last_activity_key = 3;

var $ = go.GraphObject.make;
var myDiagram = $(go.Diagram, "myDiagramDiv", {
  "undoManager.isEnabled": true
});
var nodeDataArray = [
  { key: 1, text: "Activity 1", color: "lightblue" },
  { key: 2, text: "Activity 2", color: "lightblue" },
  { key: 3, text: "Activity 3", color: "lightblue" }
];
var linkDataArray = [{ from: 1, to: 2 }, { from: 2, to: 3 }];

myDiagram.nodeTemplate = $(
  go.Node,
  "Auto",
  $(go.Shape, {
    figure: "RoundedRectangle",
    fill: "lightblue"
  }),
  $(go.TextBlock, { margin: 5 }, new go.Binding("text", "text"))
);

myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

import * as go from "gojs";

export default {
  name: "Predict",
  data() {
    return {
      runningCases: []
    };
  },
  methods: {
    addNode() {
      var model = myDiagram.model;
      model.startTransaction();
      var new_activity_key = last_activity_key + 1;
      var data = { key: new_activity_key, text: "New Activity " + new_activity_key, color: "lightblue" };
      model.addNodeData(data);
      model.addLinkData({ from: last_activity_key, to: model.getKeyForNodeData(data) });
      last_activity_key++;
      model.commitTransaction("added Node and Link");
    }
  },
  created() {
    document.getElementById("myDiagramDiv").style.display = "block";
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

<style scoped>
#predictTitle {
  padding: 20px;
}

#predictNextEventButton {
  margin-bottom: 20px;
}

#selectedLogName {
  margin-bottom: 20px;
}

#eventLogParagraph {
  display: none;
}
</style>