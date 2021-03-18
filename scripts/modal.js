      // console.log(
      //   document.querySelector('.header').getBoundingClientRect().height,
      // );

      // const { height: pageHeaderHeight } = document
      //   .querySelector('.header')
      //   .getBoundingClientRect();

      // document.body.style.paddingTop = '${pageHeaderHeight}px';

      const handleBackdrop = name => {
        const backdrop = document.querySelector(`[data-backdrop-${name}]`);
        const buttons = document.querySelectorAll(
          `[data-toggle-backdrop-${name}]`,
        );
        const toggleBackdrop = () => backdrop.classList.toggle('is-hidden');
        buttons.forEach(button =>
          button.addEventListener('click', toggleBackdrop),
        );
      };
      // sign
      handleBackdrop('sign')