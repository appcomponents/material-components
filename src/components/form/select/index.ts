import Component from 'vue-class-component';
import mdDropdownList from '../../dropdown-list';

import inputMixin from '../../../mixins/input';
import clickAway from '../../../directives/click-away';
import bindBoolean from '../../../directives/bind-boolean';

var Vue: any = require('vue');

@Component({
    props: {
        value: {
            required: false,
            'default': null
        },
        valueText: {
            required: false,
            'default': ''
        }
    },
    events: {
        'select::select': function(value) {
            if (Array.isArray(this.value)) {
                this.value.push(value);
            }
            else {
                this.value = value;
                this.close();
            }
            this.$broadcast('option::select', value);
            this.$nextTick(this.refreshDropdownOptions);
            return true;

        },
        'select::unselect': function(value) {
            if (Array.isArray(this.value)) {
                this.value.$remove(value);
            }
            else {
                this.value = value;
            }
            this.$broadcast('option::unselect', value);
            this.$nextTick(this.refreshDropdownOptions);
            return true;
        }
    },
    watch: {
        value: function () {
            this.$nextTick(this.refreshDropdownOptions)
        }
    },
    components: {
        mdDropdownList
    },
    directives: {
        clickAway,
        bindBoolean
    },
    mixins: [
        inputMixin
    ],
    template: require('./select.html')
})
export default class SelectField {
    private $els: any;
    private $getAllChildren: any;
    private $broadcast: any;
    private _slotContents: any;

    private active: boolean;
    private options: any;
    private defaultSelect: string;
    private value: any;
    private valueText: string;

    data() {
        return {
            active: false,
            options: {}
        }
    }

    compiled() {
        var options = this.$getAllChildren().filter((c: any) => {return 'SelectOption' == c.$options.name});
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var opt: any = this.createOption(option);
            Vue.set(this.options, opt.value, opt);
        }
    }

    ready() {
        this.refreshDropdownOptions()
    }

    createOption(option: any) {
        var content = option.label;
        var value = option.value;
        var disabled = option.disabled;

        return {
            content: content,
            value: value,
            disabled: disabled
        };
    }

    get multiple() {
        return Array.isArray(this.value);
    }

    get field() {
        return this.$els.field;
    }

    hasSlot(name = 'default') {
        return name in this._slotContents;
    }

    refreshDropdownOptions() {
        var _self = this;
        // Update of valueText
        if(Array.isArray(_self.value)) { // Multiple
            var result = this.value.map((value) => {
                return this.options[value] ? this.options[value].content : '';
            }).join(', ');
            this.valueText = result;
        }
        else { // Single
            var result = this.options[this.value] ? this.options[this.value].content : '';
            this.valueText = result;
        }
    }

    open(e) {
        if (!this.active) {
            this.active = true;
            this.$broadcast('dropdown-list::open', e);
        }
    }

    close() {
        if (this.active) {
            this.active = false;
            this.$broadcast('dropdown-list::close');
        }
    }
}