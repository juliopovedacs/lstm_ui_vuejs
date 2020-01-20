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
    <div>
      <div id="statistics" class="container">
        <div class="column">
          <h4>Selected log:</h4>
          <p id="selectedLogName">{{ this.$route.query.eventLogName }}</p>
          <p id="eventLogIdParagraph" hidden>{{ this.$route.query.eventLogId }}</p>
        </div>
        <div class="column">
          <h4 id="accuracyTitle" class="tooltip">
            Accuracy:
            <span
              class="tooltiptext"
            >It is a value between 0 and 1. It is better if it is closer to 1</span>
          </h4>
          <p id="accuracyValue">{{ this.selectedEventLogAccuracy }}</p>
        </div>
        <div class="colum">
          <h4 id="similarityTitle" class="tooltip">
            Similarity:
            <span
              class="tooltiptext"
            >It is equal to (1-d), where d is the calculated Damerau-Levenshtein distance</span>
          </h4>
          <p id="similarityValue">{{ this.selectedEventLogSimilarity }}</p>
        </div>
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

export default {
  name: "Results",
  props: {
    selectedEventLogId: Number,
    selectedEventLogName: String,
    selectedEventLogResults: Array,
    selectedEventLogAccuracy: Number,
    selectedEventLogSimilarity: Number
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
      resultsChartData: resultsChartData
    };
  },
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
  },
  mounted() {
    this.createChart("results-chart", this.resultsChartData);
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
</script>

<!-- CSS -->
<style scoped>
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgb(30, 126, 216);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(30, 126, 216) transparent transparent transparent;
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
  margin-bottom: 10px;
}

#accuracyValue {
  margin-bottom: 10px;
}

#similarityTitle {
  font-weight: bold;
}

#results-chart {
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
</style>