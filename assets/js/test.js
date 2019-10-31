function test() {
  const getHeight = el => el.clientHeight;
  const setHeight = el => el.style.height = `${maxHeiht}px`;
  const cardList = document.querySelectorAll(`.section1 .card`);
  console.log(cardList);
  const cardHeightList = Array.from(cardList,getHeight);
  console.log(cardHeightList);
  const maxHeiht = Math.max(...cardHeightList);//最大値を取得
  console.log(maxHeiht);
  Array.from(cardList,setHeight);
  console.log(maxHeiht);
}

window.addEventListener(`load`, ()=> {
  test();
})