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

**WARNING**: I did not include rate limiting in this project, because my configuration is set to run at regulated intervals, and it's well under the amount of API calls per hour limit.

**NOTE**: This program requires a `config.json` in the root of the project/binary directory to run properly. Running the build script will first run `./scripts/config`, generate a `config.json` file, and ask you for your personal Github API token. Then it will run `./scripts/build` and automatically build a binary using the latest version of `node` for your system. After that is finished, the binary/config will be located inside `bin`.

Example `config.json`:
```json
{
  "ghNotify": {
    "token": "YourSpecialGithubAPITokenHere"
  }
}
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

[eww]:https://github.com/elkowar/eww
