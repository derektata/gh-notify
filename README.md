# gh-notify

A status-bar agnostic Github Notification ticker

![gh-notify](./_examples/gh-notify.png)

I'm currently using this with [eww]


## Run Locally

Clone the project
```bash
git clone https://github.com/derektata/gh-notify
```

Go to the project directory
```bash
cd gh-notify
```

Install dependencies
```bash
yarn
```

## Usage/Building

This program requires that you create a `.env` file in the base directory of the project
and add your personal api token:
```bash
GITHUB_TOKEN=YourSpecialGithubTokenHere
```
The included `github` shell script is the one I'm using with [eww].

You can either run this from the project's directory, using:

```bash
node index.js
```

or build it using:

```bash
yarn build
```

This will run the `build` script inside of `scripts`, and automatically build a binary for your system.
Once that is finished, the binary will be located inside `bin`.

Building also copies your `.env` file from the project's root into the binaries directory.


[eww]:https://github.com/elkowar/eww
