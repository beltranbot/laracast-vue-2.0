Vue.component('message', {
    props: ['title', 'body'],
    template: `
        <article class="message" v-show="show">
            <div class="message-header">
                <p>{{title}}</p>
                <button
                    @click="hideModal"
                    class="delete"
                    aria-label="delete">
                </button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    `,
    data () {
        return {
            show: true
        }
    },
    methods: {
        hideModal () {
            console.log('hello world')
            this.show = false
        }
    }
})

new Vue({
    el: '#root'
})