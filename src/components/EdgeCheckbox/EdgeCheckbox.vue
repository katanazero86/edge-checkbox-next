<template>
  <div class="edge-checkbox" :class="[disabled && 'edge-checkbox--disabled', border && 'edge-checkbox--border', inline && 'edge-checkbox--inline']">
    <label class="edge-checkbox__label label" @change="handleCheckboxChange">
      <template v-if="Array.isArray(modelValue)">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value"
               :checked="modelValue.indexOf(value) != -1">
      </template>
      <template v-else>
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value" :checked="modelValue">
      </template>

      <Check class="checkbox--unchecked" :width="checkboxSize.width" :height="checkboxSize.height"
             :color="checkboxColor.unchecked"
             :style="[(border && disabled) && {borderColor : '#bfbfbf'}]" :disabled="disabled"/>
      <Check class="checkbox--checked" :width="checkboxSize.width" :height="checkboxSize.height"
             :color="checkboxColor.checked"
             :style="[border && checkboxBorder]"
             :disabled="disabled"/>
      <span class="label__option">{{option}}</span>
    </label>
  </div>
</template>

<script setup lang="ts">

    import {defineProps, defineEmits, computed} from 'vue';
    import Check from '../Icons/Check.vue';
    import colorScheme from '../../constants/color-scheme';

    const props = defineProps({
        name: {type: String, default: ''},
        id: {type: String, default: ''},
        disabled: {type: Boolean, default: false},
        color: {type: String, default: 'primary'},
        option: {type: String, default: ''},
        border: {type: Boolean, default: false},
        size: {type: String, default: 'md'},
        inline: {type: Boolean, default: false},
        value: {type: String, default: ''},
        modelValue: {type: [Boolean, Array], default: false},
    });

    const emit = defineEmits(['change', 'update:modelValue']);

    const checkboxColor = computed(() => {
        if (typeof props.color !== 'string') return colorScheme.primary;
        if (props.disabled) return colorScheme.disabled;
        switch (props.color) {
            case 'primary' :
                return colorScheme.primary;
            case 'secondary' :
                return colorScheme.secondary;
            case 'red' :
                return colorScheme.red;
            case 'orange' :
                return colorScheme.orange;
            default:
                return colorScheme.primary;
        }
    });

    const checkboxBorder = computed(() => {
        if (typeof props.color !== 'string') return {
            backgroundColor: colorScheme.primary.checked,
            borderColor: colorScheme.primary.checked
        };
        if (props.disabled) return {
            backgroundColor: colorScheme.disabled.checked,
            borderColor: colorScheme.disabled.checked
        };
        switch (props.color) {
            case 'primary' :
                return {backgroundColor: colorScheme.primary.checked, borderColor: colorScheme.primary.checked};
            case 'secondary' :
                return {backgroundColor: colorScheme.secondary.checked, borderColor: colorScheme.secondary.checked};
            case 'red' :
                return {backgroundColor: colorScheme.red.checked, borderColor: colorScheme.red.checked};
            case 'orange' :
                return {backgroundColor: colorScheme.orange.checked, borderColor: colorScheme.orange.checked};
            default:
                return {backgroundColor: colorScheme.primary.checked, borderColor: colorScheme.primary.checked};
        }
    });

    const checkboxSize = computed(() => {
        if (typeof props.size !== 'string') return {
            width: 18,
            height: 18
        };

        switch (props.size) {
            case 'sm' :
                return {
                    width: 16,
                    height: 16
                };
            case 'md' :
                return {
                    width: 18,
                    height: 18
                };
            case 'lg' :
                return {
                    width: 20,
                    height: 20
                };
            default:
                return {
                    width: 18,
                    height: 18
                };
        }
    });

    const handleCheckboxChange = (e: Event) => {
        e.stopPropagation();
        emit('change', (<HTMLInputElement>e.target).checked, (<HTMLInputElement>e.target).value, e.target);

        if (Array.isArray(props.modelValue)) {
            if ((<HTMLInputElement>e.target).checked) {
                emit('update:modelValue', [...props.modelValue, (<HTMLInputElement>e.target).value]);
            } else {
                emit('update:modelValue', [...props.modelValue.filter(value => value !== (<HTMLInputElement>e.target).value)]);
            }
        } else {
            emit('update:modelValue', (<HTMLInputElement>e.target).checked);
        }
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
        height: 0;
      }

      input[type="checkbox"]:checked ~ .checkbox--checked {
        display: inline-block;
        animation: fade-in 0.2s linear;
      }

      input[type="checkbox"]:checked ~ .checkbox--unchecked {
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
        padding: 0 4px;
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

    &--border {
      .edge-checkbox__label {
        .checkbox--checked {
          border: 2px solid;
          border-radius: 2px;
          color: white !important;
        }

        .checkbox--unchecked {
          border: 2px solid #616161;
          border-radius: 2px;
          color: white !important;
        }
      }
    }

    &--inline {
      display: inline-block;
    }

  }


  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
