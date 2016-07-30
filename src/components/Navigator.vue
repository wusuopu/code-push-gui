<template>
  <ol class="breadcrumb">
    <li>
      <a v-link="{path: '/apps'}">应用列表</a>
    </li>
    <li v-for="(index, item) in paths">
      <a v-if="item.link" v-link="{path: item.link}">{{item.name}}</a>
      <span v-else>{{item.name}}</span>
    </li>
    <a href="#" v-on:click="refresh" style="float: right"><i class="glyphicon glyphicon-refresh"></i></a>
  </ol>
</template>

<script>
export default {
  props: {
    paths: {
      type: Array,
      default () {
        return []
      }
    },
    refresh: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
