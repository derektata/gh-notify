#!/usr/bin/env node

// process.chdir(__dirname);

require('dotenv').config()
const fs = require('fs')
const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  // get the latest notifications
  const response = await octokit.request('GET /notifications')

  // write the response to the console
  // console.log(`  ${response.data.length}`)

  // write the response.data.length as a string to the file
  fs.writeFileSync('/tmp/gh-notify.txt', response.data.length.toString())
}

run();
