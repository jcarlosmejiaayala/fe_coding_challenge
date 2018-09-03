/* eslint global-require: "warn" */
const { ProgressPlugin, NamedModulesPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer')
const { smart } = require('webpack-merge')
const { resolve } = require('path')

const nodeModulePath = resolve('node_modules')
const distPath = resolve(__dirname, 'dist')
const srcDirPath = resolve(__dirname, 'src')
const entryPointFilePath = resolve(srcDirPath, 'index.js')
const templateFilePath = resolve(srcDirPath, 'index.html')

const {
  NODE_ENV = 'development',
  PORT: port = 3000,
  TITLE: title = 'Fe Coding Challenge'
} = process.env

const IS_OPTIMIZED = NODE_ENV !== 'development'

const base = {
  target: 'web',

  entry: ['@babel/polyfill', entryPointFilePath],

  output: {
    libraryTarget: 'var',

    path: distPath,

    filename: 'bundle.js',

    sourceMapFilename: 'bundle.map'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [srcDirPath, nodeModulePath]
  },

  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,

        include: srcDirPath,

        use: {
          loader: 'babel-loader',

          options: {
            babelrc: false,

            retainLines: !IS_OPTIMIZED,

            cacheDirectory: !IS_OPTIMIZED,

            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: {
                    browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
                  }
                }
              ]
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-async-generator-functions',
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 8192
        }
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new NamedModulesPlugin(),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      title,

      filename: 'index.html',

      inject: 'body',

      template: templateFilePath
    })
  ]
}

const development = {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    port,

    contentBase: distPath,

    host: '0.0.0.0',

    inline: true,

    watchOptions: {
      ignored: [/node_modules/]
    }
  }
}

const optimized = {
  bail: IS_OPTIMIZED,

  mode: 'production',

  devtool: false,

  output: {
    pathinfo: false
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,

      uglifyOptions: {
        compress: {
          warnings: false,

          conditionals: true,

          comparisons: false
        },
        output: {
          comments: false,

          ascii_only: true
        }
      }
    })
  ]
}

module.exports = !IS_OPTIMIZED
  ? smart(base, development)
  : smart(base, optimized)
