(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' 
		? module.exports = factory() :
	typeof define === 'function' && define.amd 
		? define(factory) :
	(global.BoolLib = factory());
}(this, function () {
	return {
		getYesNoOptions() {
			return [
				{
					label: "Yes",
					value: "TRUE"
				},
				{
					label: "No",
					value: "FALSE"
				}
			];
		}
	};
}));
