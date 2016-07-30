import jQuery from 'jquery'

let request
if (process.env.NODE_ENV === 'development') {
  request = function (url, cb) {
    jQuery.ajax({
      url,
      type: 'get',
      dataType: 'json',
      success (data) {
        cb(null, data)
      },
      error (xhr, textStatus, err) {
        cb(err)
      }
    })
  }
}

export default {
  getAccoutInfo (cb) {
    if (process.env.NODE_ENV === 'development') {
      request('/api/AccountInfo.json', cb)
    } else {
      window.codePush.getAccoutInfo().done(
        (data) => {
          cb(null, data)
        },
        (err) => {
          cb(err)
        }
      )
    }
  },
  getAppList (cb) {
    if (process.env.NODE_ENV === 'development') {
      request('/api/AppList.json', cb)
    } else {
      window.codePush.getAccoutInfo().done(
        (data) => {
          cb(null, data)
        },
        (err) => {
          cb(err)
        }
      )
    }
  },
  getApp (name, cb) {
    if (process.env.NODE_ENV === 'development') {
      request('/api/apps/' + name + '.json', cb)
    } else {
      window.codePush.getApp(name).done(
        (data) => {
          cb(null, data)
        },
        (err) => {
          cb(err)
        }
      )
    }
  },
  getDeployments (appName, cb) {
    if (process.env.NODE_ENV === 'development') {
      request('/api/apps/' + appName + '/deployments/index.json', cb)
    } else {
      window.codePush.getDeployments(appName).done(
        (data) => {
          cb(null, data)
        },
        (err) => {
          cb(err)
        }
      )
    }
  }
}
