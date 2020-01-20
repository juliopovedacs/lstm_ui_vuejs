<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# Predict.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
<div>
    <h2>Running Cases</h2>
    <br>
    <div v-bind:key="runningCase.id" v-for="runningCase in runningCases">
        <RunningCaseItem v-bind:runningCase="runningCase" v-on:expand-running-case="$emit('expand-running-case', runningCase.id)" />
    </div>
</div>  
</template>

<!-- JavaScript -->
<script>
import RunningCaseItem from './RunningCaseItem.vue';

export default {
    name: "RunningCases",
    components: {
        RunningCaseItem
    },
    props: ["runningCases"]
}
</script>

<!-- CSS -->
<style scoped>

</style>