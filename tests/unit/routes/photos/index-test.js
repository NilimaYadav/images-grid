import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | photos/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:photos/index');
    assert.ok(route);
  });
});
