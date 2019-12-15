<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# Home.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div id="app">
    <h1 id="homeTitle">Home</h1>
    <p id="instruction">Select an event log:</p>
    <SelectEventLogForm :eventLogs="eventLogs" id="eventLogsCombobox" />
  </div>
</template>

<!-- JavaScript -->
<script>
import axios from "axios";
import SelectEventLogForm from "../components/SelectEventLogForm";

export default {
  name: "Home",
  components: {
    SelectEventLogForm
  },
  data() {
    return {
      eventLogs: []
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/event_logs/")
      .then(res => (this.eventLogs = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<!-- CSS -->
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}

#homeTitle {
  padding: 20px;
}

#eventLogsCombobox {
  padding-bottom: 20px;
}

#nextButton {
  padding: 10px;
  margin-bottom: 20px;
}
</style>
