define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const utils__responsive_widget = Object.create(dart.library);
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 7,
        name: "builder",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/utils/responsive_widget.dart",
        line: 31,
        column: 12,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C2;
  let C1;
  let C0;
  utils__responsive_widget.ResponsiveWidget = class ResponsiveWidget extends src__widgets__framework.StatelessWidget {
    get largeScreen() {
      return this[largeScreen$];
    }
    set largeScreen(value) {
      super.largeScreen = value;
    }
    get mediumScreen() {
      return this[mediumScreen$];
    }
    set mediumScreen(value) {
      super.mediumScreen = value;
    }
    get smallScreen() {
      return this[smallScreen$];
    }
    set smallScreen(value) {
      super.smallScreen = value;
    }
    static isSmallScreen(context) {
      return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) < 800;
    }
    static isLargeScreen(context) {
      return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) > 1200;
    }
    static isMediumScreen(context) {
      return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) > 800 && dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) < 1200;
    }
    build(context) {
      return new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t0, t0$;
          if (dart.notNull(constraints.maxWidth) > 800) {
            return this.largeScreen;
          } else if (dart.notNull(constraints.maxWidth) < 1200 && dart.notNull(constraints.maxWidth) > 800) {
            t0 = this.mediumScreen;
            return t0 == null ? this.largeScreen : t0;
          } else {
            t0$ = this.smallScreen;
            return t0$ == null ? this.largeScreen : t0$;
          }
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (utils__responsive_widget.ResponsiveWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeScreen = opts && 'largeScreen' in opts ? opts.largeScreen : null;
    let mediumScreen = opts && 'mediumScreen' in opts ? opts.mediumScreen : null;
    let smallScreen = opts && 'smallScreen' in opts ? opts.smallScreen : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[largeScreen$] = largeScreen;
    this[mediumScreen$] = mediumScreen;
    this[smallScreen$] = smallScreen;
    utils__responsive_widget.ResponsiveWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = utils__responsive_widget.ResponsiveWidget.prototype;
  dart.addTypeTests(utils__responsive_widget.ResponsiveWidget);
  const largeScreen$ = Symbol("ResponsiveWidget.largeScreen");
  const mediumScreen$ = Symbol("ResponsiveWidget.mediumScreen");
  const smallScreen$ = Symbol("ResponsiveWidget.smallScreen");
  dart.setMethodSignature(utils__responsive_widget.ResponsiveWidget, () => ({
    __proto__: dart.getMethods(utils__responsive_widget.ResponsiveWidget.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(utils__responsive_widget.ResponsiveWidget, "package:kt_website/utils/responsive_widget.dart");
  dart.setFieldSignature(utils__responsive_widget.ResponsiveWidget, () => ({
    __proto__: dart.getFields(utils__responsive_widget.ResponsiveWidget.__proto__),
    largeScreen: dart.finalFieldType(src__widgets__framework.Widget),
    mediumScreen: dart.finalFieldType(src__widgets__framework.Widget),
    smallScreen: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  dart.trackLibraries("packages/kt_website/utils/responsive_widget", {
    "package:kt_website/utils/responsive_widget.dart": utils__responsive_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responsive_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;yBAS0B;AACrC,YAAyC,cAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;IAC7C;yBAEuC;AAErC,YAAyC,cAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;IAC7C;0BAEwC;AACtC,YAAyC,AAAM,cAA7B,AAAY,AAAK,wCAAd,OAAO,gBAAe,OACL,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;IAC1C;UAG0B;AACxB,YAAO,8DACI,SAAC,SAAS;;AACjB,cAAyB,aAArB,AAAY,WAAD,aAAY;AACzB,kBAAO;gBACF,KAAyB,aAArB,AAAY,WAAD,aAAY,QAA6B,aAArB,AAAY,WAAD,aAAY;AAC/D,iBAAO;yBAAa,OAAG;;AAEvB,kBAAO;0BAAY,OAAG;;;IAI9B;;;QAjCS;QACU;QACV;QACA;;IAFU;IACV;IACA;AACH,6EAAW,GAAG;;EAAC","file":"responsive_widget.ddc.js"}');
  // Exports:
  return {
    utils__responsive_widget: utils__responsive_widget
  };
});

//# sourceMappingURL=responsive_widget.ddc.js.map
