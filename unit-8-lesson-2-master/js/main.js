// Step 1: Write a GET request.
// We will be getting information on currency exchange rates from an open API.
// The url for the request is http://api.fixer.io/latest
// The documentation for this API, which contains an example of the response
// that the API returns, can be found here: http://fixer.io/

GET https://data.fixer.io/api/latest

{
  "base": USD,
  "date": "2018-02-13",
  "rates": {
     "CAD": 1.260046,
     "CHF": 0.933058,
     "EUR": 0.806942,
     "GBP": 0.719154,
     [170 world currencies]
  }
}   

// Step 2: On success:
  // a) Log the response to the console. Open the console and expand the
  //    response object to see the information it holds. Look in the response
  //    for (1) the date that the exchange rate was last calculated, and (2) the
  //    value of a Euro in Dollars (USD) on that date.
  // b) Update the content of the h2 to say "As of YYYY-MM-DD", where
  //    "YYYY-MM-DD" is replaced with the date given in the response.
  // c) Update the content of the li to say "USD : X", where X is the EUR-USD
  //    exchange rate given in the response.
