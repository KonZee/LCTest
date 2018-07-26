### Installation and launch
- `yarn install` or `npm install`
- `gulp`
- open `localhost:3000` or the next free port, look at console for correct value.

### What's done
- Two breakpoints at 576 and 992. On first menu switches between desktop and mobile. Second just difference between two or three images in sliders
- Slider swipes with Vue-touch. Navigation buttons is working too.
- Some animations, CSS only and with Vue transition tag
- Some other UX-improvments like disabling inactive buttons.

### What isn't done
- Vuex and Vue router exist as legacy of boilerplate. Router has only one path to index and it's working correct. And I have no idea how to use Vuex there.
- In some cases on mobile one image too high for screen. Without specification I have some ideas how to fix it, but usually it must be decision of product designer/UX. Btw, you can look at sticky header in this moment.
- Some UX can be better, but it's not about UX.
