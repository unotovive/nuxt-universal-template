import commonConfig from '~/assets/js/common-config';

export default ({ store }) => {
  if (process.browser) {
    setTimeout(() => {
      const deviceResizeEvent = (isForceUpdate) => {
        const isPc = window.innerWidth >= commonConfig.breakpoint;
        if (isForceUpdate === true || (store.state.app.device.sp && isPc) || (store.state.app.device.pc && !isPc)) {
          store.dispatch('app/setDevices', {
            isPc
          });
        }
      };

      window.addEventListener('resize', deviceResizeEvent, { passive: true });
      deviceResizeEvent(true);
    }, 0);
  }
};
