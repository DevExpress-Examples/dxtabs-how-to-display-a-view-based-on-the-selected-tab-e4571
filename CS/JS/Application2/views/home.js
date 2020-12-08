Application2.home = function (params) {
    var viewModel = {
        tabs: [
          { text: 'Tab 0' },
          { text: 'Tab 1' },
          { text: 'Tab 2' }
        ],
        selectedTab: ko.observable(0),
        onButtonClick: function (e) {
            alert('Hello');
        },
        currentDate: ko.observable(new Date()),
        textValue: ko.observable('test')
    };
    return viewModel;
};