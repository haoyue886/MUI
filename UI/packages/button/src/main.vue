<template>
  <button class="m-button" v-bind:class="[`m-button--${type}`,`m-button--${size}`,
  {'is-plain':plain},
  {'is-round':round},
  {'is-circle':circle},
  {'is-disabled':disabled},
  {'is-loading':loading}]"
  @click="handleClick"
          :disabled="disabled || loading"
          :loading="loading"
  >
    <i class="m-icon-loading" v-if="loading"></i>
    <i  v-if="icon&&!loading" :class="`iconfont icon-${icon} `"></i>
    <!--如果没有传入文本插槽，则不显示span内容-->
    <span v-if="$slots.default">
        <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "MButton",
  props:{
    size:{
      type:String,
      default:'14px',
    },
    type:{
      type:String,
      default:'default',
    },
    plain:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false,
    },
    circle:{
      type:Boolean,
      default:false,
    },
    loading:{
      type:Boolean,
      default:false,
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    icon:{
      type:String,
      default:"",
    },
    autofocus:{
      type:Boolean,
      default:false,
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
