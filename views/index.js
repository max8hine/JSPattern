import pug from 'pug'
import path from 'path'

const page1 = path.resolve(__dirname, 'page_1.pug')

const compiledFunc = pug.renderFile(page1, { name: 'Timothy' })
compiledFunc

const compileByPug = (pug.compile('
a(href=\'google.com\') Google
|
|
a(href =\'maxma.nz\') Max
|
|
a(href =\'maxma.nz\') Max
'))()


compileByPug