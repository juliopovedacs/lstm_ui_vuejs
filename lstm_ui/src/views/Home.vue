<template>
  <div id="app">
    <p>Select an event log:</p>
    <SelectEventLogForm />

    <div class="row justify-content-center">
      <button v-on:click="addNode">Predict Next Event</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SelectEventLogForm from '../components/SelectEventLogForm';

export default {
  name: "Home",
  components: {
    SelectEventLogForm,
  },
  data() {
    return {
      todos: [],
      running_cases: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id, res.data))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/event_logs/')
      .then(res => this.running_cases = res.data)
      .catch(err => console.log(err));
  },
  addNode() {
    var model = this.model();
    model.startTransaction();
    model.setDataProperty(model.findNodeDataForKey(4), "color", "purple");
    var data = { text: "NEW " + this.counter++, color: "yellow" };
    model.addNodeData(data);
    model.addLinkData({ from: 3, to: model.getKeyForNodeData(data) });
    model.commitTransaction("added Node and Link");
    // also manipulate the Diagram by changing its Diagram.selection collection
    var diagram = this.$refs.diag.diagram;
    diagram.select(diagram.findNodeForData(data));
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
</style>
