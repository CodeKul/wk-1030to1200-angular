
var fs = require('fs');
var pdf = require('html-pdf');
module.exports = {
    convertToPdf : function(htmlName) {
        var html = fs.readFileSync(htmlName, 'utf8');
        var options = { format: 'Letter' };
        pdf.create(html, options).toFile('./inn.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });
    }
}

