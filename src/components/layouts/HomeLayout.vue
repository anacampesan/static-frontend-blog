<template>
    <div>
        <Header></Header>

        <div>

        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../partials/Header';
    import Footer from '../partials/Footer';
    import Post from '../Post';

    export default {
        name: 'HomeLayout',
        data() {
            return {

            }
        },
        components: { Header, Post, Footer}
    }
</script>