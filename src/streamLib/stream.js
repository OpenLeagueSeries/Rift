import http from 'stream-http'

const host = 'localhost:4200'

let isFunction = function(obj) {
    return typeof obj == 'function' || false;
};

class Subscription {
  constructor (url) {
    this.path =  url
    this.req = http.get('https://' + host + this.path, (res) => {
      res.on('data', (buf) => {
        this.emit('data', JSON.parse(buf))
      })
    });
    this.listeners = new Map();
  }

  end() {
    this.req.abort()
  }

  on(label, cb) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(cb);
  }

  request(info) {
    http.request({hostname: host, path: this.path, method: 'POST'})
  }

  removeListener(label, callback) {
    let listeners = this.listeners.get(label),
        index;

    if (listeners && listeners.length) {
        index = listeners.reduce((i, listener, index) => {
            return (isFunction(listener) && listener === callback) ?
                i = index :
                i;
        }, -1);

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


export { Subscription}
