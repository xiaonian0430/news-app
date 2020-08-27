// api host，末尾不要带斜杠。
let host = 'http://112.74.58.15:57501'

const api = {
	update: `${host}/update/index`,
	index: `${host}/index/index`,
	detail: `${host}/index/detail`,
}

module.exports = {
	api: api
}
