<template>
  <div class="results">
    <h1 id="resultsTitle">Results</h1>
    <div class="text-center">
      <div id="statistics">
        <h2><b>Accuracy: value</b></h2>
        <h2><b>Distance: value</b></h2>
      </div>
      <canvas id="results-chart"></canvas>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
#resultsTitle {
  padding: 20px;
}

#statistics {
  margin-bottom: 20px;
}

#results-chart {
  padding-right: 40px;
  padding-left: 40px;
}
</style>