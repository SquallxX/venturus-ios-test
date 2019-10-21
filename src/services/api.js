var rootUrl = 'https://api.imgur.com/3/gallery/search/\?q\=cats';
var apiKey = '1ceddedc03a5d71';

import '../config/ReactotronConfig';

module.exports = {
  get(){
    return fetch(rootUrl, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then((response) => {
      return response.json()
    })
  }
}