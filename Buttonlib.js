/**
 * ButtonLib - Button Utility Library for Appsmith
 * Simple IIFE version - most compatible
 */
(function() {
  
  var colors = {
    create: '#1E90FF',
    filter: '#4682B4',
    reset: '#B0C4DE',
    edit: '#ffc107',
    delete: '#dc3545',
    save: '#28a745',
    cancel: '#6c757d',
    submit: '#28a745',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8'
  };
  
  window.ButtonLib = {
    get_create_btn_color: function() {
      return colors.create;
    },
    
    get_filter_btn_color: function() {
      return colors.filter;
    },
    
    get_reset_btn_color: function() {
      return colors.reset;
    },
    
    getColorByType: function(type) {
      return colors[type] || colors.create;
    },
    
    getAllColors: function() {
      var result = {};
      for (var key in colors) {
        if (colors.hasOwnProperty(key)) {
          result[key] = colors[key];
        }
      }
      return result;
    },
    
    getHoverColor: function(type, percent) {
      percent = percent || 20;
      var baseColor = colors[type] || colors.create;
      var hex = baseColor.replace('#', '');
      var r = parseInt(hex.substring(0, 2), 16);
      var g = parseInt(hex.substring(2, 4), 16);
      var b = parseInt(hex.substring(4, 6), 16);
      
      var amount = Math.round(2.55 * percent);
      r = Math.min(255, r + amount);
      g = Math.min(255, g + amount);
      b = Math.min(255, b + amount);
      
      return '#' + 
        r.toString(16).padStart(2, '0') + 
        g.toString(16).padStart(2, '0') + 
        b.toString(16).padStart(2, '0');
    }
  };
  
})();
