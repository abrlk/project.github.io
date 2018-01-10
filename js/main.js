
var peopleData = [];
for (var i = 0; i <= 100; i++) {
  peopleData[i] = { name: chance.first(), surname: chance.last(), age: chance.age(), sex: chance.gender() };
  console.log(peopleData[i]);
}

function Client(data) {
  this.name = ko.observable(data.name);
  this.surname = ko.observable(data.surname);
  this.age = ko.observable(data.age);
  this.sex = ko.observable(data.sex);
}

var mappedRows = $.map(peopleData, function (item) { return new Client(item) });

function sortTable(viewModel, data, prop, asc) {
  if (asc) {
    data.sort(function (left, right) {
      viewModel.sortBy("asc");
      return left[prop]() == right[prop]() ? 0 : left[prop]() < right[prop]() ? -1 : 1;
    });
  } else {
    data.sort(function (left, right) {
      viewModel.sortBy("desc");
      return left[prop]() == right[prop]() ? 0 : left[prop]() > right[prop]() ? -1 : 1;
    });
  }
}

ko.bindingHandlers.sort = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var asc = true;
    sortTable(viewModel, valueAccessor().arr, valueAccessor().prop, asc);

    element.onclick = function () {
      asc = !asc;
      sortTable(viewModel, valueAccessor().arr, valueAccessor().prop, asc);
    }
  }
};

var VievModel = function (items) {
  this.rows = ko.observableArray([]);
  this.sortBy = ko.observable('asc');
  this.sort = function (data, event) {
    var rows = this.rows();
  };
  this.peopleData = ko.observableArray(items);
  var used = {};
  this.filtered = peopleData.filter(function (obj) {
    if (obj.name in used) {
      return false;
    }
    used[obj.name] = true;
    return true;
  })
    .sort(function (a, b) {
      return a.age - b.age;
    })
    .map(function (user) {
      var newUser = Object.assign({}, user);
      if (newUser.sex == "Female") {
        newUser.name = "Міс " + newUser.name + ' ' + newUser.surname;
      } else {
        newUser.name = "Містер " + newUser.name + ' ' + newUser.surname;
      }
      return newUser;
    });
  // end sorting and concatenating name with surname

  // start pagination
  this.numberOfItemsPerPage = ko.observableArray([5, 10, 20, 50, 'all']);
  this.rows = ko.observableArray(peopleData);
  this.pageSize = ko.observable(this.numberOfItemsPerPage()[0]);
  this.pageIndex = ko.observable(0);
  this.previousPage = function () {
    if (this.pageIndex() > 0) {
      this.pageIndex(this.pageIndex() - 1);
    }
  };
  this.nextPage = function () {
    if (this.pageIndex()+1 < this.maxPageIndex()) {
      this.pageIndex(this.pageIndex() + 1);
    }
  };
  this.gotoPage = function (data) {
    this.pageIndex(data);
  };
  this.maxPageIndex = ko.computed(function () {
    return Math.ceil(this.rows().length / this.pageSize());
  }, this);
  this.pagedPeoples = ko.computed(function () {
    var size = this.pageSize();
    if (size === 'all') {
      size = items.length;
    }
    var start = this.pageIndex() * size;
    return this.rows().slice(start, start + size);
  }, this);
  this.buttons = function () {
    var arr = [];
    for (var i = 0; i < this.maxPageIndex(); i++) {
      arr.push(i);
    }
    return arr; 
  };

  this.rows(mappedRows);  
  this.gotoPage(0);

  //live search 
  var self = this;
  self.inputName = ko.observable('');
  self.liveSearchPeople = ko.computed(function () {
    return items.filter(function (obj) {
      return Object.keys(obj).some(key =>
       new RegExp(self.inputName(), 'i').test(obj[key])
      );
    })
    .sort(function (a, b) {
      return a.age - b.age;
    })
  });
}

ko.applyBindings(new VievModel(peopleData));
