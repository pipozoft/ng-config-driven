module.exports = {
  name: 'widget-gallery',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/widget-gallery',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
