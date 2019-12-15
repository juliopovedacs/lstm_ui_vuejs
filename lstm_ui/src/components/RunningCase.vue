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

var last_activity_key = 3;
var $ = go.GraphObject.make;
var myDiagram;

export default {
  name: "SelectRunningCaseForm",
  props: {
    nodes: Array,
    links: Array,
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
      last_activity_key = 3;

      myDiagram = $(go.Diagram, "myDiagramDiv", {
        contentAlignment: go.Spot.Center,
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout)
      });

      console.log("RunningCase will create a running case with " + this.nodes.length + " nodes");
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
      var model = myDiagram.model;
      model.startTransaction();
      var new_activity_key = last_activity_key + 1;
      var data = {
        key: new_activity_key,
        text: "New Activity " + new_activity_key,
        color: "lightblue"
      };
      model.addNodeData(data);
      model.addLinkData({
        from: last_activity_key,
        to: model.getKeyForNodeData(data)
      });
      last_activity_key++;
      model.commitTransaction("added Node and Link");
      event.currentTarget.disabled = true;
      event.currentTarget.style.background = "#999";
    },
    addAllNodes() {
      for (var i = 0; i < 5; i++) {
        var model = myDiagram.model;
        model.startTransaction();
        var new_activity_key = last_activity_key + 1;
        var data = {
          key: new_activity_key,
          text: "New Activity " + new_activity_key,
          color: "lightblue"
        };
        model.addNodeData(data);
        model.addLinkData({
          from: last_activity_key,
          to: model.getKeyForNodeData(data)
        });
        last_activity_key++;
        model.commitTransaction("added Node and Link");
      }

      // Disable predictNextButton
      var predictNextButton = document.getElementById("predictNextEventButton");
      predictNextButton.disabled = true;
      predictNextButton.style.background = "#999";

      // Disable predictAllButton
      event.currentTarget.disabled = true;
      event.currentTarget.style.background = "#999";
    },
    updateDiagram() {
      console.log("Diagram will be updated");
      console.log("Number of nodes: " + this.nodes.length);
      myDiagram.div = null;
      this.createDiagram();
    },
    showResults() {
      this.$parent.showResults();
    }
  },
  mounted() {
    this.createDiagram()
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);

    // Reset values when user changes route
    this.updateDiagram();
    
    // Go to requested route
    next();
  }
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