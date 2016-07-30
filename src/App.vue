<template>
  <navigator :refresh="refresh" :paths="navigatorPaths"></navigator>

  <div class="panel panel-default">
    <div class="panel-heading">
      应用信息
    </div>
    <div class="panel-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Collaborators</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {{app.name}} </td>
            <td>
              <div v-for="(email, collaborator) in app.collaborators">
                {{email}} {{collaborator.permission}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      Deployments
    </div>
    <div class="panel-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <td>name</td>
            <td>key</td>
            <td>createdTime</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(index, item) in deployments">
            <td>
              <a v-link="{path: '/apps/' + $route.params.id + '/' + item.name}">{{item.name}}</a>
            </td>
            <td>
              {{item.key}}
            </td>
            <td>
              {{new Date(item.createdTime).toJSON()}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
      app: {},
      deployments: [],
      navigatorPaths: [{name: this.$route.params.id}]
    }
  },
  ready () {
    this.refresh()
  },
  methods: {
    refresh () {
      Ajax.getApp(this.$route.params.id, (err, data) => {
        if (!err) {
          this.$set('app', data)
          Ajax.getDeployments(this.$route.params.id, (err, deployments) => {
            !err && this.$set('deployments', deployments)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
