var _tourSteps = [{ className: "step1", content: "abc", active: false}]  ;



function next(className) {
    var currentObject =  search(className);
    var index = _tourSteps.indexOf(currentObject);
    currentObject.active = false;
    $('.' + currentObject.className).removeClass('active');

    if(_tourSteps.length > index ){
        var nextStep =  tourSteps[index+1];
        nextStep.active = true;
        $('.' + nextStep.className).addClass('active');
    }
}

//private
function search(nameKey){
    for (var i=0; i < _tourSteps.length; i++) {
        if (myArray[i].className === nameKey) {
            return myArray[i];
        }
    }
}

