<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import {ref} from 'vue';
    import EdgeCheckbox from './components/EdgeCheckbox/EdgeCheckbox.vue';
    import EdgeRadio from './components/EdgeRadio/EdgeRadio.vue';

    const handleChange = (checked: boolean, value: any, el: any) => {
        console.log(checked, value, el);
        isChecked.value = checked;
        isRadioChecked.value = value;
    };

    const updateModelValue = (targetValue: any) => {
        console.log(targetValue);
    };

    const isChecked = ref(false);
    const isChecked2 = ref(true);
    const isChecked4 = ref(false);
    const isChecked5 = ref(['하이루']);
    const isCheckedArray = ref(['1']);
    const isRadioChecked = ref(1);

</script>

<template>
  {{isCheckedArray}}
  <EdgeCheckbox option="primary" color="primary" @change="handleChange"/>
  <EdgeCheckbox option="apple" color="secondary" @change="handleChange"/>
  <EdgeCheckbox option="apple" color="red" @change="handleChange"/>

  <EdgeCheckbox option="orange v-model(updateModelValue)" color="orange" value="fuck"
                @update:modelValue="updateModelValue"/>
  <EdgeCheckbox option="orange v-model2" color="orange" v-model="isChecked2"/>

  <EdgeCheckbox option="orange v-model4" color="primary" v-model="isChecked4"/>
  <EdgeCheckbox option="orange v-model4" color="primary" v-model="isChecked4"/>

  <EdgeCheckbox option="1" value="1" color="orange" v-model="isCheckedArray"/>
  <EdgeCheckbox option="2" value="2" color="red" v-model="isCheckedArray"/>
  <EdgeCheckbox option="3" value="3" color="primary" v-model="isCheckedArray"/>

  <EdgeCheckbox option="orange22" color="orange" @change="handleChange"/>

  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border size="sm"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border size="lg"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border disabled/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border disabled :modelValue="true"/>

  <EdgeCheckbox option="orange" color="red" @change="handleChange" size="sm"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" size="md"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" size="lg"/>

  <EdgeCheckbox option="banana" inline disabled/>
  <EdgeCheckbox option="tomato" inline disabled/>

  <EdgeRadio option="radio test" value="1" name="radio" size="sm" v-model="isRadioChecked"/>
  <EdgeRadio option="radio test2" value="radio test2" name="radio" @change="handleChange" :modelValue="isRadioChecked"/>
</template>

<style lang="scss" scoped>

</style>
