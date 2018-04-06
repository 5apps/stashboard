import { A, isArray } from '@ember/array';
import DS from 'ember-data';

export default DS.Transform.extend({

  deserialize(serialized) {
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
