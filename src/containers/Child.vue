<template>
    <div>
         <el-button type="primary" @click="onEmitEvent">子组件</el-button>

         {{count}}
    </div>
</template>

<script>
    import { globalEvent } from '@/config/Event';
    import emitter from '@/config/nodeEvent';
    export default {
        data() {
            return {
                count: 0,
            }
        },
        mounted () {
            const _this = this;
            globalEvent.on('gps', function(val) {
                console.log(val)
                _this.count = val;
                console.log(globalEvent)
            });

            emitter.on('hello',function(val) {
                console.log('hello=',val);
            })
        },
        methods: {
            onEmitEvent() {
                globalEvent.trigger('gps', 2)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>