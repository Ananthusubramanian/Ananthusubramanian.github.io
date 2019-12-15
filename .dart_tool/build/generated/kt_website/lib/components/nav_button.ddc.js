define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation'], function(dart_sdk, material, ui, animation, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__colors = material.src__material__colors;
  const src__material__outline_button = material.src__material__outline_button;
  const ui$ = ui.ui;
  const src__painting__colors = animation.src__painting__colors;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__text = animation$.src__widgets__text;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__painting__borders = animation$.src__painting__borders;
  const src__widgets__framework = animation$.src__widgets__framework;
  const components__nav_button = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4293128957.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4290502395.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4287679225.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4284790262.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4282557941.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4280391411.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4280191205.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4279858898.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4279592384.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4279060385.0
      });
    },
    get C1() {
      return C1 = dart.constMap(core.int, ui$.Color, [50, C2 || CT.C2, 100, C3 || CT.C3, 200, C4 || CT.C4, 300, C5 || CT.C5, 400, C6 || CT.C6, 500, C7 || CT.C7, 600, C8 || CT.C8, 700, C9 || CT.C9, 800, C10 || CT.C10, 900, C11 || CT.C11]);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__material__colors.MaterialColor.prototype,
        [_swatch]: C1 || CT.C1,
        [_value]: 4280391411.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294967295.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 21,
        name: "data",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], src__widgets__widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_button.dart",
        line: 20,
        column: 16,
        name: null,
        parameterLocations: C14 || CT.C14
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 9,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 9,
        name: "borderSide",
        parameterLocations: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 9,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 9,
        name: "highlightedBorderColor",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], src__widgets__widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_button.dart",
        line: 18,
        column: 14,
        name: null,
        parameterLocations: C17 || CT.C17
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 7,
        name: "width",
        parameterLocations: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], src__widgets__widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_button.dart",
        line: 16,
        column: 12,
        name: null,
        parameterLocations: C24 || CT.C24
      });
    }
  });
  const _value = dart.privateName(ui$, "_value");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C1;
  const _swatch = dart.privateName(src__painting__colors, "_swatch");
  let C0;
  let C12;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C17;
  let C16;
  let C25;
  let C26;
  let C24;
  let C23;
  components__nav_button.NavButton = class NavButton extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get splashColor() {
      return this[splashColor$];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({width: 100.0, child: new src__material__outline_button.OutlineButton.new({splashColor: this.splashColor, child: new src__widgets__text.Text.new(core.String._check(this.text), {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), borderSide: new src__painting__borders.BorderSide.new({color: this.color}), onPressed: VoidTovoid()._check(this.onPressed), highlightedBorderColor: this.color, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (components__nav_button.NavButton.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : C12 || CT.C12;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onPressed$] = onPressed;
    this[color$] = color;
    this[splashColor$] = splashColor;
    components__nav_button.NavButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__nav_button.NavButton.prototype;
  dart.addTypeTests(components__nav_button.NavButton);
  const text$ = Symbol("NavButton.text");
  const onPressed$ = Symbol("NavButton.onPressed");
  const color$ = Symbol("NavButton.color");
  const splashColor$ = Symbol("NavButton.splashColor");
  dart.setMethodSignature(components__nav_button.NavButton, () => ({
    __proto__: dart.getMethods(components__nav_button.NavButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__nav_button.NavButton, "package:kt_website/components/nav_button.dart");
  dart.setFieldSignature(components__nav_button.NavButton, () => ({
    __proto__: dart.getFields(components__nav_button.NavButton.__proto__),
    text: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.dynamic),
    color: dart.finalFieldType(ui$.Color),
    splashColor: dart.finalFieldType(ui$.Color)
  }));
  dart.trackLibraries("packages/kt_website/components/nav_button", {
    "package:kt_website/components/nav_button.dart": components__nav_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["nav_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGQ;;;;;;IACA;;;;;;IACM;;;;;;IACA;;;;;;UAQc;AACxB,YAAO,mDACE,cACA,kEACQ,yBACN,mDAAK,kFACA,kDACH,6CAEE,yCACa;IAG9B;;;QAnBoB;QACD;QACV;QACA;;IAHW;IACD;IACV;IACA;AAJH;;EAI+B","file":"nav_button.ddc.js"}');
  // Exports:
  return {
    components__nav_button: components__nav_button
  };
});

//# sourceMappingURL=nav_button.ddc.js.map
