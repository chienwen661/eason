//===============================================
const ar=document.createElement("audio");
const aw=document.createElement("audio");
var qks = [];
var qvs = [];
var qlst = [];

function $(o){ return document.querySelector(o); }
function $$(o){ return document.querySelectorAll(o); }
function toggle(o){ if(typeof o==='string'){ o=$(o); } o.style.display=(o.style.display=="none")?"":"none"; }
function act(sp){ u = new URL(window.location.href); return u.searchParams.get(sp); }

var voices = window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Now you can safely use the voices array
};

function speak(spk=""){
    if (!spk || window.speechSynthesis.speaking){ return false; }
    let utterance = new SpeechSynthesisUtterance(spk);
    /*
    //utterance.voice = voices[0]; // Choose a specific voice
    utterance.pitch=1;  // 0 ~ 2
    utterance.rate=1;   // 0.1 ~ 2 比較不會出問題
    utterance.volume=1; // 0 ~ 1
    */
    window.speechSynthesis.speak(utterance);
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

//_chds(qds);

//console.log(qks);
//console.log(qvs);

/*
history.replaceState(null, null, location.href);

window.addEventListener('popstate', function(event) {
    history.pushState(null, null, location.href);
});
*/
