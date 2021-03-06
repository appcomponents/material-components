import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docDefaultPagination from './default';

import events from '../../mixins/events';

@Component({
    components: {
        docSnippet,
        docDefaultPagination
    },
    mixins: [
        events
    ],
    template: require('./paginations.html')
})
export default class Paginations {
    data() {
        return {
            api: require('../../components/pagination/pagination-api.json'),
            snippets: {
                defaultPagination: require('./default/default.snippet.html')
            },
            src: {
                script: require("!!html!highlightjs?lang=ts!../../components/pagination/index.ts"),
                template: require('!!html!highlightjs?lang=html!../../components/pagination/pagination.html')
            }
        }
    }
}