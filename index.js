#!/usr/bin/env node

require('dotenv').config()
const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  const response = await octokit.request('GET /notifications')

  console.log(`${response.data.length}`)
}

run();
