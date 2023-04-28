const timer = () => {
  const hNode = document.getElementById("hours");
  const mNode = document.getElementById("minutes");
  const sNode = document.getElementById("seconds");

  const time = [
    {
      value: 0,
      node: hNode,
    },
    {
      value: 0,
      node: mNode,
    },
    {
      value: 0,
      node: sNode,
    },
  ];

  const startTime = new Date().getTime();
  const seconds = 0;
  updateTime(time, startTime, seconds);
};

const updateTime = (time, startTime, seconds) => {
  const currentTime = new Date().getTime();
  if (Math.floor((currentTime - startTime) / 1000) !== seconds) {
    seconds += 1;
    const [h, m, s] = time;
    if (++s.value === 60) {
      s.value = 0;
      if (++m.value === 60) {
        m.value = 0;
        if (++h.value === 24) {
          h.value = 0;
        }
      }
    }

    for (const timeUnit of time) render(timeUnit.node, timeUnit.value);
  }

  requestAnimationFrame(() => updateTime(time, startTime, seconds));
};

const render = (node, value) => {
  if (value < 10) value = "0" + value;
  node.innerHTML = value;
};

timer();
