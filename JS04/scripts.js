document.write('<span id=style>Задание 1</span><br/>');
document.write('<br/>');
let arrNum = [1, 2, 3, 4, 5];
document.write(arrNum); 
document.write('<br/>');
document.write('<br/>');

document.write('<span id=style>Задание 2</span><br/>');
document.write('<br/>');
let arrNum2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = -9; i < -3 && i > -10; i++) {
    if (i % 2 == 0)
    document.write(i);
}
document.write('<br/>');
document.write('<br/>');
document.write('<span id=style>Задание 3</span><br/>');
document.write('<br/>');

document.write('<span id=style>Задание 4</span><br/>');
document.write('<br/>');
let arr4 = ['10', '20', '30', '50', '235', '3000'];
document.write(arr4[0]);
document.write('<br/>');
document.write(arr4[1]);
document.write('<br/>');
document.write(arr4[3]);
document.write('<br/>');
document.write('<br/>');

document.write('<span id=style>Задание 5</span><br/>');
document.write('<br/>');
let week5 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
document.write(week5);
document.write('<br/>');
document.write('<span id=days>Saturday Sunday</span><br/>');
document.write('<br/>');

document.write('<span id=style>Задание 6</span><br/>');
document.write('<br/>');
let arr6 = ['a', 'b', 'c'];
arr6.push('D');
document.write(arr6);
document.write('<br/>');
document.write('Длинна массива равна ' + arr6.length + ' элемента');
document.write('<br/>');
document.write('<br/>');

document.write('<span id=style>Задание 7</span><br/>');
document.write('<br/>');

let count = 0;
let arrNums = 0;
FullCycle: for(let value; value !== Number; count++){
    value = +prompt("Введите число", '');
    sum8 += value;
      if (value == 0) {
        break FullCycle;
      }     
  
      if (null(value)) {
//        alert('Ошибка');
        break FullCycle;
      } 
}
arrNums.sort();
document.write(arrNums);




























