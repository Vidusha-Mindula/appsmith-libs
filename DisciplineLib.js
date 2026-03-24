(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' 
		? module.exports = factory() :
	typeof define === 'function' && define.amd 
		? define(factory) :
	(global.DisciplineLib = factory());
}(this, function () {
	return {
		getDisciplines() {
			return [
				{
					label: "T",
					value: "T"
				},
				{
					label: "H",
					value: "H"
				},
				{
					label: "G",
					value: "G"
				}
			];
		}
	};
}));
