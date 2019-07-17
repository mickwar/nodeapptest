// Documentation
// https://nodejs.org/api/url.html

const url = require('url');

// instantiate an object from the URL class given a fake address
// could also do: new url.URL(...)
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (no port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);
console.log(myUrl.searchParams);

// Add parameters
console.log(myUrl.searchParams.append('abc', '123'));
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
