Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    data () {
        return {
            isActive: false
        }
    },
    mounted () {
        console.log(this.selected)
        this.isActive = this.selected
    },
    computed: {
        href () {
            let href = this.name.toLowerCase().replace(/ /g, '-')
            return `#${href}`
        }
    }
})

Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs"
                        :class="{'is-active': tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data () {
        return {
            tabs: []
        }
    },
    created () {
        this.tabs = this.$children
    },
    methods: {
        selectTab (selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (selectedTab.name === tab.name)
            })
        }
    }
})

new Vue({
    el: '#root',
    data: {
        showModal: false
    },
})