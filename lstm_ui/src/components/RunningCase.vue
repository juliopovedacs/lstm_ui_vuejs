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
import { Watch } from "vue-property-decorator";

console.log(Watch);

var last_activity_key = 3;

var $ = go.GraphObject.make;

var myDiagram = $(go.Diagram, "myDiagramDiv", {
  contentAlignment: go.Spot.Center,
  "undoManager.isEnabled": true
});

export default {
  name: "SelectRunningCaseForm",
  props: {
    runningCases: Array
  },
  data() {
    return {
      object: {
        name: "Running Case"
      }
    };
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
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

      var predictNextButton = document.getElementById("predictNextEventButton");
      predictNextButton.disabled = true;
      predictNextButton.style.background = "#999";

      event.currentTarget.disabled = true;
      event.currentTarget.style.background = "#999";
    },
  },
  created() {
    document.getElementById("myDiagramDiv").style.display = "block";
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    last_activity_key = 3;
    myDiagram.div = null;
    myDiagram = $(go.Diagram, "myDiagramDiv", {
      contentAlignment: go.Spot.Center,
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout)
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