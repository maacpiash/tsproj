# Template for TypeScript projects

[![macOS build status](https://img.shields.io/github/workflow/status/maacpiash/tsproj/macOS?label=macOS&logo=apple&style=flat-square) ](https://github.com/maacpiash/tsproj/actions?query=workflow%3AmacOS) [ ![Ubuntu build status](https://img.shields.io/github/workflow/status/maacpiash/tsproj/Ubuntu?label=Ubuntu&logo=ubuntu&style=flat-square) ](https://github.com/maacpiash/tsproj/actions?query=workflow%3AUbuntu) [ ![Windows build status](https://img.shields.io/github/workflow/status/maacpiash/tsproj/Windows?label=Windows&logo=microsoft&style=flat-square)](https://github.com/maacpiash/tsproj/actions?query=workflow%3AWindows)
[![David](https://img.shields.io/david/dev/maacpiash/tsproj?style=flat-square)](https://github.com/maacpiash/tsproj/blob/master/package.json)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome%20%F0%9F%98%8A-brightgreen?style=flat-square)](https://github.com/maacpiash/tsproj/compare)

## Perks

The following are pre-configured:

- TypeScript with TSLib
- Prettier and ESLint
- Developer mode with Nodemon and TS-Node
- TS-Jest for testing and code coverage
- CI/CD pipeline via GitHub Actions
- Docker containerization

## Gotchas

Some minor hiccups and caveats:

- Docker containerization is not quite *there* yet.
- Had to use TS-Jest because Jest with Babel doesn't check types.
- Investigating how to use Yarn in Docker (that's why there are two lockfiles now).
