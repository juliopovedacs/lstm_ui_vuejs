<template>
  <div>
    <dropdown :options="eventLogs" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
  </div>
</template>

<script>
import dropdown from 'vue-dropdowns';

export default {
    name: "SelectEventLogForm",
    props: {
      eventLogs: Array
    },
    data() {
        return {
            arrayOfObjects: [],
            object: {
              name: 'Event Log',
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

<style scoped>
</style>