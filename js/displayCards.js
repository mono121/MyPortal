const displayCard = (cardArray, className) => {
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

const displayCard2 = (cardArray, className) => {
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

function showCards(tmpLists) {
  const portalDiv = document.getElementById("portal");

  Object.keys(tmpLists).map((card) => {
    let i = 0;
    for (i; i < tmpLists[card].length; i++) {
      portals.push({
        title: tmpLists[card][i][0],
        content: tmpLists[card][i][1],
        link: tmpLists[card][i][2],
      });
    }
  });

  displayCard2(portals, portalDiv);
}
