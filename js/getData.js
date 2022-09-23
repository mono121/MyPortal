// ------------------------パラメータ-----------------------------

const URL = "ここにURLを記入";
let menuLists = [];
let cardObject = {};
let sheetLists = [];
let menus = [];
let cards = [];

// --------------------------------------------------------------
// ----------------スプレッドシートへのGETリクエスト------------------

const getMenus = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: URL,
      dataType: "jsonp",
      data: {
        sheet: "menu",
      },
    })
      .done(function (out) {
        menuLists = out.data;
        resolve();
      })
      .fail(function () {
        console.log("get menu error");
        reject();
      });
  });
};

const getSheetData = (sheetName) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: URL,
      dataType: "jsonp",
      data: {
        sheet: sheetName,
      },
    })
      .done(function (out) {
        cardObject[out.sheetName] = out.data;
        resolve();
      })
      .fail(function () {
        console.log("get sheetData error");
        reject();
      });
  });
};

// --------------------------------------------------------------
// ----------------全データ取得 & 全てのカードの表示------------------

(async () => {
  await getMenus();
  // トップ以外のmenuのリストを格納
  const menuListsWithoutTop = menuLists
    .map((id, index) => {
      if (index === 0) return;
      else return id[0];
    })
    .filter((id) => id);

  // カードのデータを非同期で取得
  Promise.all(menuListsWithoutTop.map(getSheetData)).then(() => {
    var tmpCardLists = {};
    // tmpCardListsにmenuと同じ順番でカードを格納
    menuListsWithoutTop.map((key) => {
      tmpCardLists[key] = cardObject[key];
    });

    localStorage.setItem("lists", JSON.stringify(tmpCardLists));
    sheetLists = JSON.parse(localStorage.getItem("lists"));
    showMenus();
    showCards(tmpCardLists);
  });
})();
