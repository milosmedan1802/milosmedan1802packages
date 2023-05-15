export const isVisibleOnEnterScrollDown = (
  el: HTMLDivElement,
  viewport: number
) => {
  //   console.log('eeeee', el.offsetHeight, el.offsetTop, el.);
  const { top } = el.getBoundingClientRect();
  return top <= viewport;
};

export const observe = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log('ddd', document.getElementById('scroll'));
      console.log('entry', entry);
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,

    /* required options*/
    trackVisibility: true,
    delay: 100,
  } as any
);
