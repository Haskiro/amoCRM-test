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

  setInterval(() => updateTime(time), 1000);

  return clearInterval(updateTime);
};

const updateTime = (time) => {
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
};

const render = (node, value) => {
  if (value < 10) value = "0" + value;
  node.innerHTML = value;
};

timer();
