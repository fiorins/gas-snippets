function CuttlyShortener() {

  const API_URL = "https://cutt.ly/api/api.php";
  const API_KEY = "xxx"; //here replace with your api key

  let my_url = "https://www.example.com/my-link-I-need-to-shorten/";
  //encodeURI(my_url) & encodeURIComponent(my_url) are not needed

  try {
    let response = UrlFetchApp.fetch(API_URL + "?key=" + API_KEY + "&short=" + my_url);
    let response_readable = response.getContentText();
    let my_short_url = JSON.parse(response_readable).url.shortLink;

    //console.log(response_readable);
    console.log(my_short_url);
    return my_short_url;

  } catch (e) {
    Logger.log(e);
  }

}
