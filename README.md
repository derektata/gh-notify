# gh-notify

A status-bar agnostic Github notification ticker

![gh-notify](./_examples/gh-notify.png)

I'm currently using this with [eww]

## Run Locally

Clone the project

```
git clone https://github.com/derektata/gh-notify
```

Go to the project directory

```
cd gh-notify
```

Install dependencies

```
yarn
```
## Usage
The included shell script is the one I'm using with [eww].

The node script is meant to be used outside of the project's directory, like so:

```
node ./gh-notify/index.js
```

or if nested in, let's say for example `~/.config/eww/scripts`, then it would be:
```
node ./scripts/gh-notify/index.js
```
like in the afforementioned shell script.


[eww]:https://github.com/elkowar/eww
