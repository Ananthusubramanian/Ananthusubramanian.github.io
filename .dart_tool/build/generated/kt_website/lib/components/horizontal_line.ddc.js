define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation'], function(dart_sdk, ui, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const components__horizontal_line = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294967295.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui$.Offset.prototype,
        [_dx]: -90,
        [_dy]: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui$.Offset.prototype,
        [_dx]: 90,
        [_dy]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 7,
        name: "painter",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/kt_website/components/horizontal_line.dart",
        line: 17,
        column: 12,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    }
  });
  const _value = dart.privateName(ui$, "_value");
  let C0;
  const _dx = dart.privateName(ui$, "_dx");
  const _dy = dart.privateName(ui$, "_dy");
  let C1;
  let C2;
  let C5;
  let C4;
  let C3;
  components__horizontal_line.HorizontalLine = class HorizontalLine extends src__widgets__framework.StatelessWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    build(context) {
      return new src__widgets__basic.CustomPaint.new({painter: new components__horizontal_line.Drawhorizontalline.new(this.color, this.start, this.end), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (components__horizontal_line.HorizontalLine.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    let start = opts && 'start' in opts ? opts.start : C1 || CT.C1;
    let end = opts && 'end' in opts ? opts.end : C2 || CT.C2;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[start$] = start;
    this[end$] = end;
    components__horizontal_line.HorizontalLine.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__horizontal_line.HorizontalLine.prototype;
  dart.addTypeTests(components__horizontal_line.HorizontalLine);
  const color$ = Symbol("HorizontalLine.color");
  const start$ = Symbol("HorizontalLine.start");
  const end$ = Symbol("HorizontalLine.end");
  dart.setMethodSignature(components__horizontal_line.HorizontalLine, () => ({
    __proto__: dart.getMethods(components__horizontal_line.HorizontalLine.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__horizontal_line.HorizontalLine, "package:kt_website/components/horizontal_line.dart");
  dart.setFieldSignature(components__horizontal_line.HorizontalLine, () => ({
    __proto__: dart.getFields(components__horizontal_line.HorizontalLine.__proto__),
    color: dart.finalFieldType(ui$.Color),
    start: dart.finalFieldType(ui$.Offset),
    end: dart.finalFieldType(ui$.Offset)
  }));
  const _paint = dart.privateName(components__horizontal_line, "_paint");
  components__horizontal_line.Drawhorizontalline = class Drawhorizontalline extends src__rendering__custom_paint.CustomPainter {
    get color() {
      return this[color$0];
    }
    set color(value) {
      this[color$0] = value;
    }
    get start() {
      return this[start$0];
    }
    set start(value) {
      this[start$0] = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      this[end$0] = value;
    }
    paint(canvas, size) {
      canvas.drawLine(this.start, this.end, this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      src__rendering__custom_paint.CustomPainter._check(oldDelegate);
      return false;
    }
  };
  (components__horizontal_line.Drawhorizontalline.new = function(color, start, end) {
    let t0;
    this[_paint] = null;
    this[color$0] = color;
    this[start$0] = start;
    this[end$0] = end;
    components__horizontal_line.Drawhorizontalline.__proto__.new.call(this);
    this[_paint] = (t0 = new ui$.Paint.new(), t0.color = this.color, t0.strokeWidth = 1.0, t0.strokeCap = ui$.StrokeCap.round, t0);
  }).prototype = components__horizontal_line.Drawhorizontalline.prototype;
  dart.addTypeTests(components__horizontal_line.Drawhorizontalline);
  const color$0 = Symbol("Drawhorizontalline.color");
  const start$0 = Symbol("Drawhorizontalline.start");
  const end$0 = Symbol("Drawhorizontalline.end");
  dart.setMethodSignature(components__horizontal_line.Drawhorizontalline, () => ({
    __proto__: dart.getMethods(components__horizontal_line.Drawhorizontalline.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(components__horizontal_line.Drawhorizontalline, "package:kt_website/components/horizontal_line.dart");
  dart.setFieldSignature(components__horizontal_line.Drawhorizontalline, () => ({
    __proto__: dart.getFields(components__horizontal_line.Drawhorizontalline.__proto__),
    [_paint]: dart.fieldType(ui$.Paint),
    color: dart.fieldType(ui$.Color),
    start: dart.fieldType(ui$.Offset),
    end: dart.fieldType(ui$.Offset)
  }));
  dart.trackLibraries("packages/kt_website/components/horizontal_line", {
    "package:kt_website/components/horizontal_line.dart": components__horizontal_line
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["horizontal_line.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWc;;;;;;IACC;;;;;;IACA;;;;;;UAEa;AACxB,YAAO,mDACI,uDAAmB,YAAO,YAAO;IAE9C;;;QAXU;QACD;QACA;;IAFC;IACD;IACA;AAHT;;EAGwC;;;;;;;;;;;;;;;;;;IAclC;;;;;;IACC;;;;;;IACA;;;;;;UASW,QAAa;MAC7B,AAAO,MAAD,UAAU,YAAO,UAAK;IAC9B;kBAGiC;;AAC/B,YAAO;IACT;;iEAfwB,OAAY,OAAY;;IAJ1C;IAIkB;IAAY;IAAY;AAAhD;IACE,qBAAS,qBACL,WAAQ,YACR,iBAAc,KACd,eAAsB;EAC5B","file":"horizontal_line.ddc.js"}');
  // Exports:
  return {
    components__horizontal_line: components__horizontal_line
  };
});

//# sourceMappingURL=horizontal_line.ddc.js.map
