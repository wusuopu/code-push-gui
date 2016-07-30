<template>
  <ol class="breadcrumb">
    <li v-for="(index, item) in paths">
      <a v-if="index == paths.length-1" class="active" v-link="{path: item}">{{item}}</a>
      <a v-else href="#">{{item}}</a>
    </li>
  </ol>
</template>

<script>
export default {
  data () {
    return {
      paths: this.$route.path.split('/')
    }
  }
}
</script>
