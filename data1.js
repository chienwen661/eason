var qs={
    "sunday":"星期日",
    "monday":"星期一",
    "tuesday":"星期二",
    "wednesday":"星期三",
    "thursday":"星期四",
    "friday":"星期五",
    "saturday":"星期六",
    "fat":"胖",
    "thin":"瘦",
    "map":"地圖",
    "chicken":"雞",
    "hen":"母雞",
    "cow":"牛",
    "zebra":"斑馬",
    "finger":"手指",
    "cola":"可樂",
    "hat":"帽子",
    "face":"臉",
    "bee":"蜜蜂",
    "goat":"山羊",
    "cherry":"櫻桃",
    "drink":"飲料",
    "beef":"牛肉",
    "ant":"螞蟻",
    "chocolate":"巧克力",
    "noodle":"麵",
    "sandwich":"三明治",
    "soda":"汽水",
    "soup":"湯",
    "water":"水",
    "room":"房間",
    "toy":"玩具",
    "volleyball":"排球",
    "friend":"朋友",
    "corn":"玉米",
    "airplane":"飛機",
    "coat":"大衣",
    "boot":"靴子",
    "computer":"電腦",
    "seventeen":"十七",
    "rabbit":"兔子",
    "phone":"電話",
    "yellow":"黃色",
    "lemon":"檸檬",
    "baseball":"棒球",
    "page":"頁",
    "carrot":"紅蘿蔔",
    "mango":"芒果",
    "pea":"豌豆",
    "sister":"姊妹",
    "eason":"陳昱瀚"
};

//==============================================
var qs1={
    "sunday":"星期日",
    "monday":"星期一",
    "tuesday":"星期二",
    "wednesday":"星期三",
    "thursday":"星期四",
    "friday":"星期五",
    "saturday":"星期六",
    "cherry":"櫻桃",
    "chocolate":"巧克力",
    "sandwich":"三明治",
    "volleyball":"排球",
    "friend":"朋友",
    "airplane":"飛機",
    "computer":"電腦",
    "rabbit":"兔子",
    "phone":"電話",
    "yellow":"黃色",
    "lemon":"檸檬",
    "baseball":"棒球",
    "page":"頁",
    "carrot":"紅蘿蔔",
    "mango":"芒果",
    "pea":"豌豆",
    "sister":"姊妹",
    "eason":"陳昱瀚"
};


//===============================================
const ar=document.createElement("audio");
const aw=document.createElement("audio");
const synth = window.speechSynthesis;
const voices = synth.getVoices();
var spk="";

var qks = [];
var qvs = [];
var qlst = [];
var qds=0;

function $(o){ return document.querySelector(o); }
function $$(o){ return document.querySelectorAll(o); }

function speak(){
    if (!spk || synth.speaking){ return false; }

    let utterance = new SpeechSynthesisUtterance(spk);
    utterance.voice = voices[0]; // Choose a specific voice
    utterance.pitch=1;  // 0 ~ 2
    utterance.rate=1;   // 0.1 ~ 2 比較不會出問題
    utterance.volume=1; // 0 ~ 1
    synth.speak(utterance);
}

function _chds(m){

  if( m==0 ){
      qks = Object.keys(qs);
      qvs = Object.values(qs);
  } else if(m==1) {
      qks = Object.keys(qs1);
      qvs = Object.values(qs1);
  }
  qlst = Array.from({ length: qks.length }, (v, k) => k ); // [0,1,2,3,...,9]

}

_chds(qds);



//console.log(qks);
//console.log(qvs);