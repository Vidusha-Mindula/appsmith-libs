(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' 
		? module.exports = factory() :
	typeof define === 'function' && define.amd 
		? define(factory) :
	(global.cityLib = factory());
}(this, function () {
	return {
		get_city_names: function() {
			// Ensure get_cities and its data exist to prevent runtime errors
			if (typeof get_cities !== 'undefined' && get_cities.data) {
				return get_cities.data.map(function(c) {
					return { label: c.name, value: c.id };
				});
			}
			return [];
		}
	};
}));
