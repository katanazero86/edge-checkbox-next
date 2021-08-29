<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import EdgeCheckbox from './components/EdgeCheckbox/EdgeCheckbox.vue';


    const handleChange = (checked:boolean) => {
        console.log(checked)
    }

</script>

<template>
  <EdgeCheckbox option="apple" color="primary" @change="handleChange" />

  <EdgeCheckbox option="banana" disabled />
  <EdgeCheckbox option="tomato" disabled checked />
</template>

<style lang="scss" scoped>

</style>
