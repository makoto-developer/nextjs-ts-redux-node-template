module.exports = {
  distDir: '../dist/.next',
  poweredByHeader: false,
  compress: false,
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    addAssetModule(config)

    return config
  },
}

function addAssetModule(config) {
  const { rules } = config.module
  const assetRules = [
    {
      issuer: /\.ts(x)?$/,
      test: /\.(png|jpg|ico|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    },
  ]

  rules.push(...assetRules)
}
