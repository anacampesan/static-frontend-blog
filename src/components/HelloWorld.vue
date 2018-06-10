<template>
    <div>
        <h1>{{ post.title }}</h1>
        <h2>{{ post.subtitle }}</h2>

        <ul v-if="post.tags">
            <li v-for="tag in post.tags">{{ tag }}</li>
        </ul>

        <span v-for="part in post.body">
            <strong>{{ part.subtitle }}</strong>
            <p v-for="paragraph in part.paragraphs">{{ paragraph }}</p>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                post: {}
            }
        },
        created() {
            this.$http
                .get('http://localhost:8080/static/posts/sample.json')
                .then(response => {
                    this.post = response.data
                });
        }
    }
</script>

<style scoped>

</style>
