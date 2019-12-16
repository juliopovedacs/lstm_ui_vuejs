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
        <h4 id="similarityTitle"><b>Similarity:</b></h4>
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
</script>

<!-- CSS -->
<style scoped>
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

#results-chart {
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 10px;
}
</style>