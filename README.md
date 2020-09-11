# hackernews-async-ts
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fabnernat%2Fcode-shooter-server.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fabnernat%2Fcode-shooter-server?ref=badge_shield)


[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fabnernat%2Fcode-shooter-server.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fabnernat%2Fcode-shooter-server?ref=badge_large)