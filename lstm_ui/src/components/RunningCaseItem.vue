<template>
    <div class="runningCaseItem">
        <button class="expandButton" @click="$emit('expand-running-case', runningCase.id)" v-on:click="expand">Expand</button>
        <p>{{ runningCase.name }}</p>
    </div>
</template>

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

<style scoped>
.runningCaseItem {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
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
