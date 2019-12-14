define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/myportfolio/profile_page', 'packages/flutter_web/animation'], function(dart_sdk, material, ui, profile_page, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const profile_page$ = profile_page.profile_page;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/main.dart",
        line: 20,
        column: 13,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 7,
        name: "debugShowCheckedModeBanner",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 7,
        name: "theme",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 7,
        name: "home",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], src__widgets__widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/main.dart",
        line: 13,
        column: 12,
        name: null,
        parameterLocations: C3 || CT.C3
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/main.dart",
        line: 5,
        column: 10,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C1;
  let C0;
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, theme: src__material__theme_data.ThemeData.new({brightness: ui$.Brightness.dark, primaryColorDark: src__material__colors.Colors.black, fontFamily: "GoogleSansRegular"}), home: new profile_page$.ProfilePage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:myportfolio/main.dart");
  let C7;
  main.main = function main$() {
    src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}));
  };
  dart.trackLibraries("packages/myportfolio/main", {
    "package:myportfolio/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,qEACuB,cACrB,qDACkB,uCACE,gDACb,6BAER;IAEV;;;QAbiB;;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;;IAJxC,6BAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
