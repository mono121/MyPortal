const URL = "ここにURLを記入";
let menuLists = [];
let menus = [];
let cardLists = {};
let sheetLists = [];
let portals = [];
let sheets = [];

const getMenuData = () => {
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
        resolve(out.data);
        menuLists = out.data;
      })
      .fail(function () {
        console.log("エラー");
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
        resolve();
        cardLists[out.sheetName] = out.data;
      })
      .fail(function () {
        console.log("エラー");
        reject();
      });
  });
};

(async () => {
  await getMenuData();
  const cardSheet = menuLists
    .map((id, index) => {
      if (index === 0) return;
      else return id[0];
    })
    .filter((id) => id);

  Promise.all(cardSheet.map(getSheetData)).then(() => {
    var tmpLists = {};
    cardSheet.map((key) => {
      tmpLists[key] = cardLists[key];
    });

    localStorage.setItem("lists", JSON.stringify(tmpLists));
    sheetLists = JSON.parse(localStorage.getItem("lists"));
    createMenu();
    showCards(tmpLists);
  });
})();
