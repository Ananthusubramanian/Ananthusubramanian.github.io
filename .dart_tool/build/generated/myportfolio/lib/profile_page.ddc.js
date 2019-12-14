define(['dart_sdk', 'packages/flutter_web/animation', 'packages/myportfolio/responsive_widget', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, responsive_widget, material, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__borders = animation.src__painting__borders;
  const src__painting__stadium_border = animation.src__painting__stadium_border;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__painting__image_resolution = animation.src__painting__image_resolution;
  const responsive_widget$ = responsive_widget.responsive_widget;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__drawer = material.src__material__drawer;
  const src__material__outline_button = material.src__material__outline_button;
  const src__material__raised_button = material.src__material__raised_button;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__colors = animation$.src__painting__colors;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const ui$ = ui.ui;
  const profile_page = Object.create(dart.library);
  const $open = dartx.open;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 11,
        column: 11,
        name: "text",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 12,
        column: 11,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 10,
        column: 9,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 11,
        name: "text",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 11,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 16,
        column: 9,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 23,
        column: 11,
        name: "text",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 11,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], src__widgets__widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 22,
        column: 9,
        name: null,
        parameterLocations: C9 || CT.C9
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 11,
        name: "elevation",
        parameterLocations: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 37,
        column: 11,
        name: "backgroundColor",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], src__widgets__widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 35,
        column: 17,
        name: null,
        parameterLocations: C13 || CT.C13
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 20,
        [_top]: 20,
        [_right]: 20,
        [_bottom]: 20
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 19,
        name: "padding",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 19,
        name: "children",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], src__widgets__widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 41,
        column: 24,
        name: null,
        parameterLocations: C18 || CT.C18
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 41,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], src__widgets__widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 40,
        column: 15,
        name: null,
        parameterLocations: C22 || CT.C22
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 55,
        column: 29,
        name: "navButtons",
        parameterLocations: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], src__widgets__widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 55,
        column: 19,
        name: null,
        parameterLocations: C25 || CT.C25
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 57,
        column: 21,
        name: "height",
        parameterLocations: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], src__widgets__widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 56,
        column: 19,
        name: null,
        parameterLocations: C28 || CT.C28
      });
    },
    get C31() {
      return C31 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 59,
        column: 19,
        name: null,
        parameterLocations: C31 || CT.C31
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 61,
        column: 21,
        name: "height",
        parameterLocations: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], src__widgets__widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 60,
        column: 19,
        name: null,
        parameterLocations: C33 || CT.C33
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 63,
        column: 19,
        name: null,
        parameterLocations: C31 || CT.C31
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 53,
        column: 17,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 54,
        column: 17,
        name: "children",
        parameterLocations: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], src__widgets__widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 52,
        column: 28,
        name: null,
        parameterLocations: C37 || CT.C37
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 52,
        column: 15,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], src__widgets__widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 51,
        column: 20,
        name: null,
        parameterLocations: C41 || CT.C41
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 49,
        column: 13,
        name: "duration",
        parameterLocations: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 13,
        name: "padding",
        parameterLocations: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 51,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], src__widgets__widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 48,
        column: 18,
        name: null,
        parameterLocations: C44 || CT.C44
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 48,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], src__widgets__widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 47,
        column: 15,
        name: null,
        parameterLocations: C49 || CT.C49
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 9,
        name: "backgroundColor",
        parameterLocations: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 9,
        name: "appBar",
        parameterLocations: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 9,
        name: "drawer",
        parameterLocations: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 47,
        column: 9,
        name: "body",
        parameterLocations: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], src__widgets__widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 33,
        column: 20,
        name: null,
        parameterLocations: C52 || CT.C52
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 7,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], src__widgets__widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 32,
        column: 12,
        name: null,
        parameterLocations: C58 || CT.C58
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 87,
        column: 11,
        name: null,
        parameterLocations: C31 || CT.C31
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 91,
        column: 15,
        name: "children",
        parameterLocations: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], src__widgets__widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 90,
        column: 13,
        name: null,
        parameterLocations: C62 || CT.C62
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 82,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 85,
        column: 9,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 86,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], src__widgets__widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 81,
        column: 20,
        name: null,
        parameterLocations: C65 || CT.C65
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 81,
        column: 7,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], src__widgets__widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 80,
        column: 12,
        name: null,
        parameterLocations: C70 || CT.C70
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 105,
        column: 11,
        name: "data",
        parameterLocations: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 106,
        column: 11,
        name: "textScaleFactor",
        parameterLocations: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 107,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], src__widgets__widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 104,
        column: 9,
        name: null,
        parameterLocations: C73 || CT.C73
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 112,
        column: 11,
        name: "width",
        parameterLocations: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], src__widgets__widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 111,
        column: 9,
        name: null,
        parameterLocations: C78 || CT.C78
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 115,
        column: 11,
        name: "duration",
        parameterLocations: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 116,
        column: 11,
        name: "height",
        parameterLocations: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 117,
        column: 11,
        name: "width",
        parameterLocations: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 118,
        column: 11,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], src__widgets__widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 114,
        column: 9,
        name: null,
        parameterLocations: C81 || CT.C81
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 103,
        column: 7,
        name: "children",
        parameterLocations: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], src__widgets__widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 102,
        column: 12,
        name: null,
        parameterLocations: C87 || CT.C87
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294964192.0
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294959282.0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294954112.0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294948685.0
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294944550.0
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294940672.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294675456.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294278144.0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4293880832.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4293284096.0
      });
    },
    get C90() {
      return C90 = dart.constMap(core.int, ui$.Color, [50, C91 || CT.C91, 100, C92 || CT.C92, 200, C93 || CT.C93, 300, C94 || CT.C94, 400, C95 || CT.C95, 500, C96 || CT.C96, 600, C97 || CT.C97, 700, C98 || CT.C98, 800, C99 || CT.C99, 900, C100 || CT.C100]);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: src__material__colors.MaterialColor.prototype,
        [_swatch]: C90 || CT.C90,
        [_value]: 4294940672.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 143,
        column: 19,
        name: "data",
        parameterLocations: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], src__widgets__widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 143,
        column: 14,
        name: null,
        parameterLocations: C102 || CT.C102
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 143,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 144,
        column: 7,
        name: "borderSide",
        parameterLocations: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 147,
        column: 7,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 148,
        column: 7,
        name: "highlightedBorderColor",
        parameterLocations: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107, C108 || CT.C108, C109 || CT.C109], src__widgets__widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 142,
        column: 12,
        name: null,
        parameterLocations: C105 || CT.C105
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 177,
        column: 9,
        name: "data",
        parameterLocations: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 178,
        column: 9,
        name: "textScaleFactor",
        parameterLocations: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 179,
        column: 9,
        name: "style",
        parameterLocations: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], src__widgets__widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 176,
        column: 7,
        name: null,
        parameterLocations: C111 || CT.C111
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 182,
        column: 9,
        name: "data",
        parameterLocations: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 183,
        column: 9,
        name: "textScaleFactor",
        parameterLocations: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 184,
        column: 9,
        name: "style",
        parameterLocations: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], src__widgets__widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 181,
        column: 7,
        name: null,
        parameterLocations: C116 || CT.C116
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 190,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122], src__widgets__widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 189,
        column: 7,
        name: null,
        parameterLocations: C121 || CT.C121
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 192,
        column: 11,
        name: "data",
        parameterLocations: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 196,
        column: 9,
        name: "softWrap",
        parameterLocations: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 197,
        column: 9,
        name: "textScaleFactor",
        parameterLocations: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 198,
        column: 9,
        name: "style",
        parameterLocations: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128], src__widgets__widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 192,
        column: 7,
        name: null,
        parameterLocations: C124 || CT.C124
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 201,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131], src__widgets__widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 200,
        column: 7,
        name: null,
        parameterLocations: C130 || CT.C130
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 208,
        column: 25,
        name: "data",
        parameterLocations: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], src__widgets__widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 208,
        column: 20,
        name: null,
        parameterLocations: C133 || CT.C133
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 207,
        column: 13,
        name: "shape",
        parameterLocations: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 208,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 209,
        column: 13,
        name: "color",
        parameterLocations: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 210,
        column: 13,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 215,
        column: 13,
        name: "padding",
        parameterLocations: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], src__widgets__widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 206,
        column: 11,
        name: null,
        parameterLocations: C136 || CT.C136
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 218,
        column: 13,
        name: "width",
        parameterLocations: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], src__widgets__widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 217,
        column: 11,
        name: null,
        parameterLocations: C143 || CT.C143
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 225,
        column: 25,
        name: "data",
        parameterLocations: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147], src__widgets__widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 225,
        column: 20,
        name: null,
        parameterLocations: C146 || CT.C146
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 221,
        column: 13,
        name: "borderSide",
        parameterLocations: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 224,
        column: 13,
        name: "shape",
        parameterLocations: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 225,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 226,
        column: 13,
        name: "color",
        parameterLocations: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 227,
        column: 13,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 230,
        column: 13,
        name: "padding",
        parameterLocations: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154, C155 || CT.C155], src__widgets__widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 220,
        column: 11,
        name: null,
        parameterLocations: C149 || CT.C149
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 204,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 205,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], src__widgets__widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 203,
        column: 7,
        name: null,
        parameterLocations: C157 || CT.C157
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 174,
        column: 5,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 175,
        column: 5,
        name: "children",
        parameterLocations: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], src__widgets__widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 173,
        column: 23,
        name: null,
        parameterLocations: C161 || CT.C161
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 155,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 158,
        column: 9,
        name: "width",
        parameterLocations: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 161,
        column: 9,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167, C168 || CT.C168], src__widgets__widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 154,
        column: 28,
        name: null,
        parameterLocations: C165 || CT.C165
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 241,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 242,
        column: 9,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 243,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172, C173 || CT.C173], src__widgets__widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 240,
        column: 20,
        name: null,
        parameterLocations: C170 || CT.C170
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 251,
        column: 13,
        name: "height",
        parameterLocations: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176], src__widgets__widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 250,
        column: 11,
        name: null,
        parameterLocations: C175 || CT.C175
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 246,
        column: 9,
        name: "mainAxisSize",
        parameterLocations: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 247,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 248,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], src__widgets__widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 245,
        column: 20,
        name: null,
        parameterLocations: C178 || CT.C178
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 240,
        column: 7,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 245,
        column: 7,
        name: "smallScreen",
        parameterLocations: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], src__widgets__widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 239,
        column: 12,
        name: null,
        parameterLocations: C183 || CT.C183
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 264,
        column: 9,
        name: "text",
        parameterLocations: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 265,
        column: 9,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 268,
        column: 9,
        name: "color",
        parameterLocations: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189, C190 || CT.C190], src__widgets__widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 263,
        column: 7,
        name: null,
        parameterLocations: C187 || CT.C187
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 271,
        column: 9,
        name: "text",
        parameterLocations: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 272,
        column: 9,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 275,
        column: 9,
        name: "color",
        parameterLocations: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194, C195 || CT.C195], src__widgets__widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 270,
        column: 7,
        name: null,
        parameterLocations: C192 || CT.C192
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 281,
        column: 9,
        name: "data",
        parameterLocations: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 282,
        column: 9,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 283,
        column: 9,
        name: "style",
        parameterLocations: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199, C200 || CT.C200], src__widgets__widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 280,
        column: 29,
        name: null,
        parameterLocations: C197 || CT.C197
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 295,
        column: 13,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 296,
        column: 13,
        name: "children",
        parameterLocations: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203, C204 || CT.C204], src__widgets__widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 294,
        column: 11,
        name: null,
        parameterLocations: C202 || CT.C202
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 292,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 293,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208], src__widgets__widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 291,
        column: 20,
        name: null,
        parameterLocations: C206 || CT.C206
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 302,
        column: 9,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 303,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212], src__widgets__widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 301,
        column: 20,
        name: null,
        parameterLocations: C210 || CT.C210
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 291,
        column: 7,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 301,
        column: 7,
        name: "smallScreen",
        parameterLocations: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216], src__widgets__widget_inspector._Location);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/myportfolio/profile_page.dart",
        line: 290,
        column: 12,
        name: null,
        parameterLocations: C214 || CT.C214
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  const _left = dart.privateName(src__painting__edge_insets, "_left");
  const _top = dart.privateName(src__painting__edge_insets, "_top");
  const _right = dart.privateName(src__painting__edge_insets, "_right");
  const _bottom = dart.privateName(src__painting__edge_insets, "_bottom");
  let C16;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C22;
  let C21;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  let C31;
  let C30;
  let C34;
  let C33;
  let C32;
  let C35;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C47;
  let C44;
  let C43;
  let C50;
  let C49;
  let C48;
  let C53;
  let C54;
  let C55;
  let C56;
  let C52;
  let C51;
  let C59;
  let C58;
  let C57;
  profile_page.ProfilePage = class ProfilePage extends src__widgets__framework.StatelessWidget {
    navButtons() {
      return JSArrayOfWidget().of([new profile_page.NavButton.new({text: "about", onPressed: dart.fn(() => {
            html.window[$open]("https://wwww.google.com", "Pk");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new profile_page.NavButton.new({text: "work", onPressed: dart.fn(() => {
            html.window[$open]("https://wwww.google.com", "Pk");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new profile_page.NavButton.new({text: "contact", onPressed: dart.fn(() => {
            html.window[$open]("https://wwww.google.com", "Pk");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8})]);
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.black, appBar: new src__material__app_bar.AppBar.new({elevation: 0.0, backgroundColor: src__material__colors.Colors.black, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), drawer: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context)) ? new src__material__drawer.Drawer.new({child: new src__widgets__scroll_view.ListView.new({padding: C16 || CT.C16, children: this.navButtons(), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}) : null, body: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__implicit_animations.AnimatedPadding.new({duration: new core.Duration.new({seconds: 1}), padding: new src__painting__edge_insets.EdgeInsets.all(dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1), child: new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new profile_page.NavHeader.new({navButtons: this.navButtons(), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new profile_page.ProfileInfo.new({$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.2, $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new profile_page.SocialInfo.new({$creationLocationd_0dea112b090073317d4: C35 || CT.C35})]), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57});
    }
  };
  (profile_page.ProfilePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.ProfilePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.ProfilePage.prototype;
  dart.addTypeTests(profile_page.ProfilePage);
  dart.setMethodSignature(profile_page.ProfilePage, () => ({
    __proto__: dart.getMethods(profile_page.ProfilePage.__proto__),
    navButtons: dart.fnType(core.List$(src__widgets__framework.Widget), []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(profile_page.ProfilePage, "package:myportfolio/profile_page.dart");
  let C60;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  let C71;
  let C70;
  let C69;
  profile_page.NavHeader = class NavHeader extends src__widgets__framework.StatelessWidget {
    get navButtons() {
      return this[navButtons$];
    }
    set navButtons(value) {
      super.navButtons = value;
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context)) ? src__rendering__flex.MainAxisAlignment.center : src__rendering__flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            t0[$add](new profile_page.PKDot.new({$creationLocationd_0dea112b090073317d4: C60 || CT.C60}));
            if (!dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context))) t0[$add](new src__widgets__basic.Row.new({children: this.navButtons, $creationLocationd_0dea112b090073317d4: C61 || CT.C61}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69});
    }
  };
  (profile_page.NavHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navButtons = opts && 'navButtons' in opts ? opts.navButtons : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navButtons$] = navButtons;
    profile_page.NavHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.NavHeader.prototype;
  dart.addTypeTests(profile_page.NavHeader);
  const navButtons$ = Symbol("NavHeader.navButtons");
  dart.setMethodSignature(profile_page.NavHeader, () => ({
    __proto__: dart.getMethods(profile_page.NavHeader.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(profile_page.NavHeader, "package:myportfolio/profile_page.dart");
  dart.setFieldSignature(profile_page.NavHeader, () => ({
    __proto__: dart.getFields(profile_page.NavHeader.__proto__),
    navButtons: dart.finalFieldType(core.List$(src__widgets__framework.Widget))
  }));
  let C74;
  let C75;
  let C76;
  let C73;
  let C72;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C84;
  let C85;
  let C81;
  let C80;
  let C88;
  let C87;
  let C86;
  profile_page.PKDot = class PKDot extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new("", {textScaleFactor: 2.0, style: new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new src__widgets__basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new src__widgets__implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({seconds: 1}), height: 8.0, width: 8.0, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle, color: src__material__colors.Colors.orange}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80})]), $creationLocationd_0dea112b090073317d4: C86 || CT.C86});
    }
  };
  (profile_page.PKDot.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.PKDot.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.PKDot.prototype;
  dart.addTypeTests(profile_page.PKDot);
  dart.setMethodSignature(profile_page.PKDot, () => ({
    __proto__: dart.getMethods(profile_page.PKDot.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(profile_page.PKDot, "package:myportfolio/profile_page.dart");
  const _value = dart.privateName(ui$, "_value");
  let C91;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C90;
  const _swatch = dart.privateName(src__painting__colors, "_swatch");
  let C89;
  let C103;
  let C102;
  let C101;
  let C106;
  let C107;
  let C108;
  let C109;
  let C105;
  let C104;
  profile_page.NavButton = class NavButton extends src__widgets__framework.StatelessWidget {
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
    build(context) {
      return new src__material__outline_button.OutlineButton.new({child: new src__widgets__text.Text.new(core.String._check(this.text), {$creationLocationd_0dea112b090073317d4: C101 || CT.C101}), borderSide: new src__painting__borders.BorderSide.new({color: this.color}), onPressed: VoidTovoid()._check(this.onPressed), highlightedBorderColor: this.color, $creationLocationd_0dea112b090073317d4: C104 || CT.C104});
    }
  };
  (profile_page.NavButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let color = opts && 'color' in opts ? opts.color : C89 || CT.C89;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onPressed$] = onPressed;
    this[color$] = color;
    profile_page.NavButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.NavButton.prototype;
  dart.addTypeTests(profile_page.NavButton);
  const text$ = Symbol("NavButton.text");
  const onPressed$ = Symbol("NavButton.onPressed");
  const color$ = Symbol("NavButton.color");
  dart.setMethodSignature(profile_page.NavButton, () => ({
    __proto__: dart.getMethods(profile_page.NavButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(profile_page.NavButton, "package:myportfolio/profile_page.dart");
  dart.setFieldSignature(profile_page.NavButton, () => ({
    __proto__: dart.getFields(profile_page.NavButton.__proto__),
    text: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.dynamic),
    color: dart.finalFieldType(ui$.Color)
  }));
  let C112;
  let C113;
  let C114;
  let C111;
  let C110;
  let C117;
  let C118;
  let C119;
  let C116;
  let C115;
  let C122;
  let C121;
  let C120;
  let C125;
  let C126;
  let C127;
  let C128;
  let C124;
  let C123;
  let C131;
  let C130;
  let C129;
  let C134;
  let C133;
  let C132;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C136;
  let C135;
  let C144;
  let C143;
  let C142;
  let C147;
  let C146;
  let C145;
  let C150;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C149;
  let C148;
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C163;
  let C161;
  let C160;
  let C166;
  let C167;
  let C168;
  let C165;
  let C164;
  let C171;
  let C172;
  let C173;
  let C170;
  let C169;
  let C176;
  let C175;
  let C174;
  let C179;
  let C180;
  let C181;
  let C178;
  let C177;
  let C184;
  let C185;
  let C183;
  let C182;
  profile_page.ProfileInfo = class ProfileInfo extends src__widgets__framework.StatelessWidget {
    get profileData() {
      return this[profileData];
    }
    set profileData(value) {
      super.profileData = value;
    }
    profileImage(context) {
      return new src__widgets__container.Container.new({height: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(src__widgets__framework.BuildContext._check(context))) ? dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.width) * 0.25, width: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(src__widgets__framework.BuildContext._check(context))) ? dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.width) * 0.25, decoration: new src__painting__box_decoration.BoxDecoration.new({color: src__material__colors.Colors.white, shape: src__painting__box_border.BoxShape.circle, image: new src__painting__decoration_image.DecorationImage.new({image: new src__painting__image_resolution.AssetImage.new("pk.jpg"), alignment: src__painting__alignment.Alignment.center, fit: src__painting__box_fit.BoxFit.cover})}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164});
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this.profileImage(context)), this.profileData]), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), smallScreen: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.max, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this.profileImage(context)), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: C174 || CT.C174}), this.profileData]), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182});
    }
  };
  (profile_page.ProfileInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[profileData] = new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Hi there! My name is", {textScaleFactor: 2.0, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.orange}), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), new src__widgets__text.Text.new("M S Ananthu\nSubramanian", {textScaleFactor: 5.0, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new src__widgets__basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), new src__widgets__text.Text.new("Android Developer And DevOps\n" + "I am studying in Amrita Vishwa Vidyapeetham\n", {softWrap: true, textScaleFactor: 1.5, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white70}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), new src__widgets__basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__material__raised_button.RaisedButton.new({shape: new src__painting__stadium_border.StadiumBorder.new(), child: new src__widgets__text.Text.new("Resume", {$creationLocationd_0dea112b090073317d4: C132 || CT.C132}), color: src__material__colors.Colors.red, onPressed: dart.fn(() => {
                html.window[$open]("https://wwww.google.com", "GDE");
              }, VoidToNull()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), new src__widgets__basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), new src__material__outline_button.OutlineButton.new({borderSide: new src__painting__borders.BorderSide.new({color: src__material__colors.Colors.red}), shape: new src__painting__stadium_border.StadiumBorder.new(), child: new src__widgets__text.Text.new("Say Hi!", {$creationLocationd_0dea112b090073317d4: C145 || CT.C145}), color: src__material__colors.Colors.red, onPressed: dart.fn(() => {
                html.window[$open]("https://wwww.google.com", "Pk");
              }, VoidToNull()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: C148 || CT.C148})]), $creationLocationd_0dea112b090073317d4: C156 || CT.C156})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
    profile_page.ProfileInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.ProfileInfo.prototype;
  dart.addTypeTests(profile_page.ProfileInfo);
  const profileData = Symbol("ProfileInfo.profileData");
  dart.setMethodSignature(profile_page.ProfileInfo, () => ({
    __proto__: dart.getMethods(profile_page.ProfileInfo.__proto__),
    profileImage: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(profile_page.ProfileInfo, "package:myportfolio/profile_page.dart");
  dart.setFieldSignature(profile_page.ProfileInfo, () => ({
    __proto__: dart.getFields(profile_page.ProfileInfo.__proto__),
    profileData: dart.finalFieldType(src__widgets__basic.Column)
  }));
  let C188;
  let C189;
  let C190;
  let C187;
  let C186;
  let C193;
  let C194;
  let C195;
  let C192;
  let C191;
  let C198;
  let C199;
  let C200;
  let C197;
  let C196;
  let C203;
  let C204;
  let C202;
  let C201;
  let C207;
  let C208;
  let C206;
  let C205;
  let C211;
  let C212;
  let C210;
  let C209;
  let C215;
  let C216;
  let C214;
  let C213;
  profile_page.SocialInfo = class SocialInfo extends src__widgets__framework.StatelessWidget {
    socialMediaWidgets() {
      return JSArrayOfWidget().of([new profile_page.NavButton.new({text: "Github", onPressed: dart.fn(() => {
            html.window[$open]("https://github.com/Ananthusubramanian", "GitHub");
          }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), new profile_page.NavButton.new({text: "Twitter", onPressed: dart.fn(() => {
            html.window[$open]("https://twitter.com/EpicAnanduk", "Twitter");
          }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C191 || CT.C191})]);
    }
    copyRightText() {
      return new src__widgets__text.Text.new("Ananthusubramanian ©️2019", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: C196 || CT.C196});
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: this.socialMediaWidgets(), $creationLocationd_0dea112b090073317d4: C201 || CT.C201}), this.copyRightText()]), $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), smallScreen: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: (() => {
            let t1 = JSArrayOfWidget().of([]);
            for (let t2 of this.socialMediaWidgets())
              t1[$add](t2);
            t1[$add](this.copyRightText());
            return t1;
          })(), $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), $creationLocationd_0dea112b090073317d4: C213 || CT.C213});
    }
  };
  (profile_page.SocialInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.SocialInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.SocialInfo.prototype;
  dart.addTypeTests(profile_page.SocialInfo);
  dart.setMethodSignature(profile_page.SocialInfo, () => ({
    __proto__: dart.getMethods(profile_page.SocialInfo.__proto__),
    socialMediaWidgets: dart.fnType(core.List$(src__widgets__framework.Widget), []),
    copyRightText: dart.fnType(src__widgets__framework.Widget, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(profile_page.SocialInfo, "package:myportfolio/profile_page.dart");
  dart.trackLibraries("packages/myportfolio/profile_page", {
    "package:myportfolio/profile_page.dart": profile_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["profile_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQ+B,mCACvB,sCACQ,oBACK;YACJ,AAAO,mBAAK,2BAA2B;mFAGhD,sCACQ,mBACK;YACJ,AAAO,mBAAK,2BAA2B;mFAGhD,sCACQ,sBACK;YACJ,AAAO,mBAAK,2BAA2B;;IAGjD;UAGqB;AACxB,YAAO,2DACQ,2DACa,4CAChB,kDACK,sBACa,+GAED,kDAAc,OAAO,KACxC,6CACS,8EAEK,sIAGd,YACA,6EACG,qEACK,gCAAkB,cACR,8CAAuC,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,aACtD,0DACQ,uDAC0B,wDACnB,sBAChB,4CAAsB,4EACtB,8CAC6C,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,8DAE/C,2FACA,8CAC6C,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,8DAE/C;IAQhB;;;QAhEuB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;IAoE3B;;;;;;UAIO;AACxB,YAAO,2DACQ,8DACyB,kDAAc,OAAO,KACjC,gDACA,yEACe;;qBAErC;AAEA,2BAAsB,kDAAc,OAAO,aACzC,2CACY;;;IAKtB;;;QAnBqB;QAAU;;;AAAe,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAwBnC;AACxB,YAAO,4CACa,sBAChB,gCACE,sBACiB,YACV,yDACkB,gFAG3B,6CACS,8DAET,uEACY,gCAAkB,aACpB,YACD,iBACK,4DACM,kDACF;IAKxB;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGQ;;;;;;IACA;;;;;;IACM;;;;;;UAUc;AACxB,YAAO,6DACE,mDAAK,oFACA,kDACH,6CAEE,yCACa;IAE5B;;;QAhBS;QACU;QACA;QACV;;IAFU;IACA;IACV;AACH,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmCf;;;;;;iBAnBO;AAAY,0EACM,8FAAc,OAAO,MACL,aAAxB,AAAY,AAAK,oFAAd,OAAO,kBAAgB,OACH,aAAvB,AAAY,AAAK,oFAAd,OAAO,iBAAe,uBAClB,8FAAc,OAAO,MACJ,aAAxB,AAAY,AAAK,oFAAd,OAAO,kBAAgB,OACH,aAAvB,AAAY,AAAK,oFAAd,OAAO,iBAAe,kBAC9B,4DACI,2CAEE,kDACT,gEACE,mDAAW,sBACG,gDACT;IAGjB;UAmEqB;AACxB,YAAO,2DACQ,oDAC0B,wEACE,0DACrB,4DAAC,kBAAa,OAAO,IAAG,4FAE/B,kDACgB,0DACU,+DACnB,4DAChB,kBAAa,OAAO,IACpB,8CAC6C,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,gEAE/C;IAIR;;;;IApFM,oBAAc,wDACqB,yDACrB,sBAChB,gCACE,0CACiB,YACV,oDAAwB,kGAEjC,gCACE,8CACiB,YACV,oDACS,gDACS,kFAG3B,8CACU,iEAEV,gCACE,mCACA,4DAEU,uBACO,YACV,oDAAwB,mGAEjC,8CACU,iEAEV,oDACuC,8DACnB,sBAChB,0DACS,8DACA,gCAAK,6EACE,6CACH;gBACJ,AAAO,mBACR,2BACA;yCAEc,8CAAI,kEAE1B,6CACS,iEAET,iEACc,kDACI,2CAET,8DACA,gCAAK,8EACE,6CACH;gBACJ,AAAO,mBAAK,2BAA2B;yCAE1B,8CAAI;;;EA4BpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAII,YAAO,uBACL,sCACQ,qBACK;YACJ,AAAO,mBAAK,yCAAyC;mCAE9C,8FAEhB,sCACQ,sBACK;YACJ,AAAO,mBAAK,mCAAmC;mCAExC;IAGpB;;AAE0B,6CACpB,yCACqB,6BACd,oDACS;IAEjB;UAGqB;AACxB,YAAO,2DACQ,oDAC0B,+DACnB,sBAChB,oDACuC,wDAC3B,sFAEZ,gGAGS,wDAC4B;;0BAElC;;qBACH;;;IAIR;;;;;;EACF","file":"profile_page.ddc.js"}');
  // Exports:
  return {
    profile_page: profile_page
  };
});

//# sourceMappingURL=profile_page.ddc.js.map
