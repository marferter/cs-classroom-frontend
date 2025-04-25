<template>
    <div class="multiple-choice">
        <h2>{{ question }}</h2>
        <ul>
            <li v-for="(option, index) in options" :key="index" @click="selectOption(index)"
                :class="{ selected: selectedOption === index }">
                {{ option }}
            </li>
        </ul>
        <UButton @click="submitAnswer" :disabled="selectedOption === null" icon="i-lucide-rocket" size="md"
            color="primary" variant="solid">Submit</UButton>
    </div>
</template>

<script>
export default {
    name: "MultipleChoice",
    data() {
        return {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            selectedOption: null,
        };
    },
    methods: {
        selectOption(index) {
            this.selectedOption = index;
        },
        submitAnswer() {
            if (this.selectedOption !== null) {
                alert(`You selected: ${this.options[this.selectedOption]}`);
            }
        },
    },
};


</script>

<style scoped>
.multiple-choice {
    font-family: Arial, sans-serif;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    cursor: pointer;
}

li.selected {
    background-color: #d3d3d3;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>