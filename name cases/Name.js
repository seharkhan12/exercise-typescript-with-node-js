"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = string = personName.split(' ').map(word => word.charAt(0)
    .touppercase() + word.slice(1).tolowercase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`hello ${personName}, here are your name in:
      lowercase: ${lowercase}
      uppercase: ${uppercase}
      Titlecase: ${titlecase}`);
}
else {
    alert('please fill your name !');
}
