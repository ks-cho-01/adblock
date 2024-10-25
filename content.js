setInterval(() => {
  console.log("interval");
  classes = [
    "firstDictVideoAd",
    "firstDictBnr",
    "thirdDictBnr",
    "rectangle-ads-frame-www",
    "ads-loader",
    "copyRtTbl",
    "copyRt",
    "fc-monetization-dialog-container",
  ];
  ids = ["head", "rightMiddleBnrId", "footBox", "adPcFootBnrWrp"];
  for (const c of classes) {
    removeClass(c);
  }
  for (const i of ids) {
    removeId(i);
  }
  removeTagName("iframe");
  removeName("translate");
  document.body.style.cssText = "visible !important";
}, 333);

function removeTagName(tagName) {
  removeAll(document.getElementsByTagName(tagName));
}

function removeName(name) {
  removeAll(document.getElementsByName(name));
}

function removeId(id) {
  remove(document.getElementById(id));
}

function removeClass(className) {
  removeAll(document.getElementsByClassName(className));
}

function removeAll(elements) {
  for (const ele of elements) {
    remove(ele);
    console.log(ele.className + "removed");
  }
}

function remove(ele) {
  ele?.parentNode.removeChild(ele);
}

