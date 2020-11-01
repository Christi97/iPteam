const cardList = document.getElementById("card-list");
const cardContent = `
  <div class="list-item">
    <div class="item-info">
      <a href="/">@ivanr</a>
      <div class="item-info__name">
        <p>Иван Рудской</p>
        <img src="./img/svg/checked.svg" alt="checked" />
      </div>
      <span>24 года, Москва</span>
    </div>
    <div class="item-img">
      <div class="list-item__avatar">
        <img src="./img/avatar.png" alt="avatar" />
      </div>
      <div class="list-item__chart">
        <img src="./img/stat.png" alt="stat" />
      </div>
    </div>
    <div class="interests">
      <div class="interests-item">Игры</div>
      <div class="interests-item">Летсплей</div>
      <div class="interests-item">Обзоры</div>
      <div class="interests-item">Лайфстайл</div>
      <div class="interests-item">Юмор</div>
    </div>
    <div class="list-item__btn">
      <button class="primary-btn">Перейти в профиль</button>
    </div>
</div>`;

window.addEventListener("load", () => {
  const html = [];
  for (let i = 0; i < 9; i++) {
    html.push(cardContent);
  }

  cardList.innerHTML = html.join("");
});
