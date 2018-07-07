const xml2js = require('xml2js')
const fs = require('fs')

const builder = new xml2js.Builder({ headless: true })
const parser = new xml2js.Parser({
	mergeAttrs: true,
	attrkey: '#',
	charkey: '#',
	explicitArray: false,
	explicitRoot: false,
})


const jsObj = fs.readFileSync('./data/dataXML.xml', 'utf8')

const xml = ''

parser.parseString(jsObj, (error, result) => {
	if (error) return error
	const xml = builder.buildObject(result)
	xml
})


