<template>
  <ol class="breadcrumb">
    <li>
      <a v-link="{path: '/apps'}">应用列表</a>
    </li>
    <li v-for="(index, item) in paths">
      <a v-if="index == paths.length-1" class="active" v-link="{path: item}">{{item}}</a>
      <a v-else href="#">{{item}}</a>
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
