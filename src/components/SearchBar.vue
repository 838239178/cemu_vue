<template>
  <div>
    <div class="flex justify-center items-center w-full h-full" :class="iptClass">
      <input
        v-model="value"
        type="text"
        class="bg-none border-none p-0 m-0 w-11/12 h-full s-input px-1"
        :placeholder="placeholder"
        @change="$emit('on-search', value)"
        @focusin="onFocusin"
        @input="onInput"
        @focusout="onFocusout"
      />
      <font-awesome-icon
        class="
          w-1/12
          hover:text-primary-red
          transition
          hover:scale-105
          duration-200
        "
        icon="search"
      ></font-awesome-icon>
    </div>
    <transition name="el-zoom-in-top">
      <div
        v-show="showList"
        class="
          mt-1
          px-3
          border-b border-l border-r
          rounded
          w-11/12
          ml-2
          h-fit
          grid grid-cols-1
          divide-y divide-primary-gray
        "
        style="background-color: inherit; color: inherit; border-color: inherit; box-shadow: 3px 5px 15px #333333;"
      >
        <button
          @click="clickSearch(s)"
          v-for="(s, i) in hintList"
          :key="i"
          style="font-size: inherit;"
          class="px-4 py-4 w-full text-left"
        >
          {{ s }}
        </button>
      </div>
    </transition>
  </div>
</template>
<script>
import Lock from '../js/Lock'

export default {
  emits: ['on-search','update:modelValue'],
  props: {
    iptClass: {
      default: () => "",
    },
    placeholder: {
      default: () => "",
    },
    modelValue: String,
    getHints: {
      type: Function,
    },
    throttle: {
      default: ()=> 200
    },
    maxRes: {
      default: ()=> 5
    }
  },
  watch: {
    modelValue(nval) {
      this.value = nval;
    },
    value(nval, oval) {
      this.$emit('update:modelValue', nval, oval)
    }
  },
  data() {
    return {
      showList: false,
      hintList: [],
      value: this.modelValue || "",
      keywordStack: [],
      throttleTimer: null,
      preshow: 0,
      lock: new Lock()
    };
  },
  methods: {
    doThrottle() {
      let cur = new Date().getTime();
      let interval = cur - this.preshow;
      this.preshow = cur;
      return interval <= this.throttle;
    },
    async onInput(event) {
      let unlock = await this.lock.getLock()
      this.keywordStack.push(this.value);
      unlock()
      if(this.doThrottle()) return;
      this.searchHint(this.value);
    },
    searchHint(value) {
      // console.log("search:" + value);
      this.showList = true;
      this.hintList = this.getHints(value).slice(0,this.maxRes);
    },
    onFocusout(event) {
      setTimeout(() => {
        this.showList = false;
      }, 150);
      clearInterval(this.throttleTimer)
      this.throttleTimer = null
      this.keywordStack = []
    },
    onFocusin(event) {
      this.throttleTimer = setInterval(async () => {
        let unlock = await this.lock.getLock()
        if(this.keywordStack.length == 0 || this.doThrottle()) {
          unlock();
          return;
        }
        let keyw = this.keywordStack.pop();
        this.keywordStack = []
        unlock();
        this.searchHint(keyw);
      }, this.throttle);
    },
    clickSearch(s) {
      this.value = s;
    }
  },
};
</script>
<style lang="css" scoped>
.s-input {
  border-radius: inherit;
  background: inherit;
  outline: medium;
}
</style>