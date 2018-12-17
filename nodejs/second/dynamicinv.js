var hbs = require('handlebars')
var fs = require('fs')
var pdfcon = require('./pdfconverter')

module.exports = {
    createInv : function(data) {

        var html = fs.readFileSync('./inn.html', 'utf8');
        var template = hbs.compile(html);
        var dynHtml = template(data)
        fs.writeFile("./converted.html", dynHtml, function(err) {
            if(err) {
                return console.log(err);
            }
            pdfcon.convertToPdf('converted.html')
        }); 
    }
}