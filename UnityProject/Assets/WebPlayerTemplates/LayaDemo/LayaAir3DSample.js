Laya3D.init(0, 0, true);
Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.Stat.show();
var scene = Laya.stage.addChild(new Laya.Scene());
var sprite3D = scene.addChild(Laya.Sprite3D.load('res/football/ball.lh'));
