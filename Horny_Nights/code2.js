gdjs.DisclaimerCode = {};
gdjs.DisclaimerCode.localVariables = [];
gdjs.DisclaimerCode.idToCallbackMap = new Map();
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1= [];
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2= [];
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects3= [];
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects4= [];
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects5= [];
gdjs.DisclaimerCode.GDYESObjects1= [];
gdjs.DisclaimerCode.GDYESObjects2= [];
gdjs.DisclaimerCode.GDYESObjects3= [];
gdjs.DisclaimerCode.GDYESObjects4= [];
gdjs.DisclaimerCode.GDYESObjects5= [];
gdjs.DisclaimerCode.GDNOObjects1= [];
gdjs.DisclaimerCode.GDNOObjects2= [];
gdjs.DisclaimerCode.GDNOObjects3= [];
gdjs.DisclaimerCode.GDNOObjects4= [];
gdjs.DisclaimerCode.GDNOObjects5= [];
gdjs.DisclaimerCode.GDDawnObjects1= [];
gdjs.DisclaimerCode.GDDawnObjects2= [];
gdjs.DisclaimerCode.GDDawnObjects3= [];
gdjs.DisclaimerCode.GDDawnObjects4= [];
gdjs.DisclaimerCode.GDDawnObjects5= [];
gdjs.DisclaimerCode.GDSelect_9595BoxObjects1= [];
gdjs.DisclaimerCode.GDSelect_9595BoxObjects2= [];
gdjs.DisclaimerCode.GDSelect_9595BoxObjects3= [];
gdjs.DisclaimerCode.GDSelect_9595BoxObjects4= [];
gdjs.DisclaimerCode.GDSelect_9595BoxObjects5= [];
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects1= [];
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2= [];
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects3= [];
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects4= [];
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects5= [];


gdjs.DisclaimerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Disclaimer_Text"), gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects2);
gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects2);
{for(var i = 0, len = gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[i].getWidth()) / 2));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDYESObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDYESObjects2[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((gdjs.DisclaimerCode.GDYESObjects2[i].getWidth()) / 2) - 200);
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDNOObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDNOObjects2[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((gdjs.DisclaimerCode.GDNOObjects2[i].getWidth()) / 2) + 200);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dawn"), gdjs.DisclaimerCode.GDDawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DisclaimerCode.GDDawnObjects2.length;i<l;++i) {
    if ( gdjs.DisclaimerCode.GDDawnObjects2[i].getBehavior("Animation").getAnimationName() == "Dawn Home" ) {
        isConditionTrue_0 = true;
        gdjs.DisclaimerCode.GDDawnObjects2[k] = gdjs.DisclaimerCode.GDDawnObjects2[i];
        ++k;
    }
}
gdjs.DisclaimerCode.GDDawnObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DisclaimerCode.GDDawnObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Disclaimer_Text"), gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2);
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].setX((( gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[0].getX()) - 280);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dawn"), gdjs.DisclaimerCode.GDDawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DisclaimerCode.GDDawnObjects2.length;i<l;++i) {
    if ( gdjs.DisclaimerCode.GDDawnObjects2[i].getBehavior("Animation").getAnimationName() == "Dawn Maid" ) {
        isConditionTrue_0 = true;
        gdjs.DisclaimerCode.GDDawnObjects2[k] = gdjs.DisclaimerCode.GDDawnObjects2[i];
        ++k;
    }
}
gdjs.DisclaimerCode.GDDawnObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DisclaimerCode.GDDawnObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Disclaimer_Text"), gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2);
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].setX((( gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[0].getX()) - 70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dawn"), gdjs.DisclaimerCode.GDDawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DisclaimerCode.GDDawnObjects2.length;i<l;++i) {
    if ( gdjs.DisclaimerCode.GDDawnObjects2[i].getBehavior("Animation").getAnimationName() == "Dawn Outside" ) {
        isConditionTrue_0 = true;
        gdjs.DisclaimerCode.GDDawnObjects2[k] = gdjs.DisclaimerCode.GDDawnObjects2[i];
        ++k;
    }
}
gdjs.DisclaimerCode.GDDawnObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DisclaimerCode.GDDawnObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Disclaimer_Text"), gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2);
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].setX((( gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[0].getX()) + (( gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[0].getWidth()) + 70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dawn"), gdjs.DisclaimerCode.GDDawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DisclaimerCode.GDDawnObjects1.length;i<l;++i) {
    if ( gdjs.DisclaimerCode.GDDawnObjects1[i].getBehavior("Animation").getAnimationName() == "Dawn Club" ) {
        isConditionTrue_0 = true;
        gdjs.DisclaimerCode.GDDawnObjects1[k] = gdjs.DisclaimerCode.GDDawnObjects1[i];
        ++k;
    }
}
gdjs.DisclaimerCode.GDDawnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DisclaimerCode.GDDawnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Disclaimer_Text"), gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1);
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects1.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects1[i].setX((( gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1[0].getX()) + (( gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1[0].getWidth()) + 280);
}
}
}

}


};gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDYESObjects3Objects = Hashtable.newFrom({"YES": gdjs.DisclaimerCode.GDYESObjects3});
gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDNOObjects3Objects = Hashtable.newFrom({"NO": gdjs.DisclaimerCode.GDNOObjects3});
gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDYESObjects3Objects = Hashtable.newFrom({"YES": gdjs.DisclaimerCode.GDYESObjects3});
gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDNOObjects3Objects = Hashtable.newFrom({"NO": gdjs.DisclaimerCode.GDNOObjects3});
gdjs.DisclaimerCode.mapOfEmptyGDSelect_9595BoxObjects = Hashtable.newFrom({"Select_Box": []});
gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDSelect_95959595BoxObjects4Objects = Hashtable.newFrom({"Select_Box": gdjs.DisclaimerCode.GDSelect_9595BoxObjects4});
gdjs.DisclaimerCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.DisclaimerCode.mapOfEmptyGDSelect_9595BoxObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46636708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects4);
gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDSelect_95959595BoxObjects4Objects, (( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getCenterXInScene()), (( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getBehavior("Opacity").setOpacity(110);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_Box"), gdjs.DisclaimerCode.GDSelect_9595BoxObjects4);
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getBehavior("Resizable").setHeight(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_Box"), gdjs.DisclaimerCode.GDSelect_9595BoxObjects4);
gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects4);
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].setZOrder((( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getZOrder()) - 1);
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].setX(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getPointX("")), (( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getCenterXInScene()), 0.5));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].setY(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getPointY("")), (( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getCenterYInScene()), 0.5));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getWidth()), (( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getWidth()), 0.1));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getBehavior("Resizable").setHeight(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects4[i].getHeight()), (( gdjs.DisclaimerCode.GDYESObjects4.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDYESObjects4[0].getHeight()), 0.5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects3);
gdjs.copyArray(runtimeScene.getObjects("Select_Box"), gdjs.DisclaimerCode.GDSelect_9595BoxObjects3);
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].setZOrder((( gdjs.DisclaimerCode.GDNOObjects3.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDNOObjects3[0].getZOrder()) - 1);
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].setX(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].getPointX("")), (( gdjs.DisclaimerCode.GDNOObjects3.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDNOObjects3[0].getCenterXInScene()), 0.5));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].setY(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].getPointY("")), (( gdjs.DisclaimerCode.GDNOObjects3.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDNOObjects3[0].getCenterYInScene()), 0.5));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].getWidth()), (( gdjs.DisclaimerCode.GDNOObjects3.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDNOObjects3[0].getWidth()), 0.1));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].getBehavior("Resizable").setHeight(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDSelect_9595BoxObjects3[i].getHeight()), (( gdjs.DisclaimerCode.GDNOObjects3.length === 0 ) ? 0 :gdjs.DisclaimerCode.GDNOObjects3[0].getHeight()), 0.5));
}
}
}

}


};gdjs.DisclaimerCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.DisclaimerCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46628740);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
}

}


};gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDYESObjects3Objects = Hashtable.newFrom({"YES": gdjs.DisclaimerCode.GDYESObjects3});
gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDNOObjects2Objects = Hashtable.newFrom({"NO": gdjs.DisclaimerCode.GDNOObjects2});
gdjs.DisclaimerCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDYESObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDNOObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
}

}


};gdjs.DisclaimerCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46599948);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.DisclaimerCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDYESObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.DisclaimerCode.GDYESObjects3 */
{for(var i = 0, len = gdjs.DisclaimerCode.GDYESObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDYESObjects3[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDYESObjects3[i].getBehavior("Opacity").getOpacity()), 50, 0.1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDNOObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.DisclaimerCode.GDNOObjects3 */
{for(var i = 0, len = gdjs.DisclaimerCode.GDNOObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDNOObjects3[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDNOObjects3[i].getBehavior("Opacity").getOpacity()), 50, 0.1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDYESObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DisclaimerCode.mapOfGDgdjs_9546DisclaimerCode_9546GDNOObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46626444);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\advance_chat.mp3", false, 20, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46627668);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\advance_chat.mp3", false, 20, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects3);
{for(var i = 0, len = gdjs.DisclaimerCode.GDYESObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDYESObjects3[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDYESObjects3[i].getBehavior("Opacity").getOpacity()), 255, 0.1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects3);
{for(var i = 0, len = gdjs.DisclaimerCode.GDNOObjects3.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDNOObjects3[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.DisclaimerCode.GDNOObjects3[i].getBehavior("Opacity").getOpacity()), 255, 0.1));
}
}
}

}


{


gdjs.DisclaimerCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.DisclaimerCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46619588);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title_Menu", true);
}
}

}


};gdjs.DisclaimerCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.DisclaimerCode.asyncCallback46642332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DisclaimerCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
gdjs.DisclaimerCode.localVariables.length = 0;
}
gdjs.DisclaimerCode.idToCallbackMap.set(46642332, gdjs.DisclaimerCode.asyncCallback46642332);
gdjs.DisclaimerCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DisclaimerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.DisclaimerCode.asyncCallback46642332(runtimeScene, asyncObjectsList)), 46642332, asyncObjectsList);
}
}

}


};gdjs.DisclaimerCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46614060);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dawn"), gdjs.DisclaimerCode.GDDawnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Disclaimer_Text"), gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("NO"), gdjs.DisclaimerCode.GDNOObjects2);
gdjs.copyArray(runtimeScene.getObjects("Select_Box"), gdjs.DisclaimerCode.GDSelect_9595BoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.DisclaimerCode.GDYESObjects2);
{for(var i = 0, len = gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[i].setFontSize(150);
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2[i].setBBText("YOU CANNOT PLAY THIS GAME");
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDNOObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDNOObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDYESObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDYESObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDSelect_9595BoxObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDSelect_9595BoxObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDDawnObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDDawnObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46642412);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};gdjs.DisclaimerCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DisclaimerCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.DisclaimerCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.DisclaimerCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.DisclaimerCode.eventsList8(runtimeScene);
}


{


gdjs.DisclaimerCode.eventsList11(runtimeScene);
}


};gdjs.DisclaimerCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 254;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46645996);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


};gdjs.DisclaimerCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46648100);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


};gdjs.DisclaimerCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Black_Transition"), gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2);
{for(var i = 0, len = gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2[i].setZOrder(999999999999999999999999999999999999);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(10);
}

{ //Subevents
gdjs.DisclaimerCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(10);
}

{ //Subevents
gdjs.DisclaimerCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


};gdjs.DisclaimerCode.eventsList16 = function(runtimeScene) {

{


gdjs.DisclaimerCode.eventsList0(runtimeScene);
}


{


gdjs.DisclaimerCode.eventsList12(runtimeScene);
}


{


gdjs.DisclaimerCode.eventsList15(runtimeScene);
}


};

gdjs.DisclaimerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects3.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects4.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects5.length = 0;
gdjs.DisclaimerCode.GDYESObjects1.length = 0;
gdjs.DisclaimerCode.GDYESObjects2.length = 0;
gdjs.DisclaimerCode.GDYESObjects3.length = 0;
gdjs.DisclaimerCode.GDYESObjects4.length = 0;
gdjs.DisclaimerCode.GDYESObjects5.length = 0;
gdjs.DisclaimerCode.GDNOObjects1.length = 0;
gdjs.DisclaimerCode.GDNOObjects2.length = 0;
gdjs.DisclaimerCode.GDNOObjects3.length = 0;
gdjs.DisclaimerCode.GDNOObjects4.length = 0;
gdjs.DisclaimerCode.GDNOObjects5.length = 0;
gdjs.DisclaimerCode.GDDawnObjects1.length = 0;
gdjs.DisclaimerCode.GDDawnObjects2.length = 0;
gdjs.DisclaimerCode.GDDawnObjects3.length = 0;
gdjs.DisclaimerCode.GDDawnObjects4.length = 0;
gdjs.DisclaimerCode.GDDawnObjects5.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects1.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects2.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects5.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects1.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects3.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects4.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects5.length = 0;

gdjs.DisclaimerCode.eventsList16(runtimeScene);
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects1.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects2.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects3.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects4.length = 0;
gdjs.DisclaimerCode.GDDisclaimer_9595TextObjects5.length = 0;
gdjs.DisclaimerCode.GDYESObjects1.length = 0;
gdjs.DisclaimerCode.GDYESObjects2.length = 0;
gdjs.DisclaimerCode.GDYESObjects3.length = 0;
gdjs.DisclaimerCode.GDYESObjects4.length = 0;
gdjs.DisclaimerCode.GDYESObjects5.length = 0;
gdjs.DisclaimerCode.GDNOObjects1.length = 0;
gdjs.DisclaimerCode.GDNOObjects2.length = 0;
gdjs.DisclaimerCode.GDNOObjects3.length = 0;
gdjs.DisclaimerCode.GDNOObjects4.length = 0;
gdjs.DisclaimerCode.GDNOObjects5.length = 0;
gdjs.DisclaimerCode.GDDawnObjects1.length = 0;
gdjs.DisclaimerCode.GDDawnObjects2.length = 0;
gdjs.DisclaimerCode.GDDawnObjects3.length = 0;
gdjs.DisclaimerCode.GDDawnObjects4.length = 0;
gdjs.DisclaimerCode.GDDawnObjects5.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects1.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects2.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects3.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects4.length = 0;
gdjs.DisclaimerCode.GDSelect_9595BoxObjects5.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects1.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects2.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects3.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects4.length = 0;
gdjs.DisclaimerCode.GDBlack_9595TransitionObjects5.length = 0;


return;

}

gdjs['DisclaimerCode'] = gdjs.DisclaimerCode;
