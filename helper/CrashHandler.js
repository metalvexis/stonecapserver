
// Event handlers for sudden crashes
process.on('uncaughtException', function (er) {
  console.error(er.stack)
  process.exit(1)
})

process.on('SIGTERM', function (er) {
  console.error(er.stack)
  process.exit(1)
})

// process.on('SIGINT', () => { process.exit() })
