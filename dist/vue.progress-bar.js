(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * Progress bar component.
 * Vue component.
 *
 * @see https://vuejs.org/
 * @author Alejandro Mostajo <info@10quality.com>
 * @copyright 10 Quality <http://www.10quality.com>
 * @license MIT
 * @version 1.0.0
 */
Vue.component('progress-bar', require('./parts/vue.progress-bar'));
},{"./parts/vue.progress-bar":2}],2:[function(require,module,exports){
/**
 * Progress bar component.
 * Vue component | NodeJS support.
 *
 * @see https://vuejs.org/v2/guide/components.html#ad
 * @author Alejandro Mostajo <info@10quality.com>
 * @copyright 10 Quality <http://www.10quality.com>
 * @license MIT
 * @version 1.0.0
 */
module.exports = {
    /**
     * Component template.
     * @since 1.0.0
     */
    template: '<div :class="css" :style="style"><div class="bar" :style="styleBar"><div class="progress-bar-bar" :style="styleProgressBar"></div><div class="progress-bar-label" :style="styleProgressLabel">{{progressDecimal}}%</div></div></div>',
    /**
     * Component properties.
     * @since 1.0.0
     */
    props:
    {
        /**
         * Progress value.
         * @since 1.0.0
         *
         * @var mixed
         */
        value:
        {
            type: [Number, String],
            default: 0.0,
        },
        /**
         * Css classes to apply to component.
         * @since 1.0.0
         *
         * @var string
         */
        cssClass:
        {
            type: String,
            default: undefined,
        },
        /**
         * Progress bar height.
         * @since 1.0.0
         *
         * @var int
         */
        height:
        {
            type: Number,
            default: 20,
        },
        /**
         * Progress bar background color.
         * @since 1.0.0
         *
         * @var string
         */
        backgroundColor:
        {
            type: String,
            default: '#FFF',
        },
        /**
         * Progress bar border color.
         * @since 1.0.0
         *
         * @var string
         */
        borderColor:
        {
            type: String,
            default: '#CCC',
        },
        /**
         * Progress bar color.
         * @since 1.0.0
         *
         * @var string
         */
        color:
        {
            type: String,
            default: '#81D4FA',
        },
        /**
         * Progress bar color.
         * @since 1.0.0
         *
         * @var string
         */
        completedColor:
        {
            type: String,
            default: '#8BC34A',
        },
    },
    /**
     * Watchers.
     * @since 1.0.0
     */
    watch:
    {
        /**
         * Watch value.
         * Emits completed event.
         * @since 1.0.0
         *
         * @param mixed newValue New model value. 
         */
        value: function(newValue)
        {
            if (this.hasCompleted)
                this.$emit('completed');
        },
    },
    /**
     * Computed properties.
     * @since 1.0.0
     */
    computed:
    {
        /**
         * Progress value.
         * @since 1.0.0
         *
         * @return float 
         */
        progress: function()
        {
            if (this.value === undefined)
                return 0;
            return this.value > 1
                ? parseFloat(this.value) / 100
                : parseFloat(this.value);
        },
        /**
         * Returns progress as decimal value.
         * @since 1.0.0
         *
         * @return int
         */
        progressDecimal: function()
        {
            return Math.ceil(this.progress*100);
        },
        /**
         * Flag that indicates if progress has completed.
         * @since 1.0.0
         *
         * @return bool
         */
        hasCompleted: function()
        {
            return this.progress >= 1;
        },
        /**
         * Returns the CSS to be applied to component.
         * @since 1.0.0
         *
         * @return array
         */
        css: function()
        {
            return [
                'progress-bar',
                this.cssClass,
            ];
        },
        /**
         * Returns css style classes to apply to component.
         * @since 1.0.0
         *
         * @return array
         */
        style: function()
        {
            var styles = [];
            styles.push('width:100%');
            return styles.join(';')+';';
        },
        /**
         * Returns css style classes to apply to progress bar (bar).
         * @since 1.0.0
         *
         * @return array
         */
        styleBar: function()
        {
            var styles = [];
            styles.push('position:relative');
            styles.push('overflow:hidden');
            styles.push('width:100%');
            styles.push('height:'+this.height+'px');
            styles.push('background-color:'+this.backgroundColor);
            styles.push('border:1px solid transparent');
            styles.push('border-color:'+this.borderColor);
            return styles.join(';')+';';
        },
        /**
         * Returns css style classes to apply to progress bar (progress bar).
         * @since 1.0.0
         *
         * @return array
         */
        styleProgressBar: function()
        {
            var styles = [];
            styles.push('position:absolute');
            styles.push('top:0');
            styles.push('left:0');
            styles.push('width:'+this.progressDecimal+'%');
            styles.push('height:'+this.height+'px');
            styles.push('background-color:'+(this.hasCompleted ? this.completedColor : this.color));
            styles.push('border:0 none');
            styles.push('-webkit-transition: width 0.7s');
            styles.push('transition: width 0.7s');
            return styles.join(';')+';';
        },
        /**
         * Returns css style classes to apply to progress bar (progress label).
         * @since 1.0.0
         *
         * @return array
         */
        styleProgressLabel: function()
        {
            var styles = [];
            styles.push('position:absolute');
            styles.push('top:0');
            styles.push('left:0');
            styles.push('width:100%');
            styles.push('text-align:center');
            return styles.join(';')+';';
        },
    },
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWxlamFuZHJvXFxEb2N1bWVudHNcXEdpdEh1YlxcdnVlLXByb2dyZXNzLWJhclxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvQWxlamFuZHJvL0RvY3VtZW50cy9HaXRIdWIvdnVlLXByb2dyZXNzLWJhci9zcmMvZmFrZV8xYjA5NDU4Yi5qcyIsIkM6L1VzZXJzL0FsZWphbmRyby9Eb2N1bWVudHMvR2l0SHViL3Z1ZS1wcm9ncmVzcy1iYXIvc3JjL3BhcnRzL3Z1ZS5wcm9ncmVzcy1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcbiAqIFByb2dyZXNzIGJhciBjb21wb25lbnQuXG4gKiBWdWUgY29tcG9uZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly92dWVqcy5vcmcvXG4gKiBAYXV0aG9yIEFsZWphbmRybyBNb3N0YWpvIDxpbmZvQDEwcXVhbGl0eS5jb20+XG4gKiBAY29weXJpZ2h0IDEwIFF1YWxpdHkgPGh0dHA6Ly93d3cuMTBxdWFsaXR5LmNvbT5cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuVnVlLmNvbXBvbmVudCgncHJvZ3Jlc3MtYmFyJywgcmVxdWlyZSgnLi9wYXJ0cy92dWUucHJvZ3Jlc3MtYmFyJykpOyIsIi8qKlxuICogUHJvZ3Jlc3MgYmFyIGNvbXBvbmVudC5cbiAqIFZ1ZSBjb21wb25lbnQgfCBOb2RlSlMgc3VwcG9ydC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNhZFxuICogQGF1dGhvciBBbGVqYW5kcm8gTW9zdGFqbyA8aW5mb0AxMHF1YWxpdHkuY29tPlxuICogQGNvcHlyaWdodCAxMCBRdWFsaXR5IDxodHRwOi8vd3d3LjEwcXVhbGl0eS5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCB0ZW1wbGF0ZS5cbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB0ZW1wbGF0ZTogJzxkaXYgOmNsYXNzPVwiY3NzXCIgOnN0eWxlPVwic3R5bGVcIj48ZGl2IGNsYXNzPVwiYmFyXCIgOnN0eWxlPVwic3R5bGVCYXJcIj48ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyLWJhclwiIDpzdHlsZT1cInN0eWxlUHJvZ3Jlc3NCYXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyLWxhYmVsXCIgOnN0eWxlPVwic3R5bGVQcm9ncmVzc0xhYmVsXCI+e3twcm9ncmVzc0RlY2ltYWx9fSU8L2Rpdj48L2Rpdj48L2Rpdj4nLFxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByb3BzOlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2dyZXNzIHZhbHVlLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBtaXhlZFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICBkZWZhdWx0OiAwLjAsXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDc3MgY2xhc3NlcyB0byBhcHBseSB0byBjb21wb25lbnQuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY3NzQ2xhc3M6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2dyZXNzIGJhciBoZWlnaHQuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIGludFxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAyMCxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2dyZXNzIGJhciBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJyNGRkYnLFxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvZ3Jlc3MgYmFyIGJvcmRlciBjb2xvci5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgc3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBib3JkZXJDb2xvcjpcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJyNDQ0MnLFxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvZ3Jlc3MgYmFyIGNvbG9yLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNvbG9yOlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnIzgxRDRGQScsXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9ncmVzcyBiYXIgY29sb3IuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY29tcGxldGVkQ29sb3I6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcjOEJDMzRBJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFdhdGNoZXJzLlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHdhdGNoOlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdhdGNoIHZhbHVlLlxuICAgICAgICAgKiBFbWl0cyBjb21wbGV0ZWQgZXZlbnQuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbWl4ZWQgbmV3VmFsdWUgTmV3IG1vZGVsIHZhbHVlLiBcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihuZXdWYWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ29tcGxldGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZWQgcHJvcGVydGllcy5cbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb21wdXRlZDpcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9ncmVzcyB2YWx1ZS5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gZmxvYXQgXG4gICAgICAgICAqL1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPiAxXG4gICAgICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHRoaXMudmFsdWUpIC8gMTAwXG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBwcm9ncmVzcyBhcyBkZWNpbWFsIHZhbHVlLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBpbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb2dyZXNzRGVjaW1hbDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucHJvZ3Jlc3MqMTAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgcHJvZ3Jlc3MgaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAgICAgKi9cbiAgICAgICAgaGFzQ29tcGxldGVkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID49IDE7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBDU1MgdG8gYmUgYXBwbGllZCB0byBjb21wb25lbnQuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBjc3M6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAncHJvZ3Jlc3MtYmFyJyxcbiAgICAgICAgICAgICAgICB0aGlzLmNzc0NsYXNzLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgY3NzIHN0eWxlIGNsYXNzZXMgdG8gYXBwbHkgdG8gY29tcG9uZW50LlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IFtdO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3dpZHRoOjEwMCUnKTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZXMuam9pbignOycpKyc7JztcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgY3NzIHN0eWxlIGNsYXNzZXMgdG8gYXBwbHkgdG8gcHJvZ3Jlc3MgYmFyIChiYXIpLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGVCYXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IFtdO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3Bvc2l0aW9uOnJlbGF0aXZlJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnb3ZlcmZsb3c6aGlkZGVuJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnd2lkdGg6MTAwJScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2hlaWdodDonK3RoaXMuaGVpZ2h0KydweCcpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JhY2tncm91bmQtY29sb3I6Jyt0aGlzLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnYm9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudCcpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JvcmRlci1jb2xvcjonK3RoaXMuYm9yZGVyQ29sb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlcy5qb2luKCc7JykrJzsnO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBjc3Mgc3R5bGUgY2xhc3NlcyB0byBhcHBseSB0byBwcm9ncmVzcyBiYXIgKHByb2dyZXNzIGJhcikuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZVByb2dyZXNzQmFyOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCdwb3NpdGlvbjphYnNvbHV0ZScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3RvcDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnbGVmdDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnd2lkdGg6Jyt0aGlzLnByb2dyZXNzRGVjaW1hbCsnJScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2hlaWdodDonK3RoaXMuaGVpZ2h0KydweCcpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JhY2tncm91bmQtY29sb3I6JysodGhpcy5oYXNDb21wbGV0ZWQgPyB0aGlzLmNvbXBsZXRlZENvbG9yIDogdGhpcy5jb2xvcikpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JvcmRlcjowIG5vbmUnKTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCctd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuN3MnKTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCd0cmFuc2l0aW9uOiB3aWR0aCAwLjdzJyk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKSsnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGNzcyBzdHlsZSBjbGFzc2VzIHRvIGFwcGx5IHRvIHByb2dyZXNzIGJhciAocHJvZ3Jlc3MgbGFiZWwpLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGVQcm9ncmVzc0xhYmVsOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCdwb3NpdGlvbjphYnNvbHV0ZScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3RvcDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnbGVmdDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnd2lkdGg6MTAwJScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3RleHQtYWxpZ246Y2VudGVyJyk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKSsnOyc7XG4gICAgICAgIH0sXG4gICAgfSxcbn07Il19
