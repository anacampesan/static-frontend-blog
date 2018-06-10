<template>
    <div class="card">
        <div class="card-header">
            {{ post.title }}
        </div>
        <div class="card-body">
            <div style="float: left;">
                <img src="./../../assets/300.png" alt="" class="card-image">
            </div>
            <h5 class="card-title">{{ post.subtitle }}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Read</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostCard',
        props: {
            post: {}
        },
        data() {
            return {

            }
        }
    }
</script>

<style>
    .card-image {
        width: 150px;
        height: 150px;
        text-align: center;
        margin-right: 20px;
    }
</style>