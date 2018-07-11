Vue.component('coupon', {
    props: ['code'],
    template: `
        <input
            type="text"
            :value="code"
            @input="updateCode($event.target.value)"
            ref="input">
    `,
    methods: {
        updateCode (code) {
            if (code === 'ALLFREE') {
                alert('this coupon is not longer valid. Sorry!')
                this.$refs.input.value = code = ''
                return
            }
            this.$emit('input', code)
            // this.code = code
        }
    }
})

let app = new Vue ({
    el: '#app',
    data: {
        coupon: 'FREEBIE'
    }

})