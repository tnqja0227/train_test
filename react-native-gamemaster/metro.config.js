module.exports = {
  transformer: {
    getSourceExts: () => ['js', 'jsx', 'ts', 'tsx'],
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'wasm', 'cjs'],
  },
};