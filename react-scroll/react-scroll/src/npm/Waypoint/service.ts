export const doAnimateInOneWay = (top: number) => top < 0;

export const runAnimation = (
  isIntersecting: boolean,
  oneWay: boolean,
  top: number,
  element: HTMLDivElement
) => {
  const { from, to, delay } = element.dataset;
  if (!from) {
    console.warn('Not found from dataset');
    return;
  }
  if (!to) {
    console.warn('Not found to dataset');
    return;
  }
  if (!isIntersecting) {
    element.style.transitionDelay = '0s';
    if (oneWay) {
      if (top < 0) return;
    }
    element.classList.add(from);
    element.classList.remove(to);
    return;
  }

  if (isIntersecting) {
    // console.log('eeee', delay ? (delay as any) * 1 * 100 : 0);
    // console.log('delllay', (delay as any) * 1000);
    element.style.transitionDelay = delay ? `${delay}s` : '0s';
    element.classList.remove(from);
    element.classList.add(to);
  }
};
