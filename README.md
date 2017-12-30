# mushmouth.tech

> Source code for mushmouth.tech

## Developing and running locally

Requirements:

* [Hugo](https://gohugo.io)
* [Node.js](https://nodejs.org) (for compiling assets)

Clone it. (`git clone https://github.com/themushmouth/mushmouth.tech.git`)

Then `cd` to the project's directory and install all npm dependencies.

```bash
$ npm install
```

Now we can run a local server and the asset watcher.

```bash
# in one terminal window
$ npm run watch

# in another terminal window
$ hugo server -D
```

## Assets management

This codebase uses [Brunch](http://brunch.io/) for managing and bundling assets. This means static assets must be placed inside the `app/assets/` directory, since Brunch cleans up the `static/` folder every time you run `npm run build`.

That said, the following to create your bundled assets.

```bash
$ npm run build
```

I've also provided a command to run both the asset bundler *and* the Hugo builder, in order. Just make sure the Hugo command is registered in your PATH.

```bash
$ npm run build:hugo
```

## License

Source code is licensed under [MIT](LICENSE).

## TODO
- [ ] Add a realtime clock next to mushmouth.tech on the header
