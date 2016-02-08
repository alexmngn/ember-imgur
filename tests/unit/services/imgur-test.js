import { moduleFor, test } from 'ember-qunit';

moduleFor('service:imgur', 'Unit | Service | imgur', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Verify Imgur API URL
test('API URL is defined', function(assert) {
  let service = this.subject();
  assert.ok(service.get('imgurApiUrl') === 'https://api.imgur.com/3/');
});
