const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
     index: {
       import: './src/index.js',
       dependOn: 'shared',
     },
     another: {
       import: './src/another-module.js',
       dependOn: 'shared',
     },
     shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  optimization: {
    runtimeChunk: 'single',
  },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // Match CSS files
                use: ['style-loader', 'css-loader'] // Use style-loader and css-loader
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Match image files
                use: ['file-loader'] // Use file-loader
            }
        ]
    }
};
