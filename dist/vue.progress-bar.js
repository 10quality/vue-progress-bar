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
 * @version 1.0.1
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
        /**
         * Flag that indicates if the expected percentage value is in decimals or not.
         * If true, 1 will be considered 100%, if false it will be considered 1%.
         *
         * @since 1.0.1
         *
         * @var bool
         */
        useDecimal:
        {
            type: Boolean,
            default: true,
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
         * @since 1.0.1 Uses useDecimal property to determine value.
         *
         * @return float 
         */
        progress: function()
        {
            if (this.value === undefined)
                return 0;
            return this.useDecimal === false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWxlamFuZHJvXFxEb2N1bWVudHNcXEdpdEh1YlxcdnVlLXByb2dyZXNzLWJhclxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvQWxlamFuZHJvL0RvY3VtZW50cy9HaXRIdWIvdnVlLXByb2dyZXNzLWJhci9zcmMvZmFrZV9jYWQwNTk0OC5qcyIsIkM6L1VzZXJzL0FsZWphbmRyby9Eb2N1bWVudHMvR2l0SHViL3Z1ZS1wcm9ncmVzcy1iYXIvc3JjL3BhcnRzL3Z1ZS5wcm9ncmVzcy1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBQcm9ncmVzcyBiYXIgY29tcG9uZW50LlxuICogVnVlIGNvbXBvbmVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdnVlanMub3JnL1xuICogQGF1dGhvciBBbGVqYW5kcm8gTW9zdGFqbyA8aW5mb0AxMHF1YWxpdHkuY29tPlxuICogQGNvcHlyaWdodCAxMCBRdWFsaXR5IDxodHRwOi8vd3d3LjEwcXVhbGl0eS5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblZ1ZS5jb21wb25lbnQoJ3Byb2dyZXNzLWJhcicsIHJlcXVpcmUoJy4vcGFydHMvdnVlLnByb2dyZXNzLWJhcicpKTsiLCIvKipcbiAqIFByb2dyZXNzIGJhciBjb21wb25lbnQuXG4gKiBWdWUgY29tcG9uZW50IHwgTm9kZUpTIHN1cHBvcnQuXG4gKlxuICogQHNlZSBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9jb21wb25lbnRzLmh0bWwjYWRcbiAqIEBhdXRob3IgQWxlamFuZHJvIE1vc3Rham8gPGluZm9AMTBxdWFsaXR5LmNvbT5cbiAqIEBjb3B5cmlnaHQgMTAgUXVhbGl0eSA8aHR0cDovL3d3dy4xMHF1YWxpdHkuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgdGVtcGxhdGUuXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdGVtcGxhdGU6ICc8ZGl2IDpjbGFzcz1cImNzc1wiIDpzdHlsZT1cInN0eWxlXCI+PGRpdiBjbGFzcz1cImJhclwiIDpzdHlsZT1cInN0eWxlQmFyXCI+PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhci1iYXJcIiA6c3R5bGU9XCJzdHlsZVByb2dyZXNzQmFyXCI+PC9kaXY+PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhci1sYWJlbFwiIDpzdHlsZT1cInN0eWxlUHJvZ3Jlc3NMYWJlbFwiPnt7cHJvZ3Jlc3NEZWNpbWFsfX0lPC9kaXY+PC9kaXY+PC9kaXY+JyxcbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwcm9wczpcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9ncmVzcyB2YWx1ZS5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgbWl4ZWRcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogMC4wLFxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQ3NzIGNsYXNzZXMgdG8gYXBwbHkgdG8gY29tcG9uZW50LlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNzc0NsYXNzOlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9ncmVzcyBiYXIgaGVpZ2h0LlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBpbnRcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDpcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9ncmVzcyBiYXIgYmFja2dyb3VuZCBjb2xvci5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgc3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcjRkZGJyxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2dyZXNzIGJhciBib3JkZXIgY29sb3IuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYm9yZGVyQ29sb3I6XG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcjQ0NDJyxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2dyZXNzIGJhciBjb2xvci5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgc3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjb2xvcjpcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJyM4MUQ0RkEnLFxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvZ3Jlc3MgYmFyIGNvbG9yLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBsZXRlZENvbG9yOlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnIzhCQzM0QScsXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBleHBlY3RlZCBwZXJjZW50YWdlIHZhbHVlIGlzIGluIGRlY2ltYWxzIG9yIG5vdC5cbiAgICAgICAgICogSWYgdHJ1ZSwgMSB3aWxsIGJlIGNvbnNpZGVyZWQgMTAwJSwgaWYgZmFsc2UgaXQgd2lsbCBiZSBjb25zaWRlcmVkIDElLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAc2luY2UgMS4wLjFcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciBib29sXG4gICAgICAgICAqL1xuICAgICAgICB1c2VEZWNpbWFsOlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFdhdGNoZXJzLlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHdhdGNoOlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdhdGNoIHZhbHVlLlxuICAgICAgICAgKiBFbWl0cyBjb21wbGV0ZWQgZXZlbnQuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbWl4ZWQgbmV3VmFsdWUgTmV3IG1vZGVsIHZhbHVlLiBcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihuZXdWYWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ29tcGxldGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZWQgcHJvcGVydGllcy5cbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb21wdXRlZDpcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9ncmVzcyB2YWx1ZS5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMSBVc2VzIHVzZURlY2ltYWwgcHJvcGVydHkgdG8gZGV0ZXJtaW5lIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIGZsb2F0IFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZURlY2ltYWwgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHRoaXMudmFsdWUpIC8gMTAwXG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBwcm9ncmVzcyBhcyBkZWNpbWFsIHZhbHVlLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBpbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb2dyZXNzRGVjaW1hbDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucHJvZ3Jlc3MqMTAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgcHJvZ3Jlc3MgaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHNpbmNlIDEuMC4wXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAgICAgKi9cbiAgICAgICAgaGFzQ29tcGxldGVkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID49IDE7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBDU1MgdG8gYmUgYXBwbGllZCB0byBjb21wb25lbnQuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBjc3M6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAncHJvZ3Jlc3MtYmFyJyxcbiAgICAgICAgICAgICAgICB0aGlzLmNzc0NsYXNzLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgY3NzIHN0eWxlIGNsYXNzZXMgdG8gYXBwbHkgdG8gY29tcG9uZW50LlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IFtdO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3dpZHRoOjEwMCUnKTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZXMuam9pbignOycpKyc7JztcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgY3NzIHN0eWxlIGNsYXNzZXMgdG8gYXBwbHkgdG8gcHJvZ3Jlc3MgYmFyIChiYXIpLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGVCYXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IFtdO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3Bvc2l0aW9uOnJlbGF0aXZlJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnb3ZlcmZsb3c6aGlkZGVuJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnd2lkdGg6MTAwJScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2hlaWdodDonK3RoaXMuaGVpZ2h0KydweCcpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JhY2tncm91bmQtY29sb3I6Jyt0aGlzLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnYm9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudCcpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JvcmRlci1jb2xvcjonK3RoaXMuYm9yZGVyQ29sb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlcy5qb2luKCc7JykrJzsnO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBjc3Mgc3R5bGUgY2xhc3NlcyB0byBhcHBseSB0byBwcm9ncmVzcyBiYXIgKHByb2dyZXNzIGJhcikuXG4gICAgICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZVByb2dyZXNzQmFyOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCdwb3NpdGlvbjphYnNvbHV0ZScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3RvcDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnbGVmdDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnd2lkdGg6Jyt0aGlzLnByb2dyZXNzRGVjaW1hbCsnJScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2hlaWdodDonK3RoaXMuaGVpZ2h0KydweCcpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JhY2tncm91bmQtY29sb3I6JysodGhpcy5oYXNDb21wbGV0ZWQgPyB0aGlzLmNvbXBsZXRlZENvbG9yIDogdGhpcy5jb2xvcikpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ2JvcmRlcjowIG5vbmUnKTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCctd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuN3MnKTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCd0cmFuc2l0aW9uOiB3aWR0aCAwLjdzJyk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKSsnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGNzcyBzdHlsZSBjbGFzc2VzIHRvIGFwcGx5IHRvIHByb2dyZXNzIGJhciAocHJvZ3Jlc3MgbGFiZWwpLlxuICAgICAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGVQcm9ncmVzc0xhYmVsOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKCdwb3NpdGlvbjphYnNvbHV0ZScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3RvcDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnbGVmdDowJyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCgnd2lkdGg6MTAwJScpO1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goJ3RleHQtYWxpZ246Y2VudGVyJyk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKSsnOyc7XG4gICAgICAgIH0sXG4gICAgfSxcbn07Il19
