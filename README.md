## edge-ui

- checkbox

component : `<EdgeCheckbox/>` <br/>
props
> name: {type: String, default: ''} <br/>
> id: {type: String, default: ''} <br/>
> disabled: {type: Boolean, default: false} <br/>
> color: {type: String, default: 'primary'} <br/>
> option: {type: String, default: ''} <br/>
> border: {type: Boolean, default: false} <br/>
> size: {type: String, default: 'md'} <br/>
> inline: {type: Boolean, default: false} <br/>
> value: {type: String, default: ''} <br/>
> modelValue: {type: [Boolean, Array], default: false} <br/>

size : 'sm' | 'md' | 'lg' // default md
color : 'primary' | 'secondary' | 'red' | 'orange' // default primary

events
> @update:modelValue = (value: any) => {} <br/>
> @change = (checked: boolean, value: any, el: any) => {} <br/>

examples
```
const isChecked = ref(false);
const handleChange = (checked: boolean, value: string, el: any) => {
        console.log(checked, value, el);
        isChecked.value = checked;
};


<template>

<EdgeCheckbox option="apple" color="primary" @change="handleChange"/>

</template>
```

```
const isChecked = ref(false);

<template>

<EdgeCheckbox option="apple" color="primary" v-model="isChecked"/>

</template>
```

checkbox checked
If modelValue is Boolean, it is checked if true. <br/>
`<EdgeCheckbox option="orange" color="orange" modelValue="true"/>`

If modelValue is an Array, it is checked if the modelValue Array contains value.
```
const isCheckedArray = ref(['1']);

<EdgeCheckbox option="1" value="1" color="orange" v-model="isCheckedArray"/>  // checked started..
<EdgeCheckbox option="2" value="2" color="red" v-model="isCheckedArray"/>
<EdgeCheckbox option="3" value="3" color="primary" v-model="isCheckedArray"/>

```

---

- radio

component : `<EdgeRadio/>` <br/>
props
> name: {type: String, default: ''} <br/>
> id: {type: String, default: ''} <br/>
> disabled: {type: Boolean, default: false} <br/>
> color: {type: String, default: 'primary'} <br/>
> option: {type: String, default: ''} <br/>
> size: {type: String, default: 'md'} <br/>
> inline: {type: Boolean, default: false} <br/>
> value: {type: String, default: ''} <br/>
> modelValue: {type: [Boolean, Array], default: ''} <br/>

size : 'sm' | 'md' | 'lg' // default md
color : 'primary' | 'secondary' | 'red' | 'orange' // default primary

events
> @update:modelValue = (value: any) => {} <br/>
> @change = (checked: boolean, value: string, el: any) => {} <br/>

examples
```
const isRadioChecked = ref(1);
const handleChange = (checked: boolean, value: any, el: any) => {
   isRadioChecked.value = value;
};


<template>

<EdgeRadio option="radio test" value="1" name="radio" size="sm" @change="handleChange"/>

</template>
```

```
const isRadioChecked = ref(1);

<template>

<EdgeRadio option="radio test" value="1" name="radio" size="sm" v-model="isRadioChecked"/>

</template>
```

radio checked
If modelValue and value are equal, checked
`<EdgeRadio option="checked radio" value="test" modelValue="test"/>`


---

npm i -S @zero86/edge-ui

```
// any components

<template>
  <h1>{{ msg }}</h1>
  <EdgeCheckbox option="test"/>
  <EdgeRadio option="radio"/>
</template>

<script>
    import '@zero86/edge-ui/dist/style.css';
    import {EdgeCheckbox, EdgeRadio} from '@zero86/edge-ui';

    export default {
        name: 'HelloWorld',
        components: {
            EdgeCheckbox,
            EdgeRadio,
        },
        data() {
            return {
                msg: 'hello world'
            }
        }
    }
</script>


```
