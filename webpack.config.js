const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('src/Resources/public')
  .setPublicPath('/bundles/nucleosmatomo')
  .setManifestKeyPrefix('')
  .cleanupOutputBeforeBuild()
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableEslintLoader()
  .addEntry('widget', './assets/widget.js')
;

module.exports = Encore.getWebpackConfig();
