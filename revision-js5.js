const input = document.getElementById('nameInput');
const btn = document.getElementById('greeBtn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  const name = input.value.trim();
  output.textContent = name ? `hello,${name}!` : 'please enter your name.';
});
