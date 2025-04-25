<template>
    <div>

        This is the exam home page

        <pre>
            {{ exams }}
        </pre>

        <div>
            <h1>Exam Home Page</h1>
            <p>Welcome to the exam page. Please select an option below:</p>
            <ul>
                <li><NuxtLink to="/exams/1">Multiple Choice</NuxtLink></li>
                <li><NuxtLink to="/exams/2">True/False</NuxtLink></li>
                <li><NuxtLink to="/exams/3">Short Answer</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>


<script setup>

const { getItems } = useDirectusItems();

const fetchExams = async () => {
  try {
    const filters = {};
    return await getItems({
      collection: "exams",

    });
  } catch (e) {}
};

onMounted(async () => {
  exams.value = await fetchExams();
  console.log(exams.value)
});



const exams = ref([]);
</script>