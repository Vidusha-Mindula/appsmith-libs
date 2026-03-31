(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? module.exports = factory()
	: typeof define === 'function' && define.amd
		? define(factory)
	: (global.ThemeLib = factory());
}(this, function () {

	const MAIN_CONTAINER_COLOR = "#12141f";
	const SUB_CONTAINER_COLOR = "#1a1d2e";

	return {

		getMainContainerStyle() {
			return {
				backgroundColor: MAIN_CONTAINER_COLOR
			};
		},

		getSubContainerStyle() {
			return {
				backgroundColor: SUB_CONTAINER_COLOR
			};
		},

		getMainContainerColor() {
			return MAIN_CONTAINER_COLOR;
		},

		getSubContainerColor() {
			return SUB_CONTAINER_COLOR;
		}

	};

}));
