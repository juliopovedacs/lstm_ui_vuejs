<template>
  <div id="app">
    <p id="instruction">Select an event log:</p>
    <SelectEventLogForm :eventLogs="eventLogs" id="eventLogsCombobox" />
    <button id="nextButton" @click="goToPredict">Next</button>
  </div>
</template>

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
      todos: [],
      eventLogs: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(
          res =>
            (this.todos = this.todos.filter(todo => todo.id !== id, res.data))
        )
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    },
    goToPredict() {
      console.log("Predict")
      // (1) Validate that user selected a log
      // (2) Change view
      this.$router.push('/predict');
    }
  },
  created() {
    document.getElementById("myDiagramDiv").style.display = "none";
    axios
      .get("http://127.0.0.1:8000/event_logs/")
      .then(res => (this.eventLogs = res.data))
      .catch(err => console.log(err));
  }
};
</script>

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

#instruction {
  padding-top: 20px;
}

#eventLogsCombobox {
  padding-bottom: 20px;
}

#nextButton {
  padding: 10px;
  margin-bottom: 20px;
}
</style>
