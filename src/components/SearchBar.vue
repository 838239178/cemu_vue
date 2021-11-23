<template>
  <div class="relative">
    <input
      v-model="value"
      type="text"
      class="bg-none border-none p-0 m-0 w-full h-full s-input px-4"
      :class="iptClass"
      :placeholder="placeholder"
      @change="doSearch(value)"
      @focusin="onFocusin"
      @input="onInput"
      @focusout="onFocusout"
    />
    <font-awesome-icon
      class="
        absolute
        right-4
        top-1
        hover:text-primary-red
        transition
        hover:scale-105
        duration-200
      "
      icon="search"
    ></font-awesome-icon>
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
  props: {
    iptClass: {
      default: () => "",
    },
    placeholder: {
      default: () => "",
    },
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
  data() {
    return {
      showList: false,
      hintList: [],
      value: "",
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
      this.doSearch(this.value);
    },
    doSearch(value) {
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
        this.doSearch(keyw);
      }, this.throttle);
    },
    clickSearch(s) {
      this.value = s;
      console.log(this.value);
    }
  },
};
</script>
<style lang="css" scoped>
.s-input {
  border-radius: inherit;
  background: inherit;
}
</style>