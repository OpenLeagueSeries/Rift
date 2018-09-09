import http from 'stream-http'

const host = 'pitt.lol'
const port = '4200'

let isFunction = function(obj) {
  return typeof obj === 'function' || false;
};

class Subscription {
  constructor (url, cb) {
    this.path =  url
    this.listeners = new Map();
    this.on('data', cb)
    this.req = http.get({path: `https://${host}:${port}${this.path}`, withCredentials: true}, (res) => {
      res.on('data', (buf) => {
        const primedBuf = buf.toString().replace(/}{/g,'}}{{')
        primedBuf.split('}{').forEach((d) => {
          this.emit('data', JSON.parse(d))
        })
      })
    })

  }

  end() {
    this.req.abort();
  }

  on(label, cb) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(cb);
  }

  request(info) {
    const req = http.request({
      protocol: 'https:',
      host: host,
      port: port,
      path: this.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(info)
      }
    });
    req.write(JSON.stringify(info));
    req.end();
  }

  removeListener(label, callback) {
    let listeners = this.listeners.get(label),
        index

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        return (isFunction(listener) && listener === callback) ?
            i = index :
            i
      }, -1)
      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }
    return false;
  }

  emit(label, ...args) {
    let listeners = this.listeners.get(label)
    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }
}

class Request {
  constructor(url, data, cb) {
    const req = http.request({
      protocol: 'https:',
      host: host,
      port: port,
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      withCredentials: true
    }, (res) => {
      res.on('data', (buf) => {
        const primedBuf = buf.toString().replace(/}{/g,'}}{{')
        primedBuf.split('}{').forEach((d) => {
          cb(JSON.parse(d))
        })
      })
    })
    req.write(JSON.stringify(data))
    req.end()
  }
}


export { Subscription, Request }
