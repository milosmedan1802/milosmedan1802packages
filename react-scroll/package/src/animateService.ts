import { IStyle, SCROLL_DIRECTION, VIEWPORT_POSITION_STATUS } from './types';

class StyleHandler {
  protected style(styleObj: any, element: HTMLElement) {
    Object.keys(styleObj).forEach((item) => {
      element.style.setProperty(item, styleObj[item] as any);
    });
  }
}

class AnimateService extends StyleHandler {
  constructor() {
    super();
  }

  public styleHandler(
    isInViewPort: boolean,
    status: `${VIEWPORT_POSITION_STATUS}`,
    percentOfElementVisibility: number,
    direction: `${SCROLL_DIRECTION}`
  ) {
    return (style: IStyle, element: HTMLDivElement) => {
      style.customize({
        element,
        styleFn: this.style,
        status,
        percentOfElementVisibility,
        direction,
        isInViewPort,
      });
    };
  }
}

export const animateService = new AnimateService();
