var natural         = require('natural');
var classifierWords = require("./classifier-words");

var classifier = function(language) {
  language = language || "ptBR";

  if (!language in classifierWords) {
    console.error("No words for "+language);
    return;
  }

  this.languageData = classifierWords[language];

  console.log("Creating BayesClassifier for "+language);
  this.classifier = new natural.BayesClassifier();

  console.log("Adding training data");

  for (var mood in this.languageData) {
    if (this.languageData.hasOwnProperty(mood)) {
      for (var i in this.languageData[mood].data) {
        var word = this.languageData[mood].data[i];
        console.log("Adding to classifier("+mood+"): "+word);
        this.classifier.addDocument(word, mood);
      }
    }
  }

  console.log("Training Classifier");
  this.classifier.train();
};

classifier.prototype.getClassification = function(text) {
  var dataClass = this.classifier.classify(text);
  var color = this.languageData[dataClass].color;
  return {
    "color" : color,
    "dataClass" : dataClass
  }
}

classifier.prototype.get = function() {
  return this.classifier;
};

module.exports = classifier;