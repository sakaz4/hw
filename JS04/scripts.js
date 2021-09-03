/*document.write('<span id=style>Задание 1</span><br/>');
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
let i = 23;

while(i <= 57) {     
  document.write(i + '<br/>');
  i++;
}
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
document.write('<br/>');*/

document.write('<span id=style>Задание 7</span><br/>');
document.write('<br/>');
let arr7 = [];
let answer = prompt('Введите число');
while(answer !=='') {
  arr7.push(answer);
  answer = prompt('Введите число');
}
document.write(arr7);
let result7 = 0;
for(let m = 0; m < arr7.length; m++) {
  result7 += +arr7[m];
}
document.write(result7);
document.write('<br/>');

document.write('<span id=style>Задание 8</span><br/>');
document.write('<br/>');
let arrNums8 = [12, false, 'Текст', 4, 2, -5, 0];
arrNums8.reverse();
document.write(arrNums8);
document.write('<br/>');
document.write('<br/>');

document.write('<span id=style>Задание 9</span><br/>');
document.write('<br/>');
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let empties = arr9.length - arr9.filter(function(x){ return true }).length;
document.write(empties);