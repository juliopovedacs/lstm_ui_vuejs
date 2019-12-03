<template>
  <div class="row justify-content-center">
    <h1>Predict</h1>
    <button @click="addNode">Predict Next Event</button>
  </div>
</template>

<script>
var counter = 3;

console.log("Started executing init");
var $ = go.GraphObject.make;
var myDiagram = $(go.Diagram, "myDiagramDiv", {
  "undoManager.isEnabled": true
});
var nodeDataArray = [
  { key: 1, text: "Activity 1", color: "lightblue" },
  { key: 3, text: "Activity 2", color: "lightgreen" },
  { key: 4, text: "Activity 3", color: "pink" }
];
var linkDataArray = [{ from: 1, to: 3 }, { from: 3, to: 4 }];

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
      var data = { text: "New Activity " + this.counter++, color: "yellow" };
      model.addNodeData(data);
      model.addLinkData({ from: counter--, to: model.getKeyForNodeData(data) });
      model.commitTransaction("added Node and Link");
      console.log("Finished executing addNode");
    }
  }
};
</script>

<style scoped>
</style>