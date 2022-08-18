import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: true,
    babel: {
      presets: [
        [
          '@babel/preset-env', {
            targets: {
              ie: "11",
              chrome: "40"
            },
            useBuiltIns: "usage",
            corejs: 3,
          }
        ],
      ],
    },
  })
}
