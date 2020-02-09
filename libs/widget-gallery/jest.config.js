module.exports = {
  name: 'widget-gallery',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/widget-gallery',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
