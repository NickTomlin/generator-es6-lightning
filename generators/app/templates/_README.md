<%= appname %>
===

``` shell
npm i <%= _.kebabCase(appname) %>
```

# Usage

```javascript
var <%= _.camelCase(appname) %> = require('<%= _.kebabCase(appname) %>');
```

# Contributing

After cloning this repository:

```
npm i

# run the tests
npm t
```
