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