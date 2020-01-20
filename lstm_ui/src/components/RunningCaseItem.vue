<template>
    <div class="runningCaseItem">
        <input type="button" value="Expand" v-on:click="expand">
        <p>{{ runningCase.name }}</p>
    </div>
</template>

<script>
export default {
    name: "RunningCaseItem",
    props: ["runningCase"],
    methods: {
        expand() {
            console.log("Expand " + this.runningCase.name)
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

.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>
