<template>
    <div>
        HEADER
        <post></post>
        FOOTER
    </div>
</template>

<script>
    import Post from '../Post';

    export default {
        name: 'HomeLayout',
        data() {
            return {

            }
        },
        components: { Post }
    }
</script>