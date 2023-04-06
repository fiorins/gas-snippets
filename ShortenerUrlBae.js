function UrlBaeShortner() {

  const API_URL = "https://urlbae.com/api/url/add";
  const API_KEY = "xxx"; //here replace with your api key

  let my_url = "https://www.example.com/my-link-I-need-to-shorten/";
  //encodeURI(my_url) & encodeURIComponent(my_url) are not needed

  try {
    const data = {
      url: my_url
    };
    const params = {
      contentType: 'application/json',
      headers: { 'Authorization': `Bearer ${API_KEY}` },
      method: 'post',
      payload: JSON.stringify(data),
      escaping: false
    };

    let response = UrlFetchApp.fetch(API_URL, params);
    let response_readable = response.getContentText();
    let my_short_url = JSON.parse(response_readable).shorturl;

    //console.log(response_readable);
    console.log(my_short_url);
    return my_short_url;

  } catch (err) {
    Logger.log(err);
  }

}
