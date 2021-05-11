const _ = require('lodash')

function buildTableBody(arr) {
	var body = []

	const columns = getColum(arr)

	body.push(columns)

	arr.forEach(function (row) {
		var dataRow = []
		columns.forEach(function (column) {
			dataRow.push(row[column].toString())
		})

		body.push(dataRow)
	})

	return body
}

function ctable(arr) {
	return {
		table: {
			headerRows: 1,
			body: buildTableBody(arr),
		},
	}
}

const getColum = obj => {
	const objKeys = _.keysIn(obj[0])
	return objKeys
}

export { ctable }
