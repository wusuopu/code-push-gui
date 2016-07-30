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
            <td>package</td>
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
            <td>
              <div v-if="item.package">
                Lable: {{item.package.label}} <br />
                AppVersion: {{item.package.appVersion}} <br />
                uploadTime: {{new Date(item.package.uploadTime).toJSON()}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import async from 'async'
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
      async.waterfall([
        (next) => {
          Ajax.getApp(this.$route.params.id, next)
        },
        (app, next) => {
          this.$set('app', app)
          Ajax.getDeployments(this.$route.params.id, next)
        },
        (deployments, next) => {
          this.$set('deployments', deployments)
        }
      ], () => {
      })
    }
  }
}
</script>

<style lang="scss">
</style>
