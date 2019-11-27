<template>
  <div>
    <dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
  </div>
</template>

<script>
import dropdown from 'vue-dropdowns';

export default {
    name: "SelectEventLogForm",
    data() {
        return {
            arrayOfObjects: [
              {
                name: "Helpdesk"
              },
              {
                name: "BPI 2012"
              },
              {
                name: "BPI 2012 W"
              },
              {
                name: "BPI 2013"
              },
              {
                name: "BPI 2015-1"
              },
              {
                name: "BPI 2015-2"
              },
              {
                name: "BPI 2015-3"
              },
              {
                name: "BPI 2015-4"
              },
              {
                name: "BPI 2015-5"
              },
            ],
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