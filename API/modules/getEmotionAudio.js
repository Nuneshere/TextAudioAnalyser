var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.instance;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'Ng7QuXBpfUTzLLWm22qSr3Id9ezkVJAf';

var apiInstance = new DeepAffects.EmotionApi();

// sync request
function syncRecogniseEmotion(path, callback) {
    let body = DeepAffects.Audio.fromFile(path); // {Audio} Audio object
    apiInstance.syncRecogniseEmotion(body, callback);
}

/* async request
webhook = "https://proxy.api.deepaffects.com/audio/generic/api/v1/async/recognise_emotion?apiKey=Ng7QuXBpfUTzLLWm22qSr3Id9ezkVJAf"
apiInstance.asyncRecogniseEmotion(body, webhook, callback);*/

module.exports.syncRecogniseEmotion = syncRecogniseEmotion;