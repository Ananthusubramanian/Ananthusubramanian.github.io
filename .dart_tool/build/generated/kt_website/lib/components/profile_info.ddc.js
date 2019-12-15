define(['dart_sdk', 'packages/flutter_web/animation', 'packages/kt_website/utils/responsive_widget', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, responsive_widget, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__painting__image_resolution = animation.src__painting__image_resolution;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const utils__responsive_widget = responsive_widget.utils__responsive_widget;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const components__profile_info = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 9,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 12,
        column: 9,
        name: "width",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 9,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/profile_info.dart",
        line: 8,
        column: 14,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 8,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/profile_info.dart",
        line: 7,
        column: 12,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C6;
  let C5;
  components__profile_info.ProfilePicture = class ProfilePicture extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({child: new src__widgets__container.Container.new({height: dart.test(utils__responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) * 0.15, width: dart.test(utils__responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) * 0.15, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle, image: new src__painting__decoration_image.DecorationImage.new({image: new src__painting__image_resolution.AssetImage.new("Profiili.PNG"), alignment: src__painting__alignment.Alignment.center, fit: src__painting__box_fit.BoxFit.cover})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (components__profile_info.ProfilePicture.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__profile_info.ProfilePicture.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__profile_info.ProfilePicture.prototype;
  dart.addTypeTests(components__profile_info.ProfilePicture);
  dart.setMethodSignature(components__profile_info.ProfilePicture, () => ({
    __proto__: dart.getMethods(components__profile_info.ProfilePicture.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__profile_info.ProfilePicture, "package:kt_website/components/profile_info.dart");
  dart.trackLibraries("packages/kt_website/components/profile_info", {
    "package:kt_website/components/profile_info.dart": components__profile_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["profile_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,mDACE,6DACoB,wDAAc,OAAO,KACL,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,OACH,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe,uBAClB,wDAAc,OAAO,KACJ,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,OACH,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe,kBAC9B,4DACM,kDACT,gEACE,mDAAW,4BACG,gDACT;IAKtB;;;;;;EACF","file":"profile_info.ddc.js"}');
  // Exports:
  return {
    components__profile_info: components__profile_info
  };
});

//# sourceMappingURL=profile_info.ddc.js.map
