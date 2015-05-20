import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('rotatable-image', 'RotatableImageComponent', {
  // specify the other units that are required for this test
  needs: ['component:image-tag', 'component:image-actions']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('css classes are updated when loading is set', function() {
  expect(2);

  var component = this.subject();

  equal(this.$().attr('class'), 'ember-view rotatable-image-container loading');

  Ember.run(function() {
    component.set('loading', false);
  });

  equal(this.$().attr('class'), 'ember-view rotatable-image-container');
});
