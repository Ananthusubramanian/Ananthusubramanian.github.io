define(['dart_sdk', 'packages/kt_website/models/information_model'], function(dart_sdk, information_model) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const models__information_model = information_model.models__information_model;
  const models__data = Object.create(dart.library);
  const models__models = Object.create(dart.library);
  let JSArrayOfInformation = () => (JSArrayOfInformation = dart.constFn(_interceptors.JSArray$(models__information_model.Information)))();
  const CT = Object.create(null);
  models__data.Data = class Data extends core.Object {
    get educations() {
      return this[educations];
    }
    set educations(value) {
      this[educations] = value;
    }
    get work() {
      return this[work];
    }
    set work(value) {
      this[work] = value;
    }
    get projects() {
      return this[projects];
    }
    set projects(value) {
      this[projects] = value;
    }
    get contacts() {
      return this[contacts];
    }
    set contacts(value) {
      this[contacts] = value;
    }
  };
  (models__data.Data.new = function() {
    this[educations] = JSArrayOfInformation().of([new models__information_model.Information.new({startTime: "2017 -", endTime: "Present", title: "Amrita Vishwa Vidyapeedam, B.Tech", text: "In the fall of 2017 I started my bachelor's degree in Software Engineering."}), new models__information_model.Information.new({startTime: "2015 -", endTime: "2017", title: "Chinmaya Vidyalaya , Kottayam", text: "Completed Higher Secondary Education"})]);
    this[work] = JSArrayOfInformation().of([new models__information_model.Information.new({startTime: "5/2019 -", endTime: "8/2019", title: "Golang Dev", text: "At Ixxo.io "})]);
    this[projects] = JSArrayOfInformation().of([new models__information_model.Information.new({startTime: "2019", endTime: "", title: "Flutter web install guide", text: "I made guide on how to install Flutter web on Windows.", imageUrl: "flutterwebinstall.PNG"})]);
    this[contacts] = JSArrayOfInformation().of([new models__information_model.Information.new({startTime: "", endTime: "", title: "Contact Information", text: "M S Ananthu Subramanian\n\nanandusubramanian@gmail.com"})]);
    ;
  }).prototype = models__data.Data.prototype;
  dart.addTypeTests(models__data.Data);
  const educations = Symbol("Data.educations");
  const work = Symbol("Data.work");
  const projects = Symbol("Data.projects");
  const contacts = Symbol("Data.contacts");
  dart.setLibraryUri(models__data.Data, "package:kt_website/models/data.dart");
  dart.setFieldSignature(models__data.Data, () => ({
    __proto__: dart.getFields(models__data.Data.__proto__),
    educations: dart.fieldType(core.List$(models__information_model.Information)),
    work: dart.fieldType(core.List$(models__information_model.Information)),
    projects: dart.fieldType(core.List$(models__information_model.Information)),
    contacts: dart.fieldType(core.List$(models__information_model.Information))
  }));
  dart.trackLibraries("packages/kt_website/models/data", {
    "package:kt_website/models/data.dart": models__data,
    "package:kt_website/models/models.dart": models__models
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["data.dart"],"names":[],"mappings":";;;;;;;;;;;;IAGoB;;;;;;IAeA;;;;;;IASA;;;;;;IASA;;;;;;;;IAjCA,mBAAa,2BAC7B,0DACe,mBACF,kBACF,2CAEH,iFACR,0DACe,mBACF,eAEL,uCAEA;IAEQ,aAAO,2BACvB,0DACe,qBACF,iBACF,oBAEH;IAGQ,iBAAW,2BAC3B,0DACe,iBACF,WACF,mCAEH,oEACM;IAEE,iBAAW,2BAC3B,0DACe,aACF,WACF,6BAEH;;EAEZ","file":"data.ddc.js"}');
  // Exports:
  return {
    models__data: models__data,
    models__models: models__models
  };
});

//# sourceMappingURL=data.ddc.js.map
