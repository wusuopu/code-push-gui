<template>
  <navigator :refresh="refresh" :paths="navigatorPaths"></navigator>

  <div class="panel panel-default">
    <div class="panel-heading">
      Deployment History
    </div>
    <div class="panel-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <td>Label</td>
            <td>Time</td>
            <td>AppVersion</td>
            <td>Size</td>
            <td>Mandatory</td>
            <td>Description</td>
            <td>Install Metrics</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(index, h) in history">
            <td>{{h.label}}</td>
            <td>{{new Date(h.uploadTime).toJSON()}}</td>
            <td>{{h.appVersion}}</td>
            <td>{{h.size}}</td>
            <td>{{h.isMandatory}}</td>
            <td>{{h.description}}</td>
            <td>
              <div v-if="metrics[h.label]">
                active: {{metrics[h.label].active}} <br />
                downloaded: {{metrics[h.label].downloaded}} <br />
                failed: {{metrics[h.label].failed}} <br />
                installed: {{metrics[h.label].installed}} <br />
              </div>
              <div v-else>
                No installs recorded
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
      history: [],
      metrics: {},
      navigatorPaths: [
        {name: this.$route.params.app, link: '/apps/' + this.$route.params.app},
        {name: this.$route.params.deployment}
      ]
    }
  },
  ready () {
    this.refresh()
  },
  methods: {
    refresh () {
      async.waterfall([
        (next) => {
          Ajax.getDeploymentMetrics(
            this.$route.params.app,
            this.$route.params.deployment,
            next
          )
        },
        (metrics, next) => {
          this.$set('metrics', metrics)
          Ajax.getDeploymentHistory(
            this.$route.params.app,
            this.$route.params.deployment,
            next
          )
        },
        (history, next) => {
          this.$set('history', history)
        }
      ], () => {
      })
    }
  }
}
</script>

<style lang="scss">
</style>
