import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetScrollbar(),
    presetIcons({
      collections: {
        'aemi-icon': FileSystemIconLoader(
          'src/assets/svg',
        ),
      },
    }),
    presetWebFonts({
      fonts: {
        aemi: 'Be Vietnam Pro:300,400',
      },
    }),
  ],
  rules: [
    [
      'inline-icon',
      {
        'vertical-align': '-0.125em',
      },
    ],
    [
      'icon16',
      {
        'font-size': '16px',
        'line-height': '1em',
      },
    ],
    [
      'icon20',
      {
        'font-size': '20px',
        'line-height': '1em',
      },
    ], [
      'icon24',
      {
        'font-size': '24px',
        'line-height': '1em',
      },
    ],
    [
      'icon28',
      {
        'font-size': '28px',
        'line-height': '1em',
      },
    ],
    [
      'icon36',
      {
        'font-size': '36px',
        'line-height': '1em',
      },
    ],
  ],
  theme: {
    // ...
    colors: {
      aemi: '#416EC2', // class="text-aemi"
      brand: {
        primary: '#416EC2', // class="bg-brand-primary"
      },
    },
    breakpoints: {
      sm: '570px',
      md: '768px',
      lg: '990px',
      xl: '1200px',
    },
  },
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
