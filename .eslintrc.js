module.exports = {
  'extends': 'standard',
  'rules': {
    'semi': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? "on" : "off",
  }
}