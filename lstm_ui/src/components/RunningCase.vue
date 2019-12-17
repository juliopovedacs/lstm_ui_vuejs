<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# RunningCase.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div>
    <div>
      <button id="predictNextEventButton" @click="addNode" variant="primary">Predict Next Event</button>
      <button id="predictAlltButton" @click="addAllNodes" variant="primary">Predict All</button>
      <button id="showResultsButton" @click="showResults" variant="primary">Show Results</button>
    </div>
    <div>
      <div id="myDiagramDiv" style="width: 100%; height: 300px; border: 1px solid black;"></div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import * as go from "gojs";

var $ = go.GraphObject.make;
var myDiagram;

export default {
  name: "SelectRunningCaseForm",
  props: {
    nodes: Array,
    links: Array,
    lastActivityKey: Number,
  },
  data() {
    return {
      object: {
        name: "Running Case"
      }
    };
  },
  methods: {
    createDiagram() {
      console.log("RunningCase: creating diagram!");
      myDiagram = $(go.Diagram, "myDiagramDiv", {
        contentAlignment: go.Spot.Center,
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout)
      });

      console.log("RunningCase: nodes right now are " + this.nodes.length + " nodes long");

      var nodeDataArray = this.nodes;
      var linkDataArray = this.links;

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
    },
    addNode() {
      this.$emit("predictNext");
    },
    addAllNodes() {
      this.$emit("predictAll");
    },
    updateDiagram() {
      console.log("RunningCase: Update diagram!")
      myDiagram.div = null;
    },
    showResults() {
      this.$parent.showResults();
    }
  },
  mounted() {
    this.createDiagram()
  },
};
</script>

<!-- CSS -->
<style scoped>
button {
  margin-right: 20px;
  padding: 10px 10px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: rgb(30, 126, 216);
  border: none;
  border-radius: 15px;
  box-shadow: 0 8px #999;
}

button:hover {
  background-color: rgb(30, 126, 216);
}

button:active {
  background-color: rgb(30, 126, 216);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#predictNextEventButton {
  margin-bottom: 20px;
}
</style>