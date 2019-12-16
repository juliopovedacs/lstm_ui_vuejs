<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# SelectRunningCaseForm.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
  <div>
    <dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
  </div>
</template>

<!-- JavaScript -->
<script>
import dropdown from 'vue-dropdowns';

export default {
    name: "SelectRunningCaseForm",
    props: {
      runningCases: Array
    },
    data() {
      return {
        arrayOfObjects: [
          {
            id: 1,
            name: "Running Case 1"
          },
          {
            id: 2,
            name: "Running Case 2"
          },
          {
            id: 3,
            name: "Running Case 3"
          }
        ],
        object: {
          name: 'Running Case',
        }
      }
    },
    components: {
        'dropdown': dropdown,
    },
    methods: {
        methodToRunOnSelect(payload) {
          this.object = payload;
          this.$parent.showSelectedRunningCase(this.object.name, this.object.id);
        }
      }
};
</script>

<!-- CSS -->
<style scoped>
</style>