<template>
    <div class="home">
        <HomeComponent/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeComponent from '@/components/HomeComponent.vue'

    export default {
        name: 'Home',
        components: {
            HomeComponent
        },
        data() {
            return {
                title: '12'
            }
        },
        mounted() {
            this.axios({
                method: 'get',
                url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
            }).then(response => {
                console.log(response.data)
                // this.title = response.data
            })
        }
    }
</script>
