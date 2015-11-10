var twitter = require('ntwitter');

// Load lcd module on I2C
var LCD = require('jsupm_i2clcd');

// Load the configuration
var config = require("./config");

// Initialize Jhd1313m1 at 0x62 (RGB_ADDRESS) and 0x3E (LCD_ADDRESS)
var myLcd = new LCD.Jhd1313m1 (config.LCDBus, config.LCDAddress, config.RGBAddress);

// Initialize Classifier
var classifier = new (require("./classifier"))(config.ClassifierLanguage);

var text = '';

console.log(classifier.get().classify(text), text);

setTimeout(function() {
  var twit = new twitter({
    consumer_key: config.TwitterConsumerKey,
    consumer_secret: config.TwitterConsumerSecret,
    access_token_key: config.TwitterAccessTokenKey,
    access_token_secret: config.TwitterAccessTokenSecret
  });

  twit.verifyCredentials(function(err, data) {
    console.log(err, data);
  });

  twit.stream( 'statuses/filter', { track: config.TrackTags }, function(stream) {
    stream.on('data', function(data) {
      var text = data.text.replace(/https{0,1}\:\/\/.* {0,1}/, '').replace(/@.* {0,1}/, '').replace(/#.* {0,1}/, '');
      console.log(classifier.get().classify(text), text);

      myLcd.setCursor(0,0);
      var dataClass = classifier.getClassification(text);
      myLcd.setColor(dataClass.color.R,dataClass.color.G,dataClass.color.B);
      myLcd.write(dataClass.dataClass);         
    });
  });
}, config.LoopTime);
