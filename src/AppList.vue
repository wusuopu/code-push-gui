<template>
  <navigator :refresh="refresh"></navigator>

  <table class="table table-hover">
    <thead>
      <tr>
        <td>Name</td>
        <td>Deployments</td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(index, item) in apps">
        <td>
          <a v-link="{path: '/apps/' + item.name}">{{item.name}}</a>
        </td>
        <td>
          <a v-for="(index, deployment) in item.deployments" v-link="{path: '/apps/' + item.name + '/' + deployment}">
            {{deployment}}
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Ajax from './libs/ajax'
import Navigator from './components/Navigator'
export default {
  components: {
    Navigator
  },
  data () {
    return {
      apps: []
    }
  },
  ready () {
    this.refresh()
  },
  methods: {
    refresh () {
      Ajax.getAppList((err, data) => {
        !err && this.$set('apps', data)
      })
    }
  }
}
</script>
