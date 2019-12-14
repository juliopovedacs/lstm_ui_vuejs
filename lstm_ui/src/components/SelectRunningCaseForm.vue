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
    <dropdown :options="this.runningCases" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
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
        }
      }
};
</script>

<!-- CSS -->
<style scoped>
</style>