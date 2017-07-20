# Progress Bar (Vue Component)

Progress Bar component for [Vue JS](https://vuejs.org/) v2.

## Install

Download dependency using npm:
```bash
npm install vue-progress-bar
```

Then, to use the component in regular HTML:
```html
<script src="[path-to-package]/dist/vue.progress-bar.min.js"></script>
```

Or with NodeJS:
```javascript
// As global component
Vue.component('progress-bar', require('./parts/vue.progress-bar'));

// As regular element component
var appSample = new Vue({
    el:'#my-app',
    components: {
        'progress-bar': require('./parts/vue.progress-bar'),
    } 
});
```

## Usage

Simple add the markup in your template as follows. Use `v-model` to bind the progress value to the component.
```html
<progress-bar v-model="progressValue"></progress-bar>
```
**Note:** Progress value can be either decimal or float percentage value; it is recommended to use float percentage like `0.5` to indicate 50%.

### Properties
| Property           | Default | Description                                                   |
| ------------------ | ------- | ------------------------------------------------------------- |
| `css-class`        |         | CSS class to be appended to component default `progress-bar`. |
| `height`           | 20      | Progress bar height in pixels.                                |
| `background-color` | #FFF    | Background color of the component.                            |
| `border-color`     | #CCC    | Border color of the component.                                |
| `color`            | #81D4FA | Color of the progress bar.                                    |
| `completed-color`  | #8BC34A | Color of the progress bar once completed.                     |

## License
MIT License
2017 (c) [10 Quality](http://www.10quality.com).