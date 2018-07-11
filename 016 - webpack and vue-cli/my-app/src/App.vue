<template>
    <div id="app">
        <message>Hello there</message>
        <message>this is other message</message>
    </div>
</template>

<script>
import Message from './components/Message.vue'
export default {
    name: 'app',
    components: {
        Message
    },
    data () {
        return {
        
        }
    }
}
</script>

<style>
</style>
