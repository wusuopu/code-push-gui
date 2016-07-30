<template>
  <div id="main" class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title" style="display: inline-block">账号信息</h3>
        <a href="#" v-on:click="refresh" style="float: right"><i class="glyphicon glyphicon-refresh"></i></a>
      </div>
      <div class="panel-body">
        Name: {{accountInfo.name}} <br />
        Email: {{accountInfo.email}} <br />
        LinkedProviders: {{accountInfo.linkedProviders}}
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Ajax from './libs/ajax'
export default {
  components: {
  },
  data () {
    return {
      accountInfo: {}
    }
  },
  ready () {
    this.refresh()
  },
  methods: {
    refresh () {
      Ajax.getAccoutInfo((err, data) => {
        !err && this.$set('accountInfo', data)
      })
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";

#app {
  margin-top: 30px;
}
</style>
