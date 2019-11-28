<template>
  <h1>Predict</h1>
</template>

<script>
import * as go from "gojs";

function init() {
  var $ = go.GraphObject.make;
  var myDiagram = $(go.Diagram, "myDiagramDiv");
  var nodeDataArray = [
    {"key":1, "text":"Activity 1", "color":"lightblue"},
    {"key":2, "text":"Activity 2", "color":"orange"},
    {"key":3, "text":"Activity 3", "color":"lightgreen"},
    {"key":4, "text":"Activity 4", "color":"pink"}
  ];
  var linkDataArray = [
    {"from":1, "to":2},
    {"from":1, "to":3},
    {"from":3, "to":4}
  ];
  myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);


}

console.log(init());
</script>

<style scoped>

</style>