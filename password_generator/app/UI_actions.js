
export class UI_action {
  constructor () {
    this.display = document.querySelector('#display');
    this.showlevs = document.querySelector('#levs');
    this.rangeval = document.querySelector('#len');
    this.showrang = document.querySelector('#rang');
    this.bar1 = document.querySelector('.bar1');
    this.bar2 = document.querySelector('.bar2');
    this.bar3 = document.querySelector('.bar3');
    this.bar4 = document.querySelector('.bar4');
    this.generalbar = document.querySelectorAll('.bar');
    this.parent = document.querySelector('.container');
  }

  rangechange () {
    // this basically to change the range value on each scroll
    this.showrang.innerHTML = this.rangeval.value;
  }

  // this method display the password levels

  set levels (object) {
    const levs = ['LOW', 'MEDIUM', 'HIGH', 'STRONG', 'NO PASSWORD'];

    const val = Object.values(object).slice(1);

    // this is to filter length of the amount true on each ticks
    const count = val.filter((val) => val === true).length;

    // and then using the count value to this the bars of each
    switch (count) {
      case 1:
        this.showlevs.innerHTML = levs[0];
        this.changebar(1, ['red', 'black', 'black', 'black']);
        break;
      case 2:
        this.showlevs.innerHTML = levs[1];
        this.changebar(2, ['blue', 'blue', 'black', 'black']);
        break;
      case 3:
        this.showlevs.innerHTML = levs[2];
        this.changebar(3, ['#00fd0a', '#00fd0a', '#00fd0a', 'black']);
        break;
      case 4:
        this.showlevs.innerHTML = levs[3];
        this.changebar(4, ['#ffd700', '#ffd700', '#ffd700', '#ffd700']);
        break;
      default:
        this.showlevs.innerHTML = levs[4];
        this.changebar(0, ['black', 'black', 'black', 'blacks']);
    }
  }

  changebar (val, color) {
    // to remove border from bars first on each clicks
    this.generalbar.forEach((val) => {
      val.style.border = 'none';
    });

    // select each bars to apply color on and also to add borders
    const bars = [this.bar1, this.bar2, this.bar3, this.bar4];

    bars[0].style.backgroundColor = color[0];

    bars[1].style.backgroundColor = color[1];
    bars[2].style.backgroundColor = color[2];
    bars[3].style.backgroundColor = color[3];

    bars.splice(0, val);

    bars.forEach((val) => {
      val.style.border = '1.5px solid #fff';
    });
  }

  generate (object, fields) {
    let capsAlpha = this.generateALpha(65, 90);
    let smallAlpha = this.generateALpha(97, 122);
    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let symbols = ['!', '/', '*', '%', '$', ')', '&', ')'];

    // suffling the array on eash execution

    capsAlpha = this.shuffle(capsAlpha);
    smallAlpha = this.shuffle(smallAlpha);
    Numbers = this.shuffle(Numbers);
    symbols = this.shuffle(symbols);

    const val = Object.values(object).splice(1);
    const picked = {};

    picked.range = object.range;

    if (val[0] === true) { picked.upper = capsAlpha; }
    if (val[1] === true) { picked.lower = smallAlpha; }
    if (val[2] === true) { picked.numbers = Numbers; }
    if (val[3] === true) { picked.symbols = symbols; }

    // error handleing

    const val1 = Object.values(object).splice(1);
    if (val1.indexOf(true) !== -1) {
      let password = this.generatepassword(picked);

      password = this.shuffle(password);

      // converting it to a string

      password = password.join('');

      // displaying the generated value

      this.display.value = password;

      // clear fiiled
      // this.clearfields(fields);
    } else {
      this.alerterr();
    }
  }

  /// display errs

  alerterr () {
    if (document.querySelector('.err')) {
      document.querySelector('.err').style.display = 'none';
    }

    const element = document.createElement('p');
    element.appendChild(document.createTextNode('Please Tick a box amoung the options bellow'));

    element.className = 'err';

    this.parent.insertBefore(element, this.parent.firstElementChild);

    setTimeout(this.removerr, 3000);
  }

  removerr () {
    if (document.querySelector('.err')) {
      document.querySelector('.err').style.display = 'none';
    }
  }
  // clearfields

  clearfields (fields) {
    fields[1].checked = false;

    fields[4].checked = false;

    this.showlevs.innerHTML = ' MEDIUM';
    this.changebar(2, ['blue', 'blue', 'black', 'black']);
  }

  generateALpha (val1, val2) {
    const container = [];
    for (let i = val1; i <= val2; i++) {
      container.push(String.fromCharCode(i));
    }

    return container;
  }

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  generatepassword (object) {
    const num = object.range;

    const values = Object.values(object).splice(1);
    const len = values.length;

    const password = [];

    let j = 0;

    /// whhere the magisc happen in coming these charaters together
    for (let i = 0; i < num; i++) {
      const num = Math.floor(Math.random() * 9);

      password.push(values[j][num]);
      j++;

      if (j == len) {
        j = 0;
      }
    }

    return password;
  }
}
