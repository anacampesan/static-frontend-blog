<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../partials/Header';
    import Footer from '../partials/Footer';

    export default {
        name: 'DefaultLayout',
        data() {
            return {

            }
        },
        components: { Header, Footer }
    }
</script>