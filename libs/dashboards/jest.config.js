module.exports = {
  name: 'dashboards',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dashboards',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
