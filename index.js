
console.log('Starting');
const slugify = require('slugify');
const algoliasearch = require('algoliasearch');
const algoliaClient = algoliasearch('67KVTYOLF2','cdecc9364f3a5a04008d19333319254e');
// const index = algoliaClient.initIndex('comparemunafa');
// const __async__ = require('asyncawait/async');
// const __await__ = require('asyncawait/await');

// const filter = `category:${'mobiles'}`;
// const singleProductPromise = index.search('', {
//     'filters': filter,
//     'maxValuesPerFacet': 100
// });


//     const allData = __async__(() => {
//       const singleProduct = __await__(singleProductPromise);
//       console.log(singleProduct.nbHits)

//     });

// console.log(singleProductPromise.nbHits)

// var fs = require("fs");

// var data = fs.readFileSync('sam.txt');

// console.log(data.toString());
// console.log("Program Ended");

var fs = require("fs");

fs.readFile('sam.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");