import browser from 'webextension-polyfill';

const photos = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5bc83c0db10f25b809d302fb/1594317176597-CK6COGG9EAP7AQE123TP/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/AdobeStock_218142426.jpeg?format=2500w",
  },
];


browser.runtime.onInstalled.addListener(async () => {
    browser.storage.local.set({'photos': photos});
    browser.storage.sync.set({'gameIsOn': true});
    browser.storage.local.set({'backgroundSrc': photos[0]});
});
