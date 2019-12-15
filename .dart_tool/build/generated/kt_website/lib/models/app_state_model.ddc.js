define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const models__app_state_model = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: models__app_state_model.Page.prototype,
        index: 0,
        [_name$]: "Page.EDUCATION"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: models__app_state_model.Page.prototype,
        index: 1,
        [_name$]: "Page.WORK"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: models__app_state_model.Page.prototype,
        index: 2,
        [_name$]: "Page.CONTACT"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: models__app_state_model.Page.prototype,
        index: 3,
        [_name$]: "Page.PROJECTS"
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], models__app_state_model.Page);
    }
  });
  const _name$ = dart.privateName(models__app_state_model, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  models__app_state_model.Page = class Page extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (models__app_state_model.Page.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = models__app_state_model.Page.prototype;
  dart.addTypeTests(models__app_state_model.Page);
  dart.setLibraryUri(models__app_state_model.Page, "package:kt_website/models/app_state_model.dart");
  dart.setFieldSignature(models__app_state_model.Page, () => ({
    __proto__: dart.getFields(models__app_state_model.Page.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(models__app_state_model.Page, ['toString']);
  models__app_state_model.Page.EDUCATION = C0 || CT.C0;
  models__app_state_model.Page.WORK = C1 || CT.C1;
  models__app_state_model.Page.CONTACT = C2 || CT.C2;
  models__app_state_model.Page.PROJECTS = C3 || CT.C3;
  models__app_state_model.Page.values = C4 || CT.C4;
  models__app_state_model.AppState = class AppState extends core.Object {
    get pageState() {
      return this[pageState$];
    }
    set pageState(value) {
      this[pageState$] = value;
    }
    get pageTitle() {
      switch (this.pageState) {
        case C2 || CT.C2:
        {
          return "Contact";
          break;
        }
        case C1 || CT.C1:
        {
          return "Work";
          break;
        }
        case C3 || CT.C3:
        {
          return "Projects";
          break;
        }
        default:
        {
          return "Education";
        }
      }
    }
  };
  (models__app_state_model.AppState.new = function(opts) {
    let pageState = opts && 'pageState' in opts ? opts.pageState : C0 || CT.C0;
    this[pageState$] = pageState;
    ;
  }).prototype = models__app_state_model.AppState.prototype;
  dart.addTypeTests(models__app_state_model.AppState);
  const pageState$ = Symbol("AppState.pageState");
  dart.setGetterSignature(models__app_state_model.AppState, () => ({
    __proto__: dart.getGetters(models__app_state_model.AppState.__proto__),
    pageTitle: core.String
  }));
  dart.setLibraryUri(models__app_state_model.AppState, "package:kt_website/models/app_state_model.dart");
  dart.setFieldSignature(models__app_state_model.AppState, () => ({
    __proto__: dart.getFields(models__app_state_model.AppState.__proto__),
    pageState: dart.fieldType(models__app_state_model.Page)
  }));
  dart.trackLibraries("packages/kt_website/models/app_state_model", {
    "package:kt_website/models/app_state_model.dart": models__app_state_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_state_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAA+C;;sDAA1C;;;;EAA0C;;;;;;;;;;;;;;;IAGxC;;;;;;;cAGK;;;AAEJ,gBAAO;AACP;;;;AAEA,gBAAO;AACP;;;;AAEA,gBAAO;AACP;;;;AAEA,gBAAO;;;IAEb;;;QAEe;;;EAA4B","file":"app_state_model.ddc.js"}');
  // Exports:
  return {
    models__app_state_model: models__app_state_model
  };
});

//# sourceMappingURL=app_state_model.ddc.js.map
