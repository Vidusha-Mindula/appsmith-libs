(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' 
    ? module.exports = factory() :
  typeof define === 'function' && define.amd 
    ? define(factory) :
  (global.ButtonColors = factory());
}(this, function () {
  return {
    get_create_btn_color() {
      return "#1E90FF";
    },
    
    get_filter_btn_color() {
      return "#4682B4";
    },
    
    get_reset_btn_color() {
      return "#B0C4DE";
    }
  };
}));
