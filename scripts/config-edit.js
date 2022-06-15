const fs = require('fs')
const path = require('path')

const updateConfig = (data) => {
    config = fs.writeFileSync(path.join(__dirname, '..', 'config.json'), JSON.stringify(data, null, 4))
}

module.exports = {updateConfig}