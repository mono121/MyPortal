// 元からあるカードのhtmlに上書き
const overwriteCard = (cardArray, className) => {
  cardArray.map((card, index) => {
    if (index === 0) {
      className.innerHTML = `
			  <section class="card">
				  <div class="card-content">
					  <h1 class="card-title">${card.title}</h1>
					  <p class="card-text">${card.content}</p>
				  </div>
				  <div class="card-link">
					  <a href="${card.link}" target="_blank" rel="noopener noreferrer">URL</a>
				  </div>
			  </section>
			  `;
    } else {
      className.innerHTML += `
			  <section class="card">
				  <div class="card-content">
					  <h1 class="card-title">${card.title}</h1>
					  <p class="card-text">${card.content}</p>
				  </div>
				  <div class="card-link">
					  <a href="${card.link}" target="_blank" rel="noopener noreferrer">URL</a>
				  </div>
			  </section>
			  `;
    }
  });
};

// 元からあるカードのhtmlに追加
const addCard = (cardArray, className) => {
  cardArray.map((card, index) => {
    className.innerHTML += `
			  <section class="card">
				  <div class="card-content">
					  <h1 class="card-title">${card.title}</h1>
					  <p class="card-text">${card.content}</p>
				  </div>
				  <div class="card-link">
					  <a href="${card.link}" target="_blank" rel="noopener noreferrer">URL</a>
				  </div>
			  </section>
			  `;
  });
};

function showCards(tmpCardLists) {
  const cardTable = document.getElementById("cardTable");

  Object.keys(tmpCardLists).map((card) => {
    let i = 0;
    for (i; i < tmpCardLists[card].length; i++) {
      cards.push({
        title: tmpCardLists[card][i][0],
        content: tmpCardLists[card][i][1],
        link: tmpCardLists[card][i][2],
      });
    }
  });

  addCard(cards, cardTable);
}
