function searchButton() {
  const searchText = document.getElementById("searchText");
  const cardTable = document.getElementById("cardTable");
  let searchedCard = [];

  Object.keys(sheetLists).map((card) => {
    let i = 0;

    // 全カードのタイトルに対して部分一致で検索
    for (i; i < sheetLists[card].length; i++) {
      if (sheetLists[card][i][0].indexOf(searchText.value) > -1) {
        searchedCard.push({
          title: sheetLists[card][i][0],
          content: sheetLists[card][i][1],
          link: sheetLists[card][i][2],
        });
      } else {
        cardTable.innerHTML = `
            <h1>一致するカードは見つかりませんでした。</h1>
          `;
      }
    }
  });

  overwriteCard(searchedCard, cardTable);
}
