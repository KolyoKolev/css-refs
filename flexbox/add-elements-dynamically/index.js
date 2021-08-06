(function () {
  const mainDiv = document.getElementById('mainDiv');
  fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
    .then((response) => response.json())
    .then((data) => {
      data.tags.forEach((tag, i) => {
        const p = document.createElement('p');
        setTimeout(() => {
          if (i % 2 == 0) {
            p.style.background = '#b10f2e';
          }
          p.textContent = tag.name;
          mainDiv.appendChild(p);
        }, i * 2000);
      });
    });
})();
