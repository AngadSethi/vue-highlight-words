const path = require('path')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const analyzer = require('rollup-plugin-analyzer').plugin
const merge = require('merge')
const clone = require('clone-deep')
const chalk = require('chalk')
const rimraf = require('rimraf')
const terser = require('rollup-plugin-terser').terser
const { name, main, module: moduleField } = require('../package.json')
const config = require('./rollup.config')

const plugins = [
  babel({
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'],
    runtimeHelpers: true
  }),
  analyzer({
    limit: 0,
    hideDeps: true
  })
]

const umdPlugins = [
  resolve(),
  commonjs({
    namedExports: {
      'node_modules/highlight-words-core/dist/index.js': ['findAll']
    }
  })
].concat(plugins)

const filename = str => path.join(__dirname, '../', str)
const builds = {
  cjs: {
    input: {
      external: ['highlight-words-core'],
      plugins
    },
    output: {
      file: filename(main),
      format: 'cjs',
      sourcemap: true
    }
  },
  esm: {
    input: {
      external: ['highlight-words-core'],
      plugins
    },
    output: {
      file: filename(moduleField),
      format: 'esm',
      sourcemap: true
    }
  },
  umd: {
    input: {
      plugins: umdPlugins
    },
    output: {
      file: filename('dist/vue-highlight-words.umd.js'),
      format: 'umd',
      name: 'vueHighlightWords',
      sourcemap: true
    }
  },
  umd_min: {
    input: {
      plugins: umdPlugins.concat([terser()])
    },
    output: {
      file: filename('dist/vue-highlight-words.umd.min.js'),
      format: 'umd',
      name: 'vueHighlightWords',
      compact: true
    }
  }
}

rimraf.sync('../dist/**')

const logErr = e => {
  console.log(`⚠️ Build failed. An error occured:
  `)
  console.log(e)
}
const buildPromise = Object.keys(builds).reduce((promise, key) => {
  const mergedConfig = merge.recursive({}, clone(config), builds[key])

  console.log(`🏗 Building ${chalk.red(key)} version for ${name} ...
    `)

  const bundlePromise = promise.then(() => {
    return rollup.rollup(mergedConfig.input).catch(logErr)
  })
  const writePromise = bundlePromise.then(bundle => {
    return bundle.write(mergedConfig.output).catch(logErr)
  })

  return writePromise
}, Promise.resolve())

buildPromise
  .then(() => {
    console.log('✅ Build successful.')
  })

  .catch(logErr)
