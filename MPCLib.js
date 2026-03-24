(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' 
    ? module.exports = factory() :
  typeof define === 'function' && define.amd 
    ? define(factory) :
  (global.MPCLib = factory());
}(this, function () {
  return {
    getMPCOptions() {
      return [
        { label: "M", value: "M" },
        { label: "P", value: "P" },
        { label: "C", value: "C" }
      ];
    }
  };
}));
