let body = document.body;
    let info = document.getElementById('info');
    let mode = document.getElementById('mode');
    let home = document.getElementById('home');

    let darkLimit = 5;
    let darkCounter = 0;
    let darkRemainingLeft;

    function darkMode() {
      if (darkCounter == darkLimit) {
        info.textContent = 'JATAH DARK MODE ANDA TELAH HABIS';
        mode.style.display = 'none';
        home.textContent = 'RESTART';
        return;
      }

      (!body.classList.contains('darkMode')) ? mode.textContent = 'Light Mode' : mode.textContent = 'Dark Mode'

      darkCounter += 1;
      darkRemainingLeft = darkLimit - darkCounter;

      body.classList.toggle('darkMode');

      info.textContent = `Dark mode diklik ${darkCounter}x, dark mode Anda sisa ${darkRemainingLeft}x`;
    }

    function reRender() {
      location.reload();
    }
