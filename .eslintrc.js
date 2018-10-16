module.exports = {
  'extends': 'standard',
  'env': {
    'jest': true
  },
  'rules': {
    'semi': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? "on" : "off",
  }
}