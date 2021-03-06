import Component from 'vue-class-component';
import docInputFields from './input-fields';
import docInputIconFields from './input-icon-fields';
import docTextareas from './textareas';
import docSelects from './selects';
import docRadios from './radios';
import docCheckboxes from './checkboxes';
import docSwitches from './switches';
import docFileInputs from './file-inputs';

@Component({
    components: {
        docInputFields,
        docInputIconFields,
        docTextareas,
        docSelects,
        docRadios,
        docCheckboxes,
        docSwitches,
        docFileInputs
    },
    template: require('./forms.html')
})
export default class Forms {
    data() {
        return {
            api: [
                {
                    name: 'Input',
                    api: require('../../components/form/input/input-api.json')
                },
                {
                    name: 'Textarea',
                    api: require('../../components/form/textarea/textarea-api.json')
                },
                {
                    name: 'Select',
                    api: require('../../components/form/select/select-api.json')
                },
                {
                    name: 'Option',
                    api: require('../../components/form/option/option-api.json')
                },
                {
                    name: 'Radio group',
                    api: require('../../components/form/radio-group/radio-group-api.json')
                },
                {
                    name: 'Radio',
                    api: require('../../components/form/radio/radio-api.json')
                },
                {
                    name: 'Checkbox group',
                    api: require('../../components/form/checkbox-group/checkbox-group-api.json')
                },
                {
                    name: 'Checkbox',
                    api: require('../../components/form/checkbox/checkbox-api.json')
                },
                {
                    name: 'Switch',
                    api: require('../../components/form/swich/switch-api.json')
                },
                {
                    name: 'File input',
                    api: require('../../components/form/file-input/file-input-api.json')
                }
            ],
            snippets: {
                inputFields: require('./input-fields/input.snippet.html'),
                inputIconFields: require('./input-icon-fields/input-icon.snippet.html'),
                textareas: require('./textareas/textarea.snippet.html'),
                selects: require('./selects/selects.snippet.html'),
                radios: require('./radios/radios.snippet.html'),
                checkboxes: require('./checkboxes/checkboxes.snippet.html'),
                switches: require('./switches/switches.snippet.html'),
                fileInputs: require('./file-inputs/file-inputs.snippet.html')
            },
            src: [
                {
                    name: 'Input field',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/input/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/input/input.html')
                },
                {
                    name: 'Textarea',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/textarea/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/textarea/textarea.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/form/textarea/textarea.scss')
                },
                {
                    name: 'Select',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/select/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/select/select.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/form/select/select.scss')
                },
                {
                    name: 'Option',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/option/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/option/option.html')
                },
                {
                    name: 'Radio group',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/radio-group/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/radio-group/radio-group.html')
                },
                {
                    name: 'Radio',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/radio/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/radio/radio.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/form/radio/radio.scss')
                },
                {
                    name: 'Checkbox group',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/checkbox-group/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/checkbox-group/checkbox-group.html')
                },
                {
                    name: 'Checkbox',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/checkbox/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/checkbox/checkbox.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/form/checkbox/checkbox.scss')
                },
                {
                    name: 'Switch',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/swich/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/swich/switch.html')
                },
                {
                    name: 'File input',
                    script: require("!!html!highlightjs?lang=ts!../../components/form/file-input/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/form/file-input/file-input.html')
                }
            ]
        }
    }
}