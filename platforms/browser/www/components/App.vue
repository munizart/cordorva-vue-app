<template>
    <div>
        <nav class="clear-fix   ">
            <div class="back float-left">
                <router-link :to="-1">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </router-link>
            </div>
            <h2>{{title}}</h2>
        </nav>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Home'
        }
    }
}
</script>

<style src="./../css/font-awesome.min.css"></style>
<style src="./../css/milligram.min.css"></style>
<style scoped>
    nav {
        display: block;
        height: 50px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        padding-left: 10px;
        padding-right: 10px;
        font-size: 3.6rem;
        line-height: 1.25;
    }
    nav > * {
        display: inline-block;
    }

    nav > h2 {
        display: block;
        text-align: center;
    }
</style>
