import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | photos/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:photos/show');
    assert.ok(route);
  });
});
