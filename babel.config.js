const presets = [
  [
    '@babel/env', {
      useBuiltIns: 'usage'
    }
  ]
];

const env = {
  test: {
    presets: [
      '@babel/env'
    ]
  }
}

module.exports = {
  presets,
  env
}