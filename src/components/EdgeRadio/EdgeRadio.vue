<template>
  <div class="edge-radio" :class="[radioColor, radioSize, inline && `edge-radio--inline`]">
    <label class="edge-radio__label label" @change="handleRadioChange">
      <input type="radio" :name="name" :id="id" :disabled="disabled" :value="value" :checked="modelValue === value">
      <span class="radio-mark"></span>
      <span class="label__option">{{option}}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
    import {defineProps, defineEmits, computed} from 'vue';

    const props = defineProps({
        name: {type: String, default: ''},
        id: {type: String, default: ''},
        disabled: {type: Boolean, default: false},
        value: {type: String, default: ''},
        color: {type: String, default: 'primary'},
        option: {type: String, default: ''},
        size: {type: String, default: 'md'},
        inline: {type: Boolean, default: false},
        modelValue: {type: [Boolean, String], default: ''},
    });

    const emit = defineEmits(['change', 'update:modelValue']);

    const radioColor = computed(() => {
        if (typeof props.color !== 'string') return 'edge-radio--primary';
        if (props.disabled) return 'edge-radio--disabled';
        switch (props.color) {
            case 'primary' :
                return 'edge-radio--primary';
            case 'secondary' :
                return 'edge-radio--secondary';
            case 'red' :
                return 'edge-radio--red';
            case 'orange' :
                return 'edge-radio--orange';
            default:
                return 'edge-radio--primary';
        }
    });

    const radioSize = computed(() => {
        if (typeof props.size !== 'string') return '';

        switch (props.size) {
            case 'sm' :
                return 'edge-radio--sm'
            case 'md' :
                return '';
            case 'lg' :
                return 'edge-radio--lg'
            default:
                return '';
        }
    });

    const handleRadioChange = (e: Event) => {
        e.stopPropagation();
        console.log(e.target.checked, e.target.value);
        emit('change', e.target.checked, e.target.value, e.target);

        emit('update:modelValue', e.target.value);
    }

</script>

<style lang="scss" scoped>

  $primary: #5468ff;
  $secondary: #03dac5;
  $red: #f44336;
  $orange: #ff9800;
  $disabled: #d9d9d9;

  .edge-radio {
    margin-bottom: 10px;

    &__label {

      cursor: pointer;
      display: flex;
      align-items: center;

      input[type="radio"] {
        appearance: none;
        border: none;
        padding: 0;
        margin: 0;
        width: 0;
        height: 0;
      }


    }

    .label {
      .radio-mark {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 50%;

        &:after {
          position: absolute;
          visibility: hidden;
          top: 3px;
          left: 3px;
          width: 10px;
          height: 10px;
          background-color: $primary;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          content: " ";
          transition: all 0.2s linear;
        }

      }

      input[type="radio"]:checked ~ .radio-mark {
        border-color: $primary;
      }

      input[type="radio"]:checked ~ .radio-mark:after {
        visibility: visible;
        transform: scale(1);
        opacity: 1;
      }

      &__option {
        display: inline-block;
        padding: 0 8px 0px 4px;
        font-size: 14px;
      }

    }


    &--primary {
      .label {
        .radio-mark {
          &:after {
            background-color: $primary;
          }
        }

        input[type="radio"]:checked ~ .radio-mark {
          border-color: $primary;
        }
      }
    }

    &--secondary {
      .label {
        .radio-mark {
          &:after {
            background-color: $secondary;
          }
        }

        input[type="radio"]:checked ~ .radio-mark {
          border-color: $secondary;
        }
      }
    }

    &--red {
      .label {
        .radio-mark {
          &:after {
            background-color: $red;
          }
        }

        input[type="radio"]:checked ~ .radio-mark {
          border-color: $red;
        }
      }
    }

    &--orange {
      .label {
        .radio-mark {
          &:after {
            background-color: $orange;
          }
        }

        input[type="radio"]:checked ~ .radio-mark {
          border-color: $orange;
        }
      }
    }

    &--disabled {

      .label {
        cursor: not-allowed;

        .radio-mark {
          background-color: #f5f5f5;

          &:after {
            background-color: $disabled;
          }
        }

        input[type="radio"]:checked ~ .radio-mark {
          border-color: $disabled;
        }

        &__option {
          color: $disabled;
        }
      }
    }

    &--sm {
      .label {
        .radio-mark {
          width: 14px;
          height: 14px;
          &:after {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    &--lg {
      .label {
        .radio-mark {
          width: 18px;
          height: 18px;
          &:after {
            width: 12px;
            height: 12px;
          }
        }
      }
    }

    &--inline {
      display: inline-block;
    }

  }

</style>
