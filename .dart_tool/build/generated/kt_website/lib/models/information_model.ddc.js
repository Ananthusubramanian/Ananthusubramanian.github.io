define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const models__information_model = Object.create(dart.library);
  const CT = Object.create(null);
  models__information_model.Information = class Information extends core.Object {
    get startTime() {
      return this[startTime$];
    }
    set startTime(value) {
      this[startTime$] = value;
    }
    get endTime() {
      return this[endTime$];
    }
    set endTime(value) {
      this[endTime$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      this[imageUrl$] = value;
    }
  };
  (models__information_model.Information.new = function(opts) {
    let startTime = opts && 'startTime' in opts ? opts.startTime : null;
    let endTime = opts && 'endTime' in opts ? opts.endTime : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : null;
    this[startTime$] = startTime;
    this[endTime$] = endTime;
    this[title$] = title;
    this[text$] = text;
    this[imageUrl$] = imageUrl;
    ;
  }).prototype = models__information_model.Information.prototype;
  dart.addTypeTests(models__information_model.Information);
  const startTime$ = Symbol("Information.startTime");
  const endTime$ = Symbol("Information.endTime");
  const title$ = Symbol("Information.title");
  const text$ = Symbol("Information.text");
  const imageUrl$ = Symbol("Information.imageUrl");
  dart.setLibraryUri(models__information_model.Information, "package:kt_website/models/information_model.dart");
  dart.setFieldSignature(models__information_model.Information, () => ({
    __proto__: dart.getFields(models__information_model.Information.__proto__),
    startTime: dart.fieldType(core.String),
    endTime: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    text: dart.fieldType(core.String),
    imageUrl: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/kt_website/models/information_model", {
    "package:kt_website/models/information_model.dart": models__information_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["information_model.dart"],"names":[],"mappings":";;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAEG;QAAgB;QAAc;QAAY;QAAW;IAArD;IAAgB;IAAc;IAAY;IAAW;;EAAU","file":"information_model.ddc.js"}');
  // Exports:
  return {
    models__information_model: models__information_model
  };
});

//# sourceMappingURL=information_model.ddc.js.map
