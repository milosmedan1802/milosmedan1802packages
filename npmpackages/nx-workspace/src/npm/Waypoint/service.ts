export const runAnimation = (
  isIntersecting: boolean,
  oneWay: boolean,
  top: number,
  element: HTMLDivElement
) => {
  const { anime } = element.dataset;
  if (!anime) {
    console.warn('Element doesn`t have anime dataset');
    return;
  }
  const { from, to } = JSON.parse(anime);
  if (!from) {
    console.warn('Not found from dataset');
    return;
  }
  if (!to) {
    console.warn('Not found to dataset');
    return;
  }
  const dur = element.dataset.dur ? element.dataset.dur : 0.4;
  const delay = element.dataset.delay;
  if (!isIntersecting) {
    if (oneWay) {
      if (top < 0) return;
    }
    (element.style as any)['transition'] = 'none';
    Object.keys(from).forEach((cssProp) => {
      (element.style as any)[cssProp] = from[cssProp];
    });
    return;
  }

  if (isIntersecting) {
    element.style['transition'] = `${dur}s`;
    element.style['transitionDelay'] = delay ? `${delay}s` : '0s';
    Object.keys(to).forEach((cssProp) => {
      (element.style as any)[cssProp] = to[cssProp];
    });
  }
};
