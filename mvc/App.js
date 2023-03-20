const App = {
  init() {
    this.fetchData();
    this.bindEvents();
  },
  fetchData() {
    Model.getData().then(data => {
      View.renderData(data);
    });
  },
  bindEvents() {
    document.querySelector('#save').addEventListener('click', () => {
      this.saveData();
    });
  },
  saveData() {
    Model.saveData().then(() => {
      this.fetchData();
    });
  }
};

App.init();
