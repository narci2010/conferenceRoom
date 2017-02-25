<template>
    <div class="t-Switch">
      <div class="csshub-toggle">
        <input v-model="currentValue" type="checkbox" class="csshub-check">
        <b class="csshub-b csshub-switch"></b>
        <b class="csshub-b csshub-track"></b>
      </div>
      <p class="info">{{ currentValue ? onText : offText }}</p>
    </div>
</template>

<script>
    export default {
      name: 'tSwitch',
      props: {
        value: Boolean,
        offText: String,
        onText: String
      },
      data () {
        return {
          currentValue: this.value
        }
      },
      components: {
      },
      watch: {
        'value' (val) {
          if (this.currentValue !== val) {
            this.currentValue = val
          }
        },
        'currentValue' (newVal, oldVal) {
          if (newVal !== oldVal) {
            this.$emit('change', newVal)
            this.$emit('input', newVal)
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .t-Switch{
    position: relative;
    width: 100%;
    height: 30px;
  }
  .info{
    position: absolute;
    left: 70px;
    top: -7px;
    font-size: 14px;
    color: #666;
  }
  .csshub-b {
    display: block;
  }

  .csshub-toggle {
    width: 60px;
    height: 30px;
    border-radius: 100px;
    background-color: #ddd;
    margin: -20px -40px;
    overflow: hidden;
    box-shadow: inset 0 0 2px 1px rgba(0,0,0,.05);
    position: absolute;
    box-sizing: border-box;
    top: 20px;
    left: 40px;
  }

  .csshub-check {
    position: absolute;
    display: block;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 6;
  }

  .csshub-check:checked ~ .csshub-track {
    box-shadow: inset 0 0 0 20px #4bd863;
  }

  .csshub-check:checked ~ .csshub-switch {
    right: 2px;
    left: 32px;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    transition-property: left, right;
    transition-delay: .05s, 0s;
  }

  .csshub-switch {
    position: absolute;
    left: 2px;
    top: 2px;
    bottom: 2px;
    right: 32px;
    background-color: #fff;
    border-radius: 36px;
    z-index: 1;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    transition-property: left, right;
    transition-delay: 0s, .05s;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
  }

  .csshub-track {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    box-shadow: inset 0 0 0 2px rgba(0,0,0,.05);
    border-radius: 40px;
  }
</style>
