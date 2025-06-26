const panels = {
  contact: `<h2>Contact</h2><p>📞 +353 87 94 30 328<br>✉️ alan@mayweatherltd.com<br>📍 Meath, Ireland</p>`,
  summary: `<h2>Professional Summary</h2><p>Seasoned commercial leader with 15+ years…</p>`,
  experience: `<h2>Professional Experience</h2>
    <h3>inXtremis (2022–Present)</h3><p>Founder & manager of leadership events across EMEA…</p>
    <h3>Mayweather Ltd (2021–Present)</h3><p>Founder & CEO, private equity and strategic investments…</p>
    <h3>Colorman (2012–2021)</h3><p>Held roles from Overseas Sales Manager to Commercial Director…</p>`
};

document.querySelectorAll('.hotspot').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('panelContent').innerHTML = panels[el.dataset.target];
    const panel = document.getElementById('panel');
    panel.classList.remove('hidden');
    setTimeout(() => panel.classList.add('open'), 10);
  });
});

document.getElementById('closeBtn').addEventListener('click', () => {
  const panel = document.getElementById('panel');
  panel.classList.remove('open');
  panel.addEventListener('transitionend', () => panel.classList.add('hidden'), { once: true });
});
