module.exports = {
  modulePaths: ['./src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/stylesheetMock.js',
  },
};
