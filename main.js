const input = document.querySelector('input');

input.addEventListener('keypress', (e) => {
  if (!/[0-9]|\./.test(e.key)) e.preventDefault();
});

input.addEventListener('paste', async (e) => {
  e.preventDefault();
});

input.addEventListener('input', (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, '');
  var size = value.length;
  if (size > 0) {
    value = '(' + value;
  }
  if (size > 3) {
    value = value.slice(0, 4) + ') ' + value.slice(4, 11);
  }
  if (size > 6) {
    value = value.slice(0, 9) + '-' + value.slice(9);
  }
  input.value = value;
});
