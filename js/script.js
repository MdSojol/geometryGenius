function triangleBaseInputValue(triangleBaseInputId) {
    document.getElementById('triangleBaseInputId');
    const triangleBaseInputValueConvart = triangleBaseInputId.value;
    const triangleBaseInputValueConvertStringToNumber = parseFloat(triangleBaseInputValueConvart);
    triangleBaseInputId.value = "";
    return triangleBaseInputValueConvertStringToNumber;
}

function triangleBaseTextToNumber(stringToNumer) {
    document.getElementById('stringToNumer');
    const triangleBaseTextCapture = stringToNumer.innerText;
    const triangleBaseTextToNumberCapture = parseFloat(triangleBaseTextCapture);
    return triangleBaseTextToNumberCapture;
}

function rightSiteValuPrinting(valueeessm, area) {

    /* const para = document.createElement("p");
    const node = document.createTextNode(valueeess);
    const paraAndNodeRetuns = para.appendChild(node);
    return paraAndNodeRetuns; */
    const calculationEntery = document.getElementById('rightSideId');
    const p = document.createElement('p');
    p.innerHTML = valueeessm + " " + area;
    calculationEntery.appendChild(p);
    
    
    
    /* 
    const element = document.getElementById("rightSideId");
    element.appendChild(para); */
}

document.getElementById('triangleButtons').addEventListener('click', function () {
    const triangleClickValuBase = triangleBaseInputValue(triangleBaseInput);
    const triangleClickValuHeight = triangleBaseInputValue(TriangleHeightInput);
    const triangleTotalValue = triangleClickValuBase * triangleClickValuHeight;
    // console.log(triangleTotalValue)

    const triangleSetValues = triangleBaseTextToNumber(triangleSetValue);
    const trianglePresentValuAndInputValuTotal = triangleTotalValue * triangleSetValues;
    // console.log(trianglePresentValuAndInputValuTotal);

    const totalAreaSet = triangleBaseTextToNumber(totalArea);
    const totalAreaValuConcat = totalAreaSet + trianglePresentValuAndInputValuTotal
    const totalAreaSetId = document.getElementById('totalArea');
    if (isNaN(triangleClickValuBase) || isNaN(triangleClickValuHeight)) {
        alert('please give me a numbers');
        return;
    }
    totalAreaSetId.innerText = totalAreaValuConcat;
    rightSiteValuPrinting("Triangle : ", totalAreaValuConcat);
    




})

document.getElementById('SecondButtons').addEventListener('click', function () {
    const secondInputFastValueCapture = triangleBaseInputValue(SecondSectionFastInputs);
    const secondInputSecondValueCapture = triangleBaseInputValue(SecondSectionSecondInputs);
    const totalSecondSectionValue = secondInputFastValueCapture * secondInputSecondValueCapture;
    const secondSectionValuSets = document.getElementById('SecondTotalAreaSecond');
    secondSectionValuSets.innerText = totalSecondSectionValue;
    rightSiteValuPrinting("Rectangle : ", totalSecondSectionValue);

})



function thirdSection() {
    const thridSectionFastValue = triangleBaseInputValue(thridInputsFastValue);
    const thridSectionSecondValue = triangleBaseInputValue(thridInputsSecondValue);
    const totalThridValue = thridSectionFastValue * thridSectionSecondValue;
    return totalThridValue;
}


function forthSection(forthInputValuFast, forthInputValuSecond, forthSectionFixtValu) {
    const thridSectionFastValue = triangleBaseInputValue(forthInputValuFast);
    const thridSectionSecondValue = triangleBaseInputValue(forthInputValuSecond);
    const thridSectionSecondValueToNumber = triangleBaseTextToNumber(forthSectionFixtValu);
    const totalThridValue = thridSectionFastValue * thridSectionSecondValue;
    const totalAllok = totalThridValue * thridSectionSecondValueToNumber;
    return totalAllok;
}

function forthSectionSetString(elementID, area) {
    const element = document.getElementById(elementID);
    element.innerText = area;
}


document.getElementById('thirdButtons').addEventListener('click', function () {
    const thridValuRetunCapture = thirdSection();
    const thridSetValuStringToNumber = triangleBaseTextToNumber(thirdTotalAreaSecond);
    const totalThirdValu = thridSetValuStringToNumber + thridValuRetunCapture;
    const thridSectionSetValu = document.getElementById('thirdTotalAreaSecond')
    thridSectionSetValu.innerText = totalThirdValu;
    rightSiteValuPrinting("Parallelogram : ", totalThirdValu);

})


document.getElementById('forthButtons').addEventListener('click', function () {
    const retunValu = forthSection(forthInputValuFast, forthInputValuSecond, forthSectionFixtValu);
    forthSectionSetString("forthTotalAreaSecond", retunValu);
    rightSiteValuPrinting("Rhombus : ", retunValu);
})


document.getElementById('fifth-button').addEventListener('click', function () {
    const retunValu = forthSection(fifthFastInputs, fifthSecondInputs, fifthFixtValus);
    forthSectionSetString("fifthTotalAreaSecond", retunValu);
    rightSiteValuPrinting("Pentagon : ", retunValu);
})


document.getElementById('sixButtons').addEventListener('click', function () {
    const sixinputsfast = triangleBaseInputValue(sixFirstInputs);
    const sixinputsSecond = triangleBaseInputValue(sixSecondInputs);
    const sixInputTotals = sixinputsfast * sixinputsSecond;
    const sixTotalPi = sixInputTotals * 3.14159265359;
    forthSectionSetString("sixTotalAreaSecond", sixTotalPi);
    rightSiteValuPrinting("Ellipse : ", sixTotalPi);

})















