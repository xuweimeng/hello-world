<template>
    <div>  
        <el-card>我是{{aa}}</el-card>     
        <el-button type="primary" @click="onChangedParsent">父组件</el-button>
        <el-button type="primary" @click="onChangedemitter">nodeEvent</el-button>
    </div>
</template>

<script>
    import { globalEvent } from '@/config/Event';
    import emitter from '@/config/nodeEvent';
    export default {
        data () {
           return {
               count: 0,
           }
        },
        props: ['aa'],
        mounted: function () {
            console.log( emitter );
        },
        updated() {
            console.log('我是aa');
        },
        methods: {


            onChangedParsent() {
                this.count++;
                let count = this.count;
                globalEvent.trigger('gps', count)
            },
            onChangedemitter() {
                emitter.emit('hello', 'world')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>