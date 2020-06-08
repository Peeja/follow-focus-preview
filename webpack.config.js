/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'Follow Focus.omnijs',
    library: '(function(v){return v;})',
    // Evaluate the default export of the entrypoint. OmniJS scripts expect the
    // Action/Library/Handler object to be the evaluation of the last expression
    // in the script.
    libraryExport: 'default',
    libraryTarget: 'jsonp',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
