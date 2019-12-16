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
    <div class="text-center">
      <div id="statistics">
        <h3 id="accuracyTitle"><b>Accuracy: value</b></h3>
        <h3 id="distanceTitle"><b>Distance: value</b></h3>
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
        .get(`http://127.0.0.1:8000/event_logs/${eventLogId}/running_cases/${this.selectedRunningCaseId}/results/`)
        .then(res => (this.selectedRunningCaseActivities = res.data))
        .catch(err => console.log(err));
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

#accuracyTitle {
  margin-bottom: 5px;
}

#results-chart {
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 10px;
}
</style>