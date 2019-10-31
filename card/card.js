const section = Array.from(document.querySelectorAll(`section`),addCard);

function addCard(el) {
  const card = Array.from(el.querySelectorAll(`.card`));
  card.forEach( (value,index) => {
    //ゼロパディング
    const i = String(index + 1).padStart(2, `0`);
    value.innerHTML =
    `
    <div class="card__img"><img src="assets/img/cat${i}.jpg" alt=""></div>
    <h2 class="card__title">${cardData[index].title}</h2>
    <p class="card__text">${cardData[index].text}</p>
    <a class="card__btn" href="${cardData[index].url}">ボタン</a>
    `;
  });
}