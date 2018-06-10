<template>
    <div class="container">
        <post-card :post="post"></post-card>
    </div>
</template>

<script>
    import PostCard from './partials/PostCard';

    export default {
        name: 'Posts',
        components: { PostCard },
        data() {
            return {
                post: {
                    title: 'huheu',
                    subtitle: 'eeuheuheuhuheu'
                }
            }
        }
    }
</script>