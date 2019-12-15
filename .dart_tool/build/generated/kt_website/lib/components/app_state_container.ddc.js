define(['dart_sdk', 'packages/flutter_web/animation', 'packages/kt_website/models/app_state_model'], function(dart_sdk, animation, app_state_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const models__app_state_model = app_state_model.models__app_state_model;
  const components__app_state_container = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 7,
        name: "data",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/app_state_container.dart",
        line: 34,
        column: 12,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  components__app_state_container.AppStateContainer = class AppStateContainer extends src__widgets__framework.StatefulWidget {
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static of(context) {
      return components__app_state_container._InheritedStateContainer.as(context.inheritFromWidgetOfExactType(dart.wrapType(components__app_state_container._InheritedStateContainer))).data;
    }
    createState() {
      return new components__app_state_container._AppStateContainerState.new();
    }
  };
  (components__app_state_container.AppStateContainer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let state = opts && 'state' in opts ? opts.state : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[state$] = state;
    components__app_state_container.AppStateContainer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__app_state_container.AppStateContainer.prototype;
  dart.addTypeTests(components__app_state_container.AppStateContainer);
  const state$ = Symbol("AppStateContainer.state");
  const child$ = Symbol("AppStateContainer.child");
  dart.setMethodSignature(components__app_state_container.AppStateContainer, () => ({
    __proto__: dart.getMethods(components__app_state_container.AppStateContainer.__proto__),
    createState: dart.fnType(components__app_state_container._AppStateContainerState, [])
  }));
  dart.setLibraryUri(components__app_state_container.AppStateContainer, "package:kt_website/components/app_state_container.dart");
  dart.setFieldSignature(components__app_state_container.AppStateContainer, () => ({
    __proto__: dart.getFields(components__app_state_container.AppStateContainer.__proto__),
    state: dart.finalFieldType(models__app_state_model.AppState),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  let C2;
  let C3;
  let C1;
  let C0;
  components__app_state_container._AppStateContainerState = class _AppStateContainerState extends src__widgets__framework.State$(components__app_state_container.AppStateContainer) {
    changePage(pageState) {
      this.setState(dart.fn(() => {
        this.state.pageState = pageState;
      }, VoidToNull()));
    }
    build(context) {
      return new components__app_state_container._InheritedStateContainer.new({data: this, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (components__app_state_container._AppStateContainerState.new = function() {
    this.state = new models__app_state_model.AppState.new();
    components__app_state_container._AppStateContainerState.__proto__.new.call(this);
    ;
  }).prototype = components__app_state_container._AppStateContainerState.prototype;
  dart.addTypeTests(components__app_state_container._AppStateContainerState);
  dart.setMethodSignature(components__app_state_container._AppStateContainerState, () => ({
    __proto__: dart.getMethods(components__app_state_container._AppStateContainerState.__proto__),
    changePage: dart.fnType(dart.void, [models__app_state_model.Page]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__app_state_container._AppStateContainerState, "package:kt_website/components/app_state_container.dart");
  dart.setFieldSignature(components__app_state_container._AppStateContainerState, () => ({
    __proto__: dart.getFields(components__app_state_container._AppStateContainerState.__proto__),
    state: dart.fieldType(models__app_state_model.AppState)
  }));
  components__app_state_container._InheritedStateContainer = class _InheritedStateContainer extends src__widgets__framework.InheritedWidget {
    updateShouldNotify(old) {
      components__app_state_container._InheritedStateContainer._check(old);
      return true;
    }
  };
  (components__app_state_container._InheritedStateContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.data = data;
    components__app_state_container._InheritedStateContainer.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__app_state_container._InheritedStateContainer.prototype;
  dart.addTypeTests(components__app_state_container._InheritedStateContainer);
  dart.setMethodSignature(components__app_state_container._InheritedStateContainer, () => ({
    __proto__: dart.getMethods(components__app_state_container._InheritedStateContainer.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(components__app_state_container._InheritedStateContainer, "package:kt_website/components/app_state_container.dart");
  dart.setFieldSignature(components__app_state_container._InheritedStateContainer, () => ({
    __proto__: dart.getFields(components__app_state_container._InheritedStateContainer.__proto__),
    data: dart.finalFieldType(components__app_state_container._AppStateContainerState)
  }));
  dart.trackLibraries("packages/kt_website/components/app_state_container", {
    "package:kt_website/components/app_state_container.dart": components__app_state_container
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_state_container.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIiB;;;;;;IACF;;;;;;cAOkC;AAC7C,YACQ,AACH,6DAFG,AAAQ,OAAD,8BAA8B;IAG/C;;AAGyC;IAAyB;;;QAXjD;QACV;;IADU;IACV;AAFP;;EAGE;;;;;;;;;;;;;;;;;;;eAemB;MACnB,cAAS;QACP,AAAM,uBAAY,SAAS;;IAE/B;UAG0B;AACxB,YAAO,yEACC,aACC,AAAO;IAElB;;;IAdS,aAAQ;;;EAenB;;;;;;;;;;;;;uBAYmD;;AAAQ;IAAI;;;QANvD;QACW;QACE;;IADF;AAEZ,4FAAW,GAAG,SAAS,KAAK;;EAAC","file":"app_state_container.ddc.js"}');
  // Exports:
  return {
    components__app_state_container: components__app_state_container
  };
});

//# sourceMappingURL=app_state_container.ddc.js.map
