import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { unknownDdItems } from './docdefinition'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export const createPDF = data => {
	const items_no_found = {
		Items_No_Encontrados: data
	}
	return pdfMake.createPdf(unknownDdItems(items_no_found)).open()
}
