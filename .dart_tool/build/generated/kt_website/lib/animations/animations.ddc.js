define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__animation__tween = animation.src__animation__tween;
  const src__animation__animations = animation.src__animation__animations;
  const src__animation__curves = animation.src__animation__curves;
  const src__animation__animation = animation.src__animation__animation;
  const src__animation__animation_controller = animation$.src__animation__animation_controller;
  const ui$ = ui.ui;
  const animations__animations = Object.create(dart.library);
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let TweenOfnum = () => (TweenOfnum = dart.constFn(src__animation__tween.Tween$(core.num)))();
  const CT = Object.create(null);
  animations__animations.WebPageEnterAnimation = class WebPageEnterAnimation extends core.Object {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get slideAnimation() {
      return this[slideAnimation];
    }
    set slideAnimation(value) {
      super.slideAnimation = value;
    }
    get fABAnimation() {
      return this[fABAnimation];
    }
    set fABAnimation(value) {
      super.fABAnimation = value;
    }
    get fadeNameAnimation() {
      return this[fadeNameAnimation];
    }
    set fadeNameAnimation(value) {
      super.fadeNameAnimation = value;
    }
    get backgroundOpacity() {
      return this[backgroundOpacity];
    }
    set backgroundOpacity(value) {
      super.backgroundOpacity = value;
    }
    get pictureSize() {
      return this[pictureSize];
    }
    set pictureSize(value) {
      super.pictureSize = value;
    }
    get navBtnAnimation1() {
      return this[navBtnAnimation1];
    }
    set navBtnAnimation1(value) {
      super.navBtnAnimation1 = value;
    }
    get navBtnAnimation2() {
      return this[navBtnAnimation2];
    }
    set navBtnAnimation2(value) {
      super.navBtnAnimation2 = value;
    }
    get navBtnAnimation3() {
      return this[navBtnAnimation3];
    }
    set navBtnAnimation3(value) {
      super.navBtnAnimation3 = value;
    }
    get navBtnAnimation4() {
      return this[navBtnAnimation4];
    }
    set navBtnAnimation4(value) {
      super.navBtnAnimation4 = value;
    }
    get logoAnimation() {
      return this[logoAnimation];
    }
    set logoAnimation(value) {
      super.logoAnimation = value;
    }
    get listviewAnimation() {
      return this[listviewAnimation];
    }
    set listviewAnimation(value) {
      super.listviewAnimation = value;
    }
    get profileDataAnimation() {
      return this[profileDataAnimation];
    }
    set profileDataAnimation(value) {
      super.profileDataAnimation = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
  };
  (animations__animations.WebPageEnterAnimation.new = function(controller, size) {
    this[controller$] = controller;
    this[size$] = size;
    this[slideAnimation] = new (TweenOfdouble()).new({begin: 0.0, end: size.height}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.3, 0.4, {curve: src__animation__curves.Curves.ease})}));
    this[fadeNameAnimation] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.15, 0.3, {curve: src__animation__curves.Curves.ease})}));
    this[backgroundOpacity] = new (TweenOfdouble()).new({begin: 1.0, end: 0.7}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.0, 0.6, {curve: src__animation__curves.Curves.decelerate})}));
    this[pictureSize] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.7, 1.0, {curve: src__animation__curves.Curves.elasticOut})}));
    this[navBtnAnimation1] = new (TweenOfnum()).new({begin: -100, end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.4, 0.7, {curve: src__animation__curves.Curves.bounceOut})}));
    this[navBtnAnimation2] = new (TweenOfnum()).new({begin: -100, end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.5, 0.8, {curve: src__animation__curves.Curves.bounceOut})}));
    this[navBtnAnimation3] = new (TweenOfnum()).new({begin: -100, end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.6, 0.9, {curve: src__animation__curves.Curves.bounceOut})}));
    this[navBtnAnimation4] = new (TweenOfnum()).new({begin: -100, end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.7, 1.0, {curve: src__animation__curves.Curves.bounceOut})}));
    this[logoAnimation] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.5, 0.7, {curve: src__animation__curves.Curves.easeIn})}));
    this[listviewAnimation] = new (TweenOfdouble()).new({begin: size.width, end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.7, 0.9, {curve: src__animation__curves.Curves.ease})}));
    this[fABAnimation] = new (TweenOfdouble()).new({begin: -dart.notNull(size.height), end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.95, 1.0, {curve: src__animation__curves.Curves.ease})}));
    this[profileDataAnimation] = new (TweenOfdouble()).new({begin: -dart.notNull(size.width), end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: controller, curve: new src__animation__curves.Interval.new(0.6, 0.8, {curve: src__animation__curves.Curves.ease})}));
    ;
  }).prototype = animations__animations.WebPageEnterAnimation.prototype;
  dart.addTypeTests(animations__animations.WebPageEnterAnimation);
  const controller$ = Symbol("WebPageEnterAnimation.controller");
  const slideAnimation = Symbol("WebPageEnterAnimation.slideAnimation");
  const fABAnimation = Symbol("WebPageEnterAnimation.fABAnimation");
  const fadeNameAnimation = Symbol("WebPageEnterAnimation.fadeNameAnimation");
  const backgroundOpacity = Symbol("WebPageEnterAnimation.backgroundOpacity");
  const pictureSize = Symbol("WebPageEnterAnimation.pictureSize");
  const navBtnAnimation1 = Symbol("WebPageEnterAnimation.navBtnAnimation1");
  const navBtnAnimation2 = Symbol("WebPageEnterAnimation.navBtnAnimation2");
  const navBtnAnimation3 = Symbol("WebPageEnterAnimation.navBtnAnimation3");
  const navBtnAnimation4 = Symbol("WebPageEnterAnimation.navBtnAnimation4");
  const logoAnimation = Symbol("WebPageEnterAnimation.logoAnimation");
  const listviewAnimation = Symbol("WebPageEnterAnimation.listviewAnimation");
  const profileDataAnimation = Symbol("WebPageEnterAnimation.profileDataAnimation");
  const size$ = Symbol("WebPageEnterAnimation.size");
  dart.setLibraryUri(animations__animations.WebPageEnterAnimation, "package:kt_website/animations/animations.dart");
  dart.setFieldSignature(animations__animations.WebPageEnterAnimation, () => ({
    __proto__: dart.getFields(animations__animations.WebPageEnterAnimation.__proto__),
    controller: dart.finalFieldType(src__animation__animation_controller.AnimationController),
    slideAnimation: dart.finalFieldType(src__animation__animation.Animation),
    fABAnimation: dart.finalFieldType(src__animation__animation.Animation),
    fadeNameAnimation: dart.finalFieldType(src__animation__animation.Animation),
    backgroundOpacity: dart.finalFieldType(src__animation__animation.Animation),
    pictureSize: dart.finalFieldType(src__animation__animation.Animation),
    navBtnAnimation1: dart.finalFieldType(src__animation__animation.Animation),
    navBtnAnimation2: dart.finalFieldType(src__animation__animation.Animation),
    navBtnAnimation3: dart.finalFieldType(src__animation__animation.Animation),
    navBtnAnimation4: dart.finalFieldType(src__animation__animation.Animation),
    logoAnimation: dart.finalFieldType(src__animation__animation.Animation),
    listviewAnimation: dart.finalFieldType(src__animation__animation.Animation),
    profileDataAnimation: dart.finalFieldType(src__animation__animation.Animation),
    size: dart.finalFieldType(ui$.Size)
  }));
  dart.trackLibraries("packages/kt_website/animations/animations", {
    "package:kt_website/animations/animations.dart": animations__animations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animations.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IA6H4B;;;;;;IACV;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEL;;;;;;;+DAxIgB,YAAiB;IAAjB;IAAiB;IACvB,uBAAE,AAAoC,kCAAvB,UAAU,AAAK,IAAD,kBAC1C,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIF,0BAAE,AAA4B,kCAAf,UAAU,cACzC,4DACU,UAAU,SACX,wCACL,MACA,aACc;IAIF,0BAAE,AAA4B,kCAAf,UAAU,cACzC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIR,oBAAE,AAA4B,kCAAf,UAAU,cACnC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIH,yBAAE,AAA6B,+BAAhB,CAAC,UAAU,cACzC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIH,yBAAE,AAA6B,+BAAhB,CAAC,UAAU,cACzC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIH,yBAAE,AAA6B,+BAAhB,CAAC,UAAU,cACzC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIH,yBAAE,AAA6B,+BAAhB,CAAC,UAAU,cACzC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIN,sBAAE,AAA4B,kCAAf,UAAU,cACrC,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIF,0BAAE,AAAmC,kCAAtB,AAAK,IAAD,aAAa,cAChD,4DACU,UAAU,SACX,wCACL,KACA,aACc;IAIP,qBAAE,AAAqC,kCAAxB,cAAC,AAAK,IAAD,eAAc,cAC7C,4DACU,UAAU,SACX,wCACL,MACA,aACc;IAIC,6BAAE,AAAoC,kCAAvB,cAAC,AAAK,IAAD,cAAa,cACpD,4DACU,UAAU,SACX,wCACL,KACA,aACc;;EAGnB","file":"animations.ddc.js"}');
  // Exports:
  return {
    animations__animations: animations__animations
  };
});

//# sourceMappingURL=animations.ddc.js.map
