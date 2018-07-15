class Status {

    static all (callback) {
        return axios.get('/api/statuses')
            .then(({data}) => callback(data))
    }

}

export default Status