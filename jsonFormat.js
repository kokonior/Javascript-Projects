
const formatterJson = function (message = 'success', data = '') {
    return {
        'message': message,
        'data': data
    }
}

module.exports = formatterJson
