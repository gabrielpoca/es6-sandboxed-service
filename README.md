ES6 SANDBOX SERVICE
==================

A http service that accepts es6 code, transforms into es5, executes in a sandbox and returns the result and logs.

## Running

Start by installing the dependencies.

```
npm install --production
```

Running `npm start` will start the application. You can change the port in use on `config/common.json`.

You are now able to make POST requests to `/` with the following parameters.

```json
{
  "code": "var a = true; a;"
}
```

The response body will have the following format.

```json
{
  "result": "result of the execution",
  "console": ["log one", "log two"]
}
```


## Test

Testing require the framework `mocha`. Start by installing the dependencies.

```
npm install
npm install mocha -g
```

And now run the tests.


```
npm test
```
