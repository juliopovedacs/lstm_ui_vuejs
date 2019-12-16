<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# Results.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div class="results">
    <h1 id="resultsTitle">Results</h1>
    <h4>Selected log:</h4>
    <p id="selectedLogName">{{ this.$route.query.eventLogName }}</p>
    <p id="eventLogIdParagraph" hidden>{{ this.$route.query.eventLogId }}</p>
    <div class="text-center">
      <div id="statistics">
        <h4 id="accuracyTitle"><b>Accuracy:</b></h4>
        <p id="accuracyValue">{{ this.selectedEventLogAccuracy }}</p>
        <h4 id="similarityTitle" class="tooltip">Similarity:
          <span class="tooltiptext">It is equal to (1-d), where d is the calculated Damerau-Levenshtein distance</span>
        </h4>
        <p id="similarityValue">{{ this.selectedEventLogSimilarity }}</p>
      </div>
      <canvas id="results-chart"></canvas>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import axios from "axios";
import Chart from "chart.js";
import resultsChartData from "../chart-data";
import $ from "jquery";

export default {
  name: "Results",
  props: {
    selectedEventLogId: Number,
    selectedEventLogName: String,
    selectedEventLogResults: Array,
    selectedEventLogAccuracy: Number,
    selectedEventLogSimilarity: Number,
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
      console.log(myChart);
    }
  },
  data() {
    return {
      resultsChartData: resultsChartData,
    }
  },
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  },
  mounted() {
    this.createChart('results-chart', this.resultsChartData);
    var eventLogId = document.getElementById("eventLogIdParagraph").innerHTML;

    axios
      .get(`http://127.0.0.1:8000/event_logs/${eventLogId}/trained_model/`)
      .then(res => (this.selectedEventLogAccuracy = res.data))
      .catch(err => console.log(err));
    
    this.selectedEventLogAccuracy = 0.75;
    
    axios
      .get(`http://127.0.0.1:8000/event_logs/${eventLogId}/results/`)
      .then(res => (this.selectedEventLogResults = res.data))
      .catch(err => console.log(err));
    
    this.selectedEventLogSimilarity = 0.74;
  }
};

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});
</script>

<!-- CSS -->
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 600px;
  background-color: rgb(30, 126, 216);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 110%;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent rgb(30, 126, 216) transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}

#resultsTitle {
  padding: 20px;
}

#statistics {
  margin-bottom: 20px;
}

#selectedLogName {
  margin-bottom: 5px;
}

#accuracyTitle {
  margin-bottom: 5px;
}

#accuracyValue {
  margin-bottom: 5px;
}

#similarityTitle {
  font-weight: bold;
}

#results-chart {
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 10px;
}
</style>