let db;
const request = indexDB.open("budget", 1);

request.onUpgradeNeeded = function (e) {
  const db = e.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onSuccess = function (e) {
  db = e.target.result;
};
