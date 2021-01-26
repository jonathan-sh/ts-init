module.exports = 
{
  'roots': [ '<rootDir>/test' ],
  'testEnvironment': 'node',
  'transform': { '^.+\\.ts?$': 'ts-jest' },
  'testTimeout': 10000,
  'verbose': true,
  'notify':true,
  'logHeapUsage':true
}