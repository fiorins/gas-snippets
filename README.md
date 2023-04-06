# gas-snippets

A collection of functions I created for a Google Apps Scripts project.

To use these scripts you'll have to create an account on the relative service (_Cuttly_/_TinyUrl_/_UrlBae_) to shorten urls through their APIs.

Only _TinyUrlShortenerBase.js_ allows you to use the service without creating a key.  
Of course, it should be noted that it would be much more stable to use the service via an api key.

Once you've done it just replace inside the script the `const API_KEY` with yours.

For more details on how their service works, look at their documentation:  
`TINYURL:` https://tinyurl.com/app/dev  
`URLBAE:` https://urlbae.com/developers  
`CUTTLY:` https://cutt.ly/api-documentation/regular-api

Among these the most stringent service seems to be Cuttly which allows only 3 calls per minute.

NB: I used the .js extension to these files just for convenience.
In any case, .gs files will be created in the google script console.
