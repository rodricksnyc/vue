(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"waw_mod1_081017_end_code_atlas_", frames: [[0,1347,113,78],[0,0,1224,672],[0,674,1220,671]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Path_1 = function() {
	this.spriteSheet = ss["waw_mod1_081017_end_code_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Backgroundsolid_mod1aiAssets = function() {
	this.spriteSheet = ss["waw_mod1_081017_end_code_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CultureIllustrationcopy = function() {
	this.spriteSheet = ss["waw_mod1_081017_end_code_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BuIAAjXIAbAAIADAoIACAAQAMgWARgLQAQgLAUAAQAPAAALACIgEAeQgOgDgKAAQgaAAgSAWQgTAVAAAgIAABzg");
	this.shape.setTransform(160.1,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_1.setTransform(139.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6CaIAAiMQAAgagNgNQgMgNgZAAQgiAAgPATQgQASAAApIAAByIghAAIAAkzIAhAAIAABdIgBAcIACAAQAJgQASgIQASgKAWAAQAoAAAUATQATATAAAoIAACOg");
	this.shape_2.setTransform(115.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBFIAAh/IgfAAIAAgRIAfgNIAOgvIASAAIAAAzIA/AAIAAAaIg/AAIAAB+QAAAUAJAKQAJALARgBIAQgBIANgCIAAAZIgPAEIgTABQg+AAAAhCg");
	this.shape_3.setTransform(95.6,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_4.setTransform(77.3,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_5.setTransform(54.7,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBjQgXgOgMgaQgNgZAAgiQAAg0AbgeQAagdAvAAQAtAAAbAeQAbAeAAAzQAAA1gbAeQgbAdguAAQgdAAgWgNgAgwg+QgQAVAAApQAAApAQAWQARAWAfAAQAgAAARgWQARgWAAgpQAAgpgRgVQgRgWggAAQggAAgQAWg");
	this.shape_6.setTransform(31.5,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQCRIAAkDIhbAAIAAgdIDYAAIAAAdIhdAAIAAEDg");
	this.shape_7.setTransform(10.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_8.setTransform(-22,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5BuIAAiLQABgagMgOQgMgNgaAAQghAAgQATQgQASAAArIAABwIggAAIAAjXIAaAAIAFAdIACAAQAKgQASgJQASgIAVAAQAoAAAUATQATASABAqIAACMg");
	this.shape_9.setTransform(-45.2,4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQCVIAAjYIAgAAIAADYgAgNhuQgFgFgBgLQABgLAFgFQAGgGAHAAQAIAAAGAGQAFAFAAALQAAALgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_10.setTransform(-62.8,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvCaIhLhnIgZAWIAABRIghAAIAAkzIAhAAIAACiIgCAiIACAAIAaggIBEhJIAoAAIhXBbIBcB9g");
	this.shape_11.setTransform(-77.1,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag9BuIAAjXIAbAAIADAoIACAAQAMgWARgLQAQgLAUAAQAPAAALACIgEAeQgOgDgKAAQgaAAgSAWQgTAVAAAgIAABzg");
	this.shape_12.setTransform(-96,4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBjQgXgOgMgaQgNgZAAgiQAAg0AbgeQAagdAvAAQAtAAAbAeQAbAeAAAzQAAA1gbAeQgbAdguAAQgdAAgWgNgAgwg+QgQAVAAApQAAApAQAWQARAWAfAAQAgAAARgWQARgWAAgpQAAgpgRgVQgRgWggAAQggAAgQAWg");
	this.shape_13.setTransform(-118,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABICRIg7jBIgKggIgDgYQgFAagKAfIg4DAIghAAIhNkgIAkAAIAtCxQAJAmAFAeQAFgkALgjIA0iuIAiAAIA3CwQAJAeAHAnQADgcALgoIAtixIAkAAIhNEgg");
	this.shape_14.setTransform(-148.1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.9,-29.5,337.9,59.2);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiCZIAAgaQALACAOABQAhgBAOglIANggIhXjYIAjAAIAvB8QAQApACASIACAAIALghIA2iWIAiAAIhdD1QgNAlgRAPQgUAQgaAAQgPAAgPgEg");
	this.shape.setTransform(145.1,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBgQgSgRAAgfQAAhABogDIAlgCIAAgNQAAgagLgMQgLgMgYAAQgaAAgjARIgKgZQARgJATgFQASgFATAAQAmAAAUARQASARAAAmIAACTIgZAAIgGgfIgCAAQgQAVgQAHQgQAHgXAAQggAAgTgQgAAVADQgmABgRALQgSALAAAXQABASAKAJQALAJAUAAQAdAAARgRQASgRAAgeIAAgTg");
	this.shape_1.setTransform(122.9,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABICRIg7jBIgKggIgDgYQgFAagKAfIg4DAIghAAIhNkgIAkAAIAtCxQAJAmAFAeQAFgkALgjIA0iuIAiAAIA3CwQAJAeAHAnQADgcALgoIAtixIAkAAIhNEgg");
	this.shape_2.setTransform(94.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_3.setTransform(53.9,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5CaIAAiMQAAgagMgNQgMgNgZAAQghAAgQATQgQASAAApIAAByIghAAIAAkzIAhAAIAABdIgCAcIADAAQAJgQASgIQASgKAWAAQAnAAAVATQATATAAAoIAACOg");
	this.shape_4.setTransform(30.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBFIAAh/IgfAAIAAgRIAfgNIAOgvIASAAIAAAzIA/AAIAAAaIg/AAIAAB+QAAAUAJAKQAJALARgBIAQgBIANgCIAAAZIgPAEIgTABQg+AAAAhCg");
	this.shape_5.setTransform(10.4,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_6.setTransform(-18.3,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5BuIAAiLQABgagMgOQgNgNgZAAQghAAgQATQgQASAAArIAABwIggAAIAAjXIAaAAIAFAdIACAAQAKgQASgJQASgIAVAAQAoAAAUATQATASABAqIAACMg");
	this.shape_7.setTransform(-41.5,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQCVIAAjYIAgAAIAADYgAgNhuQgFgFgBgLQABgLAFgFQAGgGAHAAQAIAAAGAGQAFAFAAALQAAALgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_8.setTransform(-59.1,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGB/QgZgdAAg2QAAg1AZgdQAXgeAqAAQArAAAYAgIADAAIgBgQIgBgPIAAhYIAgAAIAAEzIgbAAIgDgdIgCAAQgXAhgtAAQgqAAgXgdgAgtgSQgPAVAAApQAAAqAPAVQAPAVAdAAQAiAAAPgSQAPgSAAgpIAAgHQAAgtgPgUQgQgTghAAQgdAAgPAWg");
	this.shape_9.setTransform(-77.3,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBgQgSgRAAgfQAAhABogDIAlgCIAAgNQAAgagLgMQgLgMgYAAQgbAAghARIgKgZQAPgJAUgFQASgFATAAQAnAAASARQATARAAAmIAACTIgYAAIgHgfIgBAAQgQAVgRAHQgQAHgXAAQghAAgSgQgAAVADQgmABgRALQgRALAAAXQgBASALAJQALAJATAAQAeAAASgRQARgRAAgeIAAgTg");
	this.shape_10.setTransform(-101,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_11.setTransform(-122.9,4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhQCRIAAkgIAiAAIAAEBIB/AAIAAAfg");
	this.shape_12.setTransform(-143.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.3,-29.5,314.7,59.2);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiCZIAAgaQALACAOABQAhgBAOglIANggIhXjYIAjAAIAvB8QAQApACASIACAAIALghIA2iWIAiAAIhdD1QgNAlgRAPQgUAQgaAAQgPAAgPgEg");
	this.shape.setTransform(145.1,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBgQgSgRAAgfQAAhABogDIAlgCIAAgNQAAgagLgMQgLgMgYAAQgaAAgjARIgKgZQARgJATgFQASgFATAAQAmAAAUARQASARAAAmIAACTIgZAAIgGgfIgCAAQgQAVgQAHQgQAHgXAAQggAAgTgQgAAVADQgmABgRALQgSALAAAXQABASAKAJQALAJAUAAQAdAAARgRQASgRAAgeIAAgTg");
	this.shape_1.setTransform(122.9,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABICRIg7jBIgKggIgDgYQgFAagKAfIg4DAIghAAIhNkgIAkAAIAtCxQAJAmAFAeQAFgkALgjIA0iuIAiAAIA3CwQAJAeAHAnQADgcALgoIAtixIAkAAIhNEgg");
	this.shape_2.setTransform(94.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_3.setTransform(53.9,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5CaIAAiMQAAgagMgNQgMgNgZAAQghAAgQATQgQASAAApIAAByIghAAIAAkzIAhAAIAABdIgCAcIADAAQAJgQASgIQASgKAWAAQAnAAAVATQATATAAAoIAACOg");
	this.shape_4.setTransform(30.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBFIAAh/IgfAAIAAgRIAfgNIAOgvIASAAIAAAzIA/AAIAAAaIg/AAIAAB+QAAAUAJAKQAJALARgBIAQgBIANgCIAAAZIgPAEIgTABQg+AAAAhCg");
	this.shape_5.setTransform(10.4,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_6.setTransform(-18.3,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5BuIAAiLQABgagMgOQgNgNgZAAQghAAgQATQgQASAAArIAABwIggAAIAAjXIAaAAIAFAdIACAAQAKgQASgJQASgIAVAAQAoAAAUATQATASABAqIAACMg");
	this.shape_7.setTransform(-41.5,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQCVIAAjYIAgAAIAADYgAgNhuQgFgFgBgLQABgLAFgFQAGgGAHAAQAIAAAGAGQAFAFAAALQAAALgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_8.setTransform(-59.1,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGB/QgZgdAAg2QAAg1AZgdQAXgeAqAAQArAAAYAgIADAAIgBgQIgBgPIAAhYIAgAAIAAEzIgbAAIgDgdIgCAAQgXAhgtAAQgqAAgXgdgAgtgSQgPAVAAApQAAAqAPAVQAPAVAdAAQAiAAAPgSQAPgSAAgpIAAgHQAAgtgPgUQgQgTghAAQgdAAgPAWg");
	this.shape_9.setTransform(-77.3,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBgQgSgRAAgfQAAhABogDIAlgCIAAgNQAAgagLgMQgLgMgYAAQgbAAghARIgKgZQAPgJAUgFQASgFATAAQAnAAASARQATARAAAmIAACTIgYAAIgHgfIgBAAQgQAVgRAHQgQAHgXAAQghAAgSgQgAAVADQgmABgRALQgRALAAAXQgBASALAJQALAJATAAQAeAAASgRQARgRAAgeIAAgTg");
	this.shape_10.setTransform(-101,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_11.setTransform(-122.9,4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhQCRIAAkgIAiAAIAAEBIB/AAIAAAfg");
	this.shape_12.setTransform(-143.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.3,-29.5,314.7,59.2);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59456C").ss(1.4,1,1).p("Av2ABQAAGkEpEoQEpEqGkAAQGlAAEqkqQEokoAAmkQAAmlkokpQkpkpmmAAQmkAAkpEpQkpEpAAGlg");
	this.shape.setTransform(0.4,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59456C").ss(1.4,1,1).p("AtOgEIAAAEQAADqBtC7QA5BfBSBTQD4D5FeAAIADAAQDrgCC+hwQBdg2BPhRQD3j4AAlfIAAgEQgCjrhxi8QgzhahRhRQj3j1legEIgDAAQjoAAi9BwQhfA2hSBTQj2D3gCFbg");
	this.shape_1.setTransform(0.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59456C").ss(1.4,1,1).p("AgD25IAACjQiwAAihAsIgrigQi4AxilBfIBSCPQiOBUh+B+Ih0h1QiMCNhiCiICQBSQhZCWgrCkIiegpQguC0AADFICjAAIAAAEQAACxAoCeIieApQAvC6BjCpICOhRQBTCMB/B/IhzB0IACABQCNCNCdBfIBRiMIABAAQCXBXCkAsIgqCcQCyAvDHAAIAAiiIAIAAQCrAACegoIArCcQC+gwCphiIhQiMIAAgCQCPhVB9h9IBzBzIABgBQCLiLBfifIiPhTIABgBQBYiUAsinICcAqQAuizAAjJIAAgDIihAAQAAiugpiiICcgqQgxi+hhilIiPBRQhRiLh+h/IgCgCIB1h0QiQiOijheIhSCPQiVhYimgpIAqifQizgtjFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-147.5,295,295.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59456C").ss(1.4,1,1).p("Av2ABQAAGkEpEoQEpEqGkAAQGlAAEqkqQEokoAAmkQAAmlkokpQkpkpmmAAQmkAAkpEpQkpEpAAGlg");
	this.shape.setTransform(0.4,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59456C").ss(1.4,1,1).p("AtOgEIAAAEQAADqBtC7QA5BfBSBTQD4D5FeAAIADAAQDrgCC+hwQBdg2BPhRQD3j4AAlfIAAgEQgCjrhxi8QgzhahRhRQj3j1legEIgDAAQjoAAi9BwQhfA2hSBTQj2D3gCFbg");
	this.shape_1.setTransform(0.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59456C").ss(1.4,1,1).p("AgD25IAACjQiwAAihAsIgrigQi4AxilBfIBSCPQiOBUh+B+Ih0h1QiMCNhiCiICQBSQhZCWgrCkIiegpQguC0AADFICjAAIAAAEQAACxAoCeIieApQAvC6BjCpICOhRQBTCMB/B/IhzB0IACABQCNCNCdBfIBRiMIABAAQCXBXCkAsIgqCcQCyAvDHAAIAAiiIAIAAQCrAACegoIArCcQC+gwCphiIhQiMIAAgCQCPhVB9h9IBzBzIABgBQCLiLBfifIiPhTIABgBQBYiUAsinICcAqQAuizAAjJIAAgDIihAAQAAiugpiiICcgqQgxi+hhilIiPBRQhRiLh+h/IgCgCIB1h0QiQiOijheIhSCPQiVhYimgpIAqifQizgtjFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-147.5,295,295.1);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#37144A").ss(1.4,1,1).p("AFwhyIlTjDQgdA0gsAtQiFCGi6AAIgEAAIAAGE");
	this.shape.setTransform(36,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#37144A").ss(1.4,1,1).p("AFAAAQAACFheBeQhdBeiFAAQiDAAhfheQhdhdAAiGQAAiEBdhfQBfhdCDAAQCFAABdBdQBeBfAACEg");
	this.shape_1.setTransform(-0.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#37144A").ss(1.4,1,1).p("AhwlrIjDFSQAyAcAtAtQCDCDAAC5IGFAA");
	this.shape_2.setTransform(52.8,-37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#37144A").ss(1.4,1,1).p("ABuFwIDDlSQgxgegqgqQiDiDAAi9IAAgFImDAA");
	this.shape_3.setTransform(-53.8,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#37144A").ss(1.4,1,1).p("AloBuIFPDFQAcgwAqgrQCDiDC5gCIAAmF");
	this.shape_4.setTransform(-36.9,-54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#37144A").ss(1.4,1,1).p("APuABQAAGiknEnQklEpmhAAQmiAAknkpQklkmAAmjQAAmkElkoQEnknGiAAQGhAAElEnQEnEpAAGjg");
	this.shape_5.setTransform(-0.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#37144A").ss(1.4,1,1).p("ANIgEIAAAEQAADohsC7Qg4BehSBTQj1D4ldAAIgDAAQjpgCi8hvQhag2hQhRQj1j2AAleIAAgEQABjpBxi9QA1hcBOhOQD1j0FagDIADAAQDnAAC7BvQBeA1BSBTQD0D2ACFag");
	this.shape_6.setTransform(-0.4,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#37144A").ss(1.4,1,1).p("AAE2yIAACiQCvAACfArIArifQC3AxCiBfIhRCOQCNBTB9B+IBzh0QCMCOBgCgIiPBRQBZCVAqCkICdgpQAuCxAADHIiiAAIAAADQAACxgoCdICdApQgwC8hhClIiMhRQhVCOh8B9IByBzIgCABQiMCMicBfIhPiMIgCAAQiSBWimAtIApCcQixAujEAAIAAiiIgIAAQipAAiegnIgrCbQi7gviohjIBPiMIAAgBQiNhUh8h9IhyBzIgCgBQiJiKheifICNhTIgBgBQhYiVgqikIibApQguizAAjHIAAgCICgAAQAAiwApifIibgqQAwi9BhilICNBRQBSiNB8h8IABgBIhzh1QCNiMCihfIBSCPQCThXClgpIgqifQCwgsDFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-146.9,292.6,293.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59456C").ss(1.4,1,1).p("AFwhyIlTjDQgdA0gsAtQiFCGi6AAIgEAAIAAGE");
	this.shape.setTransform(36,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59456C").ss(1.4,1,1).p("AFAAAQAACFheBeQhdBeiFAAQiDAAhfheQhdhdAAiGQAAiEBdhfQBfhdCDAAQCFAABdBdQBeBfAACEg");
	this.shape_1.setTransform(-0.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59456C").ss(1.4,1,1).p("AhwlrIjDFSQAyAcAtAtQCDCDAAC5IGFAA");
	this.shape_2.setTransform(52.8,-37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59456C").ss(1.4,1,1).p("ABuFwIDDlSQgxgegqgqQiDiDAAi9IAAgFImDAA");
	this.shape_3.setTransform(-53.8,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59456C").ss(1.4,1,1).p("AloBuIFPDFQAcgwAqgrQCDiDC5gCIAAmF");
	this.shape_4.setTransform(-36.9,-54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59456C").ss(1.4,1,1).p("APuABQAAGiknEnQklEpmhAAQmiAAknkpQklkmAAmjQAAmkElkoQEnknGiAAQGhAAElEnQEnEpAAGjg");
	this.shape_5.setTransform(-0.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59456C").ss(1.4,1,1).p("ANIgEIAAAEQAADohsC7Qg4BehSBTQj1D4ldAAIgDAAQjpgCi8hvQhag2hQhRQj1j2AAleIAAgEQABjpBxi9QA1hcBOhOQD1j0FagDIADAAQDnAAC7BvQBeA1BSBTQD0D2ACFag");
	this.shape_6.setTransform(-0.4,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59456C").ss(1.4,1,1).p("AAE2yIAACiQCvAACfArIArifQC3AxCiBfIhRCOQCNBTB9B+IBzh0QCMCOBgCgIiPBRQBZCVAqCkICdgpQAuCxAADHIiiAAIAAADQAACxgoCdICdApQgwC8hhClIiMhRQhVCOh8B9IByBzIgCABQiMCMicBfIhPiMIgCAAQiSBWimAtIApCcQixAujEAAIAAiiIgIAAQipAAiegnIgrCbQi7gviohjIBPiMIAAgBQiNhUh8h9IhyBzIgCgBQiJiKheifICNhTIgBgBQhYiVgqikIibApQguizAAjHIAAgCICgAAQAAiwApifIibgqQAwi9BhilICNBRQBSiNB8h8IABgBIhzh1QCNiMCihfIBSCPQCThXClgpIgqifQCwgsDFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-146.9,292.6,293.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F436E").ss(1.4,1,1).p("AlvhyIFTjDQAdA0AsAsQCFCGC6AAIAEAAIAAGF");
	this.shape.setTransform(-36,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F436E").ss(1.4,1,1).p("Ak/AAQAACGBdBeQBeBdCEAAQCFAABehdQBdheAAiGQAAiFhdheQhfhdiEAAQiEAAheBdQhdBeAACFg");
	this.shape_1.setTransform(0.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F436E").ss(1.4,1,1).p("ABxlrIDDFSQgzAdgsAsQiCCEgBC4ImFAA");
	this.shape_2.setTransform(-52.7,-37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F436E").ss(1.4,1,1).p("AhtFwIjDlSQAugcAtgsQCDiDAAi+IAAgEIGDAA");
	this.shape_3.setTransform(53.9,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F436E").ss(1.4,1,1).p("AFpBvIlPDEQgdgygpgpQiEiDi4gCIAAmF");
	this.shape_4.setTransform(36.9,-54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F436E").ss(1.4,1,1).p("AvtABQAAGiEnEnQElEpGhAAQGiAAEnkpQElknAAmiQAAmkklkoQknknmiAAQmhAAklEnQknEoAAGkg");
	this.shape_5.setTransform(0.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F436E").ss(1.4,1,1).p("AtHgEIAAAEQAADoBsC6QA5BhBRBRQD1D4FcAAIAEAAQDogCC9hvQBbg3BPhQQD1j3AAldIAAgEQgCjrhwi7Qg0hahPhQQj1j0lagDIgEAAQjnAAi6BvQhdA0hTBUQj0D3gCFZg");
	this.shape_6.setTransform(0.4,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F436E").ss(1.4,1,1).p("AgD2zIAACiQiwAAieAsIgrifQi2AwijBgIBRCOQiPBUh7B9Ihzh0QiNCPhfCeICPBSQhZCVgqCkIidgqQguCyAADGICiAAIAAAFQAACwAoCdIidApQAwC8BhClICMhRQBVCOB8B9IhzBzQACAAABABQCLCMCdBfIBPiMIACAAQCTBWClAtIgpCcQCwAvDFAAIAAiiIAIAAQCqAACdgoIAqCcQC+gwCmhjIhPiLIAAgCQCPhVB6h8IByBzIACgBQCJiKBeifIiNhSIABgBQBYiVAqilICbAqQAuizAAjIIAAgDIigAAQAAivgpifICbgrQgwi9hhikIiNBRQhSiNh8h8IgBgCIBzh0QiOiMiihfIhRCOQiWhXiigoIApifQixgtjEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-146.9,292.6,293.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59456C").ss(1.4,1,1).p("AP3ABQAAGjkqEpQkoErmkAAQmlAAkqkrQkokoAAmkQAAmlEokqQEqkpGlAAQGkAAEoEpQEqEqAAGlg");
	this.shape.setTransform(-3.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59456C").ss(1.4,1,1).p("ANPgEIAAAEQAADohtC8Qg3BehUBVQj4D4lfAAIgDAAQjrgCi9hvQhcg2hQhRQj3j4AAlfIAAgEQABjrBxi8QA2hcBPhPQD3j2FdgCIADAAQDpAAC9BvQBfA1BSBUQD2D3ACFbg");
	this.shape_1.setTransform(-3.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59456C").ss(1.4,1,1).p("AAE25IAACjQCxAACgAsIArigQC4AxClBfIhTCPQCQBUB9B+IB0h1QCNCPBhCgIiQBTQBYCTAsCmICegpQAuC0AADGIijAAIAAADQAACwgoCfICeApQgxC9hhCmIiOhRQhVCOh+B9IB0B0QgCAAAAABQiMCNifBfIhQiMIgBAAQiUBVinAuIApCcQiyAwjGAAIAAijIgIAAQisAAidgoIgsCcQi/gwinhjIBQiMIAAgBQiQhVh8h9IhzB0IgCgCQiJiJhgihICPhTIgBgBQhYiTgrinIidApQgui2AAjGIAAgCIChAAQAAivAqiiIidgqQAwi8BiinICPBRQBTiPB8h7IACgBIh1h1QCQiOCiheIBTCPQCVhYCmgpIgrifQCzgtDFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-147.5,295.1,295.2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59456C").ss(1.4,1,1).p("AP3ABQAAGjkqEpQkoErmkAAQmlAAkqkrQkokoAAmkQAAmlEokqQEqkpGlAAQGkAAEoEpQEqEqAAGlg");
	this.shape.setTransform(-3.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59456C").ss(1.4,1,1).p("ANPgEIAAAEQAADohtC8Qg3BehUBVQj4D4lfAAIgDAAQjrgCi9hvQhcg2hQhRQj3j4AAlfIAAgEQABjrBxi8QA2hcBPhPQD3j2FdgCIADAAQDpAAC9BvQBfA1BSBUQD2D3ACFbg");
	this.shape_1.setTransform(-3.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59456C").ss(1.4,1,1).p("AAE25IAACjQCxAACgAsIArigQC4AxClBfIhTCPQCQBUB9B+IB0h1QCNCPBhCgIiQBTQBYCTAsCmICegpQAuC0AADGIijAAIAAADQAACwgoCfICeApQgxC9hhCmIiOhRQhVCOh+B9IB0B0QgCAAAAABQiMCNifBfIhQiMIgBAAQiUBVinAuIApCcQiyAwjGAAIAAijIgIAAQisAAidgoIgsCcQi/gwinhjIBQiMIAAgBQiQhVh8h9IhzB0IgCgCQiJiJhgihICPhTIgBgBQhYiTgrinIidApQgui2AAjGIAAgCIChAAQAAivAqiiIidgqQAwi8BiinICPBRQBTiPB8h7IACgBIh1h1QCQiOCiheIBTCPQCVhYCmgpIgrifQCzgtDFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-147.5,295.1,295.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#735A80").s().p("AkLENQhwhwAAidQAAidBwhvQBvhvCcAAQCeAABvBvQBvBvAACdQAACdhvBwQhvBvieAAQicAAhvhvg");
	this.shape.setTransform(0.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#735A80").s().p("EgBcAgwIgdjEQiCgHh3gWIhQCyIi1gwIAWi/Qh4gohzg7Ih4CYIijheIBHi4QhnhIhdhSIiiB2IiFiFIB5ijQhQhahJhpIi8BIIhdikICeh8Qg4hvgmh3IjKAWIgzi2IDChTQgVh5gHh6IjUggIABi7IDXghQAJh9AWhwIjGhYIAwi1IDYAYQAohzA2hpIisiKIBfiiIDSBRQBChfBPhXIiJi6ICFiFIC8CKQBWhKBghDIhTjXIChhfICSC2QBqg1BugkIgbjmIC2gxIBdDXQBygUBygGIAljtIC7AAIAkDvQB0AHBuAUIBgjaIC1AxIgaDqQBtAkBoAzICSi2ICjBdIhVDaQBhBHBTBHIC+iNICFCEIiLC/QBNBWBDBfIDXhUIBdCiIivCOQA0BoApBzIDdgaIAxC0IjNBbQAXB0AIBzIDcAkIgBC6IjZAhQgFB5gUB3IDFBWIgxC1IjRgXQglB0g2BwIChB/IhdClIi/hMQhJBnhPBbIB7CnIiFCIIilh9QhaBThnBIIBHC7IihBfIh8ibQhtA4h5AqIAVDCIi1AxIhOi0QiAAXh7AHIgdDEgAhx5oQhlAHhkAPQhwAUhsAmQhfAfhgAwQhkAvhiBBQhTA5hPBFQgtAogxAyQgcAbgoAqQhEBNg9BVQhEBfgwBiQgwBbgkBnQgmBrgVBuQgVBpgHBqQgFBGAAA5QAAA3ACAoQAHBuATBnQASBvAiBoQAkBsAuBfQAwBiA/BdQA7BYBJBVQAuAzAmAmIBIBFQBUBLBaA/QBZA+BhAxQBnAzBrAiQBgAiBxAVQBsAUBwAHQAuADA7gBQA7ABA2gEQBxgFBrgVQBsgVBngkQBugkBfgxQBjgzBag/QBYg/BShKQAnggAeghQAwgwAmgrQBLhVA6hYQA8hbAyhkQAvhhAhhpQAkhpAShuQAThnAEhsQADg0AAgsQgBhIgDg5QgIhngUhoQgVhvglhpQglhpgthWQgzhlhDhfQg7hUhDhMQgigmgngkQgugwgsgnQhRhGhOg3QhkhChigxQhcgthhghQhvglhvgTQhigUhmgEQg3gFg/AAQg8AAgzADgAB/RJQAsgFArgIQBGgOBCgWQBDgYBBghQA7geBBgsQA6goA1gvQAXgWAVgXQAjghAVgZQAwg2Ang6QAohAAgg+QAeg9AVhFQAXhDANhJQAFgeACgiIDbgXQgGBCgJA8QgQBbgbBOQgZBUgjBIQgmBOgwBJQguBEg7BCQgnAtgbAaIg1A0QhDA5hDAwQhFAyhNAlQhQAnhQAeQhUAbhSARQhKANhNAGgAkBUQQhQgQhTgaQhXgchLglQhIgnhJgzQhEgwhDg5Ig5g3QgkgkgcggQg2g/g0hHQgvhJglhOQgmhOgahQQgahTgOhTQgNg+gEhEIDZAXIAJBCQALBHAYBFQAVBBAfBCQAgBAAqA9QAkA2AyA5QAaAeAcAbIAtAtQA5A0A5AnQA6AoBAAfQBFAjBCAVQBBAWBHAOIBSANIAYDZQhMgGhIgMgAQxhoQgHg2gIgnQgNhFgXhJQgahCgdg6QgihCgrg9Qgmg3gsgwQgVgZgagZQgZgZgigeQg3gvgwgiQhAgrhBggQg+gfg9gTQhFgYhLgNQglgJgpgDIgWjZQBKAGBFANQBaARBSAaQBNAcBFAgQBSApBHAxQA9ApBCA4IBGBEIA5A6QA2A/AsA9QA0BJAnBPQAlBJAbBMQAcBTARBXQARBPADBPgAz7jzQAThXAahRQAehPAlhKQAphPAxhFQAthBA4g+IA1g2QArgqAegcQA+g1BCgsQBLgzBNgmQBHgkBPgZQBTgcBYgOQBAgOBIgGIgXDbQgiADgnAHQhLANhEAXQg+AVg/AgQhEAgg7ApQg6AmgwAqQgdAZggAhQgaAagTAUQgtAygmA2QgpA6gkBEQgfA+gWBAQgYBDgPBLQgJAvgFAwIjYAWQADhNAQhUg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#827391").s().p("AhpZ/QhxgHhrgUQhxgVhggiQhpgihpgzQhhgxhZg+Qhag/hUhLIhIhFQgtgtgngsQhJhVg7hYQg9hZgyhmQguhfgkhsQgihogShvQgUhrgGhqQgCgtAAgxQAAhEAFg8QAHhqAVhpQAVhuAmhrQAkhnAwhbQAyhlBChcQA9hVBEhNQAhgjAjgiQAsguAygsQBPhFBTg5QBghABmgwQBegvBhggQBsgmBwgUQBkgPBlgHQAzgDA7AAQBAAAA3AFQBmAEBiAUQBxAUBsAkQBhAgBdAuQBjAyBiBBQBRA4BPBFQAsAnAuAwQAnAkAiAmQBDBMA7BUQBDBfAzBlQAtBWAlBpQAkBkAWB0QAUBoAIBnQADA5ABBJQAAArgDA0QgEBsgTBnQgSBugkBpQghBpgvBhQgyBkg8BbQg6BYhLBVQgmArgwAwQgeAhgnAgQhWBNhUA8QhbA/hjAzQheAxhuAkQhmAkhtAVQhrAVhxAFQg2AEg7gBIgZAAQgsAAgkgCgAhq4tQhfAFhfAQQhsAUhmAhQhhAihXApQhfAvhaA/QhRA2hLBCQgwAqgpAoQglAjgcAiQhEBLg3BNQhABcgvBcQgwBeggBcQgjBjgVBsQgUBkgEBjQgGBAAAA7QAAAzACAmQAFBoARBlQASBoAhBkQAgBnAtBaQAtBbA9BbQA4BUBHBTQAmAqArAoQAZAbAoAnQBSBFBWA/QBZA+BZAqQBcAwBqAkQBiAgBnATQBkAUBtAFQAuAEA2AAQA6AAAxgEQBsgFBmgUQBrgVBgggQBigiBggxQBdgvBVg7QBahABLhEIBBg/QAsgsAlgqQBHhRA4hTQA8hZAuhfQAthgAfhfQAhhlAShpQARheAFhpQACgyAAgqQgBhFgCg2QgIhjgThjQgWhrgjhjQgghdgshZQgxhhg+hZQg3hMhEhMIhFhJQglgngxgpQhIg/hQg5QhdhAhegtQhWgqhdghQhigfhzgXQhcgRhigGQgygEhAAAQgwABg6ADg");
	this.shape_2.setTransform(0.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.5,-209.6,419.2,419.3);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42863F").s().p("AhiCZIAAgaQALACAOABQAhgBAOglIANggIhXjYIAjAAIAvB8QAQApACASIACAAIALghIA2iWIAiAAIhdD1QgNAlgRAPQgUAQgaAAQgPAAgPgEg");
	this.shape.setTransform(145.1,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42863F").s().p("AhEBgQgSgRAAgfQAAhABogDIAlgCIAAgNQAAgagLgMQgLgMgYAAQgaAAgjARIgKgZQARgJATgFQASgFATAAQAmAAAUARQASARAAAmIAACTIgZAAIgGgfIgCAAQgQAVgQAHQgQAHgXAAQggAAgTgQgAAVADQgmABgRALQgSALAAAXQABASAKAJQALAJAUAAQAdAAARgRQASgRAAgeIAAgTg");
	this.shape_1.setTransform(122.9,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42863F").s().p("ABICRIg7jBIgKggIgDgYQgFAagKAfIg4DAIghAAIhNkgIAkAAIAtCxQAJAmAFAeQAFgkALgjIA0iuIAiAAIA3CwQAJAeAHAnQADgcALgoIAtixIAkAAIhNEgg");
	this.shape_2.setTransform(94.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#42863F").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_3.setTransform(53.9,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#42863F").s().p("AA5CaIAAiMQAAgagMgNQgMgNgZAAQghAAgQATQgQASAAApIAAByIghAAIAAkzIAhAAIAABdIgCAcIADAAQAJgQASgIQASgKAWAAQAnAAAVATQATATAAAoIAACOg");
	this.shape_4.setTransform(30.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42863F").s().p("AggBFIAAh/IgfAAIAAgRIAfgNIAOgvIASAAIAAAzIA/AAIAAAaIg/AAIAAB+QAAAUAJAKQAJALARgBIAQgBIANgCIAAAZIgPAEIgTABQg+AAAAhCg");
	this.shape_5.setTransform(10.4,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#42863F").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_6.setTransform(-18.3,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42863F").s().p("AA5BuIAAiLQABgagMgOQgNgNgZAAQghAAgQATQgQASAAArIAABwIggAAIAAjXIAaAAIAFAdIACAAQAKgQASgJQASgIAVAAQAoAAAUATQATASABAqIAACMg");
	this.shape_7.setTransform(-41.5,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#42863F").s().p("AgQCVIAAjYIAgAAIAADYgAgNhuQgFgFgBgLQABgLAFgFQAGgGAHAAQAIAAAGAGQAFAFAAALQAAALgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_8.setTransform(-59.1,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#42863F").s().p("AhGB/QgZgdAAg2QAAg1AZgdQAXgeAqAAQArAAAYAgIADAAIgBgQIgBgPIAAhYIAgAAIAAEzIgbAAIgDgdIgCAAQgXAhgtAAQgqAAgXgdgAgtgSQgPAVAAApQAAAqAPAVQAPAVAdAAQAiAAAPgSQAPgSAAgpIAAgHQAAgtgPgUQgQgTghAAQgdAAgPAWg");
	this.shape_9.setTransform(-77.3,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#42863F").s().p("AhEBgQgSgRAAgfQAAhABogDIAlgCIAAgNQAAgagLgMQgLgMgYAAQgbAAghARIgKgZQAPgJAUgFQASgFATAAQAnAAASARQATARAAAmIAACTIgYAAIgHgfIgBAAQgQAVgRAHQgQAHgXAAQghAAgSgQgAAVADQgmABgRALQgRALAAAXQgBASALAJQALAJATAAQAeAAASgRQARgRAAgeIAAgTg");
	this.shape_10.setTransform(-101,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#42863F").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_11.setTransform(-122.9,4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#42863F").s().p("AhQCRIAAkgIAiAAIAAEBIB/AAIAAAfg");
	this.shape_12.setTransform(-143.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.3,-29.5,314.7,59.2);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BuIAAjXIAbAAIADAoIACAAQAMgWARgLQAQgLAUAAQAPAAALACIgEAeQgOgDgKAAQgaAAgSAWQgTAVAAAgIAABzg");
	this.shape.setTransform(160.1,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_1.setTransform(139.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6CaIAAiMQAAgagNgNQgMgNgZAAQgiAAgPATQgQASAAApIAAByIghAAIAAkzIAhAAIAABdIgBAcIACAAQAJgQASgIQASgKAWAAQAoAAAUATQATATAAAoIAACOg");
	this.shape_2.setTransform(115.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBFIAAh/IgfAAIAAgRIAfgNIAOgvIASAAIAAAzIA/AAIAAAaIg/AAIAAB+QAAAUAJAKQAJALARgBIAQgBIANgCIAAAZIgPAEIgTABQg+AAAAhCg");
	this.shape_3.setTransform(95.6,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BTQgcgdAAg0QAAg0AagfQAageArAAQAoAAAYAaQAYAbAAAsIAAAUIiUAAQAAAmATAUQASAUAgAAQAjAAAjgPIAAAdQgSAIgPADQgQADgWAAQgvAAgcgdgAA5gUQAAgfgOgQQgOgRgaAAQgZAAgPARQgQARgDAeIBxAAIAAAAg");
	this.shape_4.setTransform(77.3,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_5.setTransform(54.7,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBjQgXgOgMgaQgNgZAAgiQAAg0AbgeQAagdAvAAQAtAAAbAeQAbAeAAAzQAAA1gbAeQgbAdguAAQgdAAgWgNgAgwg+QgQAVAAApQAAApAQAWQARAWAfAAQAgAAARgWQARgWAAgpQAAgpgRgVQgRgWggAAQggAAgQAWg");
	this.shape_6.setTransform(31.5,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQCRIAAkDIhbAAIAAgdIDYAAIAAAdIhdAAIAAEDg");
	this.shape_7.setTransform(10.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhOCPQgXgQAAgdQAAgTANgPQAMgPAXgFQgIgDgGgIQgFgIAAgKQAAgMAGgJQAGgIAOgIQgRgHgKgRQgLgQAAgWQAAgjAVgUQAWgTAnAAQAQAAANAEIBLAAIAAAUIgoAGQAGAGAEAMQAFALAAAOQAAAggWASQgWAUglgBIgSgBQgVALAAAPQAAAKAHAEQAIAEARAAIAmAAQAjAAATAPQATAPAAAcQAAAkgdATQgdATg2AAQgrAAgXgQgAg5BDQgMALAAAUQAAARAOAJQAPAKAcgBQAoABAUgMQAUgNAAgVQAAgSgLgHQgLgGgegBIgmAAQgWAAgNALgAgnh6QgNAMAAAZQAAAXANALQANAMAXABQAvgBAAguQAAgygwAAQgXAAgMANg");
	this.shape_8.setTransform(-22,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5BuIAAiLQABgagMgOQgMgNgaAAQghAAgQATQgQASAAArIAABwIggAAIAAjXIAaAAIAFAdIACAAQAKgQASgJQASgIAVAAQAoAAAUATQATASABAqIAACMg");
	this.shape_9.setTransform(-45.2,4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQCVIAAjYIAgAAIAADYgAgNhuQgFgFgBgLQABgLAFgFQAGgGAHAAQAIAAAGAGQAFAFAAALQAAALgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_10.setTransform(-62.8,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvCaIhLhnIgZAWIAABRIghAAIAAkzIAhAAIAACiIgCAiIACAAIAaggIBEhJIAoAAIhXBbIBcB9g");
	this.shape_11.setTransform(-77.1,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag9BuIAAjXIAbAAIADAoIACAAQAMgWARgLQAQgLAUAAQAPAAALACIgEAeQgOgDgKAAQgaAAgSAWQgTAVAAAgIAABzg");
	this.shape_12.setTransform(-96,4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBjQgXgOgMgaQgNgZAAgiQAAg0AbgeQAagdAvAAQAtAAAbAeQAbAeAAAzQAAA1gbAeQgbAdguAAQgdAAgWgNgAgwg+QgQAVAAApQAAApAQAWQARAWAfAAQAgAAARgWQARgWAAgpQAAgpgRgVQgRgWggAAQggAAgQAWg");
	this.shape_13.setTransform(-118,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABICRIg7jBIgKggIgDgYQgFAagKAfIg4DAIghAAIhNkgIAkAAIAtCxQAJAmAFAeQAFgkALgjIA0iuIAiAAIA3CwQAJAeAHAnQADgcALgoIAtixIAkAAIhNEgg");
	this.shape_14.setTransform(-148.1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.9,-29.5,337.9,59.2);


(lib.seatbelt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBZQgLAAgIgHQgIgHAAgKIAAgQQhAgVgHgaIABhkQAMAdA7AUIAAgHQABgLAHgHQAIgIAKAAIBDARIAQAbIA7AGQAKAAAIAIQAHAHAAALIAABAQgBAKgHAIQgIAHgKAAIg8gEIgZAUgABAgJQgCACAAADIgBA1QAAAHAIABIAhACQAEABACgDQACgCAAgDIABg1QAAgHgIgBIgigCIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape.setTransform(-14,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAADDQhwgBhUgjQhEgcgBgUIgBgSQABg4AUgzQATg0AkgoQAmgrAzgXQAygWA2AAQBFABA6AjIkvDtQgJAHgBAMQgBALAHAKQAIAKANAAQAKAAAIgGIE6j1QAJAIAKAMQAjApATA0QASAzgBA5IAAARQgCAVhBAaQhPAghvAAIgJAAg");
	this.shape_1.setTransform(0.1,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBCOQg6gBgqgqQgpgqABg5QABg7ApgpQAqgpA7AAQA7ABApAqQApAqgBA6QAAA6grApQgpApg5AAIgCAAg");
	this.shape_2.setTransform(0.6,-32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah1g8IClgUIAAAeQA4gRAPgeIgBBkQgIAbhAASIAAAdIikAVgAg8gUQgEAAgDADQgEADAAAEIAAAuQAAAFADADQADADAEAAIA0gGQAFAAACgDQACgDABgFIgBgwQAAgHgJgBg");
	this.shape_3.setTransform(15.4,36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B9ADC0").s().p("AAaLLQgbgagmgDQgngCgfAXQgeAXgKAmQgcgGgigJQAEgOAAgJQAAgggRgbQgSgbgegNQgjgPglALQglALgWAgQgVgNgggWQASgaAAgeQABgvgiggQgcgbgngCQgmgCggAXQgagigLgRQAUgPALgWQALgWABgZQAAgagMgXQgRgigkgPQgjgPglALQgKgagJgjQAigLAVgbQAVgcABgjIgBgOQgFgmgcgaQgcgagngCIAEg/QAnACAfgXQAfgXAJgmQADgMAAgLQAAgggSgbQgRgbgegNQAKgbAPggQAkAQAlgLQAlgLAVggQASgaAAgfQABgugjghQAXgZAVgVQAcAaAnADQAnACAegXQAUgPAMgWQALgWAAgaQAAgYgLgYQAbgPAdgNQASAiAjAQQAkAPAlgLQAhgKAVgcQAVgcABgjIgBgNQAlgGAagBQAFAmAcAbQAbAbAmACQAmACAfgXQAfgYAJglQAaAEAkAKQgDAMAAALQAAAhARAbQASAbAdANQAkAPAlgLQAlgLAVghQAeASAXARQgRAbAAAeQgBAWAJAVQAJAVAQAPQAcAaAnACQAmACAfgWQAWAaAQAYQgUAPgLAXQgMAWAAAZQAAAZALAYQASAiAkAPQAjAPAlgLQAKAcAIAhQghAKgVAcQgVAcgBAjIABANQAEAmAdAbQAcAaAnACIgCAgIABgBIgDAgQgngCgfAXQgfAXgJAmQgDALAAAMQgBAgASAbQASAbAeANQgLAdgPAdQgjgPglALQglALgWAgQgRAaAAAfQgBAuAiAhQgXAagVAUQgcgbgmgCQgngDgfAXQgqAggBA1QAAAZAMAXQgaAQgfANQgRgjgkgPQgjgPglALQgiAKgVAcQgVAcAAAjIABANQgWAEgpADQgFgmgcgbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-78,156.6,156.1);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglDNQh+hbg7gvQhohRgvhFICZAAQASAAAIgQIBAh6IBqEIQAHAQARACIACAAQARAAAIgOIBSiCIEJAAQgzBIhpBQQh+Bag+AvQgVAQgMAAQgMAAgWgRg");
	this.shape.setTransform(0.3,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhngsQgGgRgTgBQgTgBgIAQIhVCiIioAAQgTgsgDguQgEgZAAgOQABhYBBg9QBBg+BaACQA3AAA7AgQA2AcAeAlIAQAWQADAAAPgVQAgglA2gaQA8geA3ABQBaABA/A/QA/A/gBBYQAAAUgFATQgHAngSAnIk7AAQgQAAgJAOIg8Bgg");
	this.shape_1.setTransform(0.5,-8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9ADC0").s().p("AAhLLQgcgaglgCQgngCgeAYQgfAXgJAmQgXgFgngJQADgQAAgHQAAghgRgbQgSgagegNQgkgPglAMQgkALgWAhQgdgSgYgRQARgaAAgfQAAgvgigfQgcgagngCQgmgCgfAYQgVgagSgZQAUgPALgWQALgXAAgZQAAgZgLgXQgSgigkgPQgjgPgmALQgLgggIgcQAigLAVgcQAVgcAAgjIgBgNQgFgngdgaQgcgZgngCIADg/QAnABAfgXQAfgXAIgmQADgKAAgNQAAgggSgbQgSgbgegMIAZg7QAjAPAmgLQAlgMAVggQAQgaAAgfQAAgugighQAYgbATgTQAdAaAmACQAnACAfgXQAUgQALgWQALgWAAgaQAAgYgMgYQAZgPAfgOQASAjAkAPQAjAPAlgMQAigKAUgcQAVgcAAgkIgBgNIA/gIQAFAnAcAaQAdAaAlACQAmACAfgYQAfgXAIgmQAUAEArAKQgEAOAAAJQAAAhASAbQASAbAeAMQAjAPAlgMQAlgLAVghQAaAQAcATQgRAbAAAeQAAAvAhAfQAdAaAnACQAmACAfgYIAnAzQgUAPgLAXQgMAWAAAZQAAAbAMAVQASAjAkAOQAjAPAlgLQAKAYAJAlQghAKgVAcQgVAcAAAjIABANQAFAnAcAaQAdAZAnACIgEA/QgmgBgfAXQgfAXgJAmQgCANAAALQAAAgASAaQASAbAdAMQgKAcgOAfQgkgPglALQglAMgVAgQgRAZAAAhQAAAuAjAgQgZAdgTARQgcgagngCQgngCgeAXQgUAQgLAWQgLAWAAAZQAAAZAMAYIg4AdQgSgjgkgPQgkgPgkAMQgiAKgVAcQgUAdAAAjIABANQgdAFgiADQgGgngcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-77.9,156.6,156);


(lib.government = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlxGWQgJAAgGgGQgHgHAAgIIAAgCQAAgIAHgGQAGgHAJAAILjAAQAJAAAGAHQAHAGAAAIIAAACQAAAIgHAHQgGAGgJAAgAlVFGQgJAAgHgGQgGgHgBgIIAAgBQABgJAGgHQAHgGAJgBIKrAAQAJABAHAGQAGAHAAAJIAAABQAAAIgGAHQgHAGgJAAgAC1DtQgKAAgIgGQgJgGABgJIAAgBQgBgJAHgHQAGgGAJAAIAFAAIAAj2IgFAAQgJAAgGgHQgHgGABgJIAAgBQAAgJAGgGQAIgGAMAAIBuAAQAFAAAGAGQAGAHAAAIIAAABQgBAJgFAGQgHAHgJAAIgIAAIAAD2IAIAAQAJAAAHAGQAFAHABAJIAAABQgBAJgFAGQgHAGgJAAgAgxDtQgKAAgIgGQgIgGAAgJIAAgBQAAgJAGgHQAGgGAJAAIAFAAIAAj2IgFAAQgJAAgGgHQgGgGAAgJIAAgBQgBgJAIgGQAGgGANAAIBsAAQAGAAAGAGQAFAHABAIIAAABQAAAJgHAGQgGAHgJAAIgHAAIAAD2IAHAAQAJAAAGAGQAHAHAAAJIAAABQAAAJgHAGQgGAGgJAAgAkZDtQgJAAgIgGQgJgGAAgJIAAgBQAAgJAHgHQAHgGAIAAIAFAAIAAj2IgFAAQgIAAgHgHQgHgGAAgJIAAgBQABgJAGgGQAIgGALAAIBuAAQAHAAAFAGQAGAHgBAIIAAABQAAAJgFAGQgHAHgJAAIgIAAIAAD2IAIAAQAJAAAHAGQAFAHAAAJIAAABQAAAJgFAGQgHAGgJAAgAlgiNQgHAAgGgFQgHgFgBgHQgCgKACgFQADgJAMgHIFhjXQAFgCAHACIFgDXQASALgDAUQgBAHgGAFQgHAFgHAAg");
	this.shape.setTransform(0,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9ADC0").s().p("AAhLLQgcgaglgCQgngCgeAXQgfAYgIAlQghgFgdgIQACgRAAgGQABgggTgcQgRgagegNQgjgPglAMQgmAMgVAgQgdgRgYgRQARgbAAgfQABgvgjgfQgcgagngBQgmgDggAYQgVgbgRgYQAVgPALgWQAKgWABgZQgBgagLgXQgSgjgkgOQgkgPgkAMQgLgggJgdQAigLAVgcQAVgcAAgiIgBgOQgFgmgdgaQgcgZgngDIAEg/QAmABAfgXQAfgXAIglQADgLAAgOQAAgfgSgbQgSgagegNQANgjAMgYQAkAPAlgLQAlgMAVggQAQgaAAgfQABgugjghQAUgWAXgYQAdAaAnACQAmACAfgXQAUgQALgVQALgXAAgaQAAgXgMgZQAcgPAdgNQARAiAkAPQAjAPAmgLQAhgLAVgcQAUgcAAgkIgBgNQAigFAdgCQAGAmAcAaQAcAbAlABQAnADAfgYQAegYAIgmQAgAGAeAJQgCAQAAAGQgBAhATAbQARAbAeAMQAjAPAlgMQAmgLAVggQAeARAXAQQgRAbAAAfQAAAwAhAeQAdAaAnADQAnABAegYQATAXAUAcQgUAPgLAXQgMAWAAAZQABAaALAXQASAiAkAOQAkAPAkgMQAKAaAKAkQgiAKgVAcQgVAcAAAjIABAOQAFAmAcAaQAdAaAnABIgEA/QgmgCgfAYQgfAYgJAlQgCANAAAKQAAAgASAcQASAaAdANQgKAcgOAeQgkgPglALQglAMgVAgQgQAaAAAfQAAAvAiAgQgTAXgYAXQgdgagngCQgmgBgfAWQgUAQgLAWQgLAXAAAZQAAAXAMAZQgeARgaAMQgSgjgkgOQgjgPglALQgiALgVAcQgUAcAAAjIABANQgeAFghACQgGgmgcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-77.9,156.6,155.9);


(lib.computer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmjAzQgdAAgUgVQgUgVAAgdIAAgeIPRAAIAAAeQAAAdgUAVQgUAVgdAAgAhJAQICUAAIAAgdIiUAAg");
	this.shape.setTransform(1.4,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AE5EIIAAnAIpxAAIAAHAIhMAAIAAmpQAAguASgbQAUgdAmAAIJxAAQAmAAAUAdQASAbAAAuIAAGpg");
	this.shape_1.setTransform(1.4,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNg");
	this.shape_2.setTransform(-18,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKB/QAAhSg8g7Qg6g6hTAAIAAg2QBpAABLBKQBLBKAABpg");
	this.shape_3.setTransform(-5.2,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWBLQAAgogdgcQgcgbgoAAIAAg2QA/AAArAsQAtArAAA+g");
	this.shape_4.setTransform(-10.4,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B9ADC0").s().p("AAhLLQgcgbglgBQgmgDgfAYQgfAYgJAlQgigGgcgIQADgLAAgLQAAghgRgbQgSgbgegMQgjgPglAMQglALgWAgQgcgRgZgQQARgbAAgfQAAgugiggQgcgagngCQgmgCgfAYQgVgagSgZQAUgPALgXQALgWAAgYQAAgagLgYQgSghgkgPQgjgPgmAMQgHgWgMgnQAigLAVgcQAVgcAAgjIgBgOQgFgmgdgaQgcgZgngCIADg/QAnABAfgXQAfgYAIglQADgLAAgNQAAgfgSgbQgSgbgegNQAJgXAQgjQAkAPAlgMQAlgLAVggQARgaAAgfQAAgugjghIAsguQAcAaAnABQAmACAfgWQAUgQALgWQALgXAAgZQAAgZgMgXQAUgMAkgRQASAjAkAOQAkAPAkgKQAigLAVgcQAUgdAAgjIgBgNQAjgFAcgCQAGAmAcAaQAcAbAlABQAmADAfgYQAfgYAJgmQAbAFAjAJQgDAMAAALQAAAhASAbQARAbAeAMQAkAPAlgMQAlgLAVggQAWANAfAUQgRAbAAAfQAAAvAiAfQAcAaAnACQAmACAfgYQAOAQAZAjQgUAPgLAXQgLAWAAAZQAAAaALAXQASAhAkAPQAkAPAlgMQAMAkAGAZQghALgVAcQgVAcAAAjIABAOQAFAmAdAaQAcAZAnACIgDA/QgngBgfAXQgfAYgIAlQgDAMAAALQAAAgASAbQASAbAeANQgNAhgMAZQgkgPglALQglAMgVAgQgRAaAAAfQAAAuAjAhQgUAXgYAXQgcgagngCQgmgCgfAXQgUAPgLAXQgLAWAAAaQAAAZAMAWQgbAQgdANQgSghgjgPQgkgPglAKQgiALgVAcQgUAdAAAjIABAMQgdAGgiACQgGgmgcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-77.9,156.6,155.9);


(lib.college = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjOC/QhUgUAAgcIABgCIgBhuIhRgYIAABvQgLgEgHAAQgIAAgJADIAAh3Ig1gPQgLgDAAgLQgBgLALgEIHCiiQAGgCAEACIHNCgQALAEgBALQAAALgLADIicAtQgYgihfgUQhUgShnAAQgHAAgEAFQgEAEgBAGQABAGAEAFQAEAEAHAAQBuAABUASQBMASANAYIAABgIABABQAAAdhUAUQhTAUh2AAIgGAAQhzAAhSgTg");
	this.shape.setTransform(0,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBbIAcjDQAOAIAOAAQAMAAAMgGIAJCbQAEARgwAYQgWALgLAAQgNAAABgOg");
	this.shape_1.setTransform(-40.2,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAaQgMgLAAgPQAAgOAMgLQAKgLAOAAQAPAAALALQALALgBAOQABAPgLALQgLALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(-39,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B9ADC0").s().p("AAhLLQgcgaglgCQgngCgeAYQgfAXgIAlQghgFgdgIQACgRAAgGQABgggTgcQgRgagegMQgjgQglAMQgmAMgVAgQgdgRgYgRQARgdAAgdQABgvgjgfQgcgagngBQgmgDggAYQgVgbgRgYQAVgPALgWQAKgWABgZQgBgagLgXQgSgigkgPQgkgPgkAMQgLgggJgdQAigLAVgcQAVgcAAgiIgBgOQgFgmgdgaQgcgZgngDIAEg/QAmABAfgXQAfgXAIglQADgKAAgOQAAgggSgbQgSgagegNQANgjAMgYQAkAPAlgLQAlgMAVggQAQgaAAgfQABgugjghQAUgWAXgYQAdAaAnACQAmACAfgXQAUgQALgVQALgXAAgaQAAgYgMgXQAZgPAfgOQASAiAkAPQAjAPAmgLQAhgLAVgcQAUgcAAgkIgBgNQAigFAdgCQAGAmAcAaQAcAbAlABQAnADAfgYQAegYAIgmQAgAGAeAJQgCAQAAAGQgBAhATAbQARAbAeAMQAjAPAlgMQAmgLAVggQAeARAXAQQgRAbAAAfQAAAwAhAeQAdAaAnADQAnABAegYQATAXAUAcQgUAPgLAXQgMAWAAAZQABAaALAXQASAiAkAOQAkAQAkgMQAKAZAKAkQgiAKgVAcQgVAcAAAjIABAOQAFAmAcAaQAdAaAnABIgEA/QgmgBgfAYQgfAWgJAmQgCANAAAKQAAAgASAcQASAaAdANQgKAcgOAeQgkgPglALQglAMgVAgQgQAaAAAgQAAAuAiAgQgVAYgWAWQgdgagngCQgmgBgfAWQgUAQgLAWQgLAXAAAZQAAAXAMAZQgeARgaAMQgSgjgkgOQgjgPglALQgiALgVAcQgUAcAAAjIABANQgeAFghACQgGgmgcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-77.9,156.6,155.9);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37144A").s().p("ApRCSQkEi1hxkpIeNAEQhxEmkGC1QkLC6lFAAQlHAAkKi7g");
	this.shape.setTransform(96.7,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,193.4,66.6), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvGK3QhBitAAi9QAAjSBRi+QBOi6CPiPQCPiOC5hPQDAhRDRAAQDSAADABRQC5BPCPCOQCPCPBOC6QBRC+AADSQAAC/hDCvg");
	this.shape.setTransform(103.2,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,206.5,139.8), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#311748").s().p("ApPCSQkFi2hwkoIeJAEQhxEnkEC0QkKC6lFAAQlGAAkKi7g");
	this.shape_1.setTransform(96.5,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,193,66.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvGK4QhBiuAAi9QAAjRBRi/QBOi5CPiQQCPiOC5hPQDAhRDRAAQDSAADABRQC5BPCPCOQCPCQBOC5QBRC/AADRQAAC+hCCwg");
	this.shape_1.setTransform(103.2,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,206.5,139.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiDCwIAAlfIEHAAIAAFfg");
	mask.setTransform(95.4,60.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E8EC").s().p("AktEEQgSgkAAgnQAAhCAtgxQArgxBBgHIAAgCQAAh1BThTQBThTB1AAQBhAABNA8QAdA7AABCQAAB0hTBTQhTBTh2AAQhRAAhHgtQgEAzgmAjQgmAjg0AAQgaAAgbgMg");
	this.shape.setTransform(32,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFD5D7").s().p("AjIDIQhThSABh2QgBh0BThTQBThTB1AAQB2AABTBTQBSBTABB0QgBB2hSBSQhTBTh2AAQh1AAhThTg");
	this.shape_1.setTransform(43.7,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFD5D7").s().p("AlBCgQgHgPA+ggQBBggAAgSQAAhWBohHQBhhBBjAAQBdAABBBBQBBBBAABcQAAAzgWAug");
	this.shape_2.setTransform(49.5,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFD5D7").s().p("Ah6B7Qgyg0AAhHQAAhHAygyQA0gzBGAAQBIAAAyAzQAzAyAABHQAABHgzA0QgyAyhIAAQhGAAg0gyg");
	this.shape_3.setTransform(17.3,45.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, null, null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlqDNIAAmZILVAAIAAGZg");
	mask.setTransform(36.3,20.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFD5D7").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape.setTransform(75.9,44.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(69.1,37.3,3.6,3.7), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37144A").s().p("ApPCSQkFi2hwkoIeJADQhxEnkEC1QkKC6lFAAQlGAAkKi7g");
	this.shape_2.setTransform(96.5,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,193,66.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvGK3QhBivAAi7QAAjSBRi+QBOi6CPiPQCPiOC5hPQDAhRDRAAQDSAADABRQC5BPCPCOQCPCPBOC6QBRC+AADSQAAC+hCCwg");
	this.shape_2.setTransform(103.2,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,206.5,139.8), null);


(lib.Path_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#37144A").s().p("ApPCSQkFi2hwkoIeJAEQhxEnkEC0QkKC6lFAAQlGAAkKi7g");
	this.shape_3.setTransform(96.5,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_3, new cjs.Rectangle(0,0,193,66.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AvGK4QhBiuAAi9QAAjRBRi/QBOi5CPiQQCPiOC5hPQDAhRDRAAQDSAADABRQC5BPCPCOQCPCQBOC5QBRC/AADRQAAC+hCCwg");
	this.shape_3.setTransform(103.2,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,206.5,139.8), null);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AA6SeQgcgwgLgXIgZgzQgRgigMgbIg/iXQhHjDgjjGQgpjmAHjpQAGjtA1jiQAvjHBRi7IAkhOIBfiyQALgUANgUIAig1IBmBEIggAyIgXAlIhbCpIghBKQhNC1grC5QgzDVgGDgQgGDdAnDaQAhC6BCC5IAeBMIAPAiIAPAhQAPAjAlBHQAJAUAbAvIAOAYIhqA+g");
	this.shape.setTransform(24,120.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,48.1,241.4), null);


(lib.Path_32_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AkNVYIAmg8IBhipIBQinQBdjaAzjdQA9kFAHkIQAHkJgukGQgojjhQjbIgkhaIgRgqIgSgnQgOghgwhfQgLgWghg6IgRgcIBhg5IARAeQAdAyAQAiQAsBVAVAwIASApQANAcAFAPIAmBeQBUDlAqDtQAwERgIEUQgGEUhAEQQg4DrhgDeIgqBdIhxDTIgOAZIg2BVg");
	this.shape.setTransform(27,143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32_0, new cjs.Rectangle(0,0,54.1,286), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AkLRcIgXhLIgOg2IgeiKIgOhSQgdi+AGjNQAHjmA0jbQA2jhBgjLQBUi0BziiQAUgeAeglIAug7IBQhcIBKhNIBWBYIgSASIg0A2IhLBXQhFBYgWAfQhvCdhNCmQhaDAgzDUQgyDPgGDZQgGDDAbCzQAEAbAJAyIAdCDIAOAzIAVBHIAIAZIh0Ang");
	this.shape.setTransform(37.3,114.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,74.6,228.6), null);


(lib.Path_31_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AmwUDIAXgWICZiqIA1hEQAhgqAYgiQCFi7BejMQBujpA9kAQA9j8AHkEQAHjpghjbIgQhdIgiieIgRg+Igkh0IBqgjIAlB5IASBBIAkCkIARBiQAhDggHD3QgIETg+EEQg/EHh0D4QhjDTiKDEQgZAkgiAsIg3BHIhVBiIhMBPQgOAQgJAHg");
	this.shape.setTransform(43.3,136.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31_0, new cjs.Rectangle(0,0,86.5,272.5), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AIOSAQgMgFgXgLIgvgUQiThHiAhbQhIgyhehUIgogoQgZgXgRgSIhRhbQhWhpg+hlQhFh0gzh2QgwhzgkiFQgeh5gPiBQgWjhAgjhQAYifA1iWQAKggAHgQIAahBIAfANIgZBAIgRAvQgzCQgYCfQggDaAWDgQAOB8AeB5QAgB9AyB2QA1B6BBBrQA9BkBUBmIBQBZQAQARAZAZIAnAmQBfBUBEAwQB6BYCTBGIAuAVIAjAOIAcALIgMAgg");
	this.shape.setTransform(56.7,116.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,113.4,232.6), null);


(lib.Path_30_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AIBW2IAghRIAKgcIALghQBBi4AfjKQApkVgdkdIgKhOQgGgugGggQgFghgKgtIgThPQgqifg+iXQhCiXhUiMQhNh9htiGIhlhxQgVgXgfgdIgzgyQh3hqhYg9Qidhxi7hZIg6gbQgdgNgPgFIglgOIALgdIAmAOIAsATIA7AbQC8BZCgB0QBdBAB2BqIAzAyQAgAeAVAXIBnByQBtCHBPB/QBVCNBDCbQBACZAqChIATBQQAKAuAFAiQAHAgAGAvIAKBOQAdEhgqEaQgfDOhCC5IgLAiIgLAcIggBSg");
	this.shape.setTransform(71.7,147.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30_0, new cjs.Rectangle(0,0,143.4,294.8), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("ADBSfQgqgrgQgUQhlhyhNiEQhyjEg3jHQgFgQgYhkIgUh4QgGgqgCgVIgEg+QgCgLAAgUIgBhfQADj3BNjuIASg3IAVg2IAshmQA3htAshEQBRiABphyQA0g1AIgIIAVgVIAYAaIgWATIg6A9QhoBwhPB8QgqBBg2BsIgsBkIgUA1IgSA2QhLDpgDDzIABBcIABAfIAFA9QABAVAGAoIAJA8IALA7IANA5QAIAiAHAWQA1DABxDDQBMCCBiBvQAXAcAiAjIAUAVIgYAYg");
	this.shape.setTransform(27.8,120.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0.1,0,55.4,241.1), null);


(lib.Path_29_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AleX2IAbgbQAQgOA8g/QCFiQBnihQA3hVBFiMIAdg/QAMgZACgIIA/irQBhktAEk6IgBh3IgCgnIgGhQIgEgnIgRh0IgOhMIgRhLQgKgrgKgeQgIgegNgoIgXhFIgahDIgNggIgOggIgcg9Igdg7QgMgYgSggIgeg1QhhimiAiSQgQgTg5g9IgbgcIAWgVIAbAcQA4A8ASAVQCBCSBjCqIAfA2IAeA5IAeA7IA3CAIAbBDIAXBGQAOAqAIAeQAJAeALAsIARBLIAfDEIAEAnIAHBRIABAoIACBRIAAAoQgFE+hhEyIgZBHIgNAiIgaBEIgPAhIgdBAQhHCPg4BVQhkCfiLCXQhCBFgKAJIgcAbg");
	this.shape.setTransform(35.1,154.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29_0, new cjs.Rectangle(0,0,70.3,309.7), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AvZPWIABhkQAIi9AlimQA6kAByjbQAXgsAKgQIAkg+QBAhiAQgWQBYh8BlhmIAZgbIAbgZIA2gzIByhdIAdgWIAdgVIAegVIAegUIB3hJQCKhKBognQAngQBNgaIBvggQC5guCpgKIAegCIAbgBIBOgCIAAAiIiFAFQiiAJi5AuIhSAXIgbAJIg5ATIg6AVQhpAoiEBIIg7AiIg7AmIgdATIgdAVQgnAbgTAPIhvBcIg1AxIgbAZQgJAIgQASQhfBhhbB+QgVAdg5BZIgjA7QgOAXgTAmQhxDYg4D6QglClgHC4QgCBUABAPIABAjIgiABg");
	this.shape.setTransform(98.7,101.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0.1,0,197.3,203.6), null);


(lib.Path_28_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Ay7TDIBfgCIAhgBIAlgDQDKgLDig5ICHgnIBGgXQAqgPAdgMQCEgxChhZIBJgqIBIguQAZgQAMgIID0i/QAOgLATgTIAhgfIAggfIAfggIAfghQAYgYAHgIIA7hEQAMgOAQgVIAbgjIAcgjIBLhtIBbiTIAVglIATgmQCLkJBFk2QAujMAJjjIAChGQABgigCgRIgBgrIAfgBIABArQABASgBAjIgBBHQgKDmguDNQhFE5iOEOIgTAnIgWAkIgrBMIh9C4IgbAkQglAvgUAXIg7BFIgfAhIgfAhIggAhIghAfQg3A0gMAKIiLBzIhsBOIglAYIhJAvIhKArQijBZiGAzQgdAMgrAPIhHAYIiIAnQjkA5jOAMIinAGg");
	this.shape.setTransform(121.2,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28_0, new cjs.Rectangle(0,0,242.4,250.1), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AN8PWIjcgLIhOgKQgsgEh2gWIhTgSQg6gNgZgIIiqg0QgcgKg4gWIgpgQIgrgSIilhQQgYgLg5giQg9gjgTgNQiXheiSh9IiGh6Ig+hAIg6hCQjOjoiSkkQhkjIg+jbIgUhGIgWhfIAigHIAoCjQA+DXBiDFQCQEgDMDmIB2CAIBBA9IAhAeIAhAdQCXCBCPBXQATANA7AjQA9AiATAKICkBPQAbAMA3AWQA7AXAYAIICoAzQATAGA/APIBRASIBRAPQAuAHAhAEIBNAJIDZALQDYADDhgnIClgiIAIAhIioAiQjVAljOAAIgbAAg");
	this.shape.setTransform(150.6,98.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,301.1,196.5), null);


(lib.Path_27_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AahQIIgXhQQhHj8hzjmQiolPjtkOIhEhLQgvgxgYgYIiaiNQiuiViohoQgegTgPgJIgugbIhegzIhfgwIhggsIiQg7IgxgRIjDg9QgWgGhKgSIgwgLIgwgKIhdgQQg2gKgngEQg8gIgegCIj+gOQkBgCkBAtIjAAoIgHgeIDCgpQEHgtEBADIEAANQAeADA9AIQAyAFCKAZIAwAKIAxALQBBAPAgAKIDFA9IAxARID0BoIBgAxQAUAJAbAQIAvAbIAvAbQAQAJAeATQCtBrCsCUICbCPIBIBKIBFBMQDxERCoFSQB0DnBJEAIAWBRIAaBwIgeAGg");
	this.shape.setTransform(175.2,114.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27_0, new cjs.Rectangle(0,0,350.5,228.5), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("ALTN3QiZgKhmgUQh/gViYgwIhHgYIhHgcQgYgJgMgFIivhVIhEgnQgVgLgvgfIhCgsQh8hUh6hzIhthvIgyg5Igwg6QiojQhwj/QhNivgsi+IgdiPIAhgFIAcCMQAtC9BLCqQBvD7ClDNIAvA5IAxA5IA0A3IAcAbIAbAaQB+B2B0BOQAVAQAsAcQA1AhAOAIIDvB6IAkAOIBGAbIBGAYQCZAwB4AUQBpAUCSAJQC7ALC/gYICOgWIAGAhIiQAXQiHAQiEAAQg7AAg5gDg");
	this.shape.setTransform(125,89);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,250.1,178.1), null);


(lib.Path_26_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AWkOHQg1jihcjQQiHkyjHj3Ig5hFQgngugVgXIg/hCQgNgOgUgTIgiggQiYiOiMhgQgSgNg9gnQg8gmgVgMIhSgvIjQhlIgrgRQg8gYgZgJIhVgdQi4g6iTgYQh8gXi0gNQjhgNjpAeIhJAJIhiASIgGgfIBjgRIBLgKQDugeDhAOQC3AMB8AYQCaAZC2A6IBWAdIBWAiICUBBIBqA2IBTAvIBRAzIBQA1QCXBnCRCKIAiAgQAVATANAOIBABEIA9BFIA5BGQDKD7CIE0QBdDTA2DlIAiCsIgeAFg");
	this.shape.setTransform(150.8,107.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26_0, new cjs.Rectangle(0,0.1,301.7,214.7), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AyqSwIgrgCIABghIAqABQAZABBggDQDbgIDOguQEyhEEIiKQAtgXAdgRIBJgrQBgg8AwgkQCZhuB2h0IA/g/QAvgyAMgPIBxiIIAzhGIAZgjQAGgJARgbIBZiQQBWigAyiCQAMgdAOgpIAXhFQAHgRAEgSIAchjQA3jdAMjLIAGiiIAiAAIgGClQgNDQg4DeIgcBkQgFASgFARQglBsgOAiQgzCFhXChIhZCRIgYAlIgZAkIgaAkIgaAjIhyCKQgLAOgTATIgfAhIhAA/Qh5B4iZBuQgsAfhmBCIhMAsQgZAQgxAYQkLCLk2BGQjNAtjjAKIhwACIgKAAg");
	this.shape.setTransform(123.8,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,247.6,240), null);


(lib.Path_25_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("A2pV+IADhvIABgnIADgrQAOjyBCkGIAuieIAchTQAQgwAPgjQA9ihBli4IAxhVIA3hWQASgdAKgNIA7hUIAQgVIAQgVIBAhSIBFhPIBHhNIAlgnIAlgkIAnglIAmgkIBQhEIBShCIApggIDWiQIBYgzIAqgYIAtgXQE4ikFthRQDxg2EIgLQBygDAdACIAyABIgBAfIgxgCQgVgBh5ADQkBAKjzA2QlnBQk2CiIgsAXIgrAYIhWAyIiABTIhTA8IgpAfIhRBBIhPBEIgmAkIgmAkIgmAkIhIBMQgVAWgNAQIiUC0IgPAVIg7BTIgcAqIhmCpQhlC4g8CdQgOAigRAxIgbBRIgYBQIgVBNQhCEEgNDuIgHC/g");
	this.shape.setTransform(145,140.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25_0, new cjs.Rectangle(0,0,290.1,281.2), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AETcrIgmgpIgyg6Qibi2h0jLIhsjOIghhMIgghPIhUj+Qg1jIgTiqIgKhgIgHhhIgBjBQAAgqAEg4IAIhhQARiOAKgyQAJg6AeiAIAZhbIAOgsIAOgsQAviSBXi0IBNiQIAnhDIApg/QB9jCCmiwIA1g3IBKhHIAYAZIhKBGIg0A2QimCvh7C+IgnA+IgnBDIhLCOQhWCxguCRIgcBXIgZBZQgdB/gKA5QgJAwgSCOIgHBfQgEA4gBApIACC/IAGBfIAKBfQATCoA0DFIA1CqIAPApIBRDAIAQAlIA1BnIAlBAQBzDKCYCyIB3CDIgYAYg");
	this.shape.setTransform(43.4,186.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0.2,0,86.5,373.8), null);


(lib.Path_24_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("EgHuAhQIBVhRIA8g+QC8jFCSjgIAthIIAthMIBXikQBijNA2inIAghlQAThEAJgiIAZhqQANg9AHguQAKguAIg/IAOhtIAJhvQAEhAAAgvIgBjdIgIhvIgSijQgEgkgEgSIgThrIgLg0IgYhnIgOgzIgchkIgghgIgRgvIhwkIIhojCQiFjoivjOIg5hCIgsgvIglgmIAWgWICLCYQC1DXCDDlIBpDDIBxELIBOD2IAOAzIAYBpIALA1IATBsIAIA2IASClIAIBvIACDfQAAAwgFBBIgIBvIgPBvQgIBAgJAvQgKA8gkCaQgLArgSA9IgPA0IgQAyQg4CrhiDMIhZCmIgtBNIguBIQiVDmi8DEIg9A/IhVBSg");
	this.shape.setTransform(49.5,215.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24_0, new cjs.Rectangle(0,0,99,430.2), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Ah4CrIgwh4Igph6IgQg4IFUhgIAxCZIApBlIAVAuIlCCTg");
	this.shape.setTransform(22.6,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,45.2,44.9), null);


(lib.Path_23_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AhoC+Igqh+Igyh6IgZg4IEkiGIAcA+QAMAbAsByIAwCNIATBBIk1BYg");
	this.shape.setTransform(22.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23_0, new cjs.Rectangle(0,0,44.4,49.8), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AirAlQgNgogDgUIgZhpIFbhFIABADIATBVQAEAQAKAjIArCGIlMB6g");
	this.shape.setTransform(21.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,42.5,39.7), null);


(lib.Path_22_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AiGB0IgHgeIhAjJIEthvIBIDkIAKAkIAbB5IABAEIk7A/g");
	this.shape.setTransform(20.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22_0, new cjs.Rectangle(0,0,41.2,45.3), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AizggIFhgRIAGBGIlgAdg");
	this.shape.setTransform(18,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,35.9,10.1), null);


(lib.Path_21_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AijgdIFAgbIAHBhIlBAQg");
	this.shape.setTransform(16.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21_0, new cjs.Rectangle(0,0,32.9,11.4), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AgnAXIgBgWIgBgeIBQgDIADA7IhQAGg");
	this.shape.setTransform(4.2,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,8.4,6.6), null);


(lib.Path_20_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AgjADIgCgaIgBgMIBJgFIAAAMIACAcIACAnIhJABg");
	this.shape.setTransform(3.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20_0, new cjs.Rectangle(0,0,7.7,8.1), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AjCIBIAVhMIA8iiQAnhZAmhCIAnhEIhohAIgrBHQgqBKgpBdQgHAPgMAgIgtCAIgXBRIh4gfIAzimIALgdIAMgeQARgsAJgTIAdhAQA2huBKhxIAxhFIAUgaICFBmIAfgnIAggnIAngrIBxhwIhyh+IAygqQAQgPASgOIAQgMIDREJIiNB9Ig7BAIBLBDIgLANQgSAUgMAOIgoAzIgqA9IgVAgIgTAfIggA4IgcA4IhSgnIgTAuIgOAfIgFAPIBSAiIggBYIgKAgIgHAdIgJAcg");
	this.shape.setTransform(43.5,56);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,87.1,112.1), null);


(lib.Path_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("An5G1IAMgJIAggaIBFg7IBwhwIAdgeIAKgMIhFg9IAhgmQAPgRAHgKIA2hDIBVh9QASgcAHgOIAXgnQAPgZAFgLIAnhMIBJAkIAbg9QAOgeAEgLIAHgUIhMgeIAsh3QAMgkACgIIAVhKIAAgDICpArIg9DFIgVA3IgXA5QgyBygyBWIg0BYIBgA7IA3hbQAwhVA5h/IAuh1IBAjQIBtAcIgfBvIgKAdIhCC0IgRAnIgkBPQhGCOhaCIQgYAkglAzIgRAXIgHAJIh5heIgnAyQgNARgdAhIgYAcIgZAcIiQCPIBnByIh8Bog");
	this.shape.setTransform(50.6,67.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19_0, new cjs.Rectangle(0,0,101.3,135.8), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Al7I4IAMgaIAihDIAWgsIAcgwQAMgUATgfIAhg0IAjgzIAjgwICFihIhchSIhHBRIhGBYIgkAzQgdAogIANQg6BdgKAQIgdAzIgZAvIgjBGIgNAcIhwg0IBCiFQBfirBPhqIAbgkIC4jVQAXgYA2gzIAdgcIBxB8ICeiDQAVgQAogcIA2glIA2gjIhZiQICPhSICeErQgUAKgeARIiIBUIgbATIgvAhIghAZIgMAKIA/BQIhCA2IggAaIghAgQg7A4gMANIhiBtIgZAgIgzBEIhJg1IhKBuIBLAwIgFAJIgPAZIhkC9g");
	this.shape.setTransform(60.5,64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,121,129.5), null);


(lib.Path_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AqwHQQAZgMAjgVIA+gkIBFgrIB+hXIAngfIAQgLIg6hJIBRhCIAngiQAZgVAQgRQBCg9AWgZIB4iFIAfgoIAvg8IAQgYIBDAwIBbiGIhFgsIAHgLIATgeIB6jpICfBJIgPAfIgoBQIgOAaQgFAMgJAPIhvC2QgHANgNASIgVAeIh5CeIhRBdIBUBLIBUhgIBShoIArg9IAXggIAWggIBzi9QAHgNAIgQIAOgbIAqhUIAPggIBmAvIhNCdIgqBJQgiA6gPAXIg2BVIibDPIiYCqQgkAng2AyIgjAhIhnhxIh1BlIhHA3QgOALgXAQIgkAaIhBAtIhAApIBRCCIioBhg");
	this.shape.setTransform(68.9,73.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18_0, new cjs.Rectangle(0,0,137.8,147.2), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AjfJ3QgNhJgBgVIgIg/IgGhGIgDglIgBgmIgChOIAChOQABgtADgeIAGhGIAdi/ICmAiIAThRIAsiaQANgmAGgPIAUg1Iibg/IA6iEIEvCVIg+CPIgxCTIBhAcIgSBGIgIAiQgFAWgCAQIgHAqIgHApIgFArQgDAagBAQIgHCSIhaAAIACA6QAAAcACALIABASIBagHIACAiQAAANAJA8IARBrIi8AlIgaiyIgHhbIgChcIAAgaIAJisIABgHIh6gNIgBAGIgCAUIgFBEIgBAWIAADJIAGBhIAdC+Ih6AYg");
	this.shape.setTransform(25.8,66.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,51.6,133.2), null);


(lib.Path_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AkKKfIBcjYIAyiZIhZgZIAiiGQADgQABgJIAPhOIAEgbIAEgbQAKhKACgjIAIi9IBSAAIgChJIgCgxIgCgXIhSAGIgCgsIgLhfQgEgigDgQIgQhXICrgiIASBuIAPBxIALDlIgMD4IgBAIIBvAMIABgHIAOkFIgHitIgUi6IgVhzIBvgWIAIArIAJAxQAGAjADAdIAKBMQACAbAEA6IAEAtIABAuIACBeIgCBfQgCA2gDAlIgDArIgEApIgjDnIiXgeIgBAEIgfCEIgvCaIgwCCICOA7IgLAZIgYA3IgZA3IgJASIgDAGg");
	this.shape.setTransform(26.7,80.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17_0, new cjs.Rectangle(0,0,53.3,161.2), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AvVP8IAEgiIAQhfQAbicA6ivQBOjnB6jSQA4hgBeiCIAsg3IAsg3IAvg1QAbggAUgVQDFjPDiiVQDMiGDghZQA/gaB4goICQgmQBIgRAWgEIAhgHIAVByIggAGQgNAChMASIiJAlQh7ApgyAVQjXBWjBB/QjXCNi7DGQgYAYhCBMIgqA1IgqA0QhYB5g2BfQh1DJhKDaQg3CkgaCXQgOBLgBAPIgEAhg");
	this.shape.setTransform(98.2,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,196.4,206.9), null);


(lib.Path_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Ax6RSIAlgHIBqgXICigsQCOgwBAgaQEAhnDjiVQD+inDfjrQAhgiBJhUQAKgLAogzIBeh9IAshAIAphAQAYgmAPgbQCLjvBWkCQBDjHAdiuQAQhWACgVIAFgmIBoANIgFAoQgBAQgGAfIgLBAQggC4hEDMQhbEPiPD1QgTAhhBBlQgPAXgeAqIhiCDQgoA0gMAMQhTBggbAcQjnDzkICuQjvCdkHBpQgxAUg/AWIhmAiIioAuIhuAZIgnAHg");
	this.shape.setTransform(114.7,121);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16_0, new cjs.Rectangle(0,0,229.5,242), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AoWoEIAlgiIAmgiIPiRvIglAig");
	this.shape.setTransform(53.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,107,117), null);


(lib.Path_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AntntIAxgtIOqPoIgpAnIgrAmg");
	this.shape.setTransform(49.4,53.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15_0, new cjs.Rectangle(0,0,98.9,107.8), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AjFA6IAOgkQAUgzANgcIAjhPQAGgNgKgQQgFgIgGgFIE0CYIAMAMQALANgFALIgfBEQgLAZgRAsIgMAgg");
	this.shape.setTransform(19.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,39.5,35.8), null);


(lib.Path_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AjFAyQAIgOAKgXIAkhQQAHgNAMgfIAehMIEkBuIgiBUQgNAigHAPIgpBbQgLAZgJAQg");
	this.shape.setTransform(19.8,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14_0, new cjs.Rectangle(0,0,39.6,37.6), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Ak8mkIAYgRIJhNgIgPALg");
	this.shape.setTransform(31.7,43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,63.5,87.7), null);


(lib.Path_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AkimBIATgPIIyMNIgcATg");
	this.shape.setTransform(29.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,58.3,80.1), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Akgm4IAZgQIInOHIgPAKg");
	this.shape.setTransform(28.9,45.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,57.7,91.4), null);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AkImTIATgNIH+MvIgcASg");
	this.shape.setTransform(26.5,41.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,53.1,83.4), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("An+iEIAJggIP0E0IgGAVg");
	this.shape.setTransform(51.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,102.2,32.9), null);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AnRh/IAHgZIOcEOIgKAjg");
	this.shape.setTransform(46.6,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,93.2,30.6), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Am+kXIANgUINvJNIgGAKg");
	this.shape.setTransform(44.7,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,89.3,60), null);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AmXkDIAKgQIMlIPIgQAXg");
	this.shape.setTransform(40.8,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,81.6,55.1), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AinAKIB9hTIhJhkQAZgSAXgSIAvgmIBXBsIg9AwIChDTIhbBCQggAYgfATIgdATg");
	this.shape.setTransform(16.8,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,33.5,49.6), null);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AhjCWIBIg5IiTjBIBphLIAngbIBEgtICJDZIiTBiIBCBbIhyBZg");
	this.shape.setTransform(17.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,35,49.5), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AlRBcIBqgXIAzgOIA4gQIAegJICWg2IA7gXIA1gZIAvgWIBhgzIAaAwIgHAEIgTALIhIAkQgTALgeANIg3AXIgdANIgeAMIh8AtQguARgPADIg6AQQgdAJgXAFIhsAYg");
	this.shape.setTransform(33.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,67.6,29.1), null);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AmOB7IAIgFIAXgNIBVgsIAcgNIBfgrIBGgcICTg2QAzgSAWgGIBkgcIAegHIBdgWIAagFIAKgCIAJAxIh+AcIgdAHIhjAcIgjAKIgkAMIiQA1IgjANIgiAPIheAqIgbAOIhTAqIgXANIgIAFg");
	this.shape.setTransform(39.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,79.9,33.2), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Aj5FXIAZgaIAdgfIAkgqQAQgSAZgfIAtg6IAtg/QAbglAQgdQAggxAKgSIAnhEIAhhAQASgkAKgXIA0h7IApAQIg1B+QgMAcgyBhIgnBFQgNAYgeAtQgSAdgbAnIgtBAIguA6QgZAhgRASIglArIgeAfIgaAbg");
	this.shape.setTransform(25,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,50.1,74.9), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AaQKhQhRgdhJgiIhjgvQgygZg5ghQhhg1h4hUQgpgdg+gxQgzgpgpglQhahSg9hCIg3g+IhJhcIgQh5IgOACQgXADgSAAIg/ADIhSAAQhfgBhtgQQh2gRhsggQhegch7g2QhCgfgdgRIhSgwIgjgXIgggVQgTgMgfgZIgrghIqzOMIhOg9Ig1gtQh9hpiLiaQhlhwh9i0IhaiPIAUgMIBXCLQB2CtBmBxICECLQBZBVAjAdIAyAsIApAgIAkAcIK5uHIAKAJIAgAZQA1ApBAAoIAoAZQANAIAeAQIBfAwQB5A3BhAcQBsAgB3ARQBtAQBgABIA/AAIATgBIB3gIIASCGIAhApQAkAuA3A7IBCBEQAsArAhAfIBZBLQA+AxAjAZQBvBQBfA1QAsAaA5AeQAxAZAsAVICTA/IA6AWImYsPIAhgSIBXgyQCBhPB0hkQB+hrBYhrIATgXIARgVIAzhAIASANIgGAIIgSAWIg+BOQhYBqh9BsQh8Brh4BIIgwAdIglAVQgQAKgJAEIgJAEIGtMpg");
	this.shape.setTransform(197.4,69.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,394.7,139.2), null);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("ApEEVIR/o2IAKAVIyDItg");
	this.shape.setTransform(58.1,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,116.3,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Ap9EqIT3plIAEAJIzyJug");
	this.shape.setTransform(63.8,31.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,127.7,63.3), null);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AaiWyIASi6IACgzQAMkig7kwQgpjIhBi1QhNjRhui8Qh2jOiYiyQidi5i+iZQi/iajWhxQjShxjfhFQjRhBjegeIjLgTIhjgDIgvAAIguABQiFABjLAcIiLAaIh2AcIimAzQg8AVgEACIgLgRQADgCA1gTICVgvQEGhJEZgRIBYgCIAtgCIAuABIC/AJQDaAUC/AxQDcA5DIBaQDVBfDCCEQDECHCmCmQClClCFC/QB/C3BfDJQBZC/A2DCQAMAnAMA2IAWBaIAnEAQADAaADA0IADAmIABAkIAAD9IgTDGg");
	this.shape.setTransform(173.8,146.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,347.5,292.2), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AKkTAIifgIQi5gRibgoQiygtishOQizhPifhuQimhyiIiJQiIiHhwihQhqiYhOinQhLifgtiiQgJgggLgtIgRhMIghjUIgFhBQgEgqAAgUIgBg6QgBgVABhVIAFhYIAMh7IAXADIgMB0QgEAugBAjQgKDwAwD9QAjCoA1CUQBBCuBaCcQBhCpCACWQCBCYCfCBQCbB9C1BhQCwBdC3A6QCxA2C1AYICpAQIBSACQAuABAggBQBygCCkgXIB0gVIBhgYICKgqQAugQAHgEIALAUQgCABgsAQIh8AoQjYA8jtAPIhIACIg8ABIgQAAg");
	this.shape.setTransform(144.7,121.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0.1,0,289.3,243.2), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("ALzHDIgpgoIhCg/IhYhNQhuhdh8hWQiShjiOhLIjmhvIhMgfIjWhNIhBgSQg0gQg+gPIhZgUIg4gLIgVgEIAPhQIAUADIAaAFIAhAHIBbAVQBBAPA0AQIDTBEIBMAeIBPAfIB2A2IAnAUIBOAoQCSBNCWBnQB/BYByBfICdCQIAsAqIAOAPIg6A5g");
	this.shape.setTransform(82.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,165.6,93.3), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AKzGbIgzgKIhQgSQg3gNgvgOIg6gRIjBhFIhEgcIjPhjQiAhEiDhaQhwhNhihTIi8iwIBAg/IAMANIAlAjIA5A3QAPAOA+A1QBfBRBsBKQB+BYB8BAIDHBhIBCAaIC7BCIA4ARQAtANA2ANIBNASQAVAFAcAFIASACIgQBZg");
	this.shape.setTransform(72.6,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,145.3,82.9), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AqrGWIBfh1QA3g/APgQIBwhuIBOhGQCMhwBnhAIBCgnIBBgmIBDgiQAngUAbgLIBBgdICzhCIAbgJIAZgHIDDgwIAOBFIi8AuQgiAJgSAGIiuBAIg+AcQgaALgmATIhBAhIh+BLQhkA+iIBsIhjBaIgtAsIgoApQgQAQg0A8IhcBxg");
	this.shape.setTransform(68.4,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,136.8,89.5), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AodEcIA1gLQAsgJBagbICIgyIAwgWQAUgIAegPIAygaIBig6QBNgvBrhWQA+g3APgPIBDhCIA1g7IBHhZIA9AuIhLBdQgnAugPAQIgiAiIgkAjQgNAOhEA7QhsBYhTAyIg1AgIgzAeIg0AaQgfAQgVAJIjBBLQhfAcgtAKIg2AMg");
	this.shape.setTransform(54.2,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,108.3,72), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AgaG7IgDt1IAKgBIAxACIgON1g");
	this.shape.setTransform(3,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,6,88.8), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AgZHnIAPvOIAhAAIADPPg");
	this.shape.setTransform(2.6,48.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,5.2,97.7), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AmCjRIAggzILlHlIgXAkg");
	this.shape.setTransform(38.7,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,77.5,52.1), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Amlj8IASgcIM5IFIgcAsg");
	this.shape.setTransform(42.2,28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,84.5,56.2), null);


(lib.Path_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#736283").s().p("AmDjeIAZgnILuHWIgiA1g");
	this.shape_4.setTransform(38.8,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_4, new cjs.Rectangle(0,0,77.7,52.5), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#736283").s().p("AmnjqIAfgwIMwIVIgVAgg");
	this.shape_4.setTransform(42.4,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,84.8,56.6), null);


(lib.CompoundPath_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AhTCUIgohHIgWgmIgVggIgUgeIDtidIAuBHIAZArIAtBPIAUAlIj9CDgAiggVIBpCyIDXhyIgQggIhkikg");
	this.shape.setTransform(18.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_0, new cjs.Rectangle(0,0,37.4,36.2), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AiEBKIgmhDIgQgeIEWiQIANAbIAgA4IASAdIAgAzIkFCrgAifgUIA/BwIAhAyIDgiRIhTiOg");
	this.shape.setTransform(18.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,37.4,33.5), null);


(lib.CompoundPath_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AicBJIguhoIgFgKIEuiVIAGALQAFAIAJAXIBGCoIAXBCIlBBpgAi3gmIA+COIAMAiIAMAiIEYhfIgNgnQgDgNgMgaIhHimg");
	this.shape.setTransform(20.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_0, new cjs.Rectangle(0,0,41.6,38.3), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AiZBjIg5iUIFhh0IAfBVIAlBSIlNCkgAi4gsIAKAeQAGARATAwIAqBeIEliOIghhKQgQgngEgOIgJgZg");
	this.shape.setTransform(21.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,42.2,33.3), null);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AonADIADhEIRMAaIgEBpgAoRgJIQiA0IACg8Iwjghg");
	this.shape.setTransform(55.2,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0, new cjs.Rectangle(0,0,110.4,13.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("ApeAgIAEhcIS5BFIgBAIIgBArgApGANISMAkIABgeIyMg6g");
	this.shape.setTransform(60.7,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,121.3,12.1), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("ApHhZIAVhfIR6DXIghCagAooiEIgIAiIRIEBIAYhuIxRjYQgCASgFARg");
	this.shape.setTransform(58.4,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,116.8,37), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("Ap+gyIAdiHITgEtIgPBGgApahxQgGAYgEAYIS/DtQACgNAEgNIAGgZIy2kag");
	this.shape.setTransform(63.9,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,127.8,37.3), null);


(lib.middlegear_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7DAD56").ss(1.5).p("Af4mOQAZB/AJCBID0AoIgBDOIjxAkQgGCKgVB/IDaBfIg2DJIjngZQgqCBg7B7ICyCMIhnC2IjUhUQhLBshcBrICHC5IiSCWIi3iKQhoBehuBNIBPDPIiyBpIiIirQh5A9iGAvIAXDXIjIA2IhXjIQiLAaiKAIIggDZIjQAAIghjZQiPgHiEgZIhYDEIjIg1IAYjTQiHgth9hAIiECoIi1hoIBPjMQhwhOhphbIizCCIiTiTICFi0QhchrhNhtIjPBPIhoi1ICwiKQg/h7gqiCIjfAXIg4jIIDWhcQgXiGgIiHIjqgjIABjQIDugkQAJiBAYiFIjahiIA1jIIDvAbQAph4A/h7Ii/iZIBqizIDoBaQBLhsBVheIiXjNICTiTIDQCZQBmhYBjhFIhcjtICyhpIChDJQBzg6B9goIgej/IDJg3IBnDvQB6gWCCgHIApkGIDPAAIAnEIQCBAHB6AXIBqjyIDIA3IgdECQB6AoByA5IChjJIC0BnIheDxQBnBKBhBSIDSibICSCSIiYDTQBYBkBGBkIDuhdIBnC0IjCCcQA7B2AsB9ID1gdIA2DHgAcMleQgXh5gph2QgohxgzhiQg6hyhJhmQhChfhJhTQgiglgvgtQgwgyg0guQhShIhehCQhphHhyg4QhlgzhsgjQh3goh+gXQhpgVh0gFQhDgGhAAAQg5AAhBAEQh1AIhqARQh8AWh3AqQhxAlhiAxQhxA2hqBHQhbA9hYBOQg2AvgyA0QgpAmgiAnQhPBZhABaQhIBkg4BxQg4BrglBsQgpB0gZB7QgWBygIB4QgGBGAABHQAAA8ACAtQAIB5AVBzQAUB5AmB0QAnB4AzBpQA2BuBFBlQBEBkBOBbQAqAvAzAzIBQBNQBaBSBmBGQBhBEBtA3QBwA4B3AmQBtAnB7AWQB4AWB8AIQA4AEA8gBQA7AABCgEQB6gFB5gXQB7gZBugnQBzglBvg5QBog1BqhJQBchBBghWQAqgkAiglQAngmA5g+QBRhdBChiQBHhuAyhmQA0htAlhyQAnh1AUh5QAVhzAFh2QADgzAAg3QgChfgCgwQgJhzgWhyg");
	this.shape.setTransform(0,0,0.883,0.883);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgBmAkOIghjZQiPgHiEgZIhYDEIjIg1IAYjTQiHgth9hAIiECoIi1hoIBPjMQhwhOhphbIizCCIiTiTICFi0QhchrhNhtIjPBPIhoi1ICwiKQg/h7gqiCIjfAXIg4jIIDWhcQgXiGgIiHIjqgjIABjQIDugkQAJiBAYiFIjahiIA1jIIDvAbQAph4A/h7Ii/iZIBqizIDoBaQBLhsBVheIiXjNICTiTIDQCZQBmhYBjhFIhcjtICyhpIChDJQBzg6B9goIgej/IDJg3IBnDvQB6gWCCgHIApkGIDPAAIAnEIQCBAHB6AXIBqjyIDIA3IgdECQB6AoByA5IChjJIC0BnIheDxQBnBKBhBSIDSibICSCSIiYDTQBYBkBGBkIDuhdIBnC0IjCCcQA7B2AsB9ID1gdIA2DHIjjBkQAZB/AJCBID0AoIgBDOIjxAkQgGCKgVB/IDaBfIg2DJIjngZQgqCBg7B7ICyCMIhnC2IjUhUQhLBshcBrICHC5IiSCWIi3iKQhoBehuBNIBPDPIiyBpIiIirQh5A9iGAvIAXDXIjIA2IhXjIQiLAaiKAIIggDZgAh98WQh1AIhqARQh8AWh3AqQhxAlhiAxQhxA2hqBHQhbA9hYBOQg2AvgyA0QgpAmgiAnQhPBZhABaQhIBkg4BxQg4BrglBsQgpB0gZB7QgWBygIB4QgGBGAABHQAAA8ACAtQAIB5AVBzQAUB5AmB0QAnB4AzBpQA2BuBFBlQBEBkBOBbQAqAvAzAzIBQBNQBaBSBmBGQBhBEBtA3QBwA4B3AmQBtAnB7AWQB4AWB8AIQA4AEA8gBQA7AABCgEQB6gFB5gXQB7gZBugnQBzglBvg5QBog1BqhJQBchBBghWQAqgkAiglQAngmA5g+QBRhdBChiQBHhuAyhmQA0htAlhyQAnh1AUh5QAVhzAFh2QADgzAAg3IgEiPQgJhzgWhyQgXh5gph2QgohxgzhiQg6hyhJhmQhChfhJhTQgiglgvgtQgwgyg0guQhShIhehCQhphHhyg4QhlgzhsgjQh3goh+gXQhpgVh0gFQhDgGhAAAQg5AAhBAEg");
	this.shape_1.setTransform(0,0,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.6,-205.6,411.3,411.3);


(lib.greentransportation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBZQgLAAgIgHQgIgHAAgKIAAgQQhAgVgHgaIABhkQAMAdA7AUIAAgHQABgLAHgHQAIgIAKAAIBDARIAQAbIA7AGQAKAAAIAIQAHAHAAALIAABAQgBAKgHAIQgIAHgKAAIg8gEIgZAUgABAgJQgCACAAADIgBA1QAAAHAIABIAhACQAEABACgDQACgCAAgDIABg1QAAgHgIgBIgigCIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape.setTransform(-14,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAADDQhwgBhUgjQhEgcgBgUIgBgSQABg4AUgzQATg0AkgoQAmgrAzgXQAygWA2AAQBFABA6AjIkvDtQgJAHgBAMQgBALAHAKQAIAKANAAQAKAAAIgGIE6j1QAJAIAKAMQAjApATA0QASAzgBA5IAAARQgCAVhBAaQhPAghvAAIgJAAg");
	this.shape_1.setTransform(0.1,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBCOQg6gBgqgqQgpgqABg5QABg7AqgpQApgpA7AAQA6ABAqAqQApAqgBA6QAAA6gqApQgqApg5AAIgCAAg");
	this.shape_2.setTransform(0.6,-32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah1g8IClgUIAAAeQA4gRAPgeIgBBkQgIAbg/ASIgBAdIikAVgAg8gUQgEAAgDADQgEADAAAEIAAAuQAAAFADADQADADAFAAIAzgGQAEAAADgDQACgDABgFIAAgwQAAgHgKgBg");
	this.shape_3.setTransform(15.4,36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#42863F").s().p("AAaLLQgbgagmgDQgngCgfAXQgeAXgKAmQgcgGgigJQAEgOAAgJQAAgggRgbQgSgbgegNQgjgPglALQglALgWAgQgVgNgggWQASgaAAgeQABgvgiggQgcgbgngCQgmgCggAXQgagigLgRQAUgPALgWQALgWABgZQAAgagMgXQgRgigkgPQgjgPglALQgKgagJgjQAigLAVgbQAVgcABgjIgBgOQgFgmgcgaQgcgagngCIAEg/QAnACAfgXQAfgXAJgmQADgMAAgLQAAgggSgbQgRgbgegNQAKgbAPggQAkAQAlgLQAlgLAVggQASgaAAgfQABgugjghQAXgZAVgVQAcAaAnADQAnACAegXQAUgPAMgWQALgWAAgaQAAgYgLgYQAbgPAdgNQASAiAjAQQAkAPAlgLQAhgKAVgcQAVgcABgjIgBgNQAlgGAagBQAFAmAcAbQAbAbAmACQAmACAfgXQAfgYAJglQAaAEAkAKQgDAMAAALQAAAhARAbQASAbAdANQAkAPAlgLQAlgLAVghQAeASAXARQgRAbAAAeQgBAWAJAVQAJAVAQAPQAcAaAnACQAmACAfgWQAWAaAQAYQgUAPgLAXQgMAWAAAZQAAAZALAYQASAiAkAPQAjAPAlgLQAKAcAIAhQghAKgVAcQgVAcgBAjIABANQAEAmAdAbQAcAaAnACIgCAgIABgBIgDAgQgngCgfAXQgfAXgJAmQgDALAAAMQgBAgASAbQASAbAeANQgLAdgPAdQgjgPglALQglALgWAgQgRAaAAAfQgBAuAiAhQgXAagVAUQgcgbgmgCQgngDgfAXQgUAQgLAWQgLAWgBAZQAAAZAMAXQgaAQgfANQgRgjgkgPQgjgPglALQgiAKgVAcQgVAcAAAjIABANQgWAEgpADQgFgmgcgbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-78,156.6,156.1);


(lib.greenheart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglDNQh9hbg8gvQhohRgvhFICZAAQASAAAIgQIBAh6IBqEHQAHARARACIADAAQAQAAAJgOIBRiCIEJAAQgyBIhqBQQh+Bag+AuQgWARgLAAQgMAAgWgRg");
	this.shape.setTransform(0.3,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhngsQgGgRgTgBQgTgBgIAQIhVCiIioAAQgTgsgDguQgEgZAAgOQABhYBBg9QBBg+BaACQA3AAA7AgQA2AcAeAlIAQAWQADAAAPgVQAgglA2gaQA8geA3ABQBaABA/A/QA/A/gBBYQAAAUgFATQgHAngSAnIk7AAQgQAAgJAOIg8Bgg");
	this.shape_1.setTransform(0.5,-8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42863F").s().p("AAhLLQgcgaglgCQgngCgeAYQgfAXgJAmQgXgFgngJQADgQAAgHQAAghgRgbQgSgagegNQgkgPglAMQgkALgWAhQgdgSgYgRQARgaAAgfQAAgWgJgVQgJgUgQgPQgcgagngCQgmgCgfAYQgVgagSgZQAUgPALgWQALgXAAgZQAAgZgLgXQgSgigkgPQgjgPgmALQgLgggIgcQAigLAVgcQAVgcAAgjIgBgNQgFgngdgaQgcgZgngCIADg/QAnABAfgXQAfgXAIgmQADgKAAgNQAAgggSgbQgSgbgegMIAZg7QAjAPAmgLQAlgMAVggQAQgaAAgfQAAgugighQAYgbATgTQAdAaAmACQAnACAfgXQAUgQALgWQALgWAAgaQAAgYgMgYQAZgPAfgOQASAjAkAPQAjAPAlgMQAigKAUgcQAVgcAAgkIgBgNIA/gIQAFAnAcAaQAdAaAlACQAmACAfgYQAfgXAIgmQAUAEArAKQgEAOAAAJQAAAhASAbQASAbAeAMQAjAPAlgMQAlgLAVghQAaAQAcATQgRAbAAAeQAAAvAhAfQAdAaAnACQAmACAfgYIAnAzQgUAPgLAXQgMAWAAAZQAAAbAMAVQASAjAkAOQAjAPAlgLQAKAYAJAlQghAKgVAcQgVAcAAAjIABANQAFAnAcAaQAdAZAnACIgEA/QgmgBgfAXQgfAXgJAmQgCANAAALQAAAgASAaQASAbAdAMQgKAcgOAfQgkgPglALQglAMgVAgQgRAZAAAhQAAAuAjAgQgZAdgTARQgcgagngCQgngCgeAXQgUAQgLAWQgLAWAAAZQAAAZAMAYIg4AdQgSgjgkgPQgkgPgkAMQgiAKgVAcQgUAdAAAjIABANQgdAFgiADQgGgngcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-77.9,156.6,156);


(lib.greengovt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlxGXQgJgBgGgGQgHgHAAgJIAAgBQAAgIAHgGQAGgHAJAAILjAAQAJAAAGAHQAHAGAAAIIAAABQAAAJgHAHQgGAGgJABgAlVFGQgJAAgHgGQgGgHgBgJIAAgBQABgIAGgHQAHgGAJAAIKrAAQAJAAAHAGQAGAHABAIIAAABQgBAJgGAHQgHAGgJAAgAC1DtQgKAAgIgGQgJgHABgIIAAgCQgBgIAHgGQAGgHAJAAIAFAAIAAj2IgFAAQgJgBgGgFQgHgHABgJIAAgBQAAgKAGgFQAIgHAMABIBuAAQAFgBAGAHQAGAGAAAJIAAABQgBAJgGAHQgGAFgJABIgIAAIAAD2IAIAAQAJAAAGAHQAGAGABAIIAAACQgBAIgGAHQgGAGgJAAgAgxDtQgKAAgIgGQgIgHAAgIIAAgCQAAgIAGgGQAGgHAJAAIAFAAIAAj2IgFAAQgJgBgGgFQgGgHAAgJIAAgBQgBgKAIgFQAGgHANABIBsAAQAGgBAGAHQAFAGAAAJIAAABQABAJgHAHQgGAFgJABIgHAAIAAD2IAHAAQAJAAAGAHQAHAGgBAIIAAACQABAIgHAHQgGAGgJAAgAkZDtQgJAAgIgGQgJgHAAgIIAAgCQAAgIAHgGQAHgHAIAAIAFAAIAAj2IgFAAQgIgBgHgFQgHgHAAgJIAAgBQABgJAGgGQAIgHALABIBuAAQAHgBAFAHQAGAGgBAJIAAABQAAAJgFAHQgHAFgJABIgIAAIAAD2IAIAAQAJAAAHAHQAFAGAAAIIAAACQAAAIgFAHQgHAGgJAAgAlgiNQgHAAgGgFQgHgFgBgHQgCgJACgGQADgJAMgIIFhjWQAFgDAHADIFgDWQASAMgDAUQgBAHgGAFQgHAFgHAAg");
	this.shape.setTransform(0,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42863F").s().p("AAhLLQgcgaglgCQgngCgeAXQgfAYgIAlQghgFgdgIQACgRAAgGQABgggTgcQgRgagegNQgjgPglAMQgmAMgVAgQgdgRgYgRQARgbAAgfQABgvgjgfQgcgagngBQgmgDggAYQgVgbgRgYQAVgPALgWQAKgWABgZQgBgagLgXQgSgjgkgOQgkgPgkAMQgLgggJgdQAigLAVgcQAVgcAAgiIgBgOQgFgmgdgaQgcgZgngDIAEg/QAmABAfgXQAfgXAIglQADgLAAgOQAAgfgSgbQgSgagegNQANgjAMgYQAkAPAlgLQAlgMAVggQAQgaAAgfQABgugjghQAUgWAXgYQAdAaAnACQAmACAfgXQAUgQALgVQALgXAAgaQAAgXgMgZQAcgPAdgNQARAiAkAPQAjAPAmgLQAhgLAVgcQAUgcAAgkIgBgNQAigFAdgCQAGAmAcAaQAcAbAlABQAnADAfgYQAegYAIgmQAgAGAeAJQgCAQAAAGQgBAhATAbQARAbAeAMQAjAPAlgMQAmgLAVggQAeARAXAQQgRAbAAAfQAAAwAhAeQAdAaAnADQAnABAegYQATAXAUAcQgUAPgLAXQgMAWAAAZQABAaALAXQASAiAkAOQAkAPAkgMQAKAaAKAkQgiAKgVAcQgVAcAAAjIABAOQAFAmAcAaQAdAaAnABIgEA/QgmgCgfAYQgfAYgJAlQgCANAAAKQAAAgASAcQASAaAdANQgKAcgOAeQgkgPglALQglAMgVAgQgQAaAAAfQAAAvAiAgQgTAXgYAXQgdgagngCQgmgBgfAWQgUAQgLAWQgLAXAAAZQAAAXAMAZQgeARgaAMQgSgjgkgOQgjgPglALQgiALgVAcQgUAcAAAjIABANQgeAFghACQgGgmgcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-77.9,156.6,155.9);


(lib.greencomputer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmjAzQgdAAgUgVQgUgVAAgdIAAgeIPRAAIAAAeQAAAdgUAVQgUAVgdAAgAhJAQICUAAIAAgdIiUAAg");
	this.shape.setTransform(1.4,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AE5EJIAAnBIpxAAIAAHBIhMAAIAAmrQAAgtASgbQAUgeAmAAIJxAAQAmAAAUAeQASAbAAAtIAAGrg");
	this.shape_1.setTransform(1.4,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_2.setTransform(-18,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKCAQAAhUg8g5Qg6g7hTAAIAAg3QBpAABLBMQBLBJAABqg");
	this.shape_3.setTransform(-5.2,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWBLQgBgogbgcQgdgbgoAAIAAg2QA/AAArAsQAtArAAA+g");
	this.shape_4.setTransform(-10.4,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42863F").s().p("AAhLLQgcgbglgBQgmgDgfAYQgfAYgJAlQgigGgcgIQADgLAAgLQAAghgRgbQgSgbgegMQgjgPglAMQglALgWAgQgcgRgZgQQARgbAAgfQAAgugiggQgcgagngCQgmgCgfAYQgVgagSgZQAUgPALgXQALgWAAgYQAAgagLgYQgSghgkgPQgjgPgmAMQgHgWgMgnQAigLAVgcQAVgcAAgjIgBgOQgFgmgdgaQgcgZgngCIADg/QAnABAfgXQAfgYAIglQADgLAAgNQAAgfgSgbQgSgbgegNQAJgXAQgjQAkAPAlgMQAlgLAVggQARgaAAgfQAAgugjghIAsguQAcAaAnABQAmACAfgWQAqghAAg1QAAgZgMgXQAUgMAkgRQASAjAkAOQAkAPAkgKQAigLAVgcQAUgdAAgjIgBgNQAjgFAcgCQAGAmAcAaQAcAbAlABQAmADAfgYQAfgYAJgmQAbAFAjAJQgDAMAAALQAAAhASAbQARAbAeAMQAkAPAlgMQAlgLAVggQAWANAfAUQgRAbAAAfQAAAvAiAfQAcAaAnACQAmACAfgYQAOAQAZAjQgUAPgLAXQgLAWAAAZQAAAaALAXQASAhAkAPQAkAPAlgMQAMAkAGAZQghALgVAcQgVAcAAAjIABAOQAFAmAdAaQAcAZAnACIgDA/QgngBgfAXQgfAYgIAlQgDAMAAALQAAAgASAbQASAbAeANQgNAhgMAZQgkgPglALQglAMgVAgQgRAaAAAfQAAAuAjAhQgUAXgYAXQgcgagngCQgmgCgfAXQgUAPgLAXQgLAWAAAaQAAAZAMAWQgbAQgdANQgSghgjgPQgkgPglAKQgiALgVAcQgUAdAAAjIABAMQgdAGgiACQgGgmgcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-77.9,156.6,155.9);


(lib.greencollege = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjOC/QhUgUAAgcIAAgCIAAhuIhSgYIABBvQgKgEgJAAQgHAAgJADIAAh3Ig1gPQgLgDAAgLQgBgLALgEIHCiiQAGgCAEACIHNCgQALAEgBALQAAALgKADIidAtQgYgihfgUQhUgShoAAQgGAAgEAFQgFAEAAAGQAAAGAFAFQAEAEAGAAQBvAABUASQBMASANAYIAABgIABABQgBAdhTAUQhTAUh3AAIgFAAQhzAAhSgTg");
	this.shape.setTransform(0,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBbIAcjDQAOAIAOAAQAMAAAMgGIAJCbQAEARgwAYQgWALgLAAQgNAAABgOg");
	this.shape_1.setTransform(-40.2,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(-39,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#42863F").s().p("AAhLLQgcgaglgCQgngCgeAYQgfAXgIAlQghgFgdgIQACgRAAgGQABgggTgcQgRgagegMQgjgQglAMQgmAMgVAgQgdgRgYgRQARgdAAgdQABgvgjgfQgcgagngBQgmgDggAYQgVgbgRgYQAVgPALgWQAKgWABgZQgBgagLgXQgSgigkgPQgkgPgkAMQgLgggJgdQAigLAVgcQAVgcAAgiIgBgOQgFgmgdgaQgcgZgngDIAEg/QAmABAfgXQAfgXAIglQADgKAAgOQAAgggSgbQgSgagegNQANgjAMgYQAkAPAlgLQAlgMAVggQAQgaAAgfQABgugjghQAUgWAXgYQAdAaAnACQAmACAfgXQAUgQALgVQALgXAAgaQAAgYgMgXQAZgPAfgOQASAiAkAPQAjAPAmgLQAhgLAVgcQAUgcAAgkIgBgNQAigFAdgCQAGAmAcAaQAcAbAlABQAnADAfgYQAegYAIgmQAgAGAeAJQgCAQAAAGQgBAhATAbQARAbAeAMQAjAPAlgMQAmgLAVggQAeARAXAQQgRAbAAAfQAAAwAhAeQAdAaAnADQAnABAegYQATAXAUAcQgUAPgLAXQgMAWAAAZQABAaALAXQASAiAkAOQAkAQAkgMQAKAZAKAkQgiAKgVAcQgVAcAAAjIABAOQAFAmAcAaQAdAaAnABIgEA/QgmgBgfAYQgfAWgJAmQgCANAAAKQAAAgASAcQASAaAdANQgKAcgOAeQgkgPglALQglAMgVAgQgQAaAAAgQAAAuAiAgQgVAYgWAWQgdgagngCQgmgBgfAWQgUAQgLAWQgLAXAAAZQAAAXAMAZQgeARgaAMQgSgjgkgOQgjgPglALQgiALgVAcQgUAcAAAjIABANQgeAFghACQgGgmgcgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-77.9,156.6,155.9);


(lib.Path_33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AA6SeQgcgwgLgXIgZgzQgRgigMgbIg/iXQhHjDgjjGQgpjmAHjpQAGjtA1jiQAvjHBRi7IAkhOIBfiyQALgUANgUIAig1IBmBEIggAyIgXAlIhbCpIghBKQhNC1grC5QgzDVgGDgQgGDdAnDaQAhC6BCC5IAeBMIAPAiIAPAhQAPAjAlBHQAJAUAbAvIAOAYIhqA+g");
	this.shape_1.setTransform(24,120.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_33_1, new cjs.Rectangle(0,0,48.1,241.4), null);


(lib.Path_32_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AkNVYIAmg8IBhipIBQinQBdjaAzjdQA9kFAHkIQAHkJgukGQgojjhQjbIgkhaIgRgqIgSgnQgOghgwhfQgLgWghg6IgRgcIBhg5IARAeQAdAyAQAiQAsBVAVAwIASApQANAcAFAPIAmBeQBUDlAqDtQAwERgIEUQgGEUhAEQQg4DrhgDeIgqBdIhxDTIgOAZIg2BVg");
	this.shape_1.setTransform(27,143);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32_0_1, new cjs.Rectangle(0,0,54.1,286), null);


(lib.Path_32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AkLRcIgXhLIgOg2IgeiKIgOhSQgdi+AGjNQAHjmA0jbQA2jhBgjLQBUi0BziiQAUgeAeglIAug7IBQhcIBKhNIBWBYIgSASIg0A2IhLBXQhFBYgWAfQhvCdhNCmQhaDAgzDUQgyDPgGDZQgGDDAbCzQAEAbAJAyIAdCDIAOAzIAVBHIAIAZIh0Ang");
	this.shape_1.setTransform(37.3,114.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32_1, new cjs.Rectangle(0,0,74.6,228.6), null);


(lib.Path_31_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AmwUDIAXgWICZiqIA1hEQAhgqAYgiQCFi7BejMQBujpA9kAQA9j8AHkEQAHjpghjbIgQhdIgiieIgRg+Igkh0IBqgjIAlB5IASBBIAkCkIARBiQAhDggHD3QgIETg+EEQg/EHh0D4QhjDTiKDEQgZAkgiAsIg3BHIhVBiIhMBPQgOAQgJAHg");
	this.shape_1.setTransform(43.3,136.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31_0_1, new cjs.Rectangle(0,0,86.5,272.5), null);


(lib.Path_31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AIOSAQgMgFgXgLIgvgUQiThHiAhbQhIgyhehUIgogoQgZgXgRgSIhRhbQhWhpg+hlQhFh0gzh2QgwhzgkiFQgeh5gPiBQgWjhAgjhQAYifA1iWQAKggAHgQIAahBIAfANIgZBAIgRAvQgzCQgYCfQggDaAWDgQAOB8AeB5QAgB9AyB2QA1B6BBBrQA9BkBUBmIBQBZQAQARAZAZIAnAmQBfBUBEAwQB6BYCTBGIAuAVIAjAOIAcALIgMAgg");
	this.shape_1.setTransform(56.7,116.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31_1, new cjs.Rectangle(0,0,113.4,232.6), null);


(lib.Path_30_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AIBW2IAghRIAKgcIALghQBBi4AfjKQApkVgdkdIgKhOQgGgugGggQgFghgKgtIgThPQgqifg+iXQhCiXhUiMQhNh9htiGIhlhxQgVgXgfgdIgzgyQh3hqhYg9Qidhxi7hZIg6gbQgdgNgPgFIglgOIALgdIAmAOIAsATIA7AbQC8BZCgB0QBdBAB2BqIAzAyQAgAeAVAXIBnByQBtCHBPB/QBVCNBDCbQBACZAqChIATBQQAKAuAFAiQAHAgAGAvIAKBOQAdEhgqEaQgfDOhCC5IgLAiIgLAcIggBSg");
	this.shape_1.setTransform(71.7,147.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30_0_1, new cjs.Rectangle(0,0,143.4,294.8), null);


(lib.Path_30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("ADBSfQgqgrgQgUQhlhyhNiEQhyjEg3jHQgFgQgYhkIgUh4QgGgqgCgVIgEg+QgCgLAAgUIgBhfQADj3BNjuIASg3IAVg2IAshmQA3htAshEQBRiABphyQA0g1AIgIIAVgVIAYAaIgWATIg6A9QhoBwhPB8QgqBBg2BsIgsBkIgUA1IgSA2QhLDpgDDzIABBcIABAfIAFA9QABAVAGAoIAJA8IALA7IANA5QAIAiAHAWQA1DABxDDQBMCCBiBvQAXAcAiAjIAUAVIgYAYg");
	this.shape_1.setTransform(27.8,120.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30_1, new cjs.Rectangle(0.1,0,55.4,241.1), null);


(lib.Path_29_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AleX2IAbgbQAQgOA8g/QCFiQBnihQA3hVBFiMIAdg/QAMgZACgIIA/irQBhktAEk6IgBh3IgCgnIgGhQIgEgnIgRh0IgOhMIgRhLQgKgrgKgeQgIgegNgoIgXhFIgahDIgNggIgOggIgcg9Igdg7QgMgYgSggIgeg1QhhimiAiSQgQgTg5g9IgbgcIAWgVIAbAcQA4A8ASAVQCBCSBjCqIAfA2IAeA5IAeA7IA3CAIAbBDIAXBGQAOAqAIAeQAJAeALAsIARBLIAfDEIAEAnIAHBRIABAoIACBRIAAAoQgFE+hhEyIgZBHIgNAiIgaBEIgPAhIgdBAQhHCPg4BVQhkCfiLCXQhCBFgKAJIgcAbg");
	this.shape_1.setTransform(35.1,154.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29_0_1, new cjs.Rectangle(0,0,70.3,309.7), null);


(lib.Path_29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AvZPWIABhkQAIi9AlimQA6kAByjbQAXgsAKgQIAkg+QBAhiAQgWQBYh8BlhmIAZgbIAbgZIA2gzIByhdIAdgWIAdgVIAegVIAegUIB3hJQCKhKBognQAngQBNgaIBvggQC5guCpgKIAegCIAbgBIBOgCIAAAiIiFAFQiiAJi5AuIhSAXIgbAJIg5ATIg6AVQhpAoiEBIIg7AiIg7AmIgdATIgdAVQgnAbgTAPIhvBcIg1AxIgbAZQgJAIgQASQhfBhhbB+QgVAdg5BZIgjA7QgOAXgTAmQhxDYg4D6QglClgHC4QgCBUABAPIABAjIgiABg");
	this.shape_1.setTransform(98.7,101.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29_1, new cjs.Rectangle(0.1,0,197.3,203.6), null);


(lib.Path_28_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Ay7TDIBfgCIAhgBIAlgDQDKgLDig5ICHgnIBGgXQAqgPAdgMQCEgxChhZIBJgqIBIguQAZgQAMgIID0i/QAOgLATgTIAhgfIAggfIAfggIAfghQAYgYAHgIIA7hEQAMgOAQgVIAbgjIAcgjIBLhtIBbiTIAVglIATgmQCLkJBFk2QAujMAJjjIAChGQABgigCgRIgBgrIAfgBIABArQABASgBAjIgBBHQgKDmguDNQhFE5iOEOIgTAnIgWAkIgrBMIh9C4IgbAkQglAvgUAXIg7BFIgfAhIgfAhIggAhIghAfQg3A0gMAKIiLBzIhsBOIglAYIhJAvIhKArQijBZiGAzQgdAMgrAPIhHAYIiIAnQjkA5jOAMIinAGg");
	this.shape_1.setTransform(121.2,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28_0_1, new cjs.Rectangle(0,0,242.4,250.1), null);


(lib.Path_28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AN8PWIjcgLIhOgKQgsgEh2gWIhTgSQg6gNgZgIIiqg0QgcgKg4gWIgpgQIgrgSIilhQQgYgLg5giQg9gjgTgNQiXheiSh9IiGh6Ig+hAIg6hCQjOjoiSkkQhkjIg+jbIgUhGIgWhfIAigHIAoCjQA+DXBiDFQCQEgDMDmIB2CAIBBA9IAhAeIAhAdQCXCBCPBXQATANA7AjQA9AiATAKICkBPQAbAMA3AWQA7AXAYAIICoAzQATAGA/APIBRASIBRAPQAuAHAhAEIBNAJIDZALQDYADDhgnIClgiIAIAhIioAiQjVAljOAAIgbAAg");
	this.shape_1.setTransform(150.6,98.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0,0,301.1,196.5), null);


(lib.Path_27_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AahQIIgXhQQhHj8hzjmQiolPjtkOIhEhLQgvgxgYgYIiaiNQiuiViohoQgegTgPgJIgugbIhegzIhfgwIhggsIiQg7IgxgRIjDg9QgWgGhKgSIgwgLIgwgKIhdgQQg2gKgngEQg8gIgegCIj+gOQkBgCkBAtIjAAoIgHgeIDCgpQEHgtEBADIEAANQAeADA9AIQAyAFCKAZIAwAKIAxALQBBAPAgAKIDFA9IAxARID0BoIBgAxQAUAJAbAQIAvAbIAvAbQAQAJAeATQCtBrCsCUICbCPIBIBKIBFBMQDxERCoFSQB0DnBJEAIAWBRIAaBwIgeAGg");
	this.shape_1.setTransform(175.2,114.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27_0_1, new cjs.Rectangle(0,0,350.5,228.5), null);


(lib.Path_27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("ALTN3QiZgKhmgUQh/gViYgwIhHgYIhHgcQgYgJgMgFIivhVIhEgnQgVgLgvgfIhCgsQh8hUh6hzIhthvIgyg5Igwg6QiojQhwj/QhNivgsi+IgdiPIAhgFIAcCMQAtC9BLCqQBvD7ClDNIAvA5IAxA5IA0A3IAcAbIAbAaQB+B2B0BOQAVAQAsAcQA1AhAOAIIDvB6IAkAOIBGAbIBGAYQCZAwB4AUQBpAUCSAJQC7ALC/gYICOgWIAGAhIiQAXQiHAQiEAAQg7AAg5gDg");
	this.shape_1.setTransform(125,89);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27_1, new cjs.Rectangle(0,0,250.1,178.1), null);


(lib.Path_26_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AWkOHQg1jihcjQQiHkyjHj3Ig5hFQgngugVgXIg/hCQgNgOgUgTIgiggQiYiOiMhgQgSgNg9gnQg8gmgVgMIhSgvIjQhlIgrgRQg8gYgZgJIhVgdQi4g6iTgYQh8gXi0gNQjhgNjpAeIhJAJIhiASIgGgfIBjgRIBLgKQDugeDhAOQC3AMB8AYQCaAZC2A6IBWAdIBWAiICUBBIBqA2IBTAvIBRAzIBQA1QCXBnCRCKIAiAgQAVATANAOIBABEIA9BFIA5BGQDKD7CIE0QBdDTA2DlIAiCsIgeAFg");
	this.shape_1.setTransform(150.8,107.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26_0_1, new cjs.Rectangle(0,0.1,301.7,214.7), null);


(lib.Path_26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AyqSwIgrgCIABghIAqABQAZABBggDQDbgIDOguQEyhEEIiKQAtgXAdgRIBJgrQBgg8AwgkQCZhuB2h0IA/g/QAvgyAMgPIBxiIIAzhGIAZgjQAGgJARgbIBZiQQBWigAyiCQAMgdAOgpIAXhFQAHgRAEgSIAchjQA3jdAMjLIAGiiIAiAAIgGClQgNDQg4DeIgcBkQgFASgFARQglBsgOAiQgzCFhXChIhZCRIgYAlIgZAkIgaAkIgaAjIhyCKQgLAOgTATIgfAhIhAA/Qh5B4iZBuQgsAfhmBCIhMAsQgZAQgxAYQkLCLk2BGQjNAtjjAKIhwACIgKAAg");
	this.shape_1.setTransform(123.8,120);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26_1, new cjs.Rectangle(0,0,247.6,240), null);


(lib.Path_25_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("A2pV+IADhvIABgnIADgrQAOjyBCkGIAuieIAchTQAQgwAPgjQA9ihBli4IAxhVIA3hWQASgdAKgNIA7hUIAQgVIAQgVIBAhSIBFhPIBHhNIAlgnIAlgkIAnglIAmgkIBQhEIBShCIApggIDWiQIBYgzIAqgYIAtgXQE4ikFthRQDxg2EIgLQBygDAdACIAyABIgBAfIgxgCQgVgBh5ADQkBAKjzA2QlnBQk2CiIgsAXIgrAYIhWAyIiABTIhTA8IgpAfIhRBBIhPBEIgmAkIgmAkIgmAkIhIBMQgVAWgNAQIiUC0IgPAVIg7BTIgcAqIhmCpQhlC4g8CdQgOAigRAxIgbBRIgYBQIgVBNQhCEEgNDuIgHC/g");
	this.shape_1.setTransform(145,140.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25_0_1, new cjs.Rectangle(0,0,290.1,281.2), null);


(lib.Path_25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AETcrIgmgpIgyg6Qibi2h0jLIhsjOIghhMIgghPIhUj+Qg1jIgTiqIgKhgIgHhhIgBjBQAAgqAEg4IAIhhQARiOAKgyQAJg6AeiAIAZhbIAOgsIAOgsQAviSBXi0IBNiQIAnhDIApg/QB9jCCmiwIA1g3IBKhHIAYAZIhKBGIg0A2QimCvh7C+IgnA+IgnBDIhLCOQhWCxguCRIgcBXIgZBZQgdB/gKA5QgJAwgSCOIgHBfQgEA4gBApIACC/IAGBfIAKBfQATCoA0DFIA1CqIAPApIBRDAIAQAlIA1BnIAlBAQBzDKCYCyIB3CDIgYAYg");
	this.shape_1.setTransform(43.4,186.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25_1, new cjs.Rectangle(0.2,0,86.5,373.8), null);


(lib.Path_24_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("EgHuAhQIBVhRIA8g+QC8jFCSjgIAthIIAthMIBXikQBijNA2inIAghlQAThEAJgiIAZhqQANg9AHguQAKguAIg/IAOhtIAJhvQAEhAAAgvIgBjdIgIhvIgSijQgEgkgEgSIgThrIgLg0IgYhnIgOgzIgchkIgghgIgRgvIhwkIIhojCQiFjoivjOIg5hCIgsgvIglgmIAWgWICLCYQC1DXCDDlIBpDDIBxELIBOD2IAOAzIAYBpIALA1IATBsIAIA2IASClIAIBvIACDfQAAAwgFBBIgIBvIgPBvQgIBAgJAvQgKA8gkCaQgLArgSA9IgPA0IgQAyQg4CrhiDMIhZCmIgtBNIguBIQiVDmi8DEIg9A/IhVBSg");
	this.shape_1.setTransform(49.5,215.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24_0_1, new cjs.Rectangle(0,0,99,430.2), null);


(lib.Path_24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Ah4CrIgwh4Igph6IgQg4IFUhgIAxCZIApBlIAVAuIlCCTg");
	this.shape_1.setTransform(22.6,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24_1, new cjs.Rectangle(0,0,45.2,44.9), null);


(lib.Path_23_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AhoC+Igqh+Igyh6IgZg4IEkiGIAcA+QAMAbAsByIAwCNIATBBIk1BYg");
	this.shape_1.setTransform(22.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23_0_1, new cjs.Rectangle(0,0,44.4,49.8), null);


(lib.Path_23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AirAlQgNgogDgUIgZhpIFbhFIABADIATBVQAEAQAKAjIArCGIlMB6g");
	this.shape_1.setTransform(21.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23_1, new cjs.Rectangle(0,0,42.5,39.7), null);


(lib.Path_22_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AiGB0IgHgeIhAjJIEthvIBIDkIAKAkIAbB5IABAEIk7A/g");
	this.shape_1.setTransform(20.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22_0_1, new cjs.Rectangle(0,0,41.2,45.3), null);


(lib.Path_22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AizggIFhgRIAGBGIlgAdg");
	this.shape_1.setTransform(18,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22_1, new cjs.Rectangle(0,0,35.9,10.1), null);


(lib.Path_21_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AijgdIFAgbIAHBhIlBAQg");
	this.shape_1.setTransform(16.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21_0_1, new cjs.Rectangle(0,0,32.9,11.4), null);


(lib.Path_21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AgnAXIgBgWIgBgeIBQgDIADA7IhQAGg");
	this.shape_1.setTransform(4.2,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21_1, new cjs.Rectangle(0,0,8.4,6.6), null);


(lib.Path_20_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AgjADIgCgaIgBgMIBJgFIAAAMIACAcIACAnIhJABg");
	this.shape_1.setTransform(3.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20_0_1, new cjs.Rectangle(0,0,7.7,8.1), null);


(lib.Path_20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AjCIBIAVhMIA8iiQAnhZAmhCIAnhEIhohAIgrBHQgqBKgpBdQgHAPgMAgIgtCAIgXBRIh4gfIAzimIALgdIAMgeQARgsAJgTIAdhAQA2huBKhxIAxhFIAUgaICFBmIAfgnIAggnIAngrIBxhwIhyh+IAygqQAQgPASgOIAQgMIDREJIiNB9Ig7BAIBLBDIgLANQgSAUgMAOIgoAzIgqA9IgVAgIgTAfIggA4IgcA4IhSgnIgTAuIgOAfIgFAPIBSAiIggBYIgKAgIgHAdIgJAcg");
	this.shape_1.setTransform(43.5,56);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20_1, new cjs.Rectangle(0,0,87.1,112.1), null);


(lib.Path_19_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("An5G1IAMgJIAggaIBFg7IBwhwIAdgeIAKgMIhFg9IAhgmQAPgRAHgKIA2hDIBVh9QASgcAHgOIAXgnQAPgZAFgLIAnhMIBJAkIAbg9QAOgeAEgLIAHgUIhMgeIAsh3QAMgkACgIIAVhKIAAgDICpArIg9DFIgVA3IgXA5QgyBygyBWIg0BYIBgA7IA3hbQAwhVA5h/IAuh1IBAjQIBtAcIgfBvIgKAdIhCC0IgRAnIgkBPQhGCOhaCIQgYAkglAzIgRAXIgHAJIh5heIgnAyQgNARgdAhIgYAcIgZAcIiQCPIBnByIh8Bog");
	this.shape_1.setTransform(50.6,67.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19_0_1, new cjs.Rectangle(0,0,101.3,135.8), null);


(lib.Path_19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Al7I4IAMgaIAihDIAWgsIAcgwQAMgUATgfIAhg0IAjgzIAjgwICFihIhchSIhHBRIhGBYIgkAzQgdAogIANQg6BdgKAQIgdAzIgZAvIgjBGIgNAcIhwg0IBCiFQBfirBPhqIAbgkIC4jVQAXgYA2gzIAdgcIBxB8ICeiDQAVgQAogcIA2glIA2gjIhZiQICPhSICeErQgUAKgeARIiIBUIgbATIgvAhIghAZIgMAKIA/BQIhCA2IggAaIghAgQg7A4gMANIhiBtIgZAgIgzBEIhJg1IhKBuIBLAwIgFAJIgPAZIhkC9g");
	this.shape_1.setTransform(60.5,64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19_1, new cjs.Rectangle(0,0,121,129.5), null);


(lib.Path_18_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AqwHQQAZgMAjgVIA+gkIBFgrIB+hXIAngfIAQgLIg6hJIBRhCIAngiQAZgVAQgRQBCg9AWgZIB4iFIAfgoIAvg8IAQgYIBDAwIBbiGIhFgsIAHgLIATgeIB6jpICfBJIgPAfIgoBQIgOAaQgFAMgJAPIhvC2QgHANgNASIgVAeIh5CeIhRBdIBUBLIBUhgIBShoIArg9IAXggIAWggIBzi9QAHgNAIgQIAOgbIAqhUIAPggIBmAvIhNCdIgqBJQgiA6gPAXIg2BVIibDPIiYCqQgkAng2AyIgjAhIhnhxIh1BlIhHA3QgOALgXAQIgkAaIhBAtIhAApIBRCCIioBhg");
	this.shape_1.setTransform(68.9,73.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18_0_1, new cjs.Rectangle(0,0,137.8,147.2), null);


(lib.Path_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AjfJ3QgNhJgBgVIgIg/IgGhGIgDglIgBgmIgChOIAChOQABgtADgeIAGhGIAdi/ICmAiIAThRIAsiaQANgmAGgPIAUg1Iibg/IA6iEIEvCVIg+CPIgxCTIBhAcIgSBGIgIAiQgFAWgCAQIgHAqIgHApIgFArQgDAagBAQIgHCSIhaAAIACA6QAAAcACALIABASIBagHIACAiQAAANAJA8IARBrIi8AlIgaiyIgHhbIgChcIAAgaIAJisIABgHIh6gNIgBAGIgCAUIgFBEIgBAWIAADJIAGBhIAdC+Ih6AYg");
	this.shape_1.setTransform(25.8,66.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18_1, new cjs.Rectangle(0,0,51.6,133.2), null);


(lib.Path_17_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AkKKfIBcjYIAyiZIhZgZIAiiGQADgQABgJIAPhOIAEgbIAEgbQAKhKACgjIAIi9IBSAAIgChJIgCgxIgCgXIhSAGIgCgsIgLhfQgEgigDgQIgQhXICrgiIASBuIAPBxIALDlIgMD4IgBAIIBvAMIABgHIAOkFIgHitIgUi6IgVhzIBvgWIAIArIAJAxQAGAjADAdIAKBMQACAbAEA6IAEAtIABAuIACBeIgCBfQgCA2gDAlIgDArIgEApIgjDnIiXgeIgBAEIgfCEIgvCaIgwCCICOA7IgLAZIgYA3IgZA3IgJASIgDAGg");
	this.shape_1.setTransform(26.7,80.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17_0_1, new cjs.Rectangle(0,0,53.3,161.2), null);


(lib.Path_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AvVP8IAEgiIAQhfQAbicA6ivQBOjnB6jSQA4hgBeiCIAsg3IAsg3IAvg1QAbggAUgVQDFjPDiiVQDMiGDghZQA/gaB4goICQgmQBIgRAWgEIAhgHIAVByIggAGQgNAChMASIiJAlQh7ApgyAVQjXBWjBB/QjXCNi7DGQgYAYhCBMIgqA1IgqA0QhYB5g2BfQh1DJhKDaQg3CkgaCXQgOBLgBAPIgEAhg");
	this.shape_1.setTransform(98.2,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17_1, new cjs.Rectangle(0,0,196.4,206.9), null);


(lib.Path_16_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Ax6RSIAlgHIBqgXICigsQCOgwBAgaQEAhnDjiVQD+inDfjrQAhgiBJhUQAKgLAogzIBeh9IAshAIAphAQAYgmAPgbQCLjvBWkCQBDjHAdiuQAQhWACgVIAFgmIBoANIgFAoQgBAQgGAfIgLBAQggC4hEDMQhbEPiPD1QgTAhhBBlQgPAXgeAqIhiCDQgoA0gMAMQhTBggbAcQjnDzkICuQjvCdkHBpQgxAUg/AWIhmAiIioAuIhuAZIgnAHg");
	this.shape_1.setTransform(114.7,121);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16_0_1, new cjs.Rectangle(0,0,229.5,242), null);


(lib.Path_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AoWoEIAlgiIAmgiIPiRvIglAig");
	this.shape_1.setTransform(53.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,107,117), null);


(lib.Path_15_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AntntIAxgtIOqPoIgpAnIgrAmg");
	this.shape_1.setTransform(49.4,53.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15_0_1, new cjs.Rectangle(0,0,98.9,107.8), null);


(lib.Path_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AjFA6IAOgkQAUgzANgcIAjhPQAGgNgKgQQgFgIgGgFIE0CYIAMAMQALANgFALIgfBEQgLAZgRAsIgMAgg");
	this.shape_1.setTransform(19.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0,39.5,35.8), null);


(lib.Path_14_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AjFAyQAIgOAKgXIAkhQQAHgNAMgfIAehMIEkBuIgiBUQgNAigHAPIgpBbQgLAZgJAQg");
	this.shape_1.setTransform(19.8,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14_0_1, new cjs.Rectangle(0,0,39.6,37.6), null);


(lib.Path_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Ak8mkIAYgRIJhNgIgPALg");
	this.shape_1.setTransform(31.7,43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,0,63.5,87.7), null);


(lib.Path_13_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AkimBIATgPIIyMNIgcATg");
	this.shape_1.setTransform(29.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_0_1, new cjs.Rectangle(0,0,58.3,80.1), null);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Akgm4IAZgQIInOHIgPAKg");
	this.shape_1.setTransform(28.9,45.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,57.7,91.4), null);


(lib.Path_12_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AkImTIATgNIH+MvIgcASg");
	this.shape_1.setTransform(26.5,41.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_0_1, new cjs.Rectangle(0,0,53.1,83.4), null);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("An+iEIAJggIP0E0IgGAVg");
	this.shape_1.setTransform(51.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,102.2,32.9), null);


(lib.Path_11_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AnRh/IAHgZIOcEOIgKAjg");
	this.shape_1.setTransform(46.6,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_0_1, new cjs.Rectangle(0,0,93.2,30.6), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Am+kXIANgUINvJNIgGAKg");
	this.shape_1.setTransform(44.7,30);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,89.3,60), null);


(lib.Path_10_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AmXkDIAKgQIMlIPIgQAXg");
	this.shape_1.setTransform(40.8,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_0_1, new cjs.Rectangle(0,0,81.6,55.1), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AinAKIB9hTIhJhkQAZgSAXgSIAvgmIBXBsIg9AwIChDTIhbBCQggAYgfATIgdATg");
	this.shape_1.setTransform(16.8,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,33.5,49.6), null);


(lib.Path_9_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AhjCWIBIg5IiTjBIBphLIAngbIBEgtICJDZIiTBiIBCBbIhyBZg");
	this.shape_1.setTransform(17.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0_1, new cjs.Rectangle(0,0,35,49.5), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AlRBcIBqgXIAzgOIA4gQIAegJICWg2IA7gXIA1gZIAvgWIBhgzIAaAwIgHAEIgTALIhIAkQgTALgeANIg3AXIgdANIgeAMIh8AtQguARgPADIg6AQQgdAJgXAFIhsAYg");
	this.shape_1.setTransform(33.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,67.6,29.1), null);


(lib.Path_8_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AmOB7IAIgFIAXgNIBVgsIAcgNIBfgrIBGgcICTg2QAzgSAWgGIBkgcIAegHIBdgWIAagFIAKgCIAJAxIh+AcIgdAHIhjAcIgjAKIgkAMIiQA1IgjANIgiAPIheAqIgbAOIhTAqIgXANIgIAFg");
	this.shape_1.setTransform(39.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_0_1, new cjs.Rectangle(0,0,79.9,33.2), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Aj5FXIAZgaIAdgfIAkgqQAQgSAZgfIAtg6IAtg/QAbglAQgdQAggxAKgSIAnhEIAhhAQASgkAKgXIA0h7IApAQIg1B+QgMAcgyBhIgnBFQgNAYgeAtQgSAdgbAnIgtBAIguA6QgZAhgRASIglArIgeAfIgaAbg");
	this.shape_1.setTransform(25,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,50.1,74.9), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AaQKhQhRgdhJgiIhjgvQgygZg5ghQhhg1h4hUQgpgdg+gxQgzgpgpglQhahSg9hCIg3g+IhJhcIgQh5IgOACQgXADgSAAIg/ADIhSAAQhfgBhtgQQh2gRhsggQhegch7g2QhCgfgdgRIhSgwIgjgXIgggVQgTgMgfgZIgrghIqzOMIhOg9Ig1gtQh9hpiLiaQhlhwh9i0IhaiPIAUgMIBXCLQB2CtBmBxICECLQBZBVAjAdIAyAsIApAgIAkAcIK5uHIAKAJIAgAZQA1ApBAAoIAoAZQANAIAeAQIBfAwQB5A3BhAcQBsAgB3ARQBtAQBgABIA/AAIATgBIB3gIIASCGIAhApQAkAuA3A7IBCBEQAsArAhAfIBZBLQA+AxAjAZQBvBQBfA1QAsAaA5AeQAxAZAsAVICTA/IA6AWImYsPIAhgSIBXgyQCBhPB0hkQB+hrBYhrIATgXIARgVIAzhAIASANIgGAIIgSAWIg+BOQhYBqh9BsQh8Brh4BIIgwAdIglAVQgQAKgJAEIgJAEIGtMpg");
	this.shape_1.setTransform(197.4,69.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,394.7,139.2), null);


(lib.Path_6_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("ApEEVIR/o2IAKAVIyDItg");
	this.shape_1.setTransform(58.1,29);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_0_1, new cjs.Rectangle(0,0,116.3,57.9), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Ap9EqIT3plIAEAJIzyJug");
	this.shape_1.setTransform(63.8,31.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,127.7,63.3), null);


(lib.Path_5_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AaiWyIASi6IACgzQAMkig7kwQgpjIhBi1QhNjRhui8Qh2jOiYiyQidi5i+iZQi/iajWhxQjShxjfhFQjRhBjegeIjLgTIhjgDIgvAAIguABQiFABjLAcIiLAaIh2AcIimAzQg8AVgEACIgLgRQADgCA1gTICVgvQEGhJEZgRIBYgCIAtgCIAuABIC/AJQDaAUC/AxQDcA5DIBaQDVBfDCCEQDECHCmCmQClClCFC/QB/C3BfDJQBZC/A2DCQAMAnAMA2IAWBaIAnEAQADAaADA0IADAmIABAkIAAD9IgTDGg");
	this.shape_1.setTransform(173.8,146.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_0_1, new cjs.Rectangle(0,0,347.5,292.2), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AKkTAIifgIQi5gRibgoQiygtishOQizhPifhuQimhyiIiJQiIiHhwihQhqiYhOinQhLifgtiiQgJgggLgtIgRhMIghjUIgFhBQgEgqAAgUIgBg6QgBgVABhVIAFhYIAMh7IAXADIgMB0QgEAugBAjQgKDwAwD9QAjCoA1CUQBBCuBaCcQBhCpCACWQCBCYCfCBQCbB9C1BhQCwBdC3A6QCxA2C1AYICpAQIBSACQAuABAggBQBygCCkgXIB0gVIBhgYICKgqQAugQAHgEIALAUQgCABgsAQIh8AoQjYA8jtAPIhIACIg8ABIgQAAg");
	this.shape_1.setTransform(144.7,121.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0.1,0,289.3,243.2), null);


(lib.Path_4_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("ALzHDIgpgoIhCg/IhYhNQhuhdh8hWQiShjiOhLIjmhvIhMgfIjWhNIhBgSQg0gQg+gPIhZgUIg4gLIgVgEIAPhQIAUADIAaAFIAhAHIBbAVQBBAPA0AQIDTBEIBMAeIBPAfIB2A2IAnAUIBOAoQCSBNCWBnQB/BYByBfICdCQIAsAqIAOAPIg6A5g");
	this.shape_1.setTransform(82.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0_1, new cjs.Rectangle(0,0,165.6,93.3), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AKzGbIgzgKIhQgSQg3gNgvgOIg6gRIjBhFIhEgcIjPhjQiAhEiDhaQhwhNhihTIi8iwIBAg/IAMANIAlAjIA5A3QAPAOA+A1QBfBRBsBKQB+BYB8BAIDHBhIBCAaIC7BCIA4ARQAtANA2ANIBNASQAVAFAcAFIASACIgQBZg");
	this.shape_1.setTransform(72.6,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,145.3,82.9), null);


(lib.Path_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AqrGWIBfh1QA3g/APgQIBwhuIBOhGQCMhwBnhAIBCgnIBBgmIBDgiQAngUAbgLIBBgdICzhCIAbgJIAZgHIDDgwIAOBFIi8AuQgiAJgSAGIiuBAIg+AcQgaALgmATIhBAhIh+BLQhkA+iIBsIhjBaIgtAsIgoApQgQAQg0A8IhcBxg");
	this.shape_1.setTransform(68.4,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0_1, new cjs.Rectangle(0,0,136.8,89.5), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AodEcIA1gLQAsgJBagbICIgyIAwgWQAUgIAegPIAygaIBig6QBNgvBrhWQA+g3APgPIBDhCIA1g7IBHhZIA9AuIhLBdQgnAugPAQIgiAiIgkAjQgNAOhEA7QhsBYhTAyIg1AgIgzAeIg0AaQgfAQgVAJIjBBLQhfAcgtAKIg2AMg");
	this.shape_1.setTransform(54.2,36);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,108.3,72), null);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AgaG7IgDt1IAKgBIAxACIgON1g");
	this.shape_1.setTransform(3,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0_1, new cjs.Rectangle(0,0,6,88.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AgZHnIAPvOIAhAAIADPPg");
	this.shape_1.setTransform(2.6,48.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,5.2,97.7), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AmCjRIAggzILlHlIgXAkg");
	this.shape_1.setTransform(38.7,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,77.5,52.1), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Amlj8IASgcIM5IFIgcAsg");
	this.shape_1.setTransform(42.2,28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,84.5,56.2), null);


(lib.Path_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#71AB5C").s().p("AmDjeIAZgnILuHWIgiA1g");
	this.shape_5.setTransform(38.8,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_5, new cjs.Rectangle(0,0,77.7,52.5), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#71AB5C").s().p("AmnjqIAfgwIMwIVIgVAgg");
	this.shape_5.setTransform(42.4,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,84.8,56.6), null);


(lib.CompoundPath_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AhTCUIgohHIgWgmIgVggIgUgeIDtidIAuBHIAZArIAtBPIAUAlIj9CDgAiggVIBpCyIDXhyIgQggIhkikg");
	this.shape_1.setTransform(18.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_0_1, new cjs.Rectangle(0,0,37.4,36.2), null);


(lib.CompoundPath_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AiEBKIgmhDIgQgeIEWiQIANAbIAgA4IASAdIAgAzIkFCrgAifgUIA/BwIAhAyIDgiRIhTiOg");
	this.shape_1.setTransform(18.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_1, new cjs.Rectangle(0,0,37.4,33.5), null);


(lib.CompoundPath_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AicBJIguhoIgFgKIEuiVIAGALQAFAIAJAXIBGCoIAXBCIlBBpgAi3gmIA+COIAMAiIAMAiIEYhfIgNgnQgDgNgMgaIhHimg");
	this.shape_1.setTransform(20.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_0_1, new cjs.Rectangle(0,0,41.6,38.3), null);


(lib.CompoundPath_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AiZBjIg5iUIFhh0IAfBVIAlBSIlNCkgAi4gsIAKAeQAGARATAwIAqBeIEliOIghhKQgQgngEgOIgJgZg");
	this.shape_1.setTransform(21.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_1, new cjs.Rectangle(0,0,42.2,33.3), null);


(lib.CompoundPath_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("AonADIADhEIRMAaIgEBpgAoRgJIQiA0IACg8Iwjghg");
	this.shape_1.setTransform(55.2,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0_1, new cjs.Rectangle(0,0,110.4,13.2), null);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("ApeAgIAEhcIS5BFIgBAIIgBArgApGANISMAkIABgeIyMg6g");
	this.shape_1.setTransform(60.7,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, new cjs.Rectangle(0,0,121.3,12.1), null);


(lib.CompoundPath_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("ApHhZIAVhfIR6DXIghCagAooiEIgIAiIRIEBIAYhuIxRjYQgCASgFARg");
	this.shape_1.setTransform(58.4,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0_1, new cjs.Rectangle(0,0,116.8,37), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71AB5C").s().p("Ap+gyIAdiHITgEtIgPBGgApahxQgGAYgEAYIS/DtQACgNAEgNIAGgZIy2kag");
	this.shape_1.setTransform(63.9,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,127.8,37.3), null);


(lib.Backgroundsolid_mod1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Backgroundsolid_mod1aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,672);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#392704").s().p("AitDvQgYAAgHgBQgVgDgEgMQgCgHAFgPIAKgfQAGgXgDgjQgGgogBgTQgQiyBThGQBJg9BiAZQAogHAeAHQAZAGAeAUQA7AoATBPQASBIgRBfQgIAnAAAWQAAAhANAZQAMAXgXAKQgKAEgcACg");
	this.shape.setTransform(0.1,-34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B59D64").s().p("AhAAbQgZgPgQgOQAMgGAFgKIALgeICeAAIAKAcQAEALALAGQgQAOgbAQQgmAXgZAAQgbAAglgXg");
	this.shape_1.setTransform(0.2,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66A7CB").s().p("AmBD9IAojwQAIhaBRg6QAhgXBpgsQAVgIAGgKIANgiICdAAIANAiQAGAKAVAIICKA6QBSAqAHAuIAoE3g");
	this.shape_2.setTransform(0.3,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A1602").s().p("AhxDtIAAnZIAPADQApgHAdAHQAaAGAcAUQA7AoAUBPQASBIgSBfQgHAngBAWQAAAhANAZQAMAXgWAKQgLAEgbACg");
	this.shape_3.setTransform(11.7,-34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E7E8").s().p("Ag3ADIAZgOIhcALIAGgJQAhgTARgdIAEgGIA+A6IA/g6QAFAMAHAJQAUAXAXAMIAFAHIhcgLIAZAOIg4A+g");
	this.shape_4.setTransform(46.2,-12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAD3A2").s().p("AgYBaQgZgPgOgQQgRgTgFgaQgBgEgCgCIgFgEIgDgEQgLgcABgvQAAgJAEgBQAEgBAEAIIADAHQADAFADgBQADgCABgFQAIgjAQAMQAmAZAgACIgNgTIAHAFQAaAWAiAIIgFgNQAWAHAKAIQAPAMgCATQgEAmgQAaQgQAbgjAUQgTALgLAAQgKAAgUgLg");
	this.shape_5.setTransform(45.5,-27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4C080").s().p("AgsANQgMgIgOgKQAGgIAEgIIAHgTIBtAAIAIAVIAHAOQgKAHgRALQgaAcgSAAQgSAAgagcg");
	this.shape_6.setTransform(46.1,-17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A84F3D").s().p("AkHCJIAXiJQAFgdA1gdQAZAUAmgWQAigSATgeQADgEADgHIAGgRIBtAAIAIAVQAEAMAIAJQAXAbAcANQAiAOAVgTQA3AdAFAeIAXCJg");
	this.shape_7.setTransform(46.3,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A3871E").s().p("AjHCcQAmAJALgUQgXADgJggQANAEAIgDQAMgEAAgOQAAgKgDgUQgHhDAFgxQAEg5AdglQAdglArgDQBAggBCAlQBHAoAGBZQACAZgDAhIgEA4QgCAbAFARQAHAcAVgGQgOASgPAAQAPAMAegHQgQAwgqgKQgjgIgfgkQgIgJgEgMIgIgVIhtAAIgGARQgCAHgDAEQgaAogqAQQgMAEgLAAQgfAAgNgog");
	this.shape_8.setTransform(46.1,-32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#232222").s().p("ABdBFQgCgbgKgJQgCgBgMAFQgNAFgCAAIgbgKQgJAMgFgBIg/gPQgBAAgEAFIgFAGQgCAAgMgEQgMgFgBABQgIAEgCAeIgBAmIgMgDIgIgbIgJABQgDhIAGgaQACgHAIgQQAJgVAJgHQAVgRAcgIQAmgLAlAMQAaAAAFABQAKABASALQAbAQAJAaQAJAcABAgIgCA5IgMgCIgLAhIgMADIgBgmg");
	this.shape_9.setTransform(-49.5,-43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#786432").s().p("AgaCuQgbgLgYgeQgXgbgIgbIgCgJIgMgHQgOgkABghIAMgIQgDgUAAgOQgCggAEgRQAFgaASgRQASgRAcgJQAagJAdAAQAeAAAaAJQAcAJASARQASARAFAaQADAQgBAhIgDAiIAMAIQAAAigNAjIgMAHIgCAJQgIAbgXAbQgZAegbALQgNACgNAAQgMAAgOgCg");
	this.shape_10.setTransform(-49.5,-34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AidB8IAYiLQAGgmAjgNICVg5IBlDGIAAAxg");
	this.shape_11.setTransform(-65.3,-4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("Ak7B8IAYiLQAGgmAjgNICWg5IBkDGIBljGICWA5QAiAMAHAnIAYCLg");
	this.shape_12.setTransform(-49.5,-4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#27447D").s().p("AgfB1QAIioACgKQABgCgFgBIgHgCQgBgCAAgHIgBgKQgBgJACgKQADgNAGABQAYAFAZgFQAGgBACANQACAKAAAJQgBAEgMANQgCACACAFQACAKAICog");
	this.shape_13.setTransform(-49.5,-4.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak7CUIAYiMQAGglAjgNICWg5IAbgwICTAAIAbAwICWA5QAiAMAHAmIAYCMg");
	this.shape_14.setTransform(-49.5,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkAuIAAgSQASAIAQAAQASAAAAgMQAAgEgCgCIgHgGIgNgGQgRgGgHgGQgGgHAAgLQAAgNAKgHQAMgHAQAAQARAAAQAHIgHAQQgQgHgLAAQgQAAAAAKQAAAFAFADQAEADAOAGQAMAFAGADQAFAEADAFQADAFAAAIQAAAPgLAHQgKAIgTAAQgUAAgNgGg");
	this.shape_15.setTransform(37.9,59.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIARAAIADARIABAAQAEgHAIgHQAIgFAJAAQAIAAADABIgCAUQgFgCgFAAQgNAAgGAJQgIAIAAAOIAAAzg");
	this.shape_16.setTransform(29.8,59.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAnQgOgOAAgYQAAgYANgOQAMgOAVAAQATAAAMAMQAMAMAAAVIAAALIhDAAQABAPAHAHQAIAIAMAAQAJAAAIgBIARgGIAAARQgKAFgGABIgTABQgWAAgNgNgAgOgdQgGAHgBAMIAtAAQAAgLgGgIQgHgGgJAAQgJAAgHAGg");
	this.shape_17.setTransform(19.8,59.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglBDQgLgIAAgNQAAgKAGgGQAFgGALgDQgEgBgDgFQgDgEAAgEQAAgGADgDIAKgHQgJgEgEgHQgFgIAAgKQAAgRALgJQAKgJATAAIAIABIAHABIAjAAIAAAMIgRADIAEAIQABAEAAAGQAAAPgKAJQgLAJgSAAIgJgBQgHAFAAAEQAAAEAEACQADABAIAAIARAAQARAAAIAIQAJAHAAANQAAARgOAKQgOAJgaAAQgUAAgLgHgAgYAhQgFAEAAAIQAAAHAGADQAHAEALAAQAQAAAJgFQAIgFAAgIQAAgHgEgDQgFgCgNAAIgPAAQgJAAgGAEgAgPg2QgFAGAAAKQAAAJAFAFQAFAFAJAAQASAAAAgTQAAgLgFgFQgFgFgIAAQgJAAgFAFg");
	this.shape_18.setTransform(9.2,61.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAsQgJgIAAgOQAAgQAMgHQAMgIAWgBIASAAIAAgGQAAgJgFgFQgEgFgKAAQgHAAgHACIgNAGIgHgQIASgGQAIgCAJAAQAUAAAJAIQAKAIAAASIAABDIgPAAIgFgOIAAAAQgHAKgIADQgHADgLAAQgPAAgIgIgAAJADQgPABgGAEQgHAEAAAKQAAAHAEADQADAEAJAAQALAAAGgHQAIgGAAgMIAAgJg");
	this.shape_19.setTransform(-1.7,59.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAzIAAg9QAAgMgFgFQgEgGgLAAQgNAAgFAIQgHAIAAASIAAAyIgVAAIAAhjIARAAIADANIAAAAQAFgHAIgEQAJgEAJAAQAlAAAAAlIAABAg");
	this.shape_20.setTransform(-12.7,59.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghAsQgJgIAAgOQAAgQAMgHQAMgIAWgBIASAAIAAgGQAAgJgFgFQgEgFgKAAQgIAAgGACIgNAGIgHgQIASgGQAIgCAJAAQAUAAAJAIQAKAIAAASIAABDIgPAAIgFgOIAAAAQgHAKgIADQgHADgLAAQgPAAgIgIgAAIADQgOABgHAEQgGAEAAAKQAAAHAEADQADAEAJAAQALAAAGgHQAHgGAAgMIAAgJg");
	this.shape_21.setTransform(-24.4,59.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAwBDIABhvIgBAAIgoBvIgSAAIgnhvIgBAAIACBvIgUAAIAAiEIAfAAIAlBpIAAAAIAmhpIAfAAIAACEg");
	this.shape_22.setTransform(-38.1,57.8);

	this.instance = new lib.Path_0_2();
	this.instance.parent = this;
	this.instance.setTransform(0.1,69.9,1,1,0,0,0,96.5,33.3);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-33.3,1,1,0,0,0,103.2,69.9);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103.2,206.5,206.5);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#392704").s().p("AitDvQgYAAgHgBQgVgDgEgMQgCgHAFgPIAKgfQAGgXgDgjQgGgogBgTQgQiyBThGQBJg9BiAZQAogHAeAHQAZAGAeAUQA7AoATBPQASBIgRBfQgIAnAAAWQAAAhANAZQAMAXgXAKQgKAEgcACg");
	this.shape.setTransform(0.1,-34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B59D64").s().p("AhAAbQgZgPgQgOQAMgGAFgKIALgeICeAAIAKAcQAEALALAGQgQAOgbAQQgmAXgZAAQgbAAglgXg");
	this.shape_1.setTransform(0.2,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66A7CB").s().p("AmBD9IAojwQAIhaBRg6QAhgXBpgsQAVgIAGgKIANgiICdAAIANAiQAGAKAVAIICKA6QBSAqAHAuIAoE3g");
	this.shape_2.setTransform(0.3,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A1602").s().p("AhxDtIAAnZIAPADQApgHAdAHQAaAGAcAUQA7AoAUBPQASBIgSBfQgHAngBAWQAAAhANAZQAMAXgWAKQgLAEgbACg");
	this.shape_3.setTransform(11.7,-34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E7E8").s().p("Ag3ADIAZgOIhcALIAGgJQAhgTARgdIAEgGIA+A6IA/g6QAFAMAHAJQAUAXAXAMIAFAHIhcgLIAZAOIg4A+g");
	this.shape_4.setTransform(46.2,-12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAD3A2").s().p("AgYBaQgZgPgOgQQgRgTgFgaQgBgEgCgCIgFgEIgDgEQgLgcABgvQAAgJAEgBQAEgBAEAIIADAHQADAFADgBQADgCABgFQAIgjAQAMQAmAZAgACIgNgTIAHAFQAaAWAiAIIgFgNQAWAHAKAIQAPAMgCATQgEAmgQAaQgQAbgjAUQgTALgLAAQgKAAgUgLg");
	this.shape_5.setTransform(45.5,-27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4C080").s().p("AgsANQgMgIgOgKQAGgIAEgIIAHgTIBtAAIAIAVIAHAOQgKAHgRALQgaAcgSAAQgSAAgagcg");
	this.shape_6.setTransform(46.1,-17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A84F3D").s().p("AkHCJIAXiJQAFgdA1gdQAZAUAmgWQAigSATgeQADgEADgHIAGgRIBtAAIAIAVQAEAMAIAJQAXAbAcANQAiAOAVgTQA3AdAFAeIAXCJg");
	this.shape_7.setTransform(46.3,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A3871E").s().p("AjHCcQAmAJALgUQgXADgJggQANAEAIgDQAMgEAAgOQAAgKgDgUQgHhDAFgxQAEg5AdglQAdglArgDQBAggBCAlQBHAoAGBZQACAZgDAhIgEA4QgCAbAFARQAHAcAVgGQgOASgPAAQAPAMAegHQgQAwgqgKQgjgIgfgkQgIgJgEgMIgIgVIhtAAIgGARQgCAHgDAEQgaAogqAQQgMAEgLAAQgfAAgNgog");
	this.shape_8.setTransform(46.1,-32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#232222").s().p("ABdBFQgCgbgKgJQgCgBgMAFQgNAFgCAAIgbgKQgJAMgFgBIg/gPQgBAAgEAFIgFAGQgCAAgMgEQgMgFgBABQgIAEgCAeIgBAmIgMgDIgIgbIgJABQgDhIAGgaQACgHAIgQQAJgVAJgHQAVgRAcgIQAmgLAlAMQAaAAAFABQAKABASALQAbAQAJAaQAJAcABAgIgCA5IgMgCIgLAhIgMADIgBgmg");
	this.shape_9.setTransform(-49.5,-43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#786432").s().p("AgaCuQgbgLgYgeQgXgbgIgbIgCgJIgMgHQgOgkABghIAMgIQgDgUAAgOQgCggAEgRQAFgaASgRQASgRAcgJQAagJAdAAQAeAAAaAJQAcAJASARQASARAFAaQADAQgBAhIgDAiIAMAIQAAAigNAjIgMAHIgCAJQgIAbgXAbQgZAegbALQgNACgNAAQgMAAgOgCg");
	this.shape_10.setTransform(-49.5,-34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AidB8IAYiLQAGgmAjgNICVg5IBlDGIAAAxg");
	this.shape_11.setTransform(-65.3,-4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("Ak7B8IAYiLQAGgmAjgNICWg5IBkDGIBljGICWA5QAiAMAHAnIAYCLg");
	this.shape_12.setTransform(-49.5,-4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#27447D").s().p("AgfB1QAIioACgKQABgCgFgBIgHgCQgBgCAAgHIgBgKQgBgJACgKQADgNAGABQAYAFAZgFQAGgBACANQACAKAAAJQgBAEgMANQgCACACAFQACAKAICog");
	this.shape_13.setTransform(-49.5,-4.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak7CUIAYiMQAGglAjgNICWg5IAbgwICTAAIAbAwICWA5QAiAMAHAmIAYCMg");
	this.shape_14.setTransform(-49.5,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkAuIAAgSQASAIAQAAQASAAAAgMQAAgEgCgCIgHgGIgNgGQgRgGgHgGQgGgHAAgLQAAgNAKgHQAMgHAQAAQARAAAQAHIgHAQQgQgHgLAAQgQAAAAAKQAAAFAFADQAEADAOAGQAMAFAGADQAFAEADAFQADAFAAAIQAAAPgLAHQgKAIgTAAQgUAAgNgGg");
	this.shape_15.setTransform(37.9,59.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIARAAIADARIABAAQAEgHAIgHQAIgFAJAAQAIAAADABIgCAUQgFgCgFAAQgNAAgGAJQgIAIAAAOIAAAzg");
	this.shape_16.setTransform(29.8,59.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAnQgOgOAAgYQAAgYANgOQAMgOAVAAQATAAAMAMQAMAMAAAVIAAALIhDAAQABAPAHAHQAIAIAMAAQAJAAAIgBIARgGIAAARQgKAFgGABIgTABQgWAAgNgNgAgOgdQgGAHgBAMIAtAAQAAgLgGgIQgHgGgJAAQgJAAgHAGg");
	this.shape_17.setTransform(19.8,59.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglBDQgLgIAAgNQAAgKAGgGQAFgGALgDQgEgBgDgFQgDgEAAgEQAAgGADgDIAKgHQgJgEgEgHQgFgIAAgKQAAgRALgJQAKgJATAAIAIABIAHABIAjAAIAAAMIgRADIAEAIQABAEAAAGQAAAPgKAJQgLAJgSAAIgJgBQgHAFAAAEQAAAEAEACQADABAIAAIARAAQARAAAIAIQAJAHAAANQAAARgOAKQgOAJgaAAQgUAAgLgHgAgYAhQgFAEAAAIQAAAHAGADQAHAEALAAQAQAAAJgFQAIgFAAgIQAAgHgEgDQgFgCgNAAIgPAAQgJAAgGAEgAgPg2QgFAGAAAKQAAAJAFAFQAFAFAJAAQASAAAAgTQAAgLgFgFQgFgFgIAAQgJAAgFAFg");
	this.shape_18.setTransform(9.2,61.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAsQgJgIAAgOQAAgQAMgHQAMgIAWgBIASAAIAAgGQAAgJgFgFQgEgFgKAAQgHAAgHACIgNAGIgHgQIASgGQAIgCAJAAQAUAAAJAIQAKAIAAASIAABDIgPAAIgFgOIAAAAQgHAKgIADQgHADgLAAQgPAAgIgIgAAJADQgPABgGAEQgHAEAAAKQAAAHAEADQADAEAJAAQALAAAGgHQAIgGAAgMIAAgJg");
	this.shape_19.setTransform(-1.7,59.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAzIAAg9QAAgMgFgFQgEgGgLAAQgNAAgFAIQgHAIAAASIAAAyIgVAAIAAhjIARAAIADANIAAAAQAFgHAIgEQAJgEAJAAQAlAAAAAlIAABAg");
	this.shape_20.setTransform(-12.7,59.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghAsQgJgIAAgOQAAgQAMgHQAMgIAWgBIASAAIAAgGQAAgJgFgFQgEgFgKAAQgIAAgGACIgNAGIgHgQIASgGQAIgCAJAAQAUAAAJAIQAKAIAAASIAABDIgPAAIgFgOIAAAAQgHAKgIADQgHADgLAAQgPAAgIgIgAAIADQgOABgHAEQgGAEAAAKQAAAHAEADQADAEAJAAQALAAAGgHQAHgGAAgMIAAgJg");
	this.shape_21.setTransform(-24.4,59.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAwBDIABhvIgBAAIgoBvIgSAAIgnhvIgBAAIACBvIgUAAIAAiEIAfAAIAlBpIAAAAIAmhpIAfAAIAACEg");
	this.shape_22.setTransform(-38.1,57.8);

	this.instance = new lib.Path_0_2();
	this.instance.parent = this;
	this.instance.setTransform(0.1,69.9,1,1,0,0,0,96.5,33.3);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-33.3,1,1,0,0,0,103.2,69.9);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103.2,206.5,206.5);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgFACgHIATASQAGAGAGgGIAGgGQADgDAAgDQAAgEgDgDIgRgTQAGgCAGAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape.setTransform(-21.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAYIgagbIAZgZIAbAaQAFAEAAAIQAAAIgFAGQgGAFgIAAQgIAAgEgFgAAFAFQgFAGAFAFQAGAFAEgFQAGgFgGgGQgCgCgDAAQgCAAgDACg");
	this.shape_1.setTransform(-14,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAQIA1g1QAGgFAHAAQAJAAAFAFQAGAGgBAIQABAIgGAFIg1A1gAAcgWIgpApQgDADADACQACADADgDIApgpQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBIgDgBIgCABgAARggIgoApQgDADADACQAAABABAAQAAABABAAQABAAAAgBQABAAAAgBIAqgpQACgCgCgDIgDgBIgDABg");
	this.shape_2.setTransform(-15.1,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAVIATgcIAJgCIASgSIAJAJIgSASIgCAJIgcATg");
	this.shape_3.setTransform(-21,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwAgQgFgGAAgIIAAg1QAAgDACgCQADgDADAAIBbAAQAIAAAAAIIAAA1QAAAIgEAGQgIAMgSAAIgtAAIgCAAQgSAAgHgMgAgIgKIAAAUQAAAGAIAAQAJAAAAgGIAAgUQAAgGgJAAQgIAAAAAGg");
	this.shape_4.setTransform(13.6,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAAQAAgHgJgFQgJgEgLAAQgLAAgIAEQgKAGAAAHIABAcIgOAAIAAgcQAAgNAOgJQAMgIAQABQARgBALAHQAOAIAAAOIABAdIgOAAg");
	this.shape_5.setTransform(13.6,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhAAnQgFAAgBgGIAAhGQAAgCAbASIAfAUQAMAGALgGIAhgVQAbgRAAACIAABGQAAAGgGAAgAARAIIAqAaIAFgIIgrgagAg+AaIAEAIIArgaIgFgIg");
	this.shape_6.setTransform(12.6,-25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAUQg0gkgGAAIAAgCQABgEAFAAICBAAQAGAAAAAEIAAACQgCAAgaAQIggAUQgFADgGAAQgFAAgHgDg");
	this.shape_7.setTransform(12.6,-28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAEAdIAAgsIgGAFIgIADIAAgHQAFgCAFgEIAGgIIAFAAIAAA5g");
	this.shape_8.setTransform(-14.2,-20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAdIAAgsIgGAFIgIADIAAgHQAFgCAFgEIAGgIIAFAAIAAA5g");
	this.shape_9.setTransform(-18.1,-20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAYQgFgIAAgQQAAgKACgGQACgGAEgDQAFgEAFAAIAIACQAEADACADIADAIQACAGAAAHQAAAJgDAIQgBAEgEAFQgFAEgGAAQgHAAgGgGgAgHgTQgDAFgBAOQAAAOAEAFQAEAFADAAQAFAAADgFQADgFABgOQgBgOgDgEQgDgFgFAAQgEAAgDAEg");
	this.shape_10.setTransform(-22.3,-20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEAdIAAgsIgGAFIgIADIAAgHQAFgCAFgEQAFgGABgCIAFAAIAAA5g");
	this.shape_11.setTransform(-13.6,-27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAYQgGgIAAgQQAAgHACgJQACgFAEgEQAGgEAEAAQAFAAADACQADACADAEQADAFAAADQACAGAAAHQAAALgCAGQgCAGgEADQgEAEgHAAQgIAAgEgGgAgHgTQgDAFgBAOQABAOADAFQADAFAEAAQAFAAADgFQADgFABgOQgBgNgDgFQgDgFgFAAQgEAAgDAEg");
	this.shape_12.setTransform(-17.8,-27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AADAdIAAgsIgFAFIgIADIAAgHQAFgCAFgEQAEgFACgDIAFAAIAAA5g");
	this.shape_13.setTransform(-22.6,-27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513307").s().p("AASAuIABgZQgBgEgIgFQgKgGgOABQgQADgKAAIAAhJQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIADgGIACABQAHAJAMAEIATAFQAKAEAJANQAKAMABAJQAFANgFApIgLAIIgGAYQgEgFABgVg");
	this.shape_14.setTransform(-52.1,-54.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#704F19").s().p("AA7A0IABgZQgBgEgIgFQgKgGgPABIgSACQgIACgMgBQgSgDgIAAQgOAAgFAIQgDAFACAYQACAWgGAEIgEgWIgLgIQgEgbAAgHIAAgdQACgPAIgIQAEgFAGgKIAGgKQABgBAEAGQADAEACgBQADgBAAgEIgCgIQgBgCABgEQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAIAIAIQAGAEAHACIgBgFQAAgGAFgDQAIAOAGAEQAEADADgEIADgGIACABQAHAJAMAEIAUAFQAKAEAJANQAKAMABAJQAFAMgFAqIgLAIIgGAYQgEgFABgVg");
	this.shape_15.setTransform(-56.2,-54.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7C98F").s().p("AgPBpQgQgHgPgSQgOgQgFgQIgBgGIgHgDQgIgVAAgVIAHgGIgCgUQgBgSACgLQAEgQAKgKQAWgVAnAAQAoAAAVAVQALAKADAQQACAKAAATIgCAUIAHAGQAAATgIAXIgHADIgCAGQgEAQgOAQQgPASgQAHIgQABIgPgBg");
	this.shape_16.setTransform(-56.2,-49.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#404041").s().p("Ai1BDIANhHQAEgWAVgIIBWggIAJAbQARAbAfAAQAgAAARgbQAIgOABgNIBXAgQAUAIADAWIAOBHg");
	this.shape_17.setTransform(-55.9,-32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BD9C61").s().p("AgvAjIgPgxIANgFIABgBQAFgDADgFIAFgOIBLAAIAFAOQACAFAEADIAMADIgLAuIgyAOg");
	this.shape_18.setTransform(-56.2,-37.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAD3A2").s().p("AgNA6QgegSgFgaQgBgCgEgEIgDgCQgGgTABgYQAAgFADgBQABAAADAEIACAEQAAABABABQAAAAABAAQAAABAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAGgUQADgHADgBQADAAAFADQARAMAtAPQAdAKgCARQgCAWgJAPQgJAQgUAMQgMAHgGAAQgGAAgLgHg");
	this.shape_19.setTransform(47.6,-45.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E4C080").s().p("AgkAKIgHgTQAGgDABgEIAFgMIA/gBIAFAMQACAFAEACQAAAKgGAKQgKAUgbAAIAAAAQgZAAgLgUg");
	this.shape_20.setTransform(48.1,-38.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5998C2").s().p("AiLABQADgRAhgSIA3gXQAJgEACgEIAFgOIA/AAIAFANQADAFAIADQAyATAGAEQAiAQADATIANBOIkxACg");
	this.shape_21.setTransform(48.2,-33.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A3871E").s().p("AhSB1QgJgBgBgFQgBgDACgGIAEgMQAEgRgHhHQgHhHAigdQAdgZAoAKQAQgDAMADQAKACANAIQAYAQAIAgQAHAegHAmQgDAQAAAcQAAAhAGAKQAFAKgJAEQgFABgLABIiOABIgMAAg");
	this.shape_22.setTransform(48,-47.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E7E8").s().p("AggAFIAPgIIg3AGIAdgrIArAoIAsgoIAdArIg3gGIAPAIIghAkg");
	this.shape_23.setTransform(-55.5,16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C0A153").s().p("AgOA7QgegRgGgcQAAgCgEgEIgCgCQgGgPAAgdQAAgFADgBQACAAACAEIACAFQABAAAAABQABAAAAABQAAAAABAAQAAAAAAAAIADgEIAGgUQACgHAEgBQADAAAFADQARAMAuAQQAdAKgCASQgCAWgKAPQgJAQgVAMQgLAHgHAAQgFAAgMgHg");
	this.shape_24.setTransform(-56,5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A8831E").s().p("AgrgKQAFgDACgEIAFgMIBAAAIAEAMQADAEAEADIgsAog");
	this.shape_25.setTransform(-55.5,13.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#27447D").s().p("AibBQIAOhQQADgRAhgRQAIgFAxgTQAJgEACgEIAGgNIBAAAIAFANQACAEAJAEQAxATAIAFQAhARADARIAOBQg");
	this.shape_26.setTransform(-55.5,18.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#392704").s().p("AhHBjQgNgTgFgpQgFgjADgaQADgjAagWQAZgTAkAAIADAAQAkAAAZATQAaAWADAjQADAbgFAiQgFAogNAUg");
	this.shape_27.setTransform(-55.5,1.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#232222").s().p("Ag7A7IgDgTIgKgHQgDgYABgNQAAgQAJgPQAFgJAMgHQAKgHAKgBIAPAAQAVgHAgALQAgAQABAhQADARgCAXIgJAEIgEATIgEADQAAgVgEgSQgDgNgKACQgNAGgJADQgNADgTgBQgPgCgIgGQgMgIgEAVQgDAQACAVg");
	this.shape_28.setTransform(51.7,-4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#786432").s().p("AgOBkQgQgGgOgRQgNgQgFgPIgBgFIgHgEQgIgUABgUIAGgFQgCgKAAgJQgBgSACgKQADgPALgKQAVgUAlgBQAlAAAWAUQAKAKADAPQACAKgBASIgCAUIAIAFQgBAUgHATIgHAEIgBAFQgFAQgNAQQgOARgQAGIgPACIgOgCg");
	this.shape_29.setTransform(51.7,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6CA24F").s().p("AgRBEQAEhgACgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgIgHAAgCIABgLQABgIAEABQANADAPgDQADgBABAIQACAGgBAFQAAACgHAHQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQABAHAFBgg");
	this.shape_30.setTransform(51.7,17.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AioAFQAEgWAUgGIBWgiIAQgcIBUAAIAQAcIBWAhQAUAGAEAWIAOBQIlrABg");
	this.shape_31.setTransform(51.8,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E6E7E8").s().p("AggACIAPgIIg2AGIAEgFQATgLAKgRIACgEIAkAjIAlgiQACAEAFAIQANAOAMAGIADAEIg1gGIAOAIIghAkg");
	this.shape_32.setTransform(-4.3,-62.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAD3A2").s().p("AgOA0QgegRgGgbQAAgCgEgEIgCgCQgHgRABgbQAAgFADAAQACgBACAEIACAFQABAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBQAFgUAJAGQAUAOAUACIgHgLIAEADQAOANAVAFIgDgIQANAEAGAEQAJAHgCAMQgCAWgJAPQgKAQgUALQgLAHgHAAQgFAAgMgHg");
	this.shape_33.setTransform(-4.7,-71.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E4C080").s().p("AAAAYQgKAAgPgRIgQgJQAFgGAFgPIBAAAIAJAUIgQAKQgPARgKAAIgBAAg");
	this.shape_34.setTransform(-4.4,-65.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A84F3D").s().p("AiZBQIANhQQACgRAggQQAOALAXgMQAUgLALgSIADgGIADgKIBAAAIAEALQADAHAFAHQANAQARAGQATAJANgLQAfARAEARIANBQg");
	this.shape_35.setTransform(-4.3,-59.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2D2A25").s().p("Ah0BbQAWAGAHgMQgNACgGgTQATAFAAgPIgBgSQgFglADgeQACghASgWQARgVAZgCQAkgTAnAWQAqAXADA0QACAPgCATIgCAgQgDAtAVgGQgIAKgJABQAIAHATgFQgKAdgZgGQgUgFgSgVQgFgGgDgHIgEgLIhAAAIgDAKIgDAGQgOAXgaAJQgHADgGAAQgTAAgHgYg");
	this.shape_36.setTransform(-4.4,-74.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#59456C").s().p("AAEADQgygDgHADQgBgEABgCQADgDAyADIA3ADIAAAGIgzgDg");
	this.shape_37.setTransform(-7.2,-10.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#59456C").s().p("AgZANQgTgJACgUQABAPAQAIQANAGAVgDQAYgEAIgOIACgGQACAHgEAGQgIAOgYADIgNABQgNAAgIgEg");
	this.shape_38.setTransform(-16.1,-6.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#59456C").s().p("Ag3iEIAAgBIADEFQBhgGAKAEQACABgBAHIgBgBQgKgFhhAGg");
	this.shape_39.setTransform(-25.9,-22.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#452E5A").s().p("AgGgPQAJgDANAFQALAFADgFQACgBAAgLQAAAQgCADQgDAEgLgEQgNgGgJADQgXAHgCAcQgBgiAagHg");
	this.shape_40.setTransform(-5.2,-26.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#786788").s().p("AgUCoQgRgJAAgTIAAgTQgKgEhiAGIgDkKQAAgKAHgIQAIgHAKAAIEIgDQAJBlgHAIQgCAFgLgFQgNgFgLADQgUAGgEAZQgDAVAIAMQAQAVAUgGQAVgGAAADQABACADA0IABA0Ig1gDQg1gDgDADQgCACAHANQAGANgEAKQgJAPgYADIgOABQgLAAgJgEg");
	this.shape_41.setTransform(-16.6,-21.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#978AA3").s().p("AiOCOQgHgHAAgKIgDkHQBhgGAKAEIAAATQAAATASAJQAMAGAVgDQAZgDAIgPQAFgKgHgNQgGgNABgCQADgDA1ADIA1ADQATBhgLAPQgGAHgGgFQgKgJgGAAQgTgCgIAUQgJAUATAYQAJALATgHIAKgGQAFgCABAJQADASgBBjIkSADIgBAAQgKAAgHgHg");
	this.shape_42.setTransform(-15.8,4.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#452E5A").s().p("AgoABQAIgOAagBQAWgBAPAIQAPAHgCAMQgBgJgMgFQgPgIgWABQgaABgIAOIgDAJQgBgIAEgGg");
	this.shape_43.setTransform(13.6,-13.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#59456C").s().p("AhrCSIgCg0QgCg0gBgCQgBgDgUAGQgVAGgQgWQgIgMADgUQAEgZAVgGQAKgDANAFQALAFADgFQAFgHgHhmIEIgDQAKAAAHAHQAHAHAAAKIAEEMQhKACgKgFQgFgCAEgPQAEgOgQgJQgQgIgXABQgaABgIAPQgFAJAEAMQADAKgCACQgCACgnAAIhJgBg");
	this.shape_44.setTransform(8.6,-24.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#827391").s().p("AiOCOQgHgHAAgKIgDkHQBhgGAKAEIAAATQAAATASAJQAMAHAVgEQAZgEAIgOQAFgKgHgNQgGgNABgCQADgDA1ADIA1ADQATBggLAPQgGAIgGgFQgKgJgGAAQgTgCgIAUQgJAUATAYQAJAMATgJIAKgGQAFgBABAJQADASgBBiIkSAEQgKAAgIgHg");
	this.shape_45.setTransform(-15.8,5.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#452E5A").s().p("AhsCSIgBg0QgCg0gBgCQgBgDgUAGQgVAGgQgXQgIgLADgUQAEgZAVgGQAKgDANAFQALAFADgFQAGgIgIhlIEIgDQAKgBAHAIQAHAHAAAKIAEEMQhLACgJgFQgFgCAEgPQAEgOgRgJQgPgIgXABQgaABgIAPQgFAJAEAMQADAKgCACQgCACgnAAIhKgBg");
	this.shape_46.setTransform(9.2,-23.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#827391").s().p("AAcAJQgCgIgEABQgGAEgEABQgTAJgIgMQgOgRACgQQABAOALAOQAIALATgIIAKgFQAEgBACAIQABAHgBATg");
	this.shape_47.setTransform(-4.1,6.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A3133").s().p("AAAABIACgIQABADgCAFIgCAIQgBgDACgFg");
	this.shape_48.setTransform(18.3,-11.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#ACA2B6").s().p("AhwCnQADhmgCgOQgBgJgFABIgLAGQgTAHgJgLQgSgYAJgVQAJgTATACQAGABAKAIQAFAGAGgIQAHgJgFg0IgHgyQBvAFAEgEQACgCgCgKQgEgMAFgJQAIgPAaAAQAXgBAPAIQARAKgFAOQgEAOAFADQAKAFBJgBIgCEFQAAAKgHAHQgHAHgKAAg");
	this.shape_49.setTransform(9.7,2.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A196AD").s().p("ACOCpIj+gCQAChtgCgHQgBgJgEABIgLAGQgTAIgJgMQgSgYAJgVQAJgTATACQAGABAJAIQAGAGAGgIQALgOgQhhQBvAGAEgFQABgCgCgKQgDgMAEgJQAJgPAaAAQAXgBAPAJQAQAJgEAOQgEAOAFADQAHAEBMAAIgCEFQAAAKgHAIQgHAGgJAAIgCAAg");
	this.shape_50.setTransform(9.9,3.3);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(-60.1,-67.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgkAuIAAgTQASAJAPAAQATAAAAgMQAAgEgCgDIgHgFIgNgGQgRgGgHgHQgGgGAAgLQAAgNAKgHQAKgHASAAQATAAAOAHIgHAQQgPgHgMAAQgQAAAAAKQAAAFAEADQAFAEAOAFQANAFAFADQAFADADAGQADAGAAAHQAAAOgLAIQgKAIgUAAQgUAAgMgGg");
	this.shape_51.setTransform(65.1,59.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgOAAIAAgJIAPgIIAIgWIAMAAIAAAXIAdAAIAAAQIgdAAIAAA1QAAAIAEAEQADADAHAAQAHAAAJgCIAAAQIgKADIgLABQgeAAAAggg");
	this.shape_52.setTransform(56.8,58.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKBGIAAhkIAVAAIAABkgAgIgwQgDgDAAgGQAAgGADgDQAEgDAEAAQAGAAADADQADADAAAGQAAAGgDADQgDADgGAAQgEAAgEgDg");
	this.shape_53.setTransform(50.6,57.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAXAzIAAg9QAAgLgFgGQgEgGgLAAQgMAAgHAIQgGAIAAASIAAAyIgWAAIAAhkIARAAIADAOIABAAQAFgHAJgFQAHgDAKAAQAkAAAAAlIAABAg");
	this.shape_54.setTransform(42.1,59.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgmA2QgOgMAAgYIAAhVIAWAAIAABUQAAAQAHAIQAKAIANAAQAfAAAAggIAAhUIAWAAIAABWQAAAPgGALQgHALgMAGQgMAGgQAAQgYAAgOgOg");
	this.shape_55.setTransform(29.2,57.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeAmQgOgNAAgYQAAgXANgPQAMgOAVAAQATAAAMAMQAMAMAAAVIAAALIhCAAQAAAPAHAHQAIAIANAAQAKAAAGgCIARgFIAAARQgIAEgIACQgIABgKAAQgXAAgNgOgAgOgdQgGAHgBAMIAtAAQAAgMgGgHQgGgGgKAAQgKAAgGAGg");
	this.shape_56.setTransform(12,59.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgNAAIAAgJIAPgIIAGgWIANAAIAAAXIAcAAIAAAQIgcAAIAAA1QAAAIADAEQAEADAHAAQAHAAAIgCIAAAQIgJADIgLABQgeAAAAggg");
	this.shape_57.setTransform(2.9,58.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AghAsQgJgIAAgPQAAgPAMgHQALgIAXgBIASAAIAAgGQgBgKgEgEQgFgFgJAAQgGAAgIACIgNAGIgIgQQAIgEAKgCQAJgCAJAAQATAAAKAIQAKAJAAARIAABDIgPAAIgFgOIgBAAQgIAKgGADQgHADgLAAQgPAAgIgIgAAJADQgPABgHAEQgGAEgBAKQAAAGAFAEQAEAEAHAAQAMAAAGgHQAIgHAAgLIAAgJg");
	this.shape_58.setTransform(-6.5,59.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIARAAIADASIABAAQAGgKAGgEQAIgFAKAAIAKAAIgCAUIgJgBQgNAAgIAJQgHAJAAANIAAAzg");
	this.shape_59.setTransform(-15,59.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgGgMQgGgMAAgPQAAgYANgOQANgNAVAAQAXAAAMAOQANAOAAAXQAAAZgNANQgMAOgXAAQgNAAgLgGgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaAAQgNAAgGAJg");
	this.shape_60.setTransform(-25.4,59.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgtBKIAAiRIASAAIADANIABAAQAKgPATAAQATAAAKAOQALANAAAZQAAAYgLAOQgLAOgSAAQgTAAgKgOIgBAAIABA5gAgRgwQgGAIAAAQIAAADQAAATAGAHQAGAIAMAAQALAAAGgJQAGgIAAgRQAAgRgGgJQgGgIgMAAQgLAAgGAHg");
	this.shape_61.setTransform(-36.6,61.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIARAAIADASIABAAQAFgJAHgFQAHgFAKAAIALAAIgCAUIgKgBQgNAAgGAJQgJAIAAAOIAAAzg");
	this.shape_62.setTransform(-46.1,59.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgGgMQgGgLAAgQQAAgYANgOQANgNAVAAQAWAAANAOQANAOAAAXQAAAYgNAOQgNAOgWAAQgOAAgKgGgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaAAQgNAAgGAJg");
	this.shape_63.setTransform(-56.5,59.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgiAzQgQgSAAghQAAgTAIgQQAHgQAPgIQAPgJASAAQAVAAARAJIgIASIgPgFQgGgDgJAAQgSAAgLANQgLANAAAXQAAAZALAMQAKANATAAIAQgCIARgEIAAATQgQAGgUAAQgcAAgQgSg");
	this.shape_64.setTransform(-67.9,57.8);

	this.instance_1 = new lib.Path_0_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,70,1,1,0,0,0,96.5,33.3);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-33.3,1,1,0,0,0,103.2,69.9);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103.2,206.5,206.5);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C98F").s().p("AggA2IgPAFIgXg2IBGg2IAqgJIAdAdIgMAHIgggIIgSAMIgKAvIALAcIgLADgAARAbIAIgiIAGgEIAeAIIADgCIgXA3IgOACg");
	this.shape.setTransform(10.7,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C61").s().p("AgjBJIgVAFIghhSIBRg/IA2gKIAsAuIgoBeIg4APg");
	this.shape_1.setTransform(10.9,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E7E8").s().p("AhBAJIAdgQIhsANIA5hXIBXBRIBYhRIA5BXIhsgNIAdAQIhCBJg");
	this.shape_2.setTransform(-46.5,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7C98F").s().p("AgqB2QgogYgTgfQgTgfgEgtQgFgjA6gUQBdggAigYQALgHAFABQAIABAFAPQAHATAEAUQACAGADACQAEABADgFIAEgJQAFgJAEABQAFABAAAKQABA4gMAhIgEAFIgGAFQgDACgBAEQgGAfgTAWQgQAUgeARQgXAOgMAAQgNgBgYgNg");
	this.shape_3.setTransform(-45.6,-22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD9C61").s().p("AhXgVQAJgFAEgJIAKgYICBAAIAJAYQAEAJAKAFIhYBRg");
	this.shape_4.setTransform(-46.4,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#392704").s().p("AiPDGQgZgpgLhQQgJhCAFg3QAGhHA1gqQAwgnBIgBIAJAAQBIABAxAnQA1ApAGBIQAFA2gKBEQgLBRgYAng");
	this.shape_5.setTransform(-46.5,-30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A84F3D").s().p("AimCWIE9lHIAQAPIkxFUg");
	this.shape_6.setTransform(32.9,-17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#27447D").s().p("AiiDxIh6gCIgCixIgVCxIhnAAIALj5QAEhaAtgvQAdgeBagqQAtgWBTABQBSABAlAUQA5AXAbAOQAlATAbAdIBdBhIBvhBIAGALIAlBbIimBoIghABIhdhMIgIAJIAEDKQgBABhkAAIiwAAg");
	this.shape_7.setTransform(-35.4,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgQAUAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgUAAgQgQg");
	this.shape_8.setTransform(23.4,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6AEBF").s().p("AgSgWQAXAAAOATIglAag");
	this.shape_9.setTransform(46.7,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#635176").s().p("AgGAuQgUgDgLgPQgMgQADgSQADgTARgMQAKgJAQAAIAAAuIAmgbQALAQgCASQgEAUgPALQgNAJgPAAIgGgBg");
	this.shape_10.setTransform(44.8,-13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#311748").s().p("AgDAHQgGgEADgGQABgCAEgBQACgBADABQAGAEgDAGQgDAEgDAAIgEgBg");
	this.shape_11.setTransform(31.4,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#311748").s().p("AhBAjIAmhHIBcAAIAAAFIhZAAIgkBEg");
	this.shape_12.setTransform(37.7,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAEIAAgHIANAAIAAAHg");
	this.shape_13.setTransform(50.2,17.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAEIAAgHIAxAAIAAAHg");
	this.shape_14.setTransform(46.3,17.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAEIAAgHIAdAAIAAAHg");
	this.shape_15.setTransform(41.5,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAEIAAgHIAtAAIAAAHg");
	this.shape_16.setTransform(48.6,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAEIAAgHIA2AAIAAAHg");
	this.shape_17.setTransform(42.7,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHAEIAAgHIAPAAIAAAHg");
	this.shape_18.setTransform(50.1,13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_19.setTransform(46.4,13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAEIAAgHIAkAAIAAAHg");
	this.shape_20.setTransform(41.8,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#635176").s().p("Ag7AjQgJAAAAgIIAAg2QAAgDADgCQACgDAEAAIB4AAQADAAADADQACACAAADIAAA2QAAAIgIAAg");
	this.shape_21.setTransform(45.4,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#311748").s().p("AgBAIQgDgBgCgDQgDgGAGgEQADgBACABQADABACACQADAGgGAEIgEABIgBAAg");
	this.shape_22.setTransform(8.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#311748").s().p("AAdgnIhtAAIAAgEIBwAAIAxBVIgEACg");
	this.shape_23.setTransform(0.2,-3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4F3963").s().p("AgGAhIAAhBIANAAIAABBg");
	this.shape_24.setTransform(-5,-11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#786788").s().p("AgGAaIAAgzIANAAIAAAzg");
	this.shape_25.setTransform(-3.1,-10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0B9C8").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_26.setTransform(-1.1,-11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#978AA3").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_27.setTransform(0.9,-12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#786788").s().p("AhWhkQA3AAAtAaQAtAbAcAvIitBlg");
	this.shape_28.setTransform(32.1,-4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2A232").s().p("AhkAhICuhkQAkA/gMBIg");
	this.shape_29.setTransform(33.5,2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5998C2").s().p("AhihMIDFAjQgMBHg5Avg");
	this.shape_30.setTransform(33.3,13.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BCADCF").s().p("AiBA1ICBiZICBCZQg4AwhJAAQhIAAg5gwg");
	this.shape_31.setTransform(23.4,15.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6CA24F").s().p("AhjASQgHhTA1hAQAMgNANgLICBCZIiBCaQhAg1gHhTg");
	this.shape_32.setTransform(13.3,5.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#73B1D1").s().p("AhAg1QA4gvBJAAIAADJg");
	this.shape_33.setTransform(16.9,-4.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#786788").s().p("AiJCiIAAgJQABgiAGgYQALgnAWgTIACgCIAoAAIAAARIgiAAQgRAQgIAfQgFAXgBAXIDzAAQABgXgJgcQgJgdgOgPIglABIAAgQIAogBIADgBIACADQATARAMAkQALAkgDAdIgBAIgAgTCEIAQhIIgFgJIAAgJIAXAAIAAAJIgFAJIAQBIIgXALgAlFB8QgFgZALgXQAPgeAmgMIASA9QAcAHAggHIASg9IgBAAIABgBQAYAJAPASQgPAagEAmgACcB3QgHgwgYgcQAGgJAIgIIAkABIAhA3IAGgpIgFgIIABgIIAUAAIAAAIIgFAIIAHApIAZg4IAogBQAPAOAJAdQAIAcgCAXgAAAAjQgYgDgRgSQgRgQgIgdQgHgEgFgJQgEgLABgPIAAgEIAGgEQgIg0AXgWQAJgHAUAAIAiAAQAxgHAQAXQANASgEAwIABABIAEACIAAAEQAAAQgEAJQgEAJgHAFQgIAdgPAPQgQAQgaAGgAhCg/QAAAIADAFQACAFADABIAEABIABAEQAIAdAPANQAMAOASADQAVgFAMgNQAMgMAJgdIABgEIADgBQAEgBACgFQACgGAAgGIgHAAIgDgDQgDgPgDgHQgFADgNgIIgDAJIgFAAIABgGIgFAIIgFgBIAFgMQgSAQgUABQgTACgNgKIgGAWIgDAAIgHAAgAAviKQAQAHADAJQgFghgvAMIAIAAQAMAAANAFgAgriUQAYABAPAHQgCgJgNgBIgYACgAjbAdQglgHgNggQgSAAgFgBQgEgeAFgjQAGgkAMgKQASgOAjgBQAjAAASANQANAJAIAmQAHAlgFAbQgCABgJABIgMABQgOAdgiAKIgCAAgAkFgwQgBAOADAMQAJAeAgAHQAjgLAIgiQADgNgDgNIgBgHQgvAHgigIgAC+ALQgMgGgHgMQgGgLgEgOQgGgDgDgIQgDgIAAgNIAAgDIAEgCQgCgaACgLQACgNAJgKQASgPAiAAQAhAAASAOQAMALADAPQACANgEAVIAFADIAAADQABANgEAIQgEAIgFADQgEARgGAJQgJANgNAFQgHACgTAAQgTgBgGgCgACgg8IACANQACAFAEABIACABIABADQAFARAEAHQAGALAJADQADABARABQASAAAEgCQAKgCAGgLQAFgJAFgQIABgDIACgBQADgBADgFQACgHAAgGIgBgBIgDAAIgFAAIgBgFIgFgQQgjAIgWgMQgEgCgJACQgKAEgDgBQgEAIgCAJIgBAFIgFAAIgDAAg");
	this.shape_34.setTransform(13.1,-44.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1EEF6").s().p("ApRITIAAwmISjAAIAAQmg");
	this.shape_35.setTransform(6.9,-16.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkAuIAAgTQATAJAOAAQATAAAAgMQAAgEgCgDQgDgDgEgCQgDgCgLgEQgRgGgGgHQgGgGAAgLQAAgNAKgHQAKgHASAAQATAAAPAHIgIAQQgPgHgMAAQgQAAAAAKQAAAFAFADQAEAEAOAFIASAIQAFADAEAGQACAGAAAHQAAAOgKAIQgMAIgSAAQgVAAgMgGg");
	this.shape_36.setTransform(46.6,59.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgiAsQgIgIAAgPQAAgPAMgHQALgIAXgBIARAAIAAgGQABgKgFgEQgFgFgJAAQgGAAgIACIgOAGIgHgQQAIgEAKgCQAJgCAJAAQAUAAAJAIQAKAJAAARIAABDIgQAAIgEgOIAAAAQgIAKgHADQgHADgLAAQgOAAgKgIgAAIADQgOABgGAEQgIAEABAKQAAAGADAEQAFAEAIAAQAKAAAIgHQAGgHAAgLIAAgJg");
	this.shape_37.setTransform(36.2,59.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgeAmQgOgNAAgYQAAgYANgOQAMgOAVAAQATAAAMAMQAMAMAAAVIAAALIhDAAQABAPAHAHQAIAIAMAAQAKAAAHgCIARgFIAAARQgKAFgGABIgTABQgXAAgMgOgAgOgdQgGAHgBAMIAtAAQAAgMgGgHQgGgGgKAAQgKAAgGAGg");
	this.shape_38.setTransform(25.7,59.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIARAAIACASIACAAQAEgJAIgFQAHgFAKAAIALAAIgCAUIgJgBQgNAAgIAJQgHAIAAAOIAAAzg");
	this.shape_39.setTransform(16.9,59.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAnBDIgOglIgyAAIgNAlIgXAAIAyiFIAXAAIAyCFgAgGgXIgMAiIAmAAIgUg6IgGAYg");
	this.shape_40.setTransform(6.1,57.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtBIIAAgSIALABQAPAAAHgSIADgJIgohkIAXAAIAVA5QAEAMABALIAAAAIAEgMIAXhEIAXAAIgrByQgLAfgbAAIgOgBg");
	this.shape_41.setTransform(-9.9,61.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiA6QgLgNAAgZQAAgXALgPQAKgNAUAAQATAAAKAOIABAAIgCg2IAWAAIAACNIgRAAIgEgNIgBAAQgKAPgSAAQgUAAgKgOgAgRgFQgFAIAAARQgBARAGAIQAGAJALAAQANABAHgIQAFgHAAgRIAAgDQAAgTgFgHQgHgIgNAAQgKAAgHAJg");
	this.shape_42.setTransform(-21.1,57.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgiArQgJgKAAgSIAAhCIAVAAIAAA+QABAMAEAFQAEAGALAAQANAAAGgIQAGgIAAgSIAAgzIAWAAIAABlIgRAAIgEgOIgBAAQgEAHgIAEQgJAFgJAAQgTgBgIgIg");
	this.shape_43.setTransform(-32.6,59.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgOAAIAAgJIAPgIIAIgWIALAAIAAAXIAdAAIAAAQIgdAAIAAA1QAAAIAFAEQADADAHAAQAGAAAKgCIAAAQIgKADIgMABQgdAAAAggg");
	this.shape_44.setTransform(-42.2,58.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgqA+IAAgVQAKAFAKACQALACAIAAQAMAAAGgFQAGgFAAgIQAAgHgGgGQgFgFgRgHQgRgHgJgJQgHgJAAgOQAAgRAMgJQAMgKATAAQASAAAUAJIgHASQgSgIgOAAQgJAAgGAFQgFAEAAAIQAAAFACAEQACAEAFADIARAJQAPAGAHAEQAGAEAEAIQADAHAAAJQAAARgNALQgNAKgWAAQgWAAgPgHg");
	this.shape_45.setTransform(-50.9,57.6);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(0,69.8,1,1,0,0,0,96.7,33.3);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-33.1,1,1,0,0,0,103.2,69.9);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103,206.5,206.1);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C98F").s().p("AggA2IgPAFIgXg2IBGg2IAqgJIAdAdIgMAHIgggIIgSAMIgKAvIALAcIgLADgAARAbIAIgiIAGgEIAeAIIADgCIgXA3IgOACg");
	this.shape.setTransform(10.7,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C61").s().p("AgjBJIgVAFIghhSIBRg/IA2gKIAsAuIgoBeIg4APg");
	this.shape_1.setTransform(10.9,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E7E8").s().p("AhBAJIAdgQIhsANIA5hXIBXBRIBYhRIA5BXIhsgNIAdAQIhCBJg");
	this.shape_2.setTransform(-46.5,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7C98F").s().p("AgqB2QgogYgTgfQgTgfgEgtQgFgjA6gUQBdggAigYQALgHAFABQAIABAFAPQAHATAEAUQACAGADACQAEABADgFIAEgJQAFgJAEABQAFABAAAKQABA4gMAhIgEAFIgGAFQgDACgBAEQgGAfgTAWQgQAUgeARQgXAOgMAAQgNgBgYgNg");
	this.shape_3.setTransform(-45.6,-22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD9C61").s().p("AhXgVQAJgFAEgJIAKgYICBAAIAJAYQAEAJAKAFIhYBRg");
	this.shape_4.setTransform(-46.4,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#392704").s().p("AiPDGQgZgpgLhQQgJhCAFg3QAGhHA1gqQAwgnBIgBIAJAAQBIABAxAnQA1ApAGBIQAFA2gKBEQgLBRgYAng");
	this.shape_5.setTransform(-46.5,-30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A84F3D").s().p("AimCWIE9lHIAQAPIkxFUg");
	this.shape_6.setTransform(32.9,-17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#27447D").s().p("AiiDxIh6gCIgCixIgVCxIhnAAIALj5QAEhaAtgvQAdgeBagqQAtgWBTABQBSABAlAUQA5AXAbAOQAlATAbAdIBdBhIBvhBIAGALIAlBbIimBoIghABIhdhMIgIAJIAEDKQgBABhkAAIiwAAg");
	this.shape_7.setTransform(-35.4,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgQAUAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgUAAgQgQg");
	this.shape_8.setTransform(23.4,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6AEBF").s().p("AgSgWQAXAAAOATIglAag");
	this.shape_9.setTransform(46.7,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#635176").s().p("AgGAuQgUgDgLgPQgMgQADgSQADgTARgMQAKgJAQAAIAAAuIAmgbQALAQgCASQgEAUgPALQgNAJgPAAIgGgBg");
	this.shape_10.setTransform(44.8,-13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#311748").s().p("AgDAHQgGgEADgGQABgCAEgBQACgBADABQAGAEgDAGQgDAEgDAAIgEgBg");
	this.shape_11.setTransform(31.4,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#311748").s().p("AhBAjIAmhHIBcAAIAAAFIhZAAIgkBEg");
	this.shape_12.setTransform(37.7,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAEIAAgHIANAAIAAAHg");
	this.shape_13.setTransform(50.2,17.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAEIAAgHIAxAAIAAAHg");
	this.shape_14.setTransform(46.3,17.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAEIAAgHIAdAAIAAAHg");
	this.shape_15.setTransform(41.5,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAEIAAgHIAtAAIAAAHg");
	this.shape_16.setTransform(48.6,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAEIAAgHIA2AAIAAAHg");
	this.shape_17.setTransform(42.7,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHAEIAAgHIAPAAIAAAHg");
	this.shape_18.setTransform(50.1,13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_19.setTransform(46.4,13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAEIAAgHIAkAAIAAAHg");
	this.shape_20.setTransform(41.8,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#635176").s().p("Ag7AjQgJAAAAgIIAAg2QAAgDADgCQACgDAEAAIB4AAQADAAADADQACACAAADIAAA2QAAAIgIAAg");
	this.shape_21.setTransform(45.4,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#311748").s().p("AgBAIQgDgBgCgDQgDgGAGgEQADgBACABQADABACACQADAGgGAEIgEABIgBAAg");
	this.shape_22.setTransform(8.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#311748").s().p("AAdgnIhtAAIAAgEIBwAAIAxBVIgEACg");
	this.shape_23.setTransform(0.2,-3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4F3963").s().p("AgGAhIAAhBIANAAIAABBg");
	this.shape_24.setTransform(-5,-11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#786788").s().p("AgGAaIAAgzIANAAIAAAzg");
	this.shape_25.setTransform(-3.1,-10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0B9C8").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_26.setTransform(-1.1,-11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#978AA3").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_27.setTransform(0.9,-12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#786788").s().p("AhWhkQA3AAAtAaQAtAbAcAvIitBlg");
	this.shape_28.setTransform(32.1,-4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2A232").s().p("AhkAhICuhkQAkA/gMBIg");
	this.shape_29.setTransform(33.5,2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5998C2").s().p("AhihMIDFAjQgMBHg5Avg");
	this.shape_30.setTransform(33.3,13.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BCADCF").s().p("AiBA1ICBiZICBCZQg4AwhJAAQhIAAg5gwg");
	this.shape_31.setTransform(23.4,15.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6CA24F").s().p("AhjASQgHhTA1hAQAMgNANgLICBCZIiBCaQhAg1gHhTg");
	this.shape_32.setTransform(13.3,5.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#73B1D1").s().p("AhAg1QA4gvBJAAIAADJg");
	this.shape_33.setTransform(16.9,-4.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#786788").s().p("AiJCiIAAgJQABgiAGgYQALgnAWgTIACgCIAoAAIAAARIgiAAQgRAQgIAfQgFAXgBAXIDzAAQABgXgJgcQgJgdgOgPIglABIAAgQIAogBIADgBIACADQATARAMAkQALAkgDAdIgBAIgAgTCEIAQhIIgFgJIAAgJIAXAAIAAAJIgFAJIAQBIIgXALgAlFB8QgFgZALgXQAPgeAmgMIASA9QAcAHAggHIASg9IgBAAIABgBQAYAJAPASQgPAagEAmgACcB3QgHgwgYgcQAGgJAIgIIAkABIAhA3IAGgpIgFgIIABgIIAUAAIAAAIIgFAIIAHApIAZg4IAogBQAPAOAJAdQAIAcgCAXgAAAAjQgYgDgRgSQgRgQgIgdQgHgEgFgJQgEgLABgPIAAgEIAGgEQgIg0AXgWQAJgHAUAAIAiAAQAxgHAQAXQANASgEAwIABABIAEACIAAAEQAAAQgEAJQgEAJgHAFQgIAdgPAPQgQAQgaAGgAhCg/QAAAIADAFQACAFADABIAEABIABAEQAIAdAPANQAMAOASADQAVgFAMgNQAMgMAJgdIABgEIADgBQAEgBACgFQACgGAAgGIgHAAIgDgDQgDgPgDgHQgFADgNgIIgDAJIgFAAIABgGIgFAIIgFgBIAFgMQgSAQgUABQgTACgNgKIgGAWIgDAAIgHAAgAAviKQAQAHADAJQgFghgvAMIAIAAQAMAAANAFgAgriUQAYABAPAHQgCgJgNgBIgYACgAjbAdQglgHgNggQgSAAgFgBQgEgeAFgjQAGgkAMgKQASgOAjgBQAjAAASANQANAJAIAmQAHAlgFAbQgCABgJABIgMABQgOAdgiAKIgCAAgAkFgwQgBAOADAMQAJAeAgAHQAjgLAIgiQADgNgDgNIgBgHQgvAHgigIgAC+ALQgMgGgHgMQgGgLgEgOQgGgDgDgIQgDgIAAgNIAAgDIAEgCQgCgaACgLQACgNAJgKQASgPAiAAQAhAAASAOQAMALADAPQACANgEAVIAFADIAAADQABANgEAIQgEAIgFADQgEARgGAJQgJANgNAFQgHACgTAAQgTgBgGgCgACgg8IACANQACAFAEABIACABIABADQAFARAEAHQAGALAJADQADABARABQASAAAEgCQAKgCAGgLQAFgJAFgQIABgDIACgBQADgBADgFQACgHAAgGIgBgBIgDAAIgFAAIgBgFIgFgQQgjAIgWgMQgEgCgJACQgKAEgDgBQgEAIgCAJIgBAFIgFAAIgDAAg");
	this.shape_34.setTransform(13.1,-44.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1EEF6").s().p("ApRITIAAwmISjAAIAAQmg");
	this.shape_35.setTransform(6.9,-16.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkAuIAAgTQATAJAOAAQATAAAAgMQAAgEgCgDQgDgDgEgCQgDgCgLgEQgRgGgGgHQgGgGAAgLQAAgNAKgHQAKgHASAAQATAAAPAHIgIAQQgPgHgMAAQgQAAAAAKQAAAFAFADQAEAEAOAFIASAIQAFADAEAGQACAGAAAHQAAAOgKAIQgMAIgSAAQgVAAgMgGg");
	this.shape_36.setTransform(46.6,59.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgiAsQgIgIAAgPQAAgPAMgHQALgIAXgBIARAAIAAgGQABgKgFgEQgFgFgJAAQgGAAgIACIgOAGIgHgQQAIgEAKgCQAJgCAJAAQAUAAAJAIQAKAJAAARIAABDIgQAAIgEgOIAAAAQgIAKgHADQgHADgLAAQgOAAgKgIgAAIADQgOABgGAEQgIAEABAKQAAAGADAEQAFAEAIAAQAKAAAIgHQAGgHAAgLIAAgJg");
	this.shape_37.setTransform(36.2,59.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgeAmQgOgNAAgYQAAgYANgOQAMgOAVAAQATAAAMAMQAMAMAAAVIAAALIhDAAQABAPAHAHQAIAIAMAAQAKAAAHgCIARgFIAAARQgKAFgGABIgTABQgXAAgMgOgAgOgdQgGAHgBAMIAtAAQAAgMgGgHQgGgGgKAAQgKAAgGAGg");
	this.shape_38.setTransform(25.7,59.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIARAAIACASIACAAQAEgJAIgFQAHgFAKAAIALAAIgCAUIgJgBQgNAAgIAJQgHAIAAAOIAAAzg");
	this.shape_39.setTransform(16.9,59.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAnBDIgOglIgyAAIgNAlIgXAAIAyiFIAXAAIAyCFgAgGgXIgMAiIAmAAIgUg6IgGAYg");
	this.shape_40.setTransform(6.1,57.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtBIIAAgSIALABQAPAAAHgSIADgJIgohkIAXAAIAVA5QAEAMABALIAAAAIAEgMIAXhEIAXAAIgrByQgLAfgbAAIgOgBg");
	this.shape_41.setTransform(-9.9,61.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiA6QgLgNAAgZQAAgXALgPQAKgNAUAAQATAAAKAOIABAAIgCg2IAWAAIAACNIgRAAIgEgNIgBAAQgKAPgSAAQgUAAgKgOgAgRgFQgFAIAAARQgBARAGAIQAGAJALAAQANABAHgIQAFgHAAgRIAAgDQAAgTgFgHQgHgIgNAAQgKAAgHAJg");
	this.shape_42.setTransform(-21.1,57.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgiArQgJgKAAgSIAAhCIAVAAIAAA+QABAMAEAFQAEAGALAAQANAAAGgIQAGgIAAgSIAAgzIAWAAIAABlIgRAAIgEgOIgBAAQgEAHgIAEQgJAFgJAAQgTgBgIgIg");
	this.shape_43.setTransform(-32.6,59.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgOAAIAAgJIAPgIIAIgWIALAAIAAAXIAdAAIAAAQIgdAAIAAA1QAAAIAFAEQADADAHAAQAGAAAKgCIAAAQIgKADIgMABQgdAAAAggg");
	this.shape_44.setTransform(-42.2,58.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgqA+IAAgVQAKAFAKACQALACAIAAQAMAAAGgFQAGgFAAgIQAAgHgGgGQgFgFgRgHQgRgHgJgJQgHgJAAgOQAAgRAMgJQAMgKATAAQASAAAUAJIgHASQgSgIgOAAQgJAAgGAFQgFAEAAAIQAAAFACAEQACAEAFADIARAJQAPAGAHAEQAGAEAEAIQADAHAAAJQAAARgNALQgNAKgWAAQgWAAgPgHg");
	this.shape_45.setTransform(-50.9,57.6);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(0,69.8,1,1,0,0,0,96.7,33.3);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-33.1,1,1,0,0,0,103.2,69.9);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103,206.5,206.1);


(lib.studyareas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103,206.5,206.1);


(lib.resources = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCBCA").s().p("AgGAEIAAgHIANAAIAAAHg");
	this.shape.setTransform(-51.2,-14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676A73").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_1.setTransform(-53.2,-14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9CCAE0").s().p("AgFAEIAAgHIALAAIAAAHg");
	this.shape_2.setTransform(-51.4,-9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676A73").s().p("AgyAEIAAgHIBlAAIAAAHg");
	this.shape_3.setTransform(-45.2,-9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCBCA").s().p("AgIAEIAAgHIASAAIAAAHg");
	this.shape_4.setTransform(-24.8,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCBCA").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_5.setTransform(-31.3,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB796D").s().p("AgdAEIAAgHIA7AAIAAAHg");
	this.shape_6.setTransform(-35.7,-7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB796D").s().p("AgOAEIAAgHIAdAAIAAAHg");
	this.shape_7.setTransform(-27.9,-7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#676A73").s().p("AguAEIAAgHIBdAAIAAAHg");
	this.shape_8.setTransform(-44,-7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB796D").s().p("AgRAEIAAgHIAjAAIAAAHg");
	this.shape_9.setTransform(-39.6,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCBCA").s().p("AgJAEIAAgHIATAAIAAAHg");
	this.shape_10.setTransform(-44.3,-2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#676A73").s().p("AggAEIAAgHIBBAAIAAAHg");
	this.shape_11.setTransform(-46,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCBCA").s().p("AgJAEIAAgHIATAAIAAAHg");
	this.shape_12.setTransform(-50.7,-0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#676A73").s().p("Ag6AEIAAgHIB1AAIAAAHg");
	this.shape_13.setTransform(-35.1,15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#676A73").s().p("AgaAEIAAgHIA1AAIAAAHg");
	this.shape_14.setTransform(-44,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#676A73").s().p("AghAEIAAgHIBDAAIAAAHg");
	this.shape_15.setTransform(-51,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#676A73").s().p("AgLAEIAAgHIAXAAIAAAHg");
	this.shape_16.setTransform(-53.2,-0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9CCAE0").s().p("AgHAEIAAgHIAQAAIAAAHg");
	this.shape_17.setTransform(-45.1,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9CCAE0").s().p("AgJAEIAAgHIATAAIAAAHg");
	this.shape_18.setTransform(-48.3,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9CCAE0").s().p("AgLAEIAAgHIAXAAIAAAHg");
	this.shape_19.setTransform(-55.5,20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9CCAE0").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_20.setTransform(-54.5,17.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9CCAE0").s().p("AgMAEIAAgHIAZAAIAAAHg");
	this.shape_21.setTransform(-55.4,13.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9CCAE0").s().p("AgSAEIAAgHIAlAAIAAAHg");
	this.shape_22.setTransform(-54.8,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9CCAE0").s().p("AgSAEIAAgHIAlAAIAAAHg");
	this.shape_23.setTransform(-54.8,3.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9CCAE0").s().p("AgGAEIAAgHIAOAAIAAAHg");
	this.shape_24.setTransform(-55.9,-0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#676A73").s().p("AgyAEIAAgHIBlAAIAAAHg");
	this.shape_25.setTransform(-38.3,17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#676A73").s().p("AgyAEIAAgHIBlAAIAAAHg");
	this.shape_26.setTransform(-38.3,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#676A73").s().p("AgWAEIAAgHIAtAAIAAAHg");
	this.shape_27.setTransform(-42.3,22.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#676A73").s().p("AggAEIAAgHIBBAAIAAAHg");
	this.shape_28.setTransform(-43.2,20);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#676A73").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_29.setTransform(-51.7,20);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#676A73").s().p("AggAEIAAgHIBAAAIAAAHg");
	this.shape_30.setTransform(-50,13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#676A73").s().p("Ag1AEIAAgHIBrAAIAAAHg");
	this.shape_31.setTransform(-51.3,11.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#676A73").s().p("Ag1AEIAAgHIBrAAIAAAHg");
	this.shape_32.setTransform(-51.3,-2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#676A73").s().p("AguAEIAAgHIBdAAIAAAHg");
	this.shape_33.setTransform(-54.5,-7.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#676A73").s().p("AggAEIAAgHIBBAAIAAAHg");
	this.shape_34.setTransform(-55.9,-9.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#676A73").s().p("AgZAEIAAgHIAzAAIAAAHg");
	this.shape_35.setTransform(-28,-5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#676A73").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_36.setTransform(-36.5,-5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BB796D").s().p("AgHAEIAAgHIAQAAIAAAHg");
	this.shape_37.setTransform(-36.2,1.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#676A73").s().p("AgRAEIAAgHIAjAAIAAAHg");
	this.shape_38.setTransform(-39.6,1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BB796D").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_39.setTransform(-30.9,13.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCBCA").s().p("AgLAEIAAgHIAXAAIAAAHg");
	this.shape_40.setTransform(-47.7,22.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CCCBCA").s().p("AgfAEIAAgHIA/AAIAAAHg");
	this.shape_41.setTransform(-47.8,17.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCBCA").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_42.setTransform(-49.3,9.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCCBCA").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_43.setTransform(-47.9,5.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCBCA").s().p("AggAEIAAgHIBBAAIAAAHg");
	this.shape_44.setTransform(-46,1.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9CCAE0").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_45.setTransform(-52.3,22.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9CCAE0").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_46.setTransform(-52.3,5.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9CCAE0").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_47.setTransform(-52.4,1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9CCAE0").s().p("Ag6AEIAAgHIB0AAIAAAHg");
	this.shape_48.setTransform(-47.8,-5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9CCAE0").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_49.setTransform(-58.3,-2.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9CCAE0").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_50.setTransform(-57,7.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9CCAE0").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_51.setTransform(-57,-5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9CCAE0").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_52.setTransform(-57,-14.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9CCAE0").s().p("AgMAEIAAgHIAZAAIAAAHg");
	this.shape_53.setTransform(-53.6,-16.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#676A73").s().p("AgyAEIAAgHIBlAAIAAAHg");
	this.shape_54.setTransform(-53.4,-11.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#676A73").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_55.setTransform(-56.9,-16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9CCAE0").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_56.setTransform(-60.6,-11.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9CCAE0").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_57.setTransform(-60.6,-16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#311748").s().p("AjfD6IAAnzIG/AAIAAHzg");
	this.shape_58.setTransform(-43.7,2.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#311748").s().p("Ag4AMIAAgXIBxAAIAAAXg");
	this.shape_59.setTransform(70.3,3.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8D9E9").s().p("Ag6APIAAgdIB0AAIAAAdg");
	this.shape_60.setTransform(70.4,22.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B8D9E9").s().p("Ag6AjIAAhFIB0AAIAABFg");
	this.shape_61.setTransform(70.4,16.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#978AA3").s().p("Ag6AjIAAhFIB0AAIAABFg");
	this.shape_62.setTransform(70.4,8.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhBBhIAAjBICDAAIAADBg");
	this.shape_63.setTransform(70.4,14.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhBB1IAAjpICDAAIAADpg");
	this.shape_64.setTransform(70.4,12.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgHAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAPAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_65.setTransform(70.4,25.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIABQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIARAAIABAAIgBABg");
	this.shape_66.setTransform(70.4,-0.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_67.setTransform(70.4,-1.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_68.setTransform(68.4,-0.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#635176").s().p("Ag0CVQgIAAgGgFQgFgGAAgIIAAkDQAAgIAFgGQAGgFAIAAIBpAAQAIAAAGAFQAFAGAAAIIAAEDQAAAIgFAGQgGAFgIAAg");
	this.shape_69.setTransform(70.4,12.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#311748").s().p("Ag3CYQgIAAgGgFQgFgGAAgIIAAkJQAAgIAFgGQAGgFAIAAIBvAAQAIAAAGAFQAFAGAAAIIAAEJQAAAIgFAGQgGAFgIAAg");
	this.shape_70.setTransform(70.4,12.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#311748").s().p("Ah4AqIAAhTIDxAAIAABTg");
	this.shape_71.setTransform(45.4,-5.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B8D9E9").s().p("Ah5A9IAAh5IDzAAIAAB5g");
	this.shape_72.setTransform(45.6,16.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#978AA3").s().p("Ag5AtIAAhZIB0AAIAABZg");
	this.shape_73.setTransform(52,4.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#978AA3").s().p("Ag6AtIAAhZIB0AAIAABZg");
	this.shape_74.setTransform(39.3,4.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AiDB7IAAj1IEHAAIAAD1g");
	this.shape_75.setTransform(45.6,11.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AiDCwIAAlfIEHAAIAAFfg");
	this.shape_76.setTransform(45.6,6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgKAGQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAVAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAFQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_77.setTransform(45.6,25.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5C6272").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_78.setTransform(45.6,-13.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#635176").s().p("AiGDTQgFAAgFgEQgEgEAAgGIAAmJQAAgGAEgEQAFgEAFAAIEOAAQAFAAAEAEQAEAEAAAGIAAGJQAAAGgEAEQgEAEgFAAg");
	this.shape_79.setTransform(45.6,6.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#311748").s().p("AiGDWQgHgBgFgFQgEgEAAgHIAAmJQAAgHAEgFQAFgEAHgBIEOAAQAGABAFAEQAFAFgBAHIAAGJQABAHgFAEQgFAFgGABg");
	this.shape_80.setTransform(45.6,6.3);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(4.5,-15.3,1,1,0,0,0,54.3,39);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWgXQAVgPAYAAIAABNg");
	this.shape_81.setTransform(23.1,-69.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#311748").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAANQAAAOgJAJQgKAKgOAAQgNAAgJgKg");
	this.shape_82.setTransform(25.4,-65.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#311748").s().p("AgEAAIAGgDIADADIgGAFg");
	this.shape_83.setTransform(24.7,-53);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#311748").s().p("AjIB3IAOgIIADAFIgOAIgAisBmIAOgIIACAFIgNAJgAiRBWIAOgJIADAFIgOAJgAh1BFIAOgJIACAFIgNAJgAhaA1IAOgJIADAEIgOAJgAg+AkIANgJIADAFIgNAIgAgjATIAOgIIADAEIgOAIgAgHACIAMgHIADAEIgMAHgAATgOIAOgIIADAFIgOAIgAAvgfIANgIIADAFIgOAIgABKgwIAOgIIADAFIgOAIgABmhAIANgIIADAEIgOAIgACBhRIAOgIIADAEIgOAIgACdhhIANgJIADAEIgOAJgAC4hyIAOgJIADAEIgOAJg");
	this.shape_84.setTransform(3.1,-39.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#311748").s().p("AAEgIIACACIAAAAIACACIgBAAIACADIgRAKg");
	this.shape_85.setTransform(-19,-26.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#311748").s().p("Ah7CrIAKgOIAFADIgKAOgAhnCQIAJgPIAFADIgJAOgAhTB0IAJgOIAEADIgJAOgAhABYIAKgNIAEACIgKAPgAgtA8IAKgNIAEADIgKAOgAgZAhIAJgOIAFADIgKAOgAgGAFIAIgMIAFACIgIAOgAAMgVIAKgOIAFADIgKAOgAAggxIAKgNIAEADIgKAOgAAzhNIAKgNIAEADIgKAOgABHhoIAKgNIADADIgJANgABaiEIAJgOIAFAEIgKANgABtifIAKgOIAFAEIgKANg");
	this.shape_86.setTransform(-5.3,-45.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#311748").s().p("AgDACIADgGIAFADIgFAGg");
	this.shape_87.setTransform(8,-64.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5998C2").s().p("AgzA0QgVgVAAgfQAAgdAVgWQAWgWAdAAQAeAAAWAWQAWAWAAAdQAAAfgWAVQgWAWgeAAQgdAAgWgWg");
	this.shape_88.setTransform(25.1,-64.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7F8FC").s().p("AhUA0QgpgYgVgoQAKgSAPgRQAwgdA5AAQAzAAAsAYQArAYAZAmQgYAfgkASQglASgrAAQgxAAgqgZg");
	this.shape_89.setTransform(24.3,-64.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#311748").s().p("AhcBBQgogYgVgpQAVgnAogZQArgZAxAAQAyAAArAZQApAZAUAnQgUApgpAYQgrAYgyAAQgxAAgrgYg");
	this.shape_90.setTransform(25.1,-66.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#978AA3").s().p("AhSA3IAAhtIClAAIAABtg");
	this.shape_91.setTransform(33,-21.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B8D9E9").s().p("AhSA3IAAhtIClAAIAABtg");
	this.shape_92.setTransform(33,-10.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#978AA3").s().p("AhSA3IAAhtIClAAIAABtg");
	this.shape_93.setTransform(15.7,-21.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B8D9E9").s().p("AhSA3IAAhtIClAAIAABtg");
	this.shape_94.setTransform(15.7,-10.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#63AAC5").s().p("AgdAJIAAgRIA7AAIAAARg");
	this.shape_95.setTransform(-25.5,-41.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7F7F7F").s().p("AgbADIAAgFIA3AAIAAAFg");
	this.shape_96.setTransform(7.6,-41.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7F7F7F").s().p("AgbADIAAgFIA3AAIAAAFg");
	this.shape_97.setTransform(1.1,-41.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7F7F7F").s().p("AgbADIAAgFIA3AAIAAAFg");
	this.shape_98.setTransform(-5.4,-41.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7F7F7F").s().p("AgbADIAAgFIA3AAIAAAFg");
	this.shape_99.setTransform(-11.8,-41.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7F7F7F").s().p("AgbADIAAgFIA3AAIAAAFg");
	this.shape_100.setTransform(-18.3,-41.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#311748").s().p("AioA0IAAhoIFRAAIAABog");
	this.shape_101.setTransform(24.4,-33.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B8D9E9").s().p("AivA3IAAhtIFfAAIAABtg");
	this.shape_102.setTransform(-10.9,-10.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A84F3D").s().p("AivBwIAAjfIFfAAIAADfg");
	this.shape_103.setTransform(-10.9,-27.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AlqDMIAAmXILVAAIAAGXg");
	this.shape_104.setTransform(6.3,-24.2);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.3,-19.4,1,1,0,0,0,41.3,25.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#61A6C7").s().p("AlqDNIAAmZILVAAIAAGZg");
	this.shape_105.setTransform(6.3,-24.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#635176").s().p("AhVAJIACgRICnAAIACARg");
	this.shape_106.setTransform(6.3,10.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#978AA3").s().p("AiGAzQgCAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIACgBIAggOQAHgDACgDIAEgPQAEgQAFgvICmAAQAFAvAEAQIAEAPQACADAHADQAJAFAMAEIAMAFQAFADgJAAg");
	this.shape_107.setTransform(6.3,14.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#978AA3").s().p("Al6AtQgJAAgHgGQgHgHAAgKIAAhDIMjAAIAABDQAAAKgHAHQgHAGgKAAg");
	this.shape_108.setTransform(6.3,4.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#635176").s().p("AmPD0IAAnRQAAgJAGgHQAGgGAJAAIL0AAQAJAAAHAGQAGAHABAJIAAHRg");
	this.shape_109.setTransform(6.3,-24.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E8B95E").s().p("AkWCPQgFgFAAgGIggjgQAAgHAEgFQAFgEAHAAIE0gBIAXglIEMAAQAHgBAFAFQAFAEgBAHIgmEGQgBAGgEAFQgFAEgHAAIoQACQgHAAgEgFg");
	this.shape_110.setTransform(-47.1,-20.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E2A232").s().p("AkWCPQgFgFAAgGIggjgQAAgHAEgFQAFgEAHgBIE0AAIAXglIEMAAQAIAAAEAEQAFAFgBAHIgmEFQgBAGgEAFQgEAFgIAAIoQABQgHAAgEgFg");
	this.shape_111.setTransform(-47.1,-21.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#978AA3").s().p("Ag8gEIB5AAIAAAJIh5AAg");
	this.shape_112.setTransform(-47.7,-50.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B9BEC0").s().p("AgpADIAAgFIBTAAIAAAFg");
	this.shape_113.setTransform(-49.5,-18.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B9BEC0").s().p("AiCgCIEFAAIAAAFIkFAAg");
	this.shape_114.setTransform(-40.6,-20.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B9BEC0").s().p("Ah/gCID/AAIAAAFIj/AAg");
	this.shape_115.setTransform(-40.9,-21.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B9BEC0").s().p("AhNADIAAgFICbAAIAAAFg");
	this.shape_116.setTransform(-46,-24.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B9BEC0").s().p("AiAgCIEBAAIAAAFIkAAAg");
	this.shape_117.setTransform(-40.9,-25.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B9BEC0").s().p("AiDgCIEGAAIAAAFIkGAAg");
	this.shape_118.setTransform(-40.6,-27.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B9BEC0").s().p("Ah/gCID/AAIAAAFIj/ABg");
	this.shape_119.setTransform(-41,-28.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#978AA3").s().p("AiAgCIEBAAIAAAFIkBAAg");
	this.shape_120.setTransform(-40.9,-37.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#978AA3").s().p("AiCgCIEFAAIAAAFIkFABg");
	this.shape_121.setTransform(-40.7,-39.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#978AA3").s().p("Ah/ADIAAgFID/AAIAAAFg");
	this.shape_122.setTransform(-41,-40.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#978AA3").s().p("AhNgCICbAAIAAAFIibAAg");
	this.shape_123.setTransform(-46,-43.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#978AA3").s().p("AiAADIAAgFIEBAAIAAAFg");
	this.shape_124.setTransform(-40.9,-45);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#978AA3").s().p("AiCgCIEFAAIAAAFIkFAAg");
	this.shape_125.setTransform(-40.7,-46.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#978AA3").s().p("Ah/gCID/AAIAAAFIj/AAg");
	this.shape_126.setTransform(-41,-48);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B9BEC0").s().p("AhxgCIDiAAIAAAFIjiAAg");
	this.shape_127.setTransform(-42.4,-31.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#978AA3").s().p("AiAgCIEBgBIAAAGIkBABg");
	this.shape_128.setTransform(-40.9,-33.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#978AA3").s().p("AiCgCIEFgBIAAAGIkFAAg");
	this.shape_129.setTransform(-40.7,-34.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#978AA3").s().p("Ah/ADIAAgFID/AAIAAAFg");
	this.shape_130.setTransform(-41,-36.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E6E8EC").s().p("AgvgvIBeAAIABBfg");
	this.shape_131.setTransform(-27.7,-45.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CBC5D1").s().p("AgvAwIAAhfIBfBfg");
	this.shape_132.setTransform(-27.8,-55.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EAEBEB").s().p("Ai1j3IEKAAIBgBfIABGQIlqABg");
	this.shape_133.setTransform(-41.1,-35.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#27447D").s().p("AjZiVIGygBIABEtImyAAg");
	this.shape_134.setTransform(-47.7,-25.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("Aj4i0IHwgBIABFqInwABg");
	this.shape_135.setTransform(-47.7,-25.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B9BEC0").s().p("AjZiVIGygBIABEsImyABg");
	this.shape_136.setTransform(-47.7,-26.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B9BEC0").s().p("Aj4i1IHwAAIABFrInwAAg");
	this.shape_137.setTransform(-47.7,-26.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E2A232").s().p("AkTC4QgEgFAAgGIgBlYQAAgGAFgFQAEgFAHABIIQgCQAHAAAFAFQAEAFAAAGIABFXQAAAHgFAFQgEAFgHgBIoQABQgHABgFgFg");
	this.shape_138.setTransform(-47.5,-28.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgkAuIAAgSQASAIAPAAQATAAAAgMQAAgDgDgEQgBgDgGgBIgMgHQgSgGgGgGQgGgHAAgLQAAgNAKgHQALgIARABQASgBAQAIIgHAQQgQgHgMABQgQgBAAAKQAAAFAEADQAFAEAOAFQALAFAHADQAGAEADAFQACAGAAAHQAAAPgLAHQgLAIgTAAQgUABgMgHg");
	this.shape_139.setTransform(39.5,59.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgfAnQgNgOAAgYQAAgYANgOQAMgOAUAAQAUAAAMAMQAMAMAAAWIAAAKIhDAAQABAPAHAIQAIAHAMAAQAKAAAHgCQAHgBAKgEIAAASQgKAEgGABQgIABgLAAQgWAAgOgNgAgOgdQgHAHAAAMIAsAAQAAgMgGgHQgFgGgLAAQgJAAgGAGg");
	this.shape_140.setTransform(29.5,59.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgaAnQgMgOABgYQAAgZAMgOQANgNAWAAQAQAAAMAFIgGASQgOgGgJABQgZAAAAAiQAAAQAHAJQAHAJALgBQAOAAANgGIAAASQgFADgHACQgHABgJAAQgWAAgMgNg");
	this.shape_141.setTransform(19.6,59.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIARAAIADASIABAAQAFgKAHgFQAIgGAJABIALABIgCATIgKAAQgNAAgGAIQgIAIAAAOIAAAzg");
	this.shape_142.setTransform(11.4,59.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgjAqQgIgJgBgTIAAhAIAWAAIAAA9QAAAMAEAFQAGAGAKAAQAMAAAGgIQAHgIAAgSIAAgyIAVAAIAABjIgRAAIgCgMIgBAAQgEAFgKAGQgIADgKAAQgRAAgKgJg");
	this.shape_143.setTransform(0.8,59.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgYAuQgMgIgFgKQgGgMAAgQQAAgYANgOQANgNAVAAQAWAAANAOQANANAAAYQAAAZgNAOQgNANgWAAQgMABgMgHgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaABQgNgBgGAJg");
	this.shape_144.setTransform(-10.8,59.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgkAuIAAgSQASAIAPAAQATAAAAgMQAAgEgCgDIgHgEIgNgHQgRgGgHgGQgGgHAAgLQAAgNAKgHQALgIARABQASgBAPAIIgHAQQgPgHgMABQgQgBAAAKQAAAFAEADQAFAEAOAFQANAFAFADQAGAEACAFQADAFAAAIQAAAOgLAIQgLAIgTAAQgUABgMgHg");
	this.shape_145.setTransform(-21,59.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgfAnQgNgNAAgZQAAgYAMgOQAOgOATAAQAVAAALAMQAMALAAAXIAAAKIhDAAQABAOAHAJQAJAHAMAAQAJAAAHgCIAQgFIAAASQgHAEgIABQgIABgKAAQgXAAgOgNgAgOgdQgGAHgCAMIAuAAQgBgMgFgHQgHgGgKAAQgJAAgGAGg");
	this.shape_146.setTransform(-31,59.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAaBDIggg2IgVAAIAAA2IgWAAIAAiFIAmAAQAZAAAMAKQAMAJAAAUQAAAZgZAKIAlA7gAgbgEIAPAAQAPAAAGgFQAHgGAAgLQAAgMgIgEQgGgFgOAAIgPAAg");
	this.shape_147.setTransform(-41.6,57.8);

	this.instance_2 = new lib.Path_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,70,1,1,0,0,0,96.5,33.3);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-33.3,1,1,0,0,0,103.2,69.9);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.instance_1},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103.2,206.5,206.5);


(lib.managers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-103.2,206.5,206.5);


(lib.gear4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-147.5,295,295.1);


(lib.gear3purple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-146.9,292.6,293.9);


(lib.gear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-146.9,292.6,293.9);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AiNCtIgjgtIgwhDIFxj9IBQBrIleEXgAi1A+IAgAuIAYAfIAKANIErjpIg3hLg");
	this.shape.setTransform(112.5,365.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#736283").s().p("Ah7C7QgZgagNgQIg3g/IFXkeIAsAzIAgAhIANAPIlCE2gAitBRIAlAqIAaAcIALAMIEVkEIgKgKIgXgYIgegjg");
	this.shape_1.setTransform(125.2,381.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#736283").s().p("AhpDHIgqgmIg7g6IE7k9IAwAuIAiAfIAQANIkkFTgAikBiIBSBKID6kcIhDg/g");
	this.shape_2.setTransform(139.3,395.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#736283").s().p("AjDB7IEclZIBrBRIkDFsgAiZBxIAsAiQAVASAXAQIDfkzIgLgIQgLgIgPgMIglgdg");
	this.shape_3.setTransform(154.6,408.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#736283").s().p("Ai1COID6lyIBNAxQAGAFAMAGIASALIjgGCgAiNCAIBeA7IDClGIgNgHIgbgRIgngZg");
	this.shape_4.setTransform(171.2,419.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#736283").s().p("AgrDfIgygaIhKgmIDXmIIA7AfIAqAUIATAJIi7GWgAiACOIBkAyICilXIhTgqg");
	this.shape_5.setTransform(188.7,429.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#736283").s().p("AiACqICWmBIBrAmIh/GJg");
	this.shape_6.setTransform(213.8,440.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#736283").s().p("AgsDJIgugNIgUgFIBvmPIARAFIAmALIA3ANIhZGUg");
	this.shape_7.setTransform(233.1,446);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#736283").s().p("AhdDCIBLmXIBwARIg0Gag");
	this.shape_8.setTransform(252.8,449.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#736283").s().p("AApDSIgvgCIhEgGIAkmcIA4AFQATABAUAAIASABIgNGdg");
	this.shape_9.setTransform(272.9,452);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#736283").s().p("AhEjMIBwgEIAZGdIiIAEg");
	this.shape_10.setTransform(294.2,452.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#736283").s().p("AhXjGIARgCIAngFIA4gHIA/GYIiIARg");
	this.shape_11.setTransform(314.3,450.8);

	this.instance = new lib.Path_34();
	this.instance.parent = this;
	this.instance.setTransform(80.8,104.3,1,1,0,0,0,42.4,28.2);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(472.6,355.3,1,1,0,0,0,42.2,28.1);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(284.9,456.6,1,1,0,0,0,2.6,48.8);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(373.2,372.5,1,1,0,0,0,54.1,36);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(166.6,459.6,1,1,0,0,0,72.6,41.5);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.CompoundPath();
	this.instance_5.parent = this;
	this.instance_5.setTransform(84.8,191,1,1,0,0,0,63.9,18.6);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.CompoundPath_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(76.9,226.5,1,1,0,0,0,60.6,6);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.CompoundPath_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(147.1,294,1,1,0,0,0,21.1,16.6);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.CompoundPath_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(118.6,334.9,1,1,0,0,0,18.7,16.8);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(216,330.1,1,1,0,0,0,144.7,121.5);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.2,329.8,1,1,0,0,0,63.8,31.6);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Path_7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(246.6,420.3,1,1,0,0,0,197.3,69.5);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(463.6,349.4,1,1,0,0,0,25,37.4);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(363.4,445.3,1,1,0,0,0,33.8,14.6);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Path_10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(425.3,428.7,1,1,0,0,0,16.8,24.8);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Path_11();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,145.8,1,1,0,0,0,44.6,29.9);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Path_12();
	this.instance_16.parent = this;
	this.instance_16.setTransform(51.1,165.5,1,1,0,0,0,51.1,16.4);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Path_13();
	this.instance_17.parent = this;
	this.instance_17.setTransform(172.7,51.8,1,1,0,0,0,28.9,45.6);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.Path_14();
	this.instance_18.parent = this;
	this.instance_18.setTransform(158.3,56.1,1,1,0,0,0,31.7,43.8);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.Path_15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(65.7,140.4,1,1,0,0,0,19.8,17.9);
	this.instance_19.alpha = 0.5;

	this.instance_20 = new lib.Path_16();
	this.instance_20.parent = this;
	this.instance_20.setTransform(139,73.3,1,1,0,0,0,53.5,58.5);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.Path_17();
	this.instance_21.parent = this;
	this.instance_21.setTransform(146.6,103.5,1,1,0,0,0,98.2,103.5);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.Path_18();
	this.instance_22.parent = this;
	this.instance_22.setTransform(103.4,210.8,1,1,0,0,0,25.8,66.6);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.Path_19();
	this.instance_23.parent = this;
	this.instance_23.setTransform(130.6,90.2,1,1,0,0,0,60.5,64.8);
	this.instance_23.alpha = 0.5;

	this.instance_24 = new lib.Path_20();
	this.instance_24.parent = this;
	this.instance_24.setTransform(147.8,144.2,1,1,0,0,0,43.5,56);
	this.instance_24.alpha = 0.5;

	this.instance_25 = new lib.Path_21();
	this.instance_25.parent = this;
	this.instance_25.setTransform(111.1,244.8,1,1,0,0,0,4.2,3.2);
	this.instance_25.alpha = 0.5;

	this.instance_26 = new lib.Path_22();
	this.instance_26.parent = this;
	this.instance_26.setTransform(64.6,251.2,1,1,0,0,0,17.9,5);
	this.instance_26.alpha = 0.5;

	this.instance_27 = new lib.Path_23();
	this.instance_27.parent = this;
	this.instance_27.setTransform(89.6,292.9,1,1,0,0,0,21.2,19.8);
	this.instance_27.alpha = 0.5;

	this.instance_28 = new lib.Path_24();
	this.instance_28.parent = this;
	this.instance_28.setTransform(72.8,315.6,1,1,0,0,0,22.6,22.4);
	this.instance_28.alpha = 0.5;

	this.instance_29 = new lib.Path_25();
	this.instance_29.parent = this;
	this.instance_29.setTransform(69.7,231.1,1,1,0,0,0,43.4,186.8);
	this.instance_29.alpha = 0.5;

	this.instance_30 = new lib.Path_26();
	this.instance_30.parent = this;
	this.instance_30.setTransform(402.8,356.1,1,1,0,0,0,123.8,120);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.Path_27();
	this.instance_31.parent = this;
	this.instance_31.setTransform(202.5,359,1,1,0,0,0,125,89);
	this.instance_31.alpha = 0.5;

	this.instance_32 = new lib.Path_28();
	this.instance_32.parent = this;
	this.instance_32.setTransform(195.3,385.2,1,1,0,0,0,150.6,98.2);
	this.instance_32.alpha = 0.5;

	this.instance_33 = new lib.Path_29();
	this.instance_33.parent = this;
	this.instance_33.setTransform(188,140.6,1,1,0,0,0,98.7,101.8);
	this.instance_33.alpha = 0.5;

	this.instance_34 = new lib.Path_30();
	this.instance_34.parent = this;
	this.instance_34.setTransform(146.5,234.2,1,1,0,0,0,27.8,120.5);
	this.instance_34.alpha = 0.5;

	this.instance_35 = new lib.Path_31();
	this.instance_35.parent = this;
	this.instance_35.setTransform(167.6,283.8,1,1,0,0,0,56.7,116.3);
	this.instance_35.alpha = 0.5;

	this.instance_36 = new lib.Path_32();
	this.instance_36.parent = this;
	this.instance_36.setTransform(101.5,192.2,1,1,0,0,0,37.3,114.2);
	this.instance_36.alpha = 0.5;

	this.instance_37 = new lib.Path_33();
	this.instance_37.parent = this;
	this.instance_37.setTransform(82,230.9,1,1,0,0,0,24,120.7);
	this.instance_37.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,526.6,505.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736283").s().p("AjYA9IE+j9IBzCbIlPDmgAivA+IAKAOIAZAgIAgAuIEbjGIgmg2IgcgjIgNgQg");
	this.shape.setTransform(490.1,152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#736283").s().p("AjSBQIEkkaIAqAtQAOAOAKAMIBABJIk4EFgAirBOIANANQAPAPALAOIAmArIEGjgIgrgyIgeghIgOgPg");
	this.shape_1.setTransform(474.8,134);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#736283").s().p("AiNCZQgQgPgbgXIgTgRIEJkzICOCDIkdEggAijBcIBUBOIDwj3IhghZg");
	this.shape_2.setTransform(457.8,116.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#736283").s().p("AjCB0IDrlLICaB1IkCE6gAibBqIAPAKIAfAZIAtAjIDYkNIgzgpIgkgbIgRgLg");
	this.shape_3.setTransform(439.4,101.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#736283").s().p("Ai3CFIDLlgIClBmIjkFRgAiRB3IBhA9IC+kgIhvhFg");
	this.shape_4.setTransform(419.6,87.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#736283").s().p("AguDSIgygaIgzgaIgYgKICrlxIAaAMIA8AeIA7AeIAbAPIjDFkIgXgMgAiGCDIBmA0ICjkxIh1g7g");
	this.shape_5.setTransform(398.5,75.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#736283").s().p("AiFCcIBzlmICYA2IiHFfg");
	this.shape_6.setTransform(368.5,63);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#736283").s().p("AgZC9IgZgGIhEgQIBRlvICcAnIhmFqg");
	this.shape_7.setTransform(345.3,56.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#736283").s().p("AhmCwIAul0ICgAYIhFFxg");
	this.shape_8.setTransform(321.6,51.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#736283").s().p("AhWC4IAMl3IChAJIgiF2g");
	this.shape_9.setTransform(297.5,48.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#736283").s().p("AhQi4ICggGIACF4IiMAFg");
	this.shape_10.setTransform(272.2,48.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#736283").s().p("AhhivIAGgCIBKgJIA3gHIASgCIAHAAIAkF2IiEAQIgHABg");
	this.shape_11.setTransform(248.1,50.3);

	this.instance = new lib.Path_0_4();
	this.instance.parent = this;
	this.instance.setTransform(521.4,461.5,1,1,0,0,0,38.8,26.2);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,165.7,1,1,0,0,0,38.7,26.1);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(283.1,44.4,1,1,0,0,0,3,44.4);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(171.1,134.3,1,1,0,0,0,68.4,44.8);
	this.instance_3.alpha = 0.398;

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(418.5,51.8,1,1,0,0,0,82.8,46.6);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.CompoundPath_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(526.3,362.2,1,1,0,0,0,58.4,18.5);
	this.instance_5.alpha = 0.398;

	this.instance_6 = new lib.CompoundPath_1_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(534.7,319.2,1,1,0,0,0,55.1,6.6);
	this.instance_6.alpha = 0.398;

	this.instance_7 = new lib.CompoundPath_2_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(466.2,231.5,1,1,0,0,0,20.8,19.1);
	this.instance_7.alpha = 0.398;

	this.instance_8 = new lib.CompoundPath_3_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(488.3,186.5,1,1,0,0,0,18.7,18.1);
	this.instance_8.alpha = 0.398;

	this.instance_9 = new lib.Path_5_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(366,194.9,1,1,0,0,0,173.8,146.1);
	this.instance_9.alpha = 0.398;

	this.instance_10 = new lib.Path_6_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(512.7,195.1,1,1,0,0,0,58.1,28.9);
	this.instance_10.alpha = 0.398;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#736283").s().p("AknGxIARgrQALgdAJgTIAbg9QALgcAXgsIAphPIAuhTQAQgcAKgOIAagoQAVgjAiguIA1hOIA3hGQAfgnAUgWIAtgyIAjgmIAfghIAdAcIgfAhIgjAlIgrAxQgVAXgdAlIg2BGIg2BLQgfAugWAjIgaAoQgJANgQAcIguBRIgoBOQgWAsgLAbIgbA8IgTAwIgRApg");
	this.shape_12.setTransform(68.3,171.7);

	this.instance_11 = new lib.Path_8_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(190,59.4,1,1,0,0,0,39.9,16.6);
	this.instance_11.alpha = 0.398;

	this.instance_12 = new lib.Path_9_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(119.2,81.8,1,1,0,0,0,17.4,24.8);
	this.instance_12.alpha = 0.398;

	this.instance_13 = new lib.Path_10_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(457.9,424.7,1,1,0,0,0,40.8,27.6);
	this.instance_13.alpha = 0.398;

	this.instance_14 = new lib.Path_11_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(555.7,390,1,1,0,0,0,46.6,15.2);
	this.instance_14.alpha = 0.398;

	this.instance_15 = new lib.Path_12_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(417.9,529,1,1,0,0,0,26.5,41.7);
	this.instance_15.alpha = 0.398;

	this.instance_16 = new lib.Path_13_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(434.4,522.9,1,1,0,0,0,29.1,40.1);
	this.instance_16.alpha = 0.398;

	this.instance_17 = new lib.Path_14_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(539.3,419.6,1,1,0,0,0,19.8,18.8);
	this.instance_17.alpha = 0.398;

	this.instance_18 = new lib.Path_15_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(457.7,502.6,1,1,0,0,0,49.4,53.9);
	this.instance_18.alpha = 0.398;

	this.instance_19 = new lib.Path_16_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(445.5,463.5,1,1,0,0,0,114.7,121);
	this.instance_19.alpha = 0.398;

	this.instance_20 = new lib.Path_17_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(507.6,338.5,1,1,0,0,0,26.7,80.6);
	this.instance_20.alpha = 0.398;

	this.instance_21 = new lib.Path_18_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(466.4,481.5,1,1,0,0,0,68.9,73.5);
	this.instance_21.alpha = 0.398;

	this.instance_22 = new lib.Path_19_0();
	this.instance_22.parent = this;
	this.instance_22.setTransform(457.3,424,1,1,0,0,0,50.6,67.8);
	this.instance_22.alpha = 0.398;

	this.instance_23 = new lib.Path_20_0();
	this.instance_23.parent = this;
	this.instance_23.setTransform(503.7,296.8,1,1,0,0,0,3.9,4);
	this.instance_23.alpha = 0.398;

	this.instance_24 = new lib.Path_21_0();
	this.instance_24.parent = this;
	this.instance_24.setTransform(545.8,290,1,1,0,0,0,16.4,5.7);
	this.instance_24.alpha = 0.398;

	this.instance_25 = new lib.Path_22_0();
	this.instance_25.parent = this;
	this.instance_25.setTransform(520.7,239.3,1,1,0,0,0,20.6,22.7);
	this.instance_25.alpha = 0.398;

	this.instance_26 = new lib.Path_23_0();
	this.instance_26.parent = this;
	this.instance_26.setTransform(534.6,214,1,1,0,0,0,22.2,24.9);
	this.instance_26.alpha = 0.398;

	this.instance_27 = new lib.Path_24_0();
	this.instance_27.parent = this;
	this.instance_27.setTransform(531.2,313.6,1,1,0,0,0,49.5,215.1);
	this.instance_27.alpha = 0.398;

	this.instance_28 = new lib.Path_25_0();
	this.instance_28.parent = this;
	this.instance_28.setTransform(145,167.3,1,1,0,0,0,145,140.6);
	this.instance_28.alpha = 0.398;

	this.instance_29 = new lib.Path_26_0();
	this.instance_29.parent = this;
	this.instance_29.setTransform(382.6,159.6,1,1,0,0,0,150.8,107.4);
	this.instance_29.alpha = 0.398;

	this.instance_30 = new lib.Path_27_0();
	this.instance_30.parent = this;
	this.instance_30.setTransform(387.5,134.3,1,1,0,0,0,175.2,114.2);
	this.instance_30.alpha = 0.398;

	this.instance_31 = new lib.Path_28_0();
	this.instance_31.parent = this;
	this.instance_31.setTransform(402.4,425.2,1,1,0,0,0,121.2,125);
	this.instance_31.alpha = 0.398;

	this.instance_32 = new lib.Path_29_0();
	this.instance_32.parent = this;
	this.instance_32.setTransform(461.7,310.3,1,1,0,0,0,35.1,154.8);
	this.instance_32.alpha = 0.398;

	this.instance_33 = new lib.Path_30_0();
	this.instance_33.parent = this;
	this.instance_33.setTransform(432.3,247.5,1,1,0,0,0,71.7,147.4);
	this.instance_33.alpha = 0.398;

	this.instance_34 = new lib.Path_31_0();
	this.instance_34.parent = this;
	this.instance_34.setTransform(503.1,360.2,1,1,0,0,0,43.2,136.2);
	this.instance_34.alpha = 0.398;

	this.instance_35 = new lib.Path_32_0();
	this.instance_35.parent = this;
	this.instance_35.setTransform(524.9,314.2,1,1,0,0,0,27,143);
	this.instance_35.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_12},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,602.2,584.5), null);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(304.4,292.2,1,1,0,0,0,301.1,292.2);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.3,322.8,1,1,0,0,0,263.3,252.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(0,0,605.5,584.5), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#71AB5C").s().p("AiNCtIgjgtIgwhDIFxj9IBQBrIleEXgAi1A+IAgAuIAYAfIAKANIErjpIg3hLg");
	this.shape_12.setTransform(112.5,365.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#71AB5C").s().p("Ah7C7QgZgagNgQIg3g/IFXkeIAsAzIAgAhIANAPIlCE2gAitBRIAlAqIAaAcIALAMIEVkEIgKgKIgXgYIgegjg");
	this.shape_13.setTransform(125.2,381.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#71AB5C").s().p("AhpDHIgqgmIg7g6IE7k9IAwAuIAiAfIAQANIkkFTgAikBiIBSBKID6kcIhDg/g");
	this.shape_14.setTransform(139.3,395.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#71AB5C").s().p("AjDB7IEclZIBrBRIkDFsgAiZBxIAsAiQAVASAXAQIDfkzIgLgIQgLgIgPgMIglgdg");
	this.shape_15.setTransform(154.6,408.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#71AB5C").s().p("Ai1COID6lyIBNAxQAGAFAMAGIASALIjgGCgAiNCAIBeA7IDClGIgNgHIgbgRIgngZg");
	this.shape_16.setTransform(171.2,419.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#71AB5C").s().p("AgrDfIgygaIhKgmIDXmIIA7AfIAqAUIATAJIi7GWgAiACOIBkAyICilXIhTgqg");
	this.shape_17.setTransform(188.7,429.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#71AB5C").s().p("AiACqICWmBIBrAmIh/GJg");
	this.shape_18.setTransform(213.8,440.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#71AB5C").s().p("AgsDJIgugNIgUgFIBvmPIARAFIAmALIA3ANIhZGUg");
	this.shape_19.setTransform(233.1,446);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#71AB5C").s().p("AhdDCIBLmXIBwARIg0Gag");
	this.shape_20.setTransform(252.8,449.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#71AB5C").s().p("AApDSIgvgCIhEgGIAkmcIA4AFQATABAUAAIASABIgNGdg");
	this.shape_21.setTransform(272.9,452);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#71AB5C").s().p("AhEjMIBwgEIAZGdIiIAEg");
	this.shape_22.setTransform(294.2,452.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#71AB5C").s().p("AhXjGIARgCIAngFIA4gHIA/GYIiIARg");
	this.shape_23.setTransform(314.3,450.8);

	this.instance_38 = new lib.Path_35();
	this.instance_38.parent = this;
	this.instance_38.setTransform(80.8,104.3,1,1,0,0,0,42.4,28.2);
	this.instance_38.alpha = 0.5;

	this.instance_39 = new lib.Path_1_2();
	this.instance_39.parent = this;
	this.instance_39.setTransform(472.6,355.3,1,1,0,0,0,42.2,28.1);
	this.instance_39.alpha = 0.5;

	this.instance_40 = new lib.Path_2_2();
	this.instance_40.parent = this;
	this.instance_40.setTransform(284.9,456.6,1,1,0,0,0,2.6,48.8);
	this.instance_40.alpha = 0.5;

	this.instance_41 = new lib.Path_3_2();
	this.instance_41.parent = this;
	this.instance_41.setTransform(373.2,372.5,1,1,0,0,0,54.1,36);
	this.instance_41.alpha = 0.5;

	this.instance_42 = new lib.Path_4_2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(166.6,459.6,1,1,0,0,0,72.6,41.5);
	this.instance_42.alpha = 0.5;

	this.instance_43 = new lib.CompoundPath_4();
	this.instance_43.parent = this;
	this.instance_43.setTransform(84.8,191,1,1,0,0,0,63.9,18.6);
	this.instance_43.alpha = 0.5;

	this.instance_44 = new lib.CompoundPath_1_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(76.9,226.5,1,1,0,0,0,60.6,6);
	this.instance_44.alpha = 0.5;

	this.instance_45 = new lib.CompoundPath_2_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(147.1,294,1,1,0,0,0,21.1,16.6);
	this.instance_45.alpha = 0.5;

	this.instance_46 = new lib.CompoundPath_3_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(118.6,334.9,1,1,0,0,0,18.7,16.8);
	this.instance_46.alpha = 0.5;

	this.instance_47 = new lib.Path_5_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(216,330.1,1,1,0,0,0,144.7,121.5);
	this.instance_47.alpha = 0.5;

	this.instance_48 = new lib.Path_6_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(94.2,329.8,1,1,0,0,0,63.8,31.6);
	this.instance_48.alpha = 0.5;

	this.instance_49 = new lib.Path_7_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(246.6,420.3,1,1,0,0,0,197.3,69.5);
	this.instance_49.alpha = 0.5;

	this.instance_50 = new lib.Path_8_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(463.6,349.4,1,1,0,0,0,25,37.4);
	this.instance_50.alpha = 0.5;

	this.instance_51 = new lib.Path_9_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(363.4,445.3,1,1,0,0,0,33.8,14.6);
	this.instance_51.alpha = 0.5;

	this.instance_52 = new lib.Path_10_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(425.3,428.7,1,1,0,0,0,16.8,24.8);
	this.instance_52.alpha = 0.5;

	this.instance_53 = new lib.Path_11_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(150,145.8,1,1,0,0,0,44.6,29.9);
	this.instance_53.alpha = 0.5;

	this.instance_54 = new lib.Path_12_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(51.1,165.5,1,1,0,0,0,51.1,16.4);
	this.instance_54.alpha = 0.5;

	this.instance_55 = new lib.Path_13_1();
	this.instance_55.parent = this;
	this.instance_55.setTransform(172.7,51.8,1,1,0,0,0,28.9,45.6);
	this.instance_55.alpha = 0.5;

	this.instance_56 = new lib.Path_14_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(158.3,56.1,1,1,0,0,0,31.7,43.8);
	this.instance_56.alpha = 0.5;

	this.instance_57 = new lib.Path_15_1();
	this.instance_57.parent = this;
	this.instance_57.setTransform(65.7,140.4,1,1,0,0,0,19.8,17.9);
	this.instance_57.alpha = 0.5;

	this.instance_58 = new lib.Path_16_1();
	this.instance_58.parent = this;
	this.instance_58.setTransform(139,73.3,1,1,0,0,0,53.5,58.5);
	this.instance_58.alpha = 0.5;

	this.instance_59 = new lib.Path_17_1();
	this.instance_59.parent = this;
	this.instance_59.setTransform(146.6,103.5,1,1,0,0,0,98.2,103.5);
	this.instance_59.alpha = 0.5;

	this.instance_60 = new lib.Path_18_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(103.4,210.8,1,1,0,0,0,25.8,66.6);
	this.instance_60.alpha = 0.5;

	this.instance_61 = new lib.Path_19_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(130.6,90.2,1,1,0,0,0,60.5,64.8);
	this.instance_61.alpha = 0.5;

	this.instance_62 = new lib.Path_20_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(147.8,144.2,1,1,0,0,0,43.5,56);
	this.instance_62.alpha = 0.5;

	this.instance_63 = new lib.Path_21_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(111.1,244.8,1,1,0,0,0,4.2,3.2);
	this.instance_63.alpha = 0.5;

	this.instance_64 = new lib.Path_22_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(64.6,251.2,1,1,0,0,0,17.9,5);
	this.instance_64.alpha = 0.5;

	this.instance_65 = new lib.Path_23_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(89.6,292.9,1,1,0,0,0,21.2,19.8);
	this.instance_65.alpha = 0.5;

	this.instance_66 = new lib.Path_24_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(72.8,315.6,1,1,0,0,0,22.6,22.4);
	this.instance_66.alpha = 0.5;

	this.instance_67 = new lib.Path_25_1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(69.7,231.1,1,1,0,0,0,43.4,186.8);
	this.instance_67.alpha = 0.5;

	this.instance_68 = new lib.Path_26_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(402.8,356.1,1,1,0,0,0,123.8,120);
	this.instance_68.alpha = 0.5;

	this.instance_69 = new lib.Path_27_1();
	this.instance_69.parent = this;
	this.instance_69.setTransform(202.5,359,1,1,0,0,0,125,89);
	this.instance_69.alpha = 0.5;

	this.instance_70 = new lib.Path_28_1();
	this.instance_70.parent = this;
	this.instance_70.setTransform(195.3,385.2,1,1,0,0,0,150.6,98.2);
	this.instance_70.alpha = 0.5;

	this.instance_71 = new lib.Path_29_1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(188,140.6,1,1,0,0,0,98.7,101.8);
	this.instance_71.alpha = 0.5;

	this.instance_72 = new lib.Path_30_1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(146.5,234.2,1,1,0,0,0,27.8,120.5);
	this.instance_72.alpha = 0.5;

	this.instance_73 = new lib.Path_31_1();
	this.instance_73.parent = this;
	this.instance_73.setTransform(167.6,283.8,1,1,0,0,0,56.7,116.3);
	this.instance_73.alpha = 0.5;

	this.instance_74 = new lib.Path_32_1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(101.5,192.2,1,1,0,0,0,37.3,114.2);
	this.instance_74.alpha = 0.5;

	this.instance_75 = new lib.Path_33_1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(82,230.9,1,1,0,0,0,24,120.7);
	this.instance_75.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,526.6,505.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#71AB5C").s().p("AjYA9IE+j9IBzCbIlPDmgAivA+IAKAOIAZAgIAgAuIEbjGIgmg2IgcgjIgNgQg");
	this.shape_13.setTransform(490.1,152.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#71AB5C").s().p("AjSBQIEkkaIAqAtQAOAOAKAMIBABJIk4EFgAirBOIANANQAPAPALAOIAmArIEGjgIgrgyIgeghIgOgPg");
	this.shape_14.setTransform(474.8,134);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#71AB5C").s().p("AiNCZQgQgPgbgXIgTgRIEJkzICOCDIkdEggAijBcIBUBOIDwj3IhghZg");
	this.shape_15.setTransform(457.8,116.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#71AB5C").s().p("AjCB0IDrlLICaB1IkCE6gAibBqIAPAKIAfAZIAtAjIDYkNIgzgpIgkgbIgRgLg");
	this.shape_16.setTransform(439.4,101.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#71AB5C").s().p("Ai3CFIDLlgIClBmIjkFRgAiRB3IBhA9IC+kgIhvhFg");
	this.shape_17.setTransform(419.6,87.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#71AB5C").s().p("AguDSIgygaIgzgaIgYgKICrlxIAaAMIA8AeIA7AeIAbAPIjDFkIgXgMgAiGCDIBmA0ICjkxIh1g7g");
	this.shape_18.setTransform(398.5,75.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#71AB5C").s().p("AiFCcIBzlmICYA2IiHFfg");
	this.shape_19.setTransform(368.5,63);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#71AB5C").s().p("AgZC9IgZgGIhEgQIBRlvICcAnIhmFqg");
	this.shape_20.setTransform(345.3,56.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#71AB5C").s().p("AhmCwIAul0ICgAYIhFFxg");
	this.shape_21.setTransform(321.6,51.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#71AB5C").s().p("AhWC4IAMl3IChAJIgiF2g");
	this.shape_22.setTransform(297.5,48.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#71AB5C").s().p("AhQi4ICggGIACF4IiMAFg");
	this.shape_23.setTransform(272.2,48.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#71AB5C").s().p("AhhivIAGgCIBKgJIA3gHIASgCIAHAAIAkF2IiEAQIgHABg");
	this.shape_24.setTransform(248.1,50.3);

	this.instance_36 = new lib.Path_0_5();
	this.instance_36.parent = this;
	this.instance_36.setTransform(521.4,461.5,1,1,0,0,0,38.8,26.2);
	this.instance_36.alpha = 0.398;

	this.instance_37 = new lib.Path_1_0_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(59,165.7,1,1,0,0,0,38.7,26.1);
	this.instance_37.alpha = 0.398;

	this.instance_38 = new lib.Path_2_0_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(283.1,44.4,1,1,0,0,0,3,44.4);
	this.instance_38.alpha = 0.398;

	this.instance_39 = new lib.Path_3_0_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(171.1,134.3,1,1,0,0,0,68.4,44.8);
	this.instance_39.alpha = 0.398;

	this.instance_40 = new lib.Path_4_0_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(418.5,51.8,1,1,0,0,0,82.8,46.6);
	this.instance_40.alpha = 0.398;

	this.instance_41 = new lib.CompoundPath_0_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(526.3,362.2,1,1,0,0,0,58.4,18.5);
	this.instance_41.alpha = 0.398;

	this.instance_42 = new lib.CompoundPath_1_0_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(534.7,319.2,1,1,0,0,0,55.1,6.6);
	this.instance_42.alpha = 0.398;

	this.instance_43 = new lib.CompoundPath_2_0_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(466.2,231.5,1,1,0,0,0,20.8,19.1);
	this.instance_43.alpha = 0.398;

	this.instance_44 = new lib.CompoundPath_3_0_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(488.3,186.5,1,1,0,0,0,18.7,18.1);
	this.instance_44.alpha = 0.398;

	this.instance_45 = new lib.Path_5_0_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(366,194.9,1,1,0,0,0,173.8,146.1);
	this.instance_45.alpha = 0.398;

	this.instance_46 = new lib.Path_6_0_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(512.7,195.1,1,1,0,0,0,58.1,28.9);
	this.instance_46.alpha = 0.398;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#71AB5C").s().p("AknGxIARgrQALgdAJgTIAbg9QALgcAXgsIAphPIAuhTQAQgcAKgOIAagoQAVgjAiguIA1hOIA3hGQAfgnAUgWIAtgyIAjgmIAfghIAdAcIgfAhIgjAlIgrAxQgVAXgdAlIg2BGIg2BLQgfAugWAjIgaAoQgJANgQAcIguBRIgoBOQgWAsgLAbIgbA8IgTAwIgRApg");
	this.shape_25.setTransform(68.3,171.7);

	this.instance_47 = new lib.Path_8_0_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(190,59.4,1,1,0,0,0,39.9,16.6);
	this.instance_47.alpha = 0.398;

	this.instance_48 = new lib.Path_9_0_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(119.2,81.8,1,1,0,0,0,17.4,24.8);
	this.instance_48.alpha = 0.398;

	this.instance_49 = new lib.Path_10_0_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(457.9,424.7,1,1,0,0,0,40.8,27.6);
	this.instance_49.alpha = 0.398;

	this.instance_50 = new lib.Path_11_0_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(555.7,390,1,1,0,0,0,46.6,15.2);
	this.instance_50.alpha = 0.398;

	this.instance_51 = new lib.Path_12_0_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(417.9,529,1,1,0,0,0,26.5,41.7);
	this.instance_51.alpha = 0.398;

	this.instance_52 = new lib.Path_13_0_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(434.4,522.9,1,1,0,0,0,29.1,40.1);
	this.instance_52.alpha = 0.398;

	this.instance_53 = new lib.Path_14_0_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(539.3,419.6,1,1,0,0,0,19.8,18.8);
	this.instance_53.alpha = 0.398;

	this.instance_54 = new lib.Path_15_0_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(457.7,502.6,1,1,0,0,0,49.4,53.9);
	this.instance_54.alpha = 0.398;

	this.instance_55 = new lib.Path_16_0_1();
	this.instance_55.parent = this;
	this.instance_55.setTransform(445.5,463.5,1,1,0,0,0,114.7,121);
	this.instance_55.alpha = 0.398;

	this.instance_56 = new lib.Path_17_0_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(507.6,338.5,1,1,0,0,0,26.7,80.6);
	this.instance_56.alpha = 0.398;

	this.instance_57 = new lib.Path_18_0_1();
	this.instance_57.parent = this;
	this.instance_57.setTransform(466.4,481.5,1,1,0,0,0,68.9,73.5);
	this.instance_57.alpha = 0.398;

	this.instance_58 = new lib.Path_19_0_1();
	this.instance_58.parent = this;
	this.instance_58.setTransform(457.3,424,1,1,0,0,0,50.6,67.8);
	this.instance_58.alpha = 0.398;

	this.instance_59 = new lib.Path_20_0_1();
	this.instance_59.parent = this;
	this.instance_59.setTransform(503.7,296.8,1,1,0,0,0,3.9,4);
	this.instance_59.alpha = 0.398;

	this.instance_60 = new lib.Path_21_0_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(545.8,290,1,1,0,0,0,16.4,5.7);
	this.instance_60.alpha = 0.398;

	this.instance_61 = new lib.Path_22_0_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(520.7,239.3,1,1,0,0,0,20.6,22.7);
	this.instance_61.alpha = 0.398;

	this.instance_62 = new lib.Path_23_0_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(534.6,214,1,1,0,0,0,22.2,24.9);
	this.instance_62.alpha = 0.398;

	this.instance_63 = new lib.Path_24_0_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(531.2,313.6,1,1,0,0,0,49.5,215.1);
	this.instance_63.alpha = 0.398;

	this.instance_64 = new lib.Path_25_0_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(145,167.3,1,1,0,0,0,145,140.6);
	this.instance_64.alpha = 0.398;

	this.instance_65 = new lib.Path_26_0_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(382.6,159.6,1,1,0,0,0,150.8,107.4);
	this.instance_65.alpha = 0.398;

	this.instance_66 = new lib.Path_27_0_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(387.5,134.3,1,1,0,0,0,175.2,114.2);
	this.instance_66.alpha = 0.398;

	this.instance_67 = new lib.Path_28_0_1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(402.4,425.2,1,1,0,0,0,121.2,125);
	this.instance_67.alpha = 0.398;

	this.instance_68 = new lib.Path_29_0_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(461.7,310.3,1,1,0,0,0,35.1,154.8);
	this.instance_68.alpha = 0.398;

	this.instance_69 = new lib.Path_30_0_1();
	this.instance_69.parent = this;
	this.instance_69.setTransform(432.3,247.5,1,1,0,0,0,71.7,147.4);
	this.instance_69.alpha = 0.398;

	this.instance_70 = new lib.Path_31_0_1();
	this.instance_70.parent = this;
	this.instance_70.setTransform(503.1,360.2,1,1,0,0,0,43.2,136.2);
	this.instance_70.alpha = 0.398;

	this.instance_71 = new lib.Path_32_0_1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(524.9,314.2,1,1,0,0,0,27,143);
	this.instance_71.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.shape_25},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,602.2,584.5), null);


(lib.backgroundgeargreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(1.7,0,1,1,0,0,0,301.1,292.2);

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.4,30.6,1,1,0,0,0,263.3,252.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.7,-292.2,605.5,584.5);


// stage content:
(lib.waw_mod1_081017a_endcode = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Module1_072117_mixdown");
	}
	this.frame_374 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		
		createjs.Sound.stop();
		document.querySelector('.section-transition--forward').classList.remove('section-transition--hidden');
		document.querySelector('.section-transition--back').classList.remove('section-transition--hidden');
		document.querySelector('.pause').classList.add('module-outro-button_hidden');
		document.querySelector('.play').classList.add('module-outro-button_hidden');
		this.stop();
		
		// document.getElementById("wespager").className += " active-pager";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(374).call(this.frame_374).wait(1));

	// greengovt
	this.instance = new lib.greengovt("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(860.9,314.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(307).to({_off:false},0).to({alpha:1},1).wait(66).to({startPosition:0},0).wait(1));

	// greentransportation
	this.instance_1 = new lib.greentransportation("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(760.3,525);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(307).to({_off:false},0).to({alpha:1},1).wait(66).to({startPosition:0},0).wait(1));

	// greencomputer
	this.instance_2 = new lib.greencomputer("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(459.3,526.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(307).to({_off:false},0).to({alpha:1},1).wait(66).to({startPosition:0},0).wait(1));

	// grreencollege
	this.instance_3 = new lib.greencollege("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(358.9,320.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(307).to({_off:false},0).to({alpha:1},1).wait(66).to({startPosition:0},0).wait(1));

	// greenheart
	this.instance_4 = new lib.greenheart("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(609.9,121.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(307).to({_off:false},0).to({alpha:1},1).wait(66).to({startPosition:0},0).wait(1));

	// MIddle Gear
	this.instance_5 = new lib.middlegear_03("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(610.3,329.3,1,1,0,0,0,0,-0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(307).to({_off:false},0).to({alpha:0.648},1).wait(66).to({startPosition:0},0).wait(1));

	// backgroundgear green
	this.instance_6 = new lib.backgroundgeargreen("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(609.9,332.5);
	this.instance_6.alpha = 0.352;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(308).to({_off:false},0).wait(66).to({startPosition:0},0).wait(1));

	// Leading the Way green
	this.instance_7 = new lib.Tween27("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(608.9,327.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(308).to({_off:false},0).wait(67));

	// Leading the Way
	this.instance_8 = new lib.Tween19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(608.9,327.9,0.025,0.135);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween20("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(608.9,327.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},269).to({state:[{t:this.instance_9}]},38).to({state:[{t:this.instance_9}]},67).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},38).wait(68));

	// heart
	this.instance_10 = new lib.heart("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(608.9,329.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(146).to({_off:false},0).to({x:609.9,y:121.2,alpha:1},13).to({_off:true},149).wait(67));

	// government
	this.instance_11 = new lib.government("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(609,329.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(159).to({_off:false},0).to({x:860.9,y:314.9,alpha:1},17).to({_off:true},132).wait(67));

	// seatbelt
	this.instance_12 = new lib.seatbelt("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(608.9,329.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(176).to({_off:false},0).to({x:760.3,y:525,alpha:1},22).to({_off:true},110).wait(67));

	// computer
	this.instance_13 = new lib.computer("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(609,329.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(198).to({_off:false},0).to({x:459.3,y:526.8,alpha:1},18).to({_off:true},92).wait(67));

	// college
	this.instance_14 = new lib.college("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(609,329);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(216).to({_off:false},0).to({x:358.9,y:320.9,alpha:1},18).to({_off:true},74).wait(67));

	// resources
	this.instance_15 = new lib.resources("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(988.5,480.4);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(119).to({_off:false},0).to({x:987.5,alpha:1},4).wait(16).to({startPosition:0},0).to({x:606,y:322},5).to({alpha:0},2).to({_off:true},73).wait(156));

	// gear4
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1345.6,768.1,1,1,135);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(987.9,481);
	this.instance_17._off = true;

	this.instance_18 = new lib.gear4("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(606,322);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(100).to({_off:false},0).to({_off:true,rotation:0,x:987.9,y:481},19).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(100).to({_off:false},19).to({scaleX:1,scaleY:1,rotation:375},20).to({_off:true,scaleX:1,scaleY:1,rotation:360,x:606,y:322},5).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(139).to({_off:false},5).to({alpha:0},2).to({_off:true},73).wait(156));

	// managers
	this.instance_19 = new lib.Tween17("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(270.1,480.4);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.instance_20 = new lib.managers("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(269.1,480.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(100).to({_off:false},0).to({_off:true,x:269.1,alpha:1},3).wait(272));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},3).wait(31).to({startPosition:0},0).to({x:607.9,y:322.5},5).wait(5).to({startPosition:0},0).to({alpha:0},2).to({_off:true},1).wait(228));

	// gear3
	this.instance_21 = new lib.Tween7("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-134.8,781.6);
	this.instance_21._off = true;

	this.instance_22 = new lib.gear3purple("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(271.2,481.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:592.4,x:268,y:482.9},21).to({_off:true,scaleX:1,scaleY:1,rotation:720,x:271.2,y:481.6},34).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(100).to({_off:false},34).to({x:608,y:322.5},5).wait(5).to({startPosition:0},0).to({alpha:0},2).to({_off:true},77).wait(152));

	// corporate
	this.instance_23 = new lib.Tween14("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(956.1,183.1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(79).to({_off:false},0).to({alpha:1},4).wait(46).to({startPosition:0},0).to({x:605.7,y:322.1},5).wait(10).to({startPosition:0},0).to({alpha:0},2).to({_off:true},6).wait(223));

	// gear2
	this.instance_24 = new lib.Tween6("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(1324.8,-116.2);
	this.instance_24._off = true;
	this.instance_24.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 63.75, 63.75, 0)];
	this.instance_24.cache(-148,-149,297,298);

	this.instance_25 = new lib.gear2("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(960.5,183.5,0.999,0.999,99.3);
	this.instance_25._off = true;
	this.instance_25.filters = [new cjs.ColorFilter(0.9296875, 0.9296875, 0.9296875, 1, 18, 18, 18, 0)];
	this.instance_25.cache(-148,-149,297,298);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(59).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:-620.7,x:960.5,y:183.5},20).to({_off:false,rotation:-640.5,x:959.6},22).to({_off:true,scaleX:1,scaleY:1,rotation:-720,x:956.2,y:183.6},28).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(59).to({_off:false,rotation:-980.7},20).to({_off:true,rotation:-1000.5,x:959.6},22).to({_off:false,scaleX:1,scaleY:1,rotation:-1080,x:956.2,y:183.6},28).to({x:608,y:323.8},5).wait(10).to({startPosition:0},0).to({alpha:0},2).to({_off:true},6).wait(223));

	// studyareas
	this.instance_26 = new lib.Tween11("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(271.7,183.3);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.instance_27 = new lib.studyareas("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(271.7,183.3);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(59).to({_off:false},0).to({_off:true,alpha:1},4).wait(312));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(59).to({_off:false},4).wait(62).to({startPosition:0},0).to({x:605.7,y:322.3},4).wait(15).to({startPosition:0},0).to({alpha:0},2).to({_off:true},1).wait(228));

	// gear1
	this.instance_28 = new lib.Tween3("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-30.7,-163.7);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween4("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(609.2,323.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-436.2,x:271.9,y:181.7},20).to({scaleX:1,scaleY:1,rotation:-410.4,x:273,y:182.6},32).wait(34).to({scaleX:1,scaleY:1,rotation:-382.8,x:274.2,y:183.5},0).to({_off:true,scaleX:1,scaleY:1,rotation:-360,x:609.2,y:323.2},4).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(125).to({_off:false},4).wait(15).to({startPosition:0},0).to({alpha:0},2).to({_off:true},1).wait(228));

	// Working together
	this.instance_30 = new lib.Tween23("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(606,322,0.043,0.05,0,0,0,1.2,1);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween21("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(609.9,314.9);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(45).to({_off:false},0).wait(1).to({regX:0,regY:5.2,scaleX:0.06,scaleY:0.06,y:322.1},0).wait(1).to({scaleX:0.07,scaleY:0.07,y:322.2},0).wait(1).to({scaleX:0.08,scaleY:0.08,y:322.1},0).wait(1).to({scaleX:0.08,scaleY:0.09,x:606.1},0).wait(1).to({scaleX:0.09,scaleY:0.1},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:322},0).wait(1).to({scaleX:0.1,scaleY:0.11},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.11,scaleY:0.12,x:606.2},0).wait(1).to({scaleX:0.12,scaleY:0.12},0).wait(1).to({scaleX:0.12,scaleY:0.13,y:321.9},0).wait(1).to({scaleX:0.12,scaleY:0.13,y:322},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:321.9},0).wait(1).to({scaleX:0.13,scaleY:0.14},0).wait(1).to({scaleX:0.14,scaleY:0.14},0).wait(1).to({scaleX:0.14,scaleY:0.14},0).wait(1).to({scaleX:0.14,scaleY:0.15},0).wait(1).to({scaleX:0.14,scaleY:0.15},0).wait(1).to({scaleX:0.15,scaleY:0.16,x:606.3},0).wait(1).to({scaleX:0.15,scaleY:0.16},0).wait(1).to({scaleX:0.16,scaleY:0.16,y:321.8},0).wait(1).to({scaleX:0.16,scaleY:0.17},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.17,scaleY:0.18},0).wait(1).to({scaleX:0.18,scaleY:0.19,x:606.4,y:321.7},0).wait(1).to({scaleX:0.19,scaleY:0.2},0).wait(1).to({scaleX:0.2,scaleY:0.21},0).wait(1).to({scaleX:0.21,scaleY:0.22},0).wait(1).to({scaleX:0.23,scaleY:0.24,x:606.5,y:321.6},0).wait(1).to({scaleX:0.25,scaleY:0.26,x:606.6,y:321.5},0).wait(1).to({scaleX:0.28,scaleY:0.29,x:606.7,y:321.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,y:321.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:606.9,y:321.2},0).wait(1).to({scaleX:0.4,scaleY:0.41,x:607,y:321},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:607.2,y:320.8},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:607.3,y:320.6},0).wait(1).to({scaleX:0.58,scaleY:0.59,x:607.5,y:320.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:607.7,y:320.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:607.9,y:320},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:608.1,y:319.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:608.3,y:319.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:608.4,y:319.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:608.5,y:319.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:608.6,y:319.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:608.7,y:319.1},0).to({_off:true},1).wait(284));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(91).to({_off:false},0).to({startPosition:0},34).to({alpha:0},4).to({_off:true},1).wait(245));

	// middlegear
	this.instance_32 = new lib.Tween1("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(42.4,476.9,0.998,0.998,32.6,0,0,0,-1.6);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({regX:-1,regY:0.5,scaleX:1,scaleY:1,rotation:741.8,x:606.2,y:322,alpha:1},39).to({rotation:741.8},78,cjs.Ease.get(-0.05)).to({startPosition:0},12).to({regX:-0.9,regY:0.6,scaleX:1,scaleY:1,x:606.3,y:322.1},178).to({regX:-1,regY:0.5,scaleX:1,scaleY:1,x:606.2,y:322,alpha:0},1).to({_off:true},2).wait(65));

	// backgroundgear copy 2
	this.instance_33 = new lib._1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(624.1,322,1,1,0,0,0,302.7,292.2);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({alpha:0.25},23).wait(284).to({alpha:0},1).to({_off:true},2).wait(65));

	// backgroundgear copy
	this.instance_34 = new lib._1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(624.1,322,1,1,0,0,0,302.7,292.2);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({alpha:0.25},23).wait(284).to({alpha:0},1).to({_off:true},2).wait(65));

	// backgroundgear
	this.instance_35 = new lib._1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(624.1,322,1,1,0,0,0,302.7,292.2);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({alpha:0.25},23).wait(284).to({alpha:0},1).to({_off:true},2).wait(65));

	// background solid mod 1
	this.instance_36 = new lib.Backgroundsolid_mod1ai("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(610,337.4,0.997,0.998,0,0,0,612,335.9);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({regY:336,scaleX:1,scaleY:1,x:612,y:336,alpha:1},23).wait(284).to({startPosition:0},0).to({alpha:0},1).to({_off:true},2).wait(65));

	// Cultureillustration
	this.instance_37 = new lib.CultureIllustrationcopy();
	this.instance_37.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({_off:true},23).wait(352));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(442.1,335.5,1388,687.8);
// library properties:
lib.properties = {
	id: '6A78B93FFF514BE9B748518752D5DD5F',
	width: 1220,
	height: 671,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"animations/images/waw_mod1_061518_end_code_atlas_.png", id:"waw_mod1_081017_end_code_atlas_"},
		{src:"animations/sounds/Module1_072117_mixdown.mp3", id:"Module1_072117_mixdown"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6A78B93FFF514BE9B748518752D5DD5F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;


function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("6A78B93FFF514BE9B748518752D5DD5F");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.waw_mod1_081017a_endcode();
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(true,'both',true,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function playSound(id, loop) {
	// debugger;
	return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}