/*! myADT - v0.1.0 - 2017-12-27 15:34:48 +0200 */ 
var peopleData = [
  {
    name: "Joan",
    surname: "Dorian",
    age: 26,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Pedro",
    age: 25,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Mike",
    age: 41,
    sex: "male"
  },
  {
    name: "Margaret",
    surname: "Noah",
    age: 26,
    sex: "female"
  },
  {
    name: "Margaret",
    surname: "Nikson",
    age: 30,
    sex: "female"
  },
  {
    name: "Eliot",
    surname: "Rid",
    age: 29,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 20,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Dorian",
    age: 26,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Pedro",
    age: 25,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Mike",
    age: 41,
    sex: "male"
  },
  {
    name: "Margaret",
    surname: "Noah",
    age: 26,
    sex: "female"
  },
  {
    name: "Margaret",
    surname: "Nikson",
    age: 30,
    sex: "female"
  },
  {
    name: "Eliot",
    surname: "Rid",
    age: 29,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 20,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Dorian",
    age: 26,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Pedro",
    age: 25,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Mike",
    age: 41,
    sex: "male"
  },
  {
    name: "Margaret",
    surname: "Noah",
    age: 26,
    sex: "female"
  },
  {
    name: "Margaret",
    surname: "Nikson",
    age: 30,
    sex: "female"
  },
  {
    name: "Eliot",
    surname: "Rid",
    age: 29,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 20,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Dorian",
    age: 26,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Pedro",
    age: 25,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Mike",
    age: 41,
    sex: "male"
  },
  {
    name: "Margaret",
    surname: "Noah",
    age: 26,
    sex: "female"
  },
  {
    name: "Margaret",
    surname: "Nikson",
    age: 30,
    sex: "female"
  },
  {
    name: "Eliot",
    surname: "Rid",
    age: 29,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 20,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Dorian",
    age: 26,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Pedro",
    age: 25,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Mike",
    age: 41,
    sex: "male"
  },
  {
    name: "Margaret",
    surname: "Noah",
    age: 26,
    sex: "female"
  },
  {
    name: "Margaret",
    surname: "Nikson",
    age: 30,
    sex: "female"
  },
  {
    name: "Eliot",
    surname: "Rid",
    age: 29,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 20,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Dorian",
    age: 26,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Pedro",
    age: 25,
    sex: "male"
  },
  {
    name: "Joan",
    surname: "Mike",
    age: 41,
    sex: "male"
  },
  {
    name: "Margaret",
    surname: "Noah",
    age: 26,
    sex: "female"
  },
  {
    name: "Margaret",
    surname: "Nikson",
    age: 30,
    sex: "female"
  },
  {
    name: "Eliot",
    surname: "Rid",
    age: 29,
    sex: "female"
  },
  {
    name: "Joan",
    surname: "Nikson",
    age: 20,
    sex: "female"
  },
  {
    name: "Xerox",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Andriy",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Biber",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "DonerKebab",
    surname: "Antonov",
    age: 23,
    sex: "female"
  },
  {
    name: "Zlo",
    surname: "Zorro",
    age: 23,
    sex: "female"
  },
  {
    name: "C-vitamin",
    surname: "Nikson",
    age: 23,
    sex: "female"
  },
  {
    name: "Y",
    surname: "Nikson",
    age: 23,
    sex: "female"
  }
];

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
  self.sort = function (data, event) {
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
      if (newUser.sex == "female") {
        newUser.name = "Міс " + newUser.name;
      } else {
        newUser.name = "Містер " + newUser.name;
      }
      return newUser;
    });
  // end sorting 

  // start pagination
  this.numberOfItemsPerPage = ko.observableArray([5, 10, 20, 50, 'all']);
  this.rows = ko.observableArray(peopleData);
  this.pageSize = ko.observable(this.numberOfItemsPerPage()[0]);
  this.pageIndex = ko.observable(1);
  this.previousPage = function () {
    if (this.pageIndex() > 0) {
      this.pageIndex(this.pageIndex() - 1);
    }
  };
  this.nextPage = function () {
    if (this.pageIndex() < this.maxPageIndex()) {
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
}

ko.applyBindings(new VievModel(peopleData));
