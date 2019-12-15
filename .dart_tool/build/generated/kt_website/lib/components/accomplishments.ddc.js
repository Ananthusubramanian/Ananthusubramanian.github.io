define(['dart_sdk', 'packages/flutter_web/animation', 'packages/kt_website/components/app_state_container', 'packages/kt_website/models/data', 'packages/kt_website/models/app_state_model', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/kt_website/utils/responsive_widget', 'packages/flutter_web_ui/ui', 'packages/kt_website/components/horizontal_line', 'packages/kt_website/animations/animations', 'packages/kt_website/components/logo', 'packages/vector_math/vector_math_64', 'packages/kt_website/components/nav_button'], function(dart_sdk, animation, app_state_container, data, app_state_model, animation$, material, responsive_widget, ui, horizontal_line, animations, logo, vector_math_64, nav_button) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__painting__rounded_rectangle_border = animation.src__painting__rounded_rectangle_border;
  const src__widgets__image = animation.src__widgets__image;
  const src__painting__image_resolution = animation.src__painting__image_resolution;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const components__app_state_container = app_state_container.components__app_state_container;
  const models__data = data.models__data;
  const models__app_state_model = app_state_model.models__app_state_model;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__material__colors = material.src__material__colors;
  const src__material__icons = material.src__material__icons;
  const src__material__card = material.src__material__card;
  const src__material__flat_button = material.src__material__flat_button;
  const utils__responsive_widget = responsive_widget.utils__responsive_widget;
  const ui$ = ui.ui;
  const components__horizontal_line = horizontal_line.components__horizontal_line;
  const animations__animations = animations.animations__animations;
  const components__logo = logo.components__logo;
  const vector_math_64$ = vector_math_64.vector_math_64;
  const components__nav_button = nav_button.components__nav_button;
  const components__components = Object.create(dart.library);
  const components__accomplishments = Object.create(dart.library);
  const components__social_links = Object.create(dart.library);
  const components__nav_header = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextAndintToCenter = () => (BuildContextAndintToCenter = dart.constFn(dart.fnType(src__widgets__basic.Center, [src__widgets__framework.BuildContext, core.int])))();
  let BuildContextAndintToPadding = () => (BuildContextAndintToPadding = dart.constFn(dart.fnType(src__widgets__basic.Padding, [src__widgets__framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 28,
        column: 11,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 11,
        name: "height",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 11,
        name: "width",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 27,
        column: 9,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 25,
        name: "data",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 19,
        name: "style",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 41,
        column: 17,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 19,
        name: "start",
        parameterLocations: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 51,
        column: 19,
        name: "end",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], src__widgets__widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 49,
        column: 17,
        name: null,
        parameterLocations: C10 || CT.C10
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 40,
        column: 15,
        name: "children",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], src__widgets__widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 39,
        column: 13,
        name: null,
        parameterLocations: C14 || CT.C14
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 56,
        column: 15,
        name: "height",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], src__widgets__widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 55,
        column: 13,
        name: null,
        parameterLocations: C17 || CT.C17
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 67,
        column: 39,
        name: "icon",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], src__widgets__widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 67,
        column: 28,
        name: null,
        parameterLocations: C20 || CT.C20
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 67,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], src__widgets__widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 66,
        column: 26,
        name: null,
        parameterLocations: C23 || CT.C23
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 83,
        column: 23,
        name: "text",
        parameterLocations: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 84,
        column: 23,
        name: "title",
        parameterLocations: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 85,
        column: 23,
        name: "date",
        parameterLocations: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 86,
        column: 23,
        name: "imageUrl",
        parameterLocations: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 87,
        column: 23,
        name: "color",
        parameterLocations: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 88,
        column: 23,
        name: "textColor",
        parameterLocations: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], src__widgets__widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 82,
        column: 28,
        name: null,
        parameterLocations: C26 || CT.C26
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 81,
        column: 21,
        name: "padding",
        parameterLocations: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 82,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], src__widgets__widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 80,
        column: 26,
        name: null,
        parameterLocations: C34 || CT.C34
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 65,
        column: 17,
        name: "separatorBuilder",
        parameterLocations: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 70,
        column: 17,
        name: "padding",
        parameterLocations: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 71,
        column: 17,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 72,
        column: 17,
        name: "itemCount",
        parameterLocations: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 73,
        column: 17,
        name: "itemBuilder",
        parameterLocations: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], src__widgets__widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 64,
        column: 31,
        name: null,
        parameterLocations: C38 || CT.C38
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 59,
        column: 15,
        name: "padding",
        parameterLocations: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 60,
        column: 15,
        name: "width",
        parameterLocations: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 63,
        column: 15,
        name: "height",
        parameterLocations: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 64,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], src__widgets__widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 58,
        column: 13,
        name: null,
        parameterLocations: C45 || CT.C45
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 11,
        name: "children",
        parameterLocations: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], src__widgets__widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 37,
        column: 9,
        name: null,
        parameterLocations: C51 || CT.C51
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 7,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 26,
        column: 7,
        name: "children",
        parameterLocations: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], src__widgets__widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 24,
        column: 12,
        name: null,
        parameterLocations: C54 || CT.C54
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 8,
        [_top]: 8,
        [_right]: 8,
        [_bottom]: 8
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 133,
        column: 17,
        name: "image",
        parameterLocations: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 134,
        column: 17,
        name: "height",
        parameterLocations: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], src__widgets__widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 132,
        column: 22,
        name: null,
        parameterLocations: C59 || CT.C59
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 131,
        column: 15,
        name: "padding",
        parameterLocations: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 132,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], src__widgets__widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 130,
        column: 13,
        name: null,
        parameterLocations: C63 || CT.C63
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 8,
        [_top]: 10,
        [_right]: 8,
        [_bottom]: 0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 141,
        column: 17,
        name: "data",
        parameterLocations: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 142,
        column: 17,
        name: "style",
        parameterLocations: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], src__widgets__widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 140,
        column: 22,
        name: null,
        parameterLocations: C68 || CT.C68
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 138,
        column: 15,
        name: "padding",
        parameterLocations: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 140,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], src__widgets__widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 137,
        column: 13,
        name: null,
        parameterLocations: C72 || CT.C72
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 151,
        column: 17,
        name: "data",
        parameterLocations: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 152,
        column: 17,
        name: "style",
        parameterLocations: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], src__widgets__widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 150,
        column: 22,
        name: null,
        parameterLocations: C76 || CT.C76
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 149,
        column: 15,
        name: "padding",
        parameterLocations: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 150,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], src__widgets__widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 148,
        column: 13,
        name: null,
        parameterLocations: C80 || CT.C80
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 8,
        [_top]: 0,
        [_right]: 0,
        [_bottom]: 8
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 158,
        column: 17,
        name: "data",
        parameterLocations: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 159,
        column: 17,
        name: "style",
        parameterLocations: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], src__widgets__widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 157,
        column: 22,
        name: null,
        parameterLocations: C85 || CT.C85
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 156,
        column: 15,
        name: "padding",
        parameterLocations: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 157,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], src__widgets__widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 155,
        column: 13,
        name: null,
        parameterLocations: C89 || CT.C89
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 129,
        column: 11,
        name: "children",
        parameterLocations: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], src__widgets__widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 128,
        column: 16,
        name: null,
        parameterLocations: C93 || CT.C93
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 123,
        column: 9,
        name: "shape",
        parameterLocations: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 126,
        column: 9,
        name: "elevation",
        parameterLocations: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 127,
        column: 9,
        name: "color",
        parameterLocations: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 128,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], src__widgets__widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 122,
        column: 14,
        name: null,
        parameterLocations: C96 || CT.C96
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 120,
        column: 7,
        name: "width",
        parameterLocations: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 122,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104], src__widgets__widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/accomplishments.dart",
        line: 118,
        column: 12,
        name: null,
        parameterLocations: C102 || CT.C102
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 16,
        column: 29,
        name: "data",
        parameterLocations: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], src__widgets__widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 16,
        column: 24,
        name: null,
        parameterLocations: C106 || CT.C106
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 16,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], src__widgets__widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 15,
        column: 15,
        name: null,
        parameterLocations: C109 || CT.C109
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 29,
        name: "data",
        parameterLocations: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], src__widgets__widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 20,
        column: 24,
        name: null,
        parameterLocations: C113 || CT.C113
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], src__widgets__widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 19,
        column: 15,
        name: null,
        parameterLocations: C116 || CT.C116
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 29,
        name: "data",
        parameterLocations: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121], src__widgets__widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 24,
        column: 24,
        name: null,
        parameterLocations: C120 || CT.C120
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], src__widgets__widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 23,
        column: 15,
        name: null,
        parameterLocations: C123 || CT.C123
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 13,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 13,
        name: "children",
        parameterLocations: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], src__widgets__widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 12,
        column: 11,
        name: null,
        parameterLocations: C127 || CT.C127
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 30,
        column: 13,
        name: "data",
        parameterLocations: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 13,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], src__widgets__widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 29,
        column: 11,
        name: null,
        parameterLocations: C131 || CT.C131
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 10,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 11,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138], src__widgets__widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 9,
        column: 20,
        name: null,
        parameterLocations: C136 || CT.C136
      });
    },
    get C140() {
      return C140 = dart.constList([C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 42,
        column: 20,
        name: null,
        parameterLocations: C140 || CT.C140
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 13,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144], src__widgets__widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 41,
        column: 11,
        name: null,
        parameterLocations: C142 || CT.C142
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 46,
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
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 46,
        column: 20,
        name: null,
        parameterLocations: C146 || CT.C146
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 46,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 47,
        column: 13,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], src__widgets__widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 45,
        column: 11,
        name: null,
        parameterLocations: C149 || CT.C149
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 25,
        name: "data",
        parameterLocations: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154], src__widgets__widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 50,
        column: 20,
        name: null,
        parameterLocations: C153 || CT.C153
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 51,
        column: 13,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158], src__widgets__widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 49,
        column: 11,
        name: null,
        parameterLocations: C156 || CT.C156
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 54,
        column: 13,
        name: "data",
        parameterLocations: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 55,
        column: 13,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 56,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162, C163 || CT.C163], src__widgets__widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 53,
        column: 11,
        name: null,
        parameterLocations: C160 || CT.C160
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 9,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 40,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], src__widgets__widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 38,
        column: 20,
        name: null,
        parameterLocations: C165 || CT.C165
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 9,
        column: 7,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 7,
        name: "smallScreen",
        parameterLocations: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171], src__widgets__widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/social_links.dart",
        line: 8,
        column: 12,
        name: null,
        parameterLocations: C169 || CT.C169
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 16,
        column: 7,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174], src__widgets__widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 15,
        column: 12,
        name: null,
        parameterLocations: C173 || CT.C173
      });
    },
    get C176() {
      return C176 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 29,
        column: 18,
        name: null,
        parameterLocations: C176 || CT.C176
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 28,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 29,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180], src__widgets__widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 27,
        column: 9,
        name: null,
        parameterLocations: C178 || CT.C178
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 25,
        name: "controller",
        parameterLocations: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 37,
        name: "size",
        parameterLocations: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], src__widgets__widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 39,
        column: 11,
        name: null,
        parameterLocations: C182 || CT.C182
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 7,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 7,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188, C56 || CT.C56], src__widgets__widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 21,
        column: 12,
        name: null,
        parameterLocations: C186 || CT.C186
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 61,
        column: 19,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 64,
        column: 19,
        name: "color",
        parameterLocations: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 65,
        column: 19,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 66,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192, C193 || CT.C193, C194 || CT.C194], src__widgets__widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 60,
        column: 24,
        name: null,
        parameterLocations: C190 || CT.C190
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 58,
        column: 17,
        name: "transform",
        parameterLocations: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 60,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198], src__widgets__widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 57,
        column: 15,
        name: null,
        parameterLocations: C196 || CT.C196
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 73,
        column: 19,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 76,
        column: 19,
        name: "color",
        parameterLocations: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 77,
        column: 19,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 78,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202, C203 || CT.C203, C204 || CT.C204], src__widgets__widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 72,
        column: 24,
        name: null,
        parameterLocations: C200 || CT.C200
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 70,
        column: 17,
        name: "transform",
        parameterLocations: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 72,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208], src__widgets__widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 69,
        column: 15,
        name: null,
        parameterLocations: C206 || CT.C206
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 85,
        column: 19,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 88,
        column: 19,
        name: "color",
        parameterLocations: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 89,
        column: 19,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 90,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212, C213 || CT.C213, C214 || CT.C214], src__widgets__widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 84,
        column: 24,
        name: null,
        parameterLocations: C210 || CT.C210
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 82,
        column: 17,
        name: "transform",
        parameterLocations: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 84,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217, C218 || CT.C218], src__widgets__widget_inspector._Location);
    },
    get C215() {
      return C215 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 81,
        column: 15,
        name: null,
        parameterLocations: C216 || CT.C216
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 97,
        column: 19,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 100,
        column: 19,
        name: "color",
        parameterLocations: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 101,
        column: 19,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 102,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222, C223 || CT.C223, C224 || CT.C224], src__widgets__widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 96,
        column: 24,
        name: null,
        parameterLocations: C220 || CT.C220
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 94,
        column: 17,
        name: "transform",
        parameterLocations: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 96,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228], src__widgets__widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 93,
        column: 15,
        name: null,
        parameterLocations: C226 || CT.C226
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 56,
        column: 13,
        name: "children",
        parameterLocations: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231], src__widgets__widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 55,
        column: 11,
        name: null,
        parameterLocations: C230 || CT.C230
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 111,
        column: 17,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 112,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 116,
        column: 17,
        name: "color",
        parameterLocations: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 117,
        column: 17,
        name: "text",
        parameterLocations: null
      });
    },
    get C233() {
      return C233 = dart.constList([C234 || CT.C234, C235 || CT.C235, C236 || CT.C236, C237 || CT.C237], src__widgets__widget_inspector._Location);
    },
    get C232() {
      return C232 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 110,
        column: 15,
        name: null,
        parameterLocations: C233 || CT.C233
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 120,
        column: 17,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 121,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 125,
        column: 17,
        name: "color",
        parameterLocations: null
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 126,
        column: 17,
        name: "text",
        parameterLocations: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240, C241 || CT.C241, C242 || CT.C242, C243 || CT.C243], src__widgets__widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 119,
        column: 15,
        name: null,
        parameterLocations: C239 || CT.C239
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 129,
        column: 17,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 130,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 134,
        column: 17,
        name: "color",
        parameterLocations: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 135,
        column: 17,
        name: "text",
        parameterLocations: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246, C247 || CT.C247, C248 || CT.C248, C249 || CT.C249], src__widgets__widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 128,
        column: 15,
        name: null,
        parameterLocations: C245 || CT.C245
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 138,
        column: 17,
        name: "splashColor",
        parameterLocations: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 139,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 143,
        column: 17,
        name: "color",
        parameterLocations: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 144,
        column: 17,
        name: "text",
        parameterLocations: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253, C254 || CT.C254, C255 || CT.C255], src__widgets__widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 137,
        column: 15,
        name: null,
        parameterLocations: C251 || CT.C251
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 108,
        column: 13,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 109,
        column: 13,
        name: "children",
        parameterLocations: null
      });
    },
    get C257() {
      return C257 = dart.constList([C258 || CT.C258, C259 || CT.C259], src__widgets__widget_inspector._Location);
    },
    get C256() {
      return C256 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/nav_header.dart",
        line: 107,
        column: 11,
        name: null,
        parameterLocations: C257 || CT.C257
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C18;
  let C17;
  let C16;
  let C21;
  let C20;
  let C19;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C26;
  let C25;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C38;
  let C37;
  let C46;
  let C47;
  let C48;
  let C49;
  let C45;
  let C44;
  let C52;
  let C51;
  let C50;
  let C55;
  let C56;
  let C54;
  let C53;
  components__accomplishments.AccomplishmentsList = class AccomplishmentsList extends src__widgets__framework.StatelessWidget {
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      let state = components__app_state_container.AppStateContainer.of(context).state;
      let data = new models__data.Data.new();
      let list = null;
      if (dart.equals(state.pageState, models__app_state_model.Page.EDUCATION)) {
        list = data.educations;
      } else if (dart.equals(state.pageState, models__app_state_model.Page.WORK)) {
        list = data.work;
      } else if (dart.equals(state.pageState, models__app_state_model.Page.PROJECTS)) {
        list = data.projects;
      } else if (dart.equals(state.pageState, models__app_state_model.Page.CONTACT)) {
        list = data.contacts;
      }
      return new src__widgets__basic.Stack.new({alignment: src__painting__alignment.Alignment.center, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: src__material__colors.Colors.white30, borderRadius: new src__painting__border_radius.BorderRadius.circular(0.0)}), height: 400.0, width: dart.test(utils__responsive_widget.ResponsiveWidget.isLargeScreen(context)) ? dart.notNull(size.width) / 3.0 : size.width, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new(state.pageTitle, {style: new src__painting__text_style.TextStyle.new({fontSize: 35.0, color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new components__horizontal_line.HorizontalLine.new({start: new ui$.Offset.new(-dart.notNull(size.width) / 10, 0.0), end: new ui$.Offset.new(dart.notNull(size.width) / 10, 0.0), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new src__widgets__basic.SizedBox.new({height: dart.test(utils__responsive_widget.ResponsiveWidget.isLargeScreen(context)) ? 20.0 : 0.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: 10.0}), width: dart.test(utils__responsive_widget.ResponsiveWidget.isLargeScreen(context)) ? dart.notNull(size.width) / 3.2 : dart.notNull(size.width) / 1.1, height: 300.0, child: new src__widgets__scroll_view.ListView.separated({separatorBuilder: dart.fn((context, index) => new src__widgets__basic.Center.new({child: new src__widgets__icon.Icon.new(src__material__icons.Icons.arrow_left, {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), BuildContextAndintToCenter()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), scrollDirection: src__painting__basic_types.Axis.horizontal, itemCount: list[$length], itemBuilder: dart.fn((context, index) => {
                    let color = null;
                    let textColor = null;
                    color = src__material__colors.Colors.white;
                    textColor = src__material__colors.Colors.black;
                    return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({left: dart.notNull(size.height) / 35}), child: new components__accomplishments.ListItem.new({text: list[$_get](index).text, title: list[$_get](index).title, date: dart.str(list[$_get](index).startTime) + " " + dart.str(list[$_get](index).endTime), imageUrl: list[$_get](index).imageUrl, color: color, textColor: textColor, $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
                  }, BuildContextAndintToPadding()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C50 || CT.C50})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
    }
  };
  (components__accomplishments.AccomplishmentsList.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__accomplishments.AccomplishmentsList.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__accomplishments.AccomplishmentsList.prototype;
  dart.addTypeTests(components__accomplishments.AccomplishmentsList);
  dart.setMethodSignature(components__accomplishments.AccomplishmentsList, () => ({
    __proto__: dart.getMethods(components__accomplishments.AccomplishmentsList.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__accomplishments.AccomplishmentsList, "package:kt_website/components/accomplishments.dart");
  const _left = dart.privateName(src__painting__edge_insets, "_left");
  const _top = dart.privateName(src__painting__edge_insets, "_top");
  const _right = dart.privateName(src__painting__edge_insets, "_right");
  const _bottom = dart.privateName(src__painting__edge_insets, "_bottom");
  let C57;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C66;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C72;
  let C71;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  let C83;
  let C86;
  let C87;
  let C85;
  let C84;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C99;
  let C100;
  let C96;
  let C95;
  let C103;
  let C104;
  let C102;
  let C101;
  components__accomplishments.ListItem = class ListItem extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      super.imageUrl = value;
    }
    get textColor() {
      return this[textColor$];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      let t0;
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({width: 250.0, child: new src__material__card.Card.new({shape: new src__painting__rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(0.0)}), elevation: 4.0, color: this.color, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new src__widgets__basic.Padding.new({padding: C57 || CT.C57, child: new src__widgets__image.Image.new({image: new src__painting__image_resolution.AssetImage.new((t0 = this.imageUrl, t0 == null ? "" : t0)), height: this.imageUrl != null ? 150.0 : 0.0, $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), new src__widgets__basic.Padding.new({padding: C66 || CT.C66, child: new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({fontSize: 14.0, fontWeight: ui$.FontWeight.bold, color: this.textColor}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), new src__widgets__basic.Padding.new({padding: C57 || CT.C57, child: new src__widgets__text.Text.new(this.text, {style: new src__painting__text_style.TextStyle.new({fontStyle: ui$.FontStyle.normal, color: this.textColor}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new src__widgets__basic.Padding.new({padding: C83 || CT.C83, child: new src__widgets__text.Text.new(this.date, {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey._get(400)}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101});
    }
  };
  (components__accomplishments.ListItem.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let textColor = opts && 'textColor' in opts ? opts.textColor : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : "";
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[title$] = title;
    this[color$] = color;
    this[textColor$] = textColor;
    this[date$] = date;
    this[imageUrl$] = imageUrl;
    components__accomplishments.ListItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__accomplishments.ListItem.prototype;
  dart.addTypeTests(components__accomplishments.ListItem);
  const text$ = Symbol("ListItem.text");
  const title$ = Symbol("ListItem.title");
  const date$ = Symbol("ListItem.date");
  const imageUrl$ = Symbol("ListItem.imageUrl");
  const textColor$ = Symbol("ListItem.textColor");
  const color$ = Symbol("ListItem.color");
  dart.setMethodSignature(components__accomplishments.ListItem, () => ({
    __proto__: dart.getMethods(components__accomplishments.ListItem.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__accomplishments.ListItem, "package:kt_website/components/accomplishments.dart");
  dart.setFieldSignature(components__accomplishments.ListItem, () => ({
    __proto__: dart.getFields(components__accomplishments.ListItem.__proto__),
    text: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    date: dart.finalFieldType(core.String),
    imageUrl: dart.finalFieldType(core.String),
    textColor: dart.finalFieldType(ui$.Color),
    color: dart.finalFieldType(ui$.Color)
  }));
  let C107;
  let C106;
  let C105;
  let C110;
  let C111;
  let C109;
  let C108;
  let C114;
  let C113;
  let C112;
  let C117;
  let C118;
  let C116;
  let C115;
  let C121;
  let C120;
  let C119;
  let C124;
  let C125;
  let C123;
  let C122;
  let C128;
  let C129;
  let C127;
  let C126;
  let C132;
  let C133;
  let C134;
  let C131;
  let C130;
  let C137;
  let C138;
  let C136;
  let C135;
  let C140;
  let C139;
  let C143;
  let C144;
  let C142;
  let C141;
  let C147;
  let C146;
  let C145;
  let C150;
  let C151;
  let C149;
  let C148;
  let C154;
  let C153;
  let C152;
  let C157;
  let C158;
  let C156;
  let C155;
  let C161;
  let C162;
  let C163;
  let C160;
  let C159;
  let C166;
  let C167;
  let C165;
  let C164;
  let C170;
  let C171;
  let C169;
  let C168;
  components__social_links.SocialLinks = class SocialLinks extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new utils__responsive_widget.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("hello", {$creationLocationd_0dea112b090073317d4: C105 || CT.C105}), onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("hello", {$creationLocationd_0dea112b090073317d4: C112 || CT.C112}), onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("hello", {$creationLocationd_0dea112b090073317d4: C119 || CT.C119}), onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C122 || CT.C122})]), $creationLocationd_0dea112b090073317d4: C126 || CT.C126}), new src__widgets__text.Text.new("Kristian Tuusjärvi ©️2019", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: C130 || CT.C130})]), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), smallScreen: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("hello", {$creationLocationd_0dea112b090073317d4: C139 || CT.C139}), onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("hello", {$creationLocationd_0dea112b090073317d4: C145 || CT.C145}), onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("hello", {$creationLocationd_0dea112b090073317d4: C152 || CT.C152}), onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C155 || CT.C155}), new src__widgets__text.Text.new("Kristian Tuusjärvi ©️2019", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159})]), $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), $creationLocationd_0dea112b090073317d4: C168 || CT.C168});
    }
  };
  (components__social_links.SocialLinks.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__social_links.SocialLinks.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__social_links.SocialLinks.prototype;
  dart.addTypeTests(components__social_links.SocialLinks);
  dart.setMethodSignature(components__social_links.SocialLinks, () => ({
    __proto__: dart.getMethods(components__social_links.SocialLinks.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__social_links.SocialLinks, "package:kt_website/components/social_links.dart");
  const _buildLargeScreen = dart.privateName(components__nav_header, "_buildLargeScreen");
  let C174;
  let C173;
  let C172;
  let C176;
  let C175;
  let C179;
  let C180;
  let C178;
  let C177;
  let C183;
  let C184;
  let C182;
  let C181;
  let C187;
  let C188;
  let C186;
  let C185;
  components__nav_header.NavHeader = class NavHeader extends src__widgets__framework.StatelessWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get animation() {
      return this[animation$0];
    }
    set animation(value) {
      super.animation = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    build(context) {
      return new utils__responsive_widget.ResponsiveWidget.new({largeScreen: this[_buildLargeScreen](context), $creationLocationd_0dea112b090073317d4: C172 || CT.C172});
    }
    [_buildLargeScreen](context) {
      return new src__widgets__basic.Row.new({mainAxisAlignment: dart.test(utils__responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? src__rendering__flex.MainAxisAlignment.spaceAround : src__rendering__flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: (() => {
          let t0 = JSArrayOfWidget().of([]);
          t0[$add](new src__widgets__basic.Opacity.new({opacity: core.double._check(this.animation.logoAnimation.value), child: new components__logo.Logo.new({$creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}));
          if (!dart.test(utils__responsive_widget.ResponsiveWidget.isSmallScreen(context))) t0[$add](new components__nav_header.NavigationRow.new(this.controller, this.size, {$creationLocationd_0dea112b090073317d4: C181 || CT.C181}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C185 || CT.C185});
    }
  };
  (components__nav_header.NavHeader.new = function(controller, size, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[size$] = size;
    this[animation$0] = new animations__animations.WebPageEnterAnimation.new(controller, size);
    components__nav_header.NavHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__nav_header.NavHeader.prototype;
  dart.addTypeTests(components__nav_header.NavHeader);
  const controller$ = Symbol("NavHeader.controller");
  const animation$0 = Symbol("NavHeader.animation");
  const size$ = Symbol("NavHeader.size");
  dart.setMethodSignature(components__nav_header.NavHeader, () => ({
    __proto__: dart.getMethods(components__nav_header.NavHeader.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_buildLargeScreen]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__nav_header.NavHeader, "package:kt_website/components/nav_header.dart");
  dart.setFieldSignature(components__nav_header.NavHeader, () => ({
    __proto__: dart.getFields(components__nav_header.NavHeader.__proto__),
    controller: dart.finalFieldType(src__animation__animation_controller.AnimationController),
    animation: dart.finalFieldType(animations__animations.WebPageEnterAnimation),
    size: dart.finalFieldType(ui$.Size)
  }));
  let C191;
  let C192;
  let C193;
  let C194;
  let C190;
  let C189;
  let C197;
  let C198;
  let C196;
  let C195;
  let C201;
  let C202;
  let C203;
  let C204;
  let C200;
  let C199;
  let C207;
  let C208;
  let C206;
  let C205;
  let C211;
  let C212;
  let C213;
  let C214;
  let C210;
  let C209;
  let C217;
  let C218;
  let C216;
  let C215;
  let C221;
  let C222;
  let C223;
  let C224;
  let C220;
  let C219;
  let C227;
  let C228;
  let C226;
  let C225;
  let C231;
  let C230;
  let C229;
  let C234;
  let C235;
  let C236;
  let C237;
  let C233;
  let C232;
  let C240;
  let C241;
  let C242;
  let C243;
  let C239;
  let C238;
  let C246;
  let C247;
  let C248;
  let C249;
  let C245;
  let C244;
  let C252;
  let C253;
  let C254;
  let C255;
  let C251;
  let C250;
  let C258;
  let C259;
  let C257;
  let C256;
  components__nav_header.NavigationRow = class NavigationRow extends src__widgets__framework.StatelessWidget {
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get animation() {
      return this[animation$1];
    }
    set animation(value) {
      super.animation = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    build(context) {
      return !dart.test(utils__responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Transform.new({transform: vector_math_64$.Matrix4.translationValues(0.0, core.double._check(this.animation.navBtnAnimation1.value), 0.0), child: new components__nav_button.NavButton.new({onPressed: dart.fn(() => {
                components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.EDUCATION);
              }, VoidToNull()), color: src__material__colors.Colors.white, splashColor: src__material__colors.Colors.indigo._get(600), text: "Education", $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195}), new src__widgets__basic.Transform.new({transform: vector_math_64$.Matrix4.translationValues(0.0, core.double._check(this.animation.navBtnAnimation2.value), 0.0), child: new components__nav_button.NavButton.new({onPressed: dart.fn(() => {
                components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.WORK);
              }, VoidToNull()), color: src__material__colors.Colors.white, splashColor: src__material__colors.Colors.blue._get(600), text: "Work", $creationLocationd_0dea112b090073317d4: C199 || CT.C199}), $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), new src__widgets__basic.Transform.new({transform: vector_math_64$.Matrix4.translationValues(0.0, core.double._check(this.animation.navBtnAnimation3.value), 0.0), child: new components__nav_button.NavButton.new({onPressed: dart.fn(() => {
                components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.PROJECTS);
              }, VoidToNull()), color: src__material__colors.Colors.white, splashColor: src__material__colors.Colors.red, text: "Projects", $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), $creationLocationd_0dea112b090073317d4: C215 || CT.C215}), new src__widgets__basic.Transform.new({transform: vector_math_64$.Matrix4.translationValues(0.0, core.double._check(this.animation.navBtnAnimation4.value), 0.0), child: new components__nav_button.NavButton.new({onPressed: dart.fn(() => {
                components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.CONTACT);
              }, VoidToNull()), color: src__material__colors.Colors.white, splashColor: src__material__colors.Colors.green, text: "Contact", $creationLocationd_0dea112b090073317d4: C219 || CT.C219}), $creationLocationd_0dea112b090073317d4: C225 || CT.C225})]), $creationLocationd_0dea112b090073317d4: C229 || CT.C229}) : new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new components__nav_button.NavButton.new({splashColor: src__material__colors.Colors.indigo._get(600), onPressed: dart.fn(() => {
              components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.EDUCATION);
              src__widgets__navigator.Navigator.of(context).pop(core.Object);
            }, VoidToNull()), color: src__material__colors.Colors.white, text: "Education", $creationLocationd_0dea112b090073317d4: C232 || CT.C232}), new components__nav_button.NavButton.new({splashColor: src__material__colors.Colors.blue._get(600), onPressed: dart.fn(() => {
              components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.WORK);
              src__widgets__navigator.Navigator.of(context).pop(core.Object);
            }, VoidToNull()), color: src__material__colors.Colors.white, text: "Work", $creationLocationd_0dea112b090073317d4: C238 || CT.C238}), new components__nav_button.NavButton.new({splashColor: src__material__colors.Colors.red, onPressed: dart.fn(() => {
              components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.PROJECTS);
              src__widgets__navigator.Navigator.of(context).pop(core.Object);
            }, VoidToNull()), color: src__material__colors.Colors.white, text: "Projects", $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), new components__nav_button.NavButton.new({splashColor: src__material__colors.Colors.green, onPressed: dart.fn(() => {
              components__app_state_container.AppStateContainer.of(context).changePage(models__app_state_model.Page.CONTACT);
              src__widgets__navigator.Navigator.of(context).pop(core.Object);
            }, VoidToNull()), color: src__material__colors.Colors.white, text: "Contact", $creationLocationd_0dea112b090073317d4: C250 || CT.C250})]), $creationLocationd_0dea112b090073317d4: C256 || CT.C256});
    }
  };
  (components__nav_header.NavigationRow.new = function(controller, size, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$0] = controller;
    this[size$0] = size;
    this[animation$1] = new animations__animations.WebPageEnterAnimation.new(controller, size);
    components__nav_header.NavigationRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__nav_header.NavigationRow.prototype;
  dart.addTypeTests(components__nav_header.NavigationRow);
  const controller$0 = Symbol("NavigationRow.controller");
  const animation$1 = Symbol("NavigationRow.animation");
  const size$0 = Symbol("NavigationRow.size");
  dart.setMethodSignature(components__nav_header.NavigationRow, () => ({
    __proto__: dart.getMethods(components__nav_header.NavigationRow.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__nav_header.NavigationRow, "package:kt_website/components/nav_header.dart");
  dart.setFieldSignature(components__nav_header.NavigationRow, () => ({
    __proto__: dart.getFields(components__nav_header.NavigationRow.__proto__),
    controller: dart.finalFieldType(src__animation__animation_controller.AnimationController),
    animation: dart.finalFieldType(animations__animations.WebPageEnterAnimation),
    size: dart.finalFieldType(ui$.Size)
  }));
  dart.trackLibraries("packages/kt_website/components/accomplishments", {
    "package:kt_website/components/components.dart": components__components,
    "package:kt_website/components/accomplishments.dart": components__accomplishments,
    "package:kt_website/components/social_links.dart": components__social_links,
    "package:kt_website/components/nav_header.dart": components__nav_header
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["accomplishments.dart","social_links.dart","nav_header.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"accomplishments.ddc.js"}');
  // Exports:
  return {
    components__components: components__components,
    components__accomplishments: components__accomplishments,
    components__social_links: components__social_links,
    components__nav_header: components__nav_header
  };
});

//# sourceMappingURL=accomplishments.ddc.js.map
