<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# Predict.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
    <div class="runningCaseItem">
        <button class="expandButton" @click="$emit('expand-running-case', runningCase.id)" v-on:click="expand">Expand</button>
        <p>{{ runningCase.name }}</p>
    </div>
</template>

<!-- JavaScript -->
<script>
export default {
    name: "RunningCaseItem",
    props: ["runningCase"],
    methods: {
        expand() {
            console.log("RunningCaseItem.vue - expand " + this.runningCase.name)
        }
    }
}
</script>

<!-- CSS -->
<style scoped>
.runningCaseItem {
    background: #f4f4f4;
    padding: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    border-radius: 15px;
    border-bottom: 1px #ccc dotted;
    text-align: center;
}

.expandButton {
    background: rgb(30, 126, 216);
    color: #fff;
    border: none;
    padding: 5px 9px;
    cursor: pointer;
    float: right;
    padding: 5px;
    border-radius: 15px;
    font-weight: bold;
}
</style>
