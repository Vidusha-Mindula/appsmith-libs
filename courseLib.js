(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' 
    ? module.exports = factory() :
  typeof define === 'function' && define.amd 
    ? define(factory) :
  (global.CourseLib = factory());
}(this, function () {
  return {
    getCourseOptions(data) {
      return (data || []).map(s => ({
        label: s.name,
        value: s.id
      }));
    }
  };
}));
