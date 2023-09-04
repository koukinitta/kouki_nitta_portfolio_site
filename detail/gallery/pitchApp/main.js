"use strict";
{
  function test() {
    const counter = document.getElementById('counter');
    const everyTime = document.getElementById('every-time');
    const often = document.getElementById('often');
    const everyTimeTo = document.getElementById('every-time_to');
    const oftenTo = document.getElementById('often_to');
    const back0 = document.getElementsByClassName('back')[0];
    const back1 = document.getElementsByClassName('back')[1];
    
    everyTime.addEventListener('click' , () => {
      counter.classList.add('no-active')
      everyTime.classList.add('no-active');
      often.classList.add('no-active');
      everyTimeTo.classList.remove('no-active');
    });
    back0.addEventListener('click' , () => {
      counter.classList.remove('no-active')
      everyTime.classList.remove('no-active');
      often.classList.remove('no-active');
      everyTimeTo.classList.add('no-active');
    });
    often.addEventListener('click' , () => {
      counter.classList.add('no-active')
      often.classList.add('no-active');
      everyTime.classList.add('no-active');
      oftenTo.classList.remove('no-active');
    });
    back1.addEventListener('click' , () => {
      counter.classList.remove('no-active')
      often.classList.remove('no-active');
      everyTime.classList.remove('no-active');
      oftenTo.classList.add('no-active');
    });
  };


  const result = document.getElementsByClassName('result');
  const resultArray = Array.prototype.slice.call(result);
  const fraction = document.getElementById('fraction');
  let fractionValue;
  const plus = document.getElementsByClassName('plus');
  const plusArray = Array.prototype.slice.call(plus);
  const minus = document.getElementsByClassName('minus');
  const minusArray = Array.prototype.slice.call(minus);
  const item = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let era;
  let oav;
  let sok;
  let whip;

  for(let i = 0; i < 14; i++){
    resultArray[i] = item[i];
  };

  plusArray[0].addEventListener('click',()=>{
    if(resultArray[0] == 0 && fractionValue != 1 && fractionValue != 2) {
      fractionValue = 1;
    } else {
      fractionValue++;
    }
    if(fractionValue == 3){
      fractionValue = 0;
      resultArray[0]++;
    }
    fraction.textContent = fractionValue;
    result[0].textContent = resultArray[0];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  plusArray[1].addEventListener('click',()=>{
    resultArray[1]++;
    result[1].textContent = resultArray[1];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  plusArray[2].addEventListener('click',()=>{
    resultArray[2]++;
    result[2].textContent = resultArray[2];
  });

  plusArray[3].addEventListener('click',()=>{
    resultArray[3]++;
    result[3].textContent = resultArray[3];
  });

  plusArray[4].addEventListener('click',()=>{
    resultArray[4]++;
    result[4].textContent = resultArray[4];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  plusArray[5].addEventListener('click',()=>{
    resultArray[5]++;
    result[5].textContent = resultArray[5];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  plusArray[6].addEventListener('click',()=>{
    resultArray[6]++;
    result[6].textContent = resultArray[6];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  plusArray[7].addEventListener('click',()=>{
    resultArray[7]++;
    result[7].textContent = resultArray[7];
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
  });

  plusArray[8].addEventListener('click',()=>{
    resultArray[8]++;
    result[8].textContent = resultArray[8];
  });

  plusArray[9].addEventListener('click',()=>{
    resultArray[9]++;
    result[9].textContent = resultArray[9];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
  });

  plusArray[10].addEventListener('click',()=>{
      if(resultArray[0] == 0 && fractionValue != 1 && fractionValue != 2) {
        fractionValue = 1;
      } else {
        fractionValue++;
      }
      if(fractionValue == 3){
        fractionValue = 0;
        resultArray[0]++;
      }
      fraction.textContent = fractionValue;
      result[0].textContent = resultArray[0];
      era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
      result[10].textContent = era;
      sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  plusArray[11].addEventListener('click',()=>{
    resultArray[1]++;
    result[1].textContent = resultArray[1];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  plusArray[12].addEventListener('click',()=>{
    resultArray[2]++;
    result[2].textContent = resultArray[2];
  });

  plusArray[13].addEventListener('click',()=>{
    resultArray[3]++;
    result[3].textContent = resultArray[3];
  });

  plusArray[14].addEventListener('click',()=>{
    resultArray[4]++;
    result[4].textContent = resultArray[4];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  plusArray[15].addEventListener('click',()=>{
    resultArray[5]++;
    result[5].textContent = resultArray[5];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  plusArray[16].addEventListener('click',()=>{
    resultArray[6]++;
    result[6].textContent = resultArray[6];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  plusArray[17].addEventListener('click',()=>{
    resultArray[7]++;
    result[7].textContent = resultArray[7];
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
  });

  plusArray[18].addEventListener('click',()=>{
    resultArray[8]++;
    result[8].textContent = resultArray[8];
  });

  plusArray[19].addEventListener('click',()=>{
    resultArray[9]++;
    result[9].textContent = resultArray[9];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
  });



  minusArray[0].addEventListener('click',()=>{
    if(resultArray[0] == 0 && fractionValue != 1 && fractionValue != 2) {
      fractionValue = 0;
    } else if(resultArray[0] > 0) {
      if(fractionValue == 0) {
        fractionValue = 2;
        resultArray[0]--;
      } else if(fractionValue == 1) {
        fractionValue--;
      } else if(fractionValue == 2) {
        fractionValue--;
      };
    } else if(resultArray[0] == 0) {
      if(fractionValue == 0) {
        fractionValue = 0;
      } else if(fractionValue == 1) {
        fractionValue--;
      } else if(fractionValue == 2) {
        fractionValue--;
      };
    }
    fraction.textContent = fractionValue;
    result[0].textContent = resultArray[0];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  minusArray[1].addEventListener('click',()=>{
    resultArray[1]--;
    if(resultArray[1] < 0){
      resultArray[1] = 0;
    }
    result[1].textContent = resultArray[1];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  minusArray[2].addEventListener('click',()=>{
    resultArray[2]--;
    if(resultArray[2] < 0){
      resultArray[2] = 0;
    }
    result[2].textContent = resultArray[2];
  });

  minusArray[3].addEventListener('click',()=>{
    resultArray[3]--;
    if(resultArray[3] < 0){
      resultArray[3] = 0;
    }
    result[3].textContent = resultArray[3];
  });

  minusArray[4].addEventListener('click',()=>{
    resultArray[4]--;
    if(resultArray[4] < 0){
      resultArray[4] = 0;
    }
    result[4].textContent = resultArray[4];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  minusArray[5].addEventListener('click',()=>{
    resultArray[5]--;
    if(resultArray[6] < 0){
      resultArray[6] = 0;
    }
    result[5].textContent = resultArray[5];

    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  minusArray[6].addEventListener('click',()=>{
    resultArray[6]--;
    if(resultArray[6] < 0){
      resultArray[6] = 0;
    }
    result[6].textContent = resultArray[6];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  minusArray[7].addEventListener('click',()=>{
    resultArray[7]--;
    if(resultArray[7] < 0){
      resultArray[7] = 0;
    }
    result[7].textContent = resultArray[7];
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
  });

  minusArray[8].addEventListener('click',()=>{
    resultArray[8]--;
    if(resultArray[8] < 0){
      resultArray[8] = 0;
    }
    result[8].textContent = resultArray[8];
  });

  minusArray[9].addEventListener('click',()=>{
    resultArray[9]--;
    if(resultArray[9] < 0){
      resultArray[9] = 0;
    }
    result[9].textContent = resultArray[9];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
  });

  minusArray[10].addEventListener('click',()=>{
    if(resultArray[0] == 0 && fractionValue != 1 && fractionValue != 2) {
      fractionValue = 0;
    } else if(resultArray[0] > 0) {
      if(fractionValue == 0) {
        fractionValue = 2;
        resultArray[0]--;
      } else if(fractionValue == 1) {
        fractionValue--;
      } else if(fractionValue == 2) {
        fractionValue--;
      };
    } else if(resultArray[0] == 0) {
      if(fractionValue == 0) {
        fractionValue = 0;
      } else if(fractionValue == 1) {
        fractionValue--;
      } else if(fractionValue == 2) {
        fractionValue--;
      };
    }
    fraction.textContent = fractionValue;
    result[0].textContent = resultArray[0];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  minusArray[11].addEventListener('click',()=>{
    resultArray[1]--;
    if(resultArray[1] < 0){
      resultArray[1] = 0;
    }
    result[1].textContent = resultArray[1];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  minusArray[12].addEventListener('click',()=>{
    resultArray[2]--;
    if(resultArray[2] < 0){
      resultArray[2] = 0;
    }
    result[2].textContent = resultArray[2];
  });

  minusArray[13].addEventListener('click',()=>{
    resultArray[3]--;
    if(resultArray[3] < 0){
      resultArray[3] = 0;
    }
    result[3].textContent = resultArray[3];
  });

  minusArray[14].addEventListener('click',()=>{
    resultArray[4]--;
    if(resultArray[4] < 0){
      resultArray[4] = 0;
    }
    result[4].textContent = resultArray[4];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
  });

  minusArray[15].addEventListener('click',()=>{
    resultArray[5]--;
    if(resultArray[6] < 0){
      resultArray[6] = 0;
    }
    result[5].textContent = resultArray[5];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  minusArray[16].addEventListener('click',()=>{
    resultArray[6]--;
    if(resultArray[6] < 0){
      resultArray[6] = 0;
    }
    result[6].textContent = resultArray[6];
    oav = (resultArray[5] / (resultArray[1] - resultArray[4] - resultArray[6])).toFixed(2);
    result[11].textContent = oav;
    whip = ((resultArray[5] + resultArray[6]) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[13].textContent = whip;
  });

  minusArray[17].addEventListener('click',()=>{
    resultArray[7]--;
    if(resultArray[7] < 0){
      resultArray[7] = 0;
    }
    result[7].textContent = resultArray[7];
    sok = ((resultArray[7] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[12].textContent = sok;
  });

  minusArray[18].addEventListener('click',()=>{
    resultArray[8]--;
    if(resultArray[8] < 0){
      resultArray[8] = 0;
    }
    result[8].textContent = resultArray[8];
  });
  minusArray[19].addEventListener('click',()=>{
    resultArray[9]--;
    if(resultArray[9] < 0){
      resultArray[9] = 0;
    }
    result[9].textContent = resultArray[9];
    era = ((resultArray[9] * 9) / (resultArray[0] + (fractionValue * 0.33))).toFixed(2);
    result[10].textContent = era;
  });

  test();
};