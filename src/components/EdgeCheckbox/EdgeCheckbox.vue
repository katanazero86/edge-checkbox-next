<template>
  <div class="edge-checkbox" :class="[disabled && 'edge-checkbox--disabled']">
    <label class="edge-checkbox__label label" @change="handleCheckboxChange">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value" :checked="checked">
      <Check class="checkbox--unchecked" :width="width" :height="height" :color="checkboxColor.unchecked" :disabled="disabled" />
      <Check class="checkbox--checked" :width="width" :height="height" :color="checkboxColor.checked" :disabled="disabled"/>
      <span class="label__option">{{option}}</span>
    </label>
  </div>
</template>

<script setup lang="ts">

    import {defineProps, defineEmits, computed} from 'vue';
    import Check from '../Icons/Check.vue';

    const colorScheme = {
        primary: {
            unchecked: '#d9d9d9',
            checked: '#5468ff',
        },
        disabled: {
            unchecked: '#d9d9d9',
            checked: '#bfbfbf',
        }

    }

    const props = defineProps({
        name: {type: String, default: ''},
        id: {type: String, default: ''},
        disabled: {type: Boolean, default: false},
        value: {type: [String, Number], default: ''},
        checked: {type: Boolean, default: false},
        width: {type: Number, default: 16},
        height: {type: Number, default: 16},
        color: {type: String, default: 'primary'},
        option: {type: String, default: ''},
    });

    const emit = defineEmits(['change']);

    const checkboxColor = computed(() => {
        if (typeof props.color !== 'string') return colorScheme.primary;
        if (props.disabled) return colorScheme.disabled;

        switch (props.color) {
            case 'primary' :
                return colorScheme.primary;
            default:
                return colorScheme.primary;
        }

    });

    const handleCheckboxChange = (e: Event) => {
        e.stopPropagation();
        emit('change', e.target.checked);
    }

</script>

<style lang="scss" scoped>
  .edge-checkbox {

    margin-bottom: 10px;

    &__label {

      cursor: pointer;
      display: flex;
      align-items: center;

      input[type="checkbox"] {
        appearance: none;
        border: none;
        padding: 0;
        margin: 0;
        width: 0;
      }

      input[type="checkbox"]:checked ~ .checkbox--checked {
        display: inline-block;
      }

      input[type="checkbox"]:checked ~ .checkbox--unchecked{
        display: none;
      }

      input[type="checkbox"]:not(:checked) ~ .checkbox--checked {
        display: none;
      }

      input[type="checkbox"]:not(:checked) ~ .checkbox--unchecked {
        display: inline-block;
      }

    }

    .label {
      &__option {
        display: inline-block;
        padding: 0 8px;
        font-size: 14px;
      }
    }


    &--disabled {

      .edge-checkbox__label {
        cursor: not-allowed;
      }

      .label {
        &__option {
          color: #d9d9d9;
        }
      }
    }

  }
</style>
