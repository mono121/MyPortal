const innerPortal = document.getElementById("portal");
let element = document.getElementById("mytext");

function clickButton(menuTitle) {
  var cards = [];
  let i = 0,
    j = 0;

  for (i; i < Object.keys(sheetLists).length; i++) {
    for (j; j < sheetLists[menuTitle].length; j++) {
      cards.push({
        title: sheetLists[menuTitle][j][0],
        content: sheetLists[menuTitle][j][1],
        link: sheetLists[menuTitle][j][2],
      });
    }
  }

  displayCard(cards, innerPortal);
}

function createMenu() {
  let i = 0;
  for (i; i < menuLists.length; i++) {
    if (menuLists[i][0] != "" || menuLists[i][1] != "") {
      menus.push({ title: menuLists[i][0] });
    }
  }

  const innerMenu = document.getElementById("menu");

  menus.map((menu) => {
    if (menu.title === "トップ") {
      innerMenu.innerHTML += `
			<li>
					<a href="index.html">
							${menu.title}
					</a>
			</li>
			`;
    } else {
      innerMenu.innerHTML += `
			<li>
					<a onclick="clickButton('${menu.title}')">
							${menu.title}
					</a>
			</li>
			`;
    }
  });
}
