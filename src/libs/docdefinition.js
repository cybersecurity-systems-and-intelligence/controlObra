import { ctable } from './createTable'


export const unknownDdItems = data => {
	console.log(data)
	const arr = data.Items_No_Encontrados
	const dd = {
		content: [
			{
				text: 'Items no encontrados en la base de datos',
				style: 'header',
			},
			{
				text: '\n\n',
			},
			[ctable(arr)],
		],
		styles: {
			header: {
				fontSize: 20,
				bold: true,
				alignment: 'center',
			},
		},
	}

	return dd
}
