<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import {ref} from 'vue';
    import EdgeCheckbox from './components/EdgeCheckbox/EdgeCheckbox.vue';

    const handleChange = (checked: boolean) => {
        console.log(checked);
        console.log('v-model', isChecked.value);
    }

    const isChecked = ref(false);
    const isChecked2 = ref(true);



</script>

<template>
  {{isChecked}} / {{isChecked2}}
  <EdgeCheckbox option="apple" color="primary" @change="handleChange"/>
  <EdgeCheckbox option="apple" color="secondary" @change="handleChange"/>
  <EdgeCheckbox option="apple" color="red" @change="handleChange"/>

  <EdgeCheckbox option="orange v-model" color="orange" v-model:modelChecked="isChecked"/>
  <EdgeCheckbox option="orange v-model2" color="orange" v-model:modelChecked="isChecked2"/>
  <EdgeCheckbox option="orange22" color="orange" checked @change="handleChange"/>

  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border size="lg"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border disabled/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" border disabled checked/>

  <EdgeCheckbox option="orange" color="red" @change="handleChange" size="sm"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" size="md"/>
  <EdgeCheckbox option="orange" color="orange" @change="handleChange" size="lg"/>

  <EdgeCheckbox option="banana" disabled/>
  <EdgeCheckbox option="tomato" disabled checked/>
</template>

<style lang="scss" src="./assets/global.scss"></style>
<style lang="scss" scoped>

</style>
