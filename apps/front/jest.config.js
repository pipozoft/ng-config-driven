module.exports = {
  name: 'front',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/front',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
