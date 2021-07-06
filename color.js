var Body = {
  SetColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  SetColor: function(color) {
    var a_list = document.querySelectorAll('a');
    var i = 0;
    while (i < a_list.length) {
        a_list[i].style.color = color;
        i = i + 1;
    }
  }
}

function DarkModeHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'Dark Mode') {
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'Light Mode';

    Links.SetColor('#E69720');
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'Dark Mode';

    Links.SetColor('#00a495');
  }
}
