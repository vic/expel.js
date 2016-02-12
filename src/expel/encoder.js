const Promise = require('bluebird')

export function expelElixir(stdin, ...files) {
  return new Promise((resolve, reject) => {
    const spawn = require('child_process').spawn
    const expel = spawn('expel', files)

    var stdout = ''
    var stderr = ''
    expel.stdout.on('data', (data) => stdout += data)
    expel.stderr.on('data', (data) => stderr += data)

    expel.on('close', () => {
      if (expel.exitCode == 0) {
        resolve(JSON.parse(stdout))
      } else {
        reject(stderr)
      }
    })

    if (stdin) { expel.stdin.write(stdin) }
    expel.stdin.end()
  })
}

