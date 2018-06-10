<template>
    <div>
        <Header></Header>

        <div class="jumbotron">
            <div class="row">
                <div class="col-sm col-left">
                    <span class="ff-custom">welcome to</span>
                    <h1 class="ff-custom">anazard.me</h1>
                    <div class="container-ana">
                        <img src="../../assets/ana.png" alt="">
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-dark btn-social">
                            <i class="fa fa-twitter-square" aria-hidden="true"></i> Twitter
                        </button>
                        <button type="button" class="btn btn-outline-dark btn-social">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i> Linkedin
                        </button>
                        <button type="button" class="btn btn-outline-dark btn-social">
                            <i class="fa fa-github-square" aria-hidden="true"></i> Github
                        </button>
                    </div>
                </div>

                <div class="col-sm col-right">
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../partials/Header';
    import Footer from '../partials/Footer';

    export default {
        name: 'HomeLayout',
        data() {
            return {

            }
        },
        components: { Header, Footer}
    }
</script>

<style scoped>
    .jumbotron {
        border-radius: 0;
        min-height: 600px;
        height: 100vh;
        margin-top: -55px;
        background: rgb(255,113,206); /* Old browsers */
        background: -moz-linear-gradient(left, rgba(255,113,206,1) 0%, rgba(1,205,254,1) 44%, rgba(1,205,254,1) 44%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, rgba(255,113,206,1) 0%,rgba(1,205,254,1) 44%,rgba(1,205,254,1) 44%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, rgba(255,113,206,1) 0%,rgba(1,205,254,1) 44%,rgba(1,205,254,1) 44%,rgba(255,255,255,1) 100%);
    }

    .row {
        padding-top: 55px;
    }

    .ff-custom {
        font-family: 'Press Start 2P', cursive;
    }

    .container-ana {
        text-align: center;
    }

    .container-ana > img {
        margin-top: 20px;
    }

    h1 {
        color: rgb(1,205,254);
        text-shadow: 2px 2px 5px #000;
    }

    span {
        color: #fff;
        text-shadow: 2px 2px 5px #000;
    }

    .btn-group {
        margin-top: 20px;
        display: block;
    }

    .btn-social {
        min-width: 104px;
    }

    .col-left {
        border-right: 2px solid black;
    }
</style>