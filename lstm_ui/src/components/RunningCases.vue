<template>
<div>
    <h2>Running Cases</h2>
    <br>
    <div v-bind:key="runningCase.id" v-for="runningCase in runningCases">
        <h3>{{ runningCase.name }}</h3>
    </div>
</div>  
</template>

<script>
export default {
    name: "RunningCases",
    props: ["runningCases"]
}
</script>

<style scoped>

</style>