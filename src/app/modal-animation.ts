import { Animation, createAnimation } from '@ionic/angular';

//
// ENTER
//

export const modalEnterAnimation = (
  baseEl: HTMLElement,
  presentingEl?: HTMLElement
): Animation => {
  const root = baseEl;

  const backdropAnimation = createAnimation()
    .addElement(root.shadowRoot.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
      'pointer-events': 'none',
    })
    .afterClearStyles(['pointer-events']);

  const wrapperAnimation = createAnimation()
    .addElement(
      root.shadowRoot.querySelectorAll('.modal-wrapper, .modal-shadow')
    )
    .fromTo('opacity', 0, 1)
    .beforeStyles({ opacity: 0, transform: 'translateY(0)' });

  const baseAnimation = createAnimation()
    .addElement(root)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(400)
    .addAnimation([wrapperAnimation, backdropAnimation]);

  return baseAnimation;
};

//
// LEAVE
//

export const modalLeaveAnimation = (
  baseEl: HTMLElement,
  presentingEl?: HTMLElement,
  duration = 500
): Animation => {
  const root = baseEl;

  const backdropAnimation = createAnimation()
    .addElement(root.shadowRoot.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);

  const wrapperAnimation = createAnimation()
    .addElement(
      root.shadowRoot.querySelectorAll('.modal-wrapper, .modal-shadow')
    )
    .fromTo('opacity', 1, 0)
    .beforeStyles({ opacity: 0 });

  const baseAnimation = createAnimation()
    .addElement(root)
    .easing('ease-out')
    .duration(300)
    .addAnimation([wrapperAnimation, backdropAnimation]);
  return baseAnimation;
};
