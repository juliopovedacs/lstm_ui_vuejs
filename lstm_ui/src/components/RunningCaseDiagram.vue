<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# RunningCase.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div id="runningCaseDiagramDiv">
    <div id="leftDiv">
      <div id="myDiagramDiv"></div>
    </div>
    <div id="rightDiv">
      <button id="predictNextEventButton" @click="addNode" variant="primary">Predict Next Event</button>
      <button id="predictAlltButton" @click="addAllNodes" variant="primary">Predict All</button>
      <button id="showResultsButton" @click="showResults" variant="primary">Show Results</button>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import * as go from "gojs";

var $ = go.GraphObject.make;
var myDiagram;

export default {
  name: "RunningCaseDiagram",
  props: {
    nodes: Array,
    links: Array,
    lastActivityKey: Number,
  },
  data() {
    return {
      object: {
        name: "Running Case Diagram"
      }
    };
  },
  methods: {
    createDiagram() {
      console.log("RunningCase: inside createDiagram, nodes array has " + this.nodes.length + " elements");
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
    updateDiagram(newNodes, newLinks) {
      console.log("RunningCase: Update diagram!")
      console.log(newNodes);
      console.log(newLinks);
      console.log("RunningCase: inside updateDiagram, nodes array has " + this.nodes.length + " elements");

      myDiagram = $(go.Diagram, "myDiagramDiv", {
        contentAlignment: go.Spot.Center,
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout)
      });

      var nodeDataArray = newNodes;
      var linkDataArray = newLinks;

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
    clearDiagram()
    {
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
  display: block;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 100px;
  font-weight: bold;
}

button:hover {
  background-color: rgb(30, 126, 216);
}

button:active {
  background-color: rgb(30, 126, 216);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#runningCaseDiagramDiv {
  width: 100%;
  overflow: hidden;
}

#leftDiv {
  width: 80%;
  float: left;
}

#rightDiv {
  height: 300px;
  width: 20%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#myDiagramDiv {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  margin-left: 20px;
  border: 1px solid black;
}
</style>