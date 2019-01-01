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

export { Request }
