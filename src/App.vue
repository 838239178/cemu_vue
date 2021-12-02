<template>
  <div class="bg-fixed bg-background min-h-full">
    <el-container direction="vertical" class="h-full">
      <div style="min-height: 60px" class="bg-none">cemu.com</div>
      <el-header
        height="60px"
        class="bg-primary-black text-primary-gray fixed w-full z-50"
      >
        <!-- Header content -->
        <el-row :gutter="0" class="h-16" align="middle" justify="space-between">
          <el-col :span="4"></el-col>
          <!-- logo -->
          <el-col :span="2" :offset="0">
            <el-image
              class="w-12 h-12 cursor-pointer"
              @click="routeTo('/index')"
              :src="logoSrc"
            ></el-image>
          </el-col>
          <!-- tabs -->
          <el-col :span="6" :offset="0">
            <PageTabs
              class="w-80 h-6 text-sm divide-x divide-primary-gray"
              @linkto="routeTo"
              :opts="[...routeTable.values()]"
              v-model="routeIndex"
              :icons="['home', 'gamepad', 'crown']"
            />
          </el-col>
          <!-- search bar -->
          <el-col :span="7" :offset="0">
            <SearchBar
              v-show="showSearch"
              class="
                w480
                h-7
                text-sm
                bg-primary-black
                text-primary-gray
                border-primary-gray border-2
                rounded-3xl
              "
              @on-search="routeTo(`/search?kw=${$event}`)"
              :getHints="search"
              placeholder="战地2042首发口碑崩坏 多半差评"
              iptClass="focus:text-white"
            />
          </el-col>
          <el-col :span="3" :offset="0">
            <UserPanel class="bg-none w-48 h-8" />
          </el-col>
          <el-col :span="2"></el-col>
        </el-row>
      </el-header>
      <div class="p-0 h-full w-full">
        <!-- Main content -->
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>
<script>
import logo from "./assets/logo.png";
import SearchBar from "./components/SearchBar.vue";
import PageTabs from "./components/PageTabs.vue";
import UserPanel from "./components/UserPanel.vue";
import api from './api';

export default {
  data() {
    return {
      logoSrc: logo,
      routeTable: new Map([
        ["/index", { text: "首页", icon: "home" }],
        ["/gamecenter", { text: "游戏中心", icon: "gamepad" }],
        ["/rank", { text: "排行榜", icon: "crown" }],
      ]),
      showSearch: true,
      routeIndex: 0
    };
  },
  watch: {
    $route(to,from) {
      this.routeIndex = [...this.routeTable.keys()].findIndex(i=>i == to.path);
      if(to.path == '/search') {
        this.showSearch = false;
      } else {
        this.showSearch = true;
      }
    }
  },
  methods: {
    routeTo(s, i) {
      if (i != undefined) {
        let ks = [...this.routeTable.keys()];
        this.$router.push(ks[i]);
      } else {
        this.$router.push(s);
      }
    },
    search(text) {
      let res = api.getGameData(5).filter((i) => {
        let r = new RegExp(`.*${text}.*`);
        return r.test(i.name) || r.test(i.desc);
      }).map(i=>i.name);
      return res;
    },
  },
  components: { SearchBar, PageTabs, UserPanel },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.w480 {
  width: 480px;
}
</style>
