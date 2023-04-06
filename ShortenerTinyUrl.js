function TinyUrlShortener() {
  const API_URL = "https://api.tinyurl.com/create";
  const API_KEY = "xxx"; //here replace with your api key

  let my_url = "https://www.example.com/my-link-I-need-to-shorten/";
  //encodeURI(my_url) & encodeURIComponent(my_url) are not needed

  try {
    let options = {
      method: "post",
      payload: {
        url: my_url,
        api_token: API_KEY,
      },
    };

    let response = UrlFetchApp.fetch(API_URL, options);
    let response_readable = response.getContentText();
    let my_short_url = JSON.parse(response_readable).data.tiny_url;

    //console.log(response_readable);
    console.log(my_short_url);
    return my_short_url;

  } catch (e) {
    Logger.log(e);
  }
}
