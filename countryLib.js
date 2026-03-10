(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' 
    ? module.exports = factory() :
  typeof define === 'function' && define.amd 
    ? define(factory) :
  (global.CountryLib = factory());
}(this, function () {
  return {
    getCountryOptions(data) {
      return (data || []).map(s => ({
        label: s.name,
        value: s.id
      }));
    }
  };
}));
