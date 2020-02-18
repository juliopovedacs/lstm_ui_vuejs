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
        <button class="expandButton" @click="$emit('expand-running-case', runningCase.id)" v-on:click="expand($event)">Expand</button>
        <p>{{ runningCase.name }}</p>
    </div>
</template>

<!-- JavaScript -->
<script>
export default {
    name: "RunningCaseItem",
    props: ["runningCase"],
    methods: {
        expand(e) {
            console.log("RunningCaseItem.vue - expand " + this.runningCase.name)
            
            // Clears items color
            var other_items = [];
            other_items = document.querySelectorAll(".runningCaseItem");
            const defaultRed = 244;
            const defaultGreen = 244;
            const defaultBlue = 244;
            other_items.forEach(element => {
                element.style = "background:" + "rgb(" + defaultRed + "," + defaultGreen + "," + defaultBlue + ")";
            });

            // Clears buttons color
            var other_buttons = []
            other_buttons = document.querySelectorAll(".expandButton");
            const defaultButtonRed = 30;
            const defaultButtonGreen = 126;
            const defaultButtonBlue = 216;
            other_buttons.forEach(element => {
                element.style = "background:" + "rgb(" + defaultButtonRed + "," + defaultButtonGreen + "," + defaultButtonBlue + ")";
            });

            // Highlight selected running case
            const selectedItemRed = 30;
            const selectedItemGreen = 126;
            const selectedItemBlue = 216;
            const selectedButtonRed = 245;
            const selectedButtonGreen = 66;
            const selectedButtonBlue = 66;
            e.target.style = "background:" + "rgb(" + selectedButtonRed + "," + selectedButtonGreen + "," + selectedButtonBlue + ")";
            e.target.parentElement.style = "background:" + "rgb(" + selectedItemRed + "," + selectedItemGreen + "," + selectedItemBlue + "); color:" + "rgb(" + defaultRed + "," + defaultGreen + "," + defaultBlue + ")";
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
