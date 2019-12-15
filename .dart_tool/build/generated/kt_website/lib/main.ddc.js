define(['dart_sdk', 'packages/flutter_web/animation', 'packages/kt_website/profile_page', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/kt_website/components/app_state_container'], function(dart_sdk, animation, profile_page, material, ui, app_state_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__widgets__binding = animation.src__widgets__binding;
  const profile_page$ = profile_page.profile_page;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const components__app_state_container = app_state_container.components__app_state_container;
  const main = Object.create(dart.library);
  let BuildContextToProfilePage = () => (BuildContextToProfilePage = dart.constFn(dart.fnType(profile_page$.ProfilePage, [src__widgets__framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 3000000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 51,
        column: 28,
        name: "controller",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 51,
        column: 41,
        name: "size",
        parameterLocations: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], src__widgets__widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/main.dart",
        line: 51,
        column: 16,
        name: null,
        parameterLocations: C2 || CT.C2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 7,
        name: "builder",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/main.dart",
        line: 49,
        column: 12,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C9() {
      return C9 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/main.dart",
        line: 15,
        column: 16,
        name: null,
        parameterLocations: C9 || CT.C9
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], src__widgets__widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/main.dart",
        line: 14,
        column: 13,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 9,
        column: 7,
        name: "debugShowCheckedModeBanner",
        parameterLocations: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 10,
        column: 7,
        name: "theme",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 7,
        name: "home",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], src__widgets__widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/main.dart",
        line: 8,
        column: 5,
        name: null,
        parameterLocations: C14 || CT.C14
      });
    }
  });
  main.App = class App extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._AppState.new();
    }
  };
  (main.App.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.App.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.App.prototype;
  dart.addTypeTests(main.App);
  dart.setMethodSignature(main.App, () => ({
    __proto__: dart.getMethods(main.App.__proto__),
    createState: dart.fnType(main._AppState, [])
  }));
  dart.setLibraryUri(main.App, "package:kt_website/main.dart");
  const _controller = dart.privateName(main, "_controller");
  const _duration = dart.privateName(core, "_duration");
  let C0;
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C6;
  let C5;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(main.App) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(main.App)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(main.App));
  main._AppState = class _AppState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      super.initState();
      this[_controller] = new src__animation__animation_controller.AnimationController.new({duration: C0 || CT.C0, vsync: this});
      this[_controller].forward();
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__basic.Builder.new({builder: dart.fn(context => new profile_page$.ProfilePage.new(this[_controller], size, {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), BuildContextToProfilePage()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (main._AppState.new = function() {
    this[_controller] = null;
    main._AppState.__proto__.new.call(this);
    ;
  }).prototype = main._AppState.prototype;
  dart.addTypeTests(main._AppState);
  dart.setMethodSignature(main._AppState, () => ({
    __proto__: dart.getMethods(main._AppState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main._AppState, "package:kt_website/main.dart");
  dart.setFieldSignature(main._AppState, () => ({
    __proto__: dart.getFields(main._AppState.__proto__),
    [_controller]: dart.fieldType(src__animation__animation_controller.AnimationController)
  }));
  let C9;
  let C8;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  main.main = function main$() {
    return async.async(dart.dynamic, function* main$() {
      src__widgets__binding.runApp(new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, theme: src__material__theme_data.ThemeData.new({brightness: ui$.Brightness.dark, primaryColor: src__material__colors.Colors.black, fontFamily: "GoogleSansRegular"}), home: new components__app_state_container.AppStateContainer.new({child: new main.App.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}));
    });
  };
  dart.trackLibraries("packages/kt_website/main", {
    "package:kt_website/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsB6B;IAAW;;;;;;EACxC;;;;;;;;;;;;;;;;;;;;;;;;;MAOU;MAEN,oBAAc,gGAEL;MAET,AAAY;IACd;;MAIE,AAAY;MACN;IACR;UAG0B;AACpB,iBAAkB,AAAY,wCAAT,OAAO;AAChC,YAAO,+CACI,QAAC,WACD,kCAAY,mBAAa,IAAI;IAG1C;;;IA3BoB;;;EA4BtB;;;;;;;;;;;;;;;;;;;;;;AAjDI;MACF,6BACE,oEAC8B,cACrB,qDACoB,mCACF,gDACT,6BACV,kEACG;IAIf","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
