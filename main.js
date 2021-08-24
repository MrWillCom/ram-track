const os = require('os');

const renderMemoryTrack = () => {
  const parseToFixed = (value) => {
    return value.toFixed(2)
  }
  const parseGB = (value) => {
    return parseToFixed(value / 1024 / 1024 / 1024)
  }
  const free = parseGB(os.freemem())
  const total = parseGB(os.totalmem())
  const used = parseToFixed(total - free)
  console.clear()
  console.table({
    'Free': free,
    'Used': used,
    'Total': total,
    'Free/Total': ((free / total) * 100).toFixed(0) + '%',
  })
  return
}

setInterval(renderMemoryTrack, 1000)
