<template>
  <div class="row justify-content-center">
    <h1 id="predictTitle">Predict</h1>
    <b>Selected log:</b>
    <p id="selectedLogName">{{ this.$route.query.log.name }}</p>
    <button id="predictNextEventButton" @click="addNode">Predict Next Event</button>
  </div>
</template>

<script>
var last_activity_key = 3;

console.log("Started executing init");
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
console.log("Finished executing init");

import * as go from "gojs";

export default {
  name: "Predict",
  methods: {
    addNode() {
      console.log("Started executing addNode");
      var model = myDiagram.model;
      model.startTransaction();
      var new_activity_key = last_activity_key + 1;
      var data = { key: new_activity_key, text: "New Activity " + new_activity_key, color: "lightblue" };
      model.addNodeData(data);
      model.addLinkData({ from: last_activity_key, to: model.getKeyForNodeData(data) });
      last_activity_key++;
      model.commitTransaction("added Node and Link");
      console.log("Finished executing addNode");
    }
  },
  created() {
    document.getElementById("myDiagramDiv").style.display = "block";
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
</style>