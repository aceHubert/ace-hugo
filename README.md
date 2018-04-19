## Hugo React UI

A react component framework project, **[Live Demo](https://hugo.acehubert.com")**

## Getting Started

### Install

```bash
 npm install acehugo --save
```
or
```
 yarn add acehugo  
```

Before the building, you need a style theme.
```
  import 'acehugo/dist/theme/index.css'
```
or you want to change the main-theme (if you are using SCSS in your project).
```
  acehugo-vars.scss

  /* change the main-theme */
  $color-primary:teal;

  /* change font folder(important) */
  $icon-path:'~acehugo/dist/theme/fonts'

  @import '~acehugo/src/theme/index.scss'

  App.jsx

  import 'acehugo-vars.scss'
```
>more variables, please check [here](http://hugo.acehubert.com/#en-US/variables)


## Usage

we recommend you writing code in modern javascript.

```
import {Button} from 'acehugo'
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
