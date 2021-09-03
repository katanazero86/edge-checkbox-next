<template>
    <svg class="check-icon" :class="[disabled && 'check-icon--disabled']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :width="width" :height="height" :color="color">
      <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="1.5"
            d="M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"></path>
    </svg>
</template>

<script setup lang="ts">

    import {defineProps} from 'vue';

    const props = defineProps({
        width: {type: Number, default: 18},
        height: {type: Number, default: 18},
        color: {type: String, default: '#e6e6e6'},
        option: {type: String, default: ''},
        disabled: {type: Boolean, default: false},
    });

    console.log(props);
</script>

<style lang="scss" scoped>
  .check-icon {
    cursor: pointer;

    &--disabled {
      cursor: not-allowed;
    }

  }
</style>
