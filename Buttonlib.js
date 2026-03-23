/**
 * ButtonLib - Button Utility Library for Appsmith
 * Version: 1.0.0
 * A comprehensive library for button styling, states, and utilities
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' 
    ? module.exports = factory() :
  typeof define === 'function' && define.amd 
    ? define(factory) :
  (global.ButtonLib = factory());
}(this, function () {
  'use strict';
  
  // Private constants - Color palette
  const COLORS = {
    // Primary colors
    primary: '#1E90FF',      // Dodger Blue
    secondary: '#4682B4',    // Steel Blue
    tertiary: '#B0C4DE',     // Light Steel Blue
    
    // State colors
    success: '#28a745',      // Green
    danger: '#dc3545',       // Red
    warning: '#ffc107',      // Yellow
    info: '#17a2b8',         // Teal
    
    // Neutral colors
    light: '#f8f9fa',        // Light Gray
    dark: '#343a40',         // Dark Gray
    muted: '#6c757d',        // Medium Gray
    
    // Action colors
    create: '#1E90FF',       // Blue
    edit: '#ffc107',         // Yellow
    delete: '#dc3545',       // Red
    cancel: '#6c757d',       // Gray
    save: '#28a745',         // Green
    filter: '#4682B4',       // Steel Blue
    reset: '#B0C4DE',        // Light Steel Blue
    submit: '#28a745',       // Green
    
    // Disabled
    disabled: '#e9ecef'      // Very Light Gray
  };
  
  // Private helper functions
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  function lightenColor(hex, percent) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;
    
    const amount = Math.round(2.55 * percent);
    return '#' + [rgb.r, rgb.g, rgb.b]
      .map(c => Math.min(255, c + amount))
      .map(c => c.toString(16).padStart(2, '0'))
      .join('');
  }
  
  function darkenColor(hex, percent) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;
    
    const amount = Math.round(2.55 * percent);
    return '#' + [rgb.r, rgb.g, rgb.b]
      .map(c => Math.max(0, c - amount))
      .map(c => c.toString(16).padStart(2, '0'))
      .join('');
  }
  
  // Public API
  return {
    /**
     * Get color for Create button
     * @returns {string} Hex color code
     */
    get_create_btn_color() {
      return COLORS.create;
    },
    
    /**
     * Get color for Filter button
     * @returns {string} Hex color code
     */
    get_filter_btn_color() {
      return COLORS.filter;
    },
    
    /**
     * Get color for Reset button
     * @returns {string} Hex color code
     */
    get_reset_btn_color() {
      return COLORS.reset;
    },
    
    /**
     * Get color by button type
     * @param {string} type - Button type (create, edit, delete, save, cancel, etc.)
     * @returns {string} Hex color code
     */
    getColorByType(type) {
      return COLORS[type] || COLORS.primary;
    },
    
    /**
     * Get all available colors
     * @returns {object} Object containing all color mappings
     */
    getAllColors() {
      return { ...COLORS };
    },
    
    /**
     * Get button style object for Appsmith
     * @param {string} type - Button type
     * @param {object} options - Additional style options
     * @returns {object} Style object
     */
    getButtonStyle(type, options = {}) {
      const baseColor = COLORS[type] || COLORS.primary;
      return {
        backgroundColor: baseColor,
        color: options.textColor || '#ffffff',
        borderRadius: options.borderRadius || '4px',
        padding: options.padding || '8px 16px',
        border: options.border || 'none',
        cursor: options.disabled ? 'not-allowed' : 'pointer',
        opacity: options.disabled ? 0.6 : 1
      };
    },
    
    /**
     * Get hover color (lighter shade)
     * @param {string} type - Button type
     * @param {number} percent - Lighten percentage (default 20)
     * @returns {string} Hex color code
     */
    getHoverColor(type, percent = 20) {
      const baseColor = COLORS[type] || COLORS.primary;
      return lightenColor(baseColor, percent);
    },
    
    /**
     * Get active/pressed color (darker shade)
     * @param {string} type - Button type
     * @param {number} percent - Darken percentage (default 20)
     * @returns {string} Hex color code
     */
    getActiveColor(type, percent = 20) {
      const baseColor = COLORS[type] || COLORS.primary;
      return darkenColor(baseColor, percent);
    },
    
    /**
     * Get disabled button color
     * @returns {string} Hex color code
     */
    getDisabledColor() {
      return COLORS.disabled;
    },
    
    /**
     * Check if button should be disabled based on condition
     * @param {any} condition - Condition to check
     * @returns {boolean} True if should be disabled
     */
    isDisabled(condition) {
      if (typeof condition === 'boolean') return condition;
      if (typeof condition === 'function') return condition();
      return !!condition;
    },
    
    /**
     * Get button color based on state
     * @param {string} type - Button type
     * @param {object} state - State object {disabled, loading, hover, active}
     * @returns {string} Hex color code
     */
    getStateColor(type, state = {}) {
      if (state.disabled || state.loading) {
        return COLORS.disabled;
      }
      if (state.active) {
        return this.getActiveColor(type);
      }
      if (state.hover) {
        return this.getHoverColor(type);
      }
      return COLORS[type] || COLORS.primary;
    },
    
    /**
     * Format button text for loading state
     * @param {string} text - Original button text
     * @param {boolean} isLoading - Loading state
     * @param {string} loadingText - Text to show when loading (default "Loading...")
     * @returns {string} Button text
     */
    getButtonText(text, isLoading, loadingText = 'Loading...') {
      return isLoading ? loadingText : text;
    },
    
    /**
     * Get icon for button type
     * @param {string} type - Button type
     * @returns {string} Icon name (Font Awesome class)
     */
    getButtonIcon(type) {
      const icons = {
        create: 'plus',
        edit: 'edit',
        delete: 'trash',
        save: 'save',
        cancel: 'times',
        filter: 'filter',
        reset: 'undo',
        submit: 'check',
        search: 'search',
        download: 'download',
        upload: 'upload',
        refresh: 'sync'
      };
      return icons[type] || '';
    },
    
    /**
     * Validate button configuration
     * @param {object} config - Button configuration
     * @returns {object} Validation result {valid, errors}
     */
    validateButton(config) {
      const errors = [];
      
      if (!config.type) {
        errors.push('Button type is required');
      }
      
      if (config.type && !COLORS[config.type] && config.type !== 'custom') {
        errors.push(`Unknown button type: ${config.type}`);
      }
      
      if (config.disabled && config.loading) {
        errors.push('Button cannot be both disabled and loading');
      }
      
      return {
        valid: errors.length === 0,
        errors: errors
      };
    },
    
    /**
     * Get complete button configuration
     * @param {string} type - Button type
     * @param {object} options - Configuration options
     * @returns {object} Complete button configuration
     */
    getButtonConfig(type, options = {}) {
      const baseColor = COLORS[type] || COLORS.primary;
      
      return {
        type: type,
        label: options.label || type.charAt(0).toUpperCase() + type.slice(1),
        color: options.disabled ? COLORS.disabled : baseColor,
        hoverColor: this.getHoverColor(type),
        activeColor: this.getActiveColor(type),
        textColor: options.textColor || '#ffffff',
        disabled: options.disabled || false,
        loading: options.loading || false,
        icon: options.icon || this.getButtonIcon(type),
        size: options.size || 'medium',
        variant: options.variant || 'solid'
      };
    },
    
    /**
     * Get button size styles
     * @param {string} size - Size: 'small', 'medium', 'large'
     * @returns {object} Size style object
     */
    getButtonSize(size = 'medium') {
      const sizes = {
        small: {
          padding: '4px 12px',
          fontSize: '12px',
          height: '28px'
        },
        medium: {
          padding: '8px 16px',
          fontSize: '14px',
          height: '36px'
        },
        large: {
          padding: '12px 24px',
          fontSize: '16px',
          height: '44px'
        }
      };
      return sizes[size] || sizes.medium;
    },
    
    /**
     * Get available button types
     * @returns {array} List of available button types
     */
    getButtonTypes() {
      return Object.keys(COLORS).filter(key => 
        !['disabled'].includes(key)
      );
    },
    
    /**
     * Create button group configuration
     * @param {array} buttons - Array of button types
     * @param {object} options - Group options
     * @returns {array} Array of button configurations
     */
    createButtonGroup(buttons, options = {}) {
      return buttons.map(type => this.getButtonConfig(type, options));
    }
  };
}));
