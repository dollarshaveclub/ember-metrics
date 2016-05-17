import {
  moduleFor, test
}
from 'ember-qunit';
import sinon from 'sinon';

let sandbox, config;

moduleFor('metrics-adapter:adobe-dtm', 'adobe-dtm adapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  beforeEach() {
    sandbox = sinon.sandbox.create();
    config = {};
  },
  afterEach() {
    sandbox.restore();
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var adapter = this.subject();
  assert.ok(adapter);
});

test('#trackEvent returns the correct response shape', function(assert) {
  const adapter = this.subject({
    config
  });
  const result = adapter.trackEvent({
    event: 'click-button',
    category: 'button',
    action: 'click',
    label: 'nav buttons',
    value: 4
  });
  const expectedResult = {
    'event': 'click-button',
    'eventCategory': 'button',
    'eventAction': 'click',
    'eventLabel': 'nav buttons',
    'eventValue': 4
  };

  assert.deepEqual(result, expectedResult, 'it sends the correct response shape');
});
