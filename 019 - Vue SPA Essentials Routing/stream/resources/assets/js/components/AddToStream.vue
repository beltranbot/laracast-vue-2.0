<template>
    <div class="message">
        <div class="message-header">
            Push to stream...
        </div>
        <div class="message-body">
            <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                <p class="control">
                    <textarea
                        class="textarea"
                        placeholder="I have something to say"
                        v-model="form.body" />
                    <span
                        class="help is-danger"
                        v-if="form.errors.has('body')"
                        v-text="form.errors.get('body')" />
                </p>
                <p class="control">
                    <button
                        class="button is-primary"
                        :disabled="form.errors.any()">Submit</button>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: new Form({body: ''})
        }
    },
    methods: {
        onSubmit () {
            // submit ajax request to the server
            this.form.submit('post', '/api/statuses')
                .then(status => this.$emit('completed', status))
                .catch(err => console.log(err))
        }
    }

}
</script>

<style>

</style>
