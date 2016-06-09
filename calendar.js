var content = document.getElementsByClassName("content")[0];
//初始化
function initial(){
    if(content.childNodes.length > 0) {
        content.remove();
        content = document.createElement("div");
        content.className = ("content");
        document.getElementsByClassName("outerContainer")[0].appendChild(content);
    }
}
//绘制Calendar
function drawCalendar(arrDate,i) {
    var nDiv,
        clsName = [" preMon"," theMon"," nxtMon"];
    nDiv = document.createElement("div");
    nDiv.className = "date";
    nDiv.className += clsName[i];
    nDiv.innerHTML = arrDate.getDate();
    content.appendChild(nDiv);
}
//生成当前月日期对象的数组
function getArr(y,mon){
    var arr = [],
        days = new Date(y,mon,0).getDate(), //确定本月有多少天
        daysPre = new Date(y,mon - 1,0).getDate(), // 确定上个月有多少天
        datDay = new Date(y,mon - 1,1).getDay(), //确定本月首日是周几
        arrDate,
        k = 1;
    if(datDay == 0){
        datDay = 7
    }
    for(var i = daysPre - datDay;i < daysPre;i++) {
        arrDate = new Date(y,mon-2,i + 1); //生成上个月末尾的日期
        arr.push(arrDate);
        drawCalendar(arrDate,0);
    }
    for(var j = 0;j < days;j++) {
        arrDate = new Date(y,mon-1,j + 1); //生成这个月的日期
        arr.push(arrDate);
        drawCalendar(arrDate,1);
    }
    while(arr.length < 42){
        arrDate = new Date(y,mon,k);
        arr.push(arrDate);
        drawCalendar(arrDate,2);
        k ++;
    }
    return arr;
}
var defaultDate = new Date();
initial();
var arr = getArr(defaultDate.getFullYear(),defaultDate.getMonth() + 1);

