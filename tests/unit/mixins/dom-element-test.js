import Ember from 'ember';
import DomElementMixin from 'ember-rotatable-image/mixins/dom-element';

module('DomElementMixin');

// Replace this with your real tests.
test('it works', function() {
  var DomElementObject = Ember.Object.extend(DomElementMixin);
  var subject = DomElementObject.create();
  ok(subject);
});
