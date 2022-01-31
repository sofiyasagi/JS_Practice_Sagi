document.write("Sagi Sofiya, CS-2118N");
document.write("<br>");
document.write("<br>");

const d = new Date();
document.write("Year: " + [d.getFullYear()]);
document.write("<br>");

var day=new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
document.write("Today is:  " + weekday[day.getDay()]);
document.write("<br>");

var day = new Date();
document.write("Date: " + day.getDate());
document.write("<br>");

var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getMinutes();
document.write("Time is: " + hours + " AM: " + minutes + ": "+ seconds);
document.write("<br>");
document.write("<br>");


today=new Date();
var grad=new Date(today.getFullYear()+2, 05, 20);
var one_day=1000*60*60*24;
document.write(Math.ceil((grad.getTime()-today.getTime())/(one_day))+
" days left until Sofiya's graduation!");
document.write("<br>");
document.write("<br>");

function multiplyBy() {
        n1 = document.getElementById("Number_One").value;
        n2 = document.getElementById("Number_Two").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy(){
        n1 = document.getElementById("Number_One").value;
        n2 = document.getElementById("Number_Two").value;
document.getElementById("res").innerHTML = num1 / num2;
}
