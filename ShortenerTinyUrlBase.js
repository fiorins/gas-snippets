function TinyUrlShortenerBase() {

  const API_URL = "https://tinyurl.com/api-create.php?url=";

  let my_url = "https://www.example.com/my-link-I-need-to-shorten/";
  //encodeURI(my_url) & encodeURIComponent(my_url) are not needed

  try {
    let response = UrlFetchApp.fetch(API_URL + my_url);
    let response_readable = response.getContentText();

    //short url is directly inside the response with this method without api token
    console.log(response_readable);
    return response_readable;

  } catch (e) {
    Logger.log(e);
  }

}
