class Errors {
    constructor() {
        this.err = {

        }
    }
    get(field) {
        if (this.err[field]) {
            return this.err[field][0]
        }
    }

    record(errors) {
        this.err = errors
    }

    clear(field) {
        if (field) {
            delete this.err[field]
            return
        }

        this.err = {}

    }

    has(field) {
        return this.err.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.err).length > 0
    }
}

export default Errors