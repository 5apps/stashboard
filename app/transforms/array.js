import Ember from 'ember';
import DS from 'ember-data';

const { isArray, A } = Ember;

export default DS.Transform.extend({

  deserialize(serialized) {
    return serialized;
    if (isArray(serialized)) {
			return A(serialized);
		} else {
			return A();
		}
  },

  serialize(deserialized) {
    if (isArray(deserialized)) {
			return A(deserialized);
		} else {
			return A();
		}
  }

});
