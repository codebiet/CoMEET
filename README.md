# CoMEET
## Project Structure:
<pre>
D:.
├───.vscode
├───config
├───controllers
├───models
├───node_modules
│   ├───.bin
│   ├───@sindresorhus
│   │   └───is
│   │       └───dist
│   ├───@szmarczak
│   │   └───http-timer
│   │       └───source
│   ├───abbrev
│   ├───accepts
│   ├───after
│   │   └───test
│   ├───ansi-align
│   │   └───node_modules
│   │       └───string-width
│   ├───ansi-regex
│   ├───ansi-styles
│   ├───anymatch
│   ├───append-field
│   │   ├───lib
│   │   └───test
│   ├───array-flatten
│   ├───arraybuffer.slice
│   │   └───test
│   ├───async
│   │   ├───lib
│   │   └───support
│   ├───async-limiter
│   ├───backo2
│   │   └───test
│   ├───balanced-match
│   ├───base64-arraybuffer
│   │   └───lib
│   ├───base64id
│   │   └───lib
│   ├───better-assert
│   ├───binary-extensions
│   ├───bl
│   │   └───test
│   ├───blob
│   │   ├───.idea
│   │   │   ├───inspectionProfiles
│   │   │   └───markdown-navigator
│   │   └───test
│   ├───bluebird
│   │   └───js
│   │       ├───browser
│   │       └───release
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───bootstrap
│   │   ├───dist
│   │   │   ├───css
│   │   │   └───js
│   │   ├───js
│   │   │   ├───dist
│   │   │   └───src
│   │   │       └───tools
│   │   └───scss
│   │       ├───mixins
│   │       ├───utilities
│   │       └───vendor
│   ├───boxen
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───bson
│   │   ├───browser_build
│   │   └───lib
│   │       └───bson
│   │           └───parser
│   ├───buffer-from
│   ├───busboy
│   │   ├───deps
│   │   │   └───encoding
│   │   ├───lib
│   │   │   └───types
│   │   ├───node_modules
│   │   │   ├───isarray
│   │   │   │   └───build
│   │   │   ├───readable-stream
│   │   │   │   └───lib
│   │   │   └───string_decoder
│   │   └───test
│   ├───bytes
│   ├───cacheable-request
│   │   ├───node_modules
│   │   │   ├───get-stream
│   │   │   └───lowercase-keys
│   │   └───src
│   ├───callsite
│   ├───camelcase
│   ├───chalk
│   │   ├───node_modules
│   │   │   ├───has-flag
│   │   │   └───supports-color
│   │   └───source
│   ├───chokidar
│   │   ├───lib
│   │   └───types
│   ├───ci-info
│   ├───cli-boxes
│   ├───clone-response
│   │   └───src
│   ├───color-convert
│   ├───color-name
│   ├───component-bind
│   ├───component-emitter
│   ├───component-inherit
│   │   └───test
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───concat-stream
│   ├───configstore
│   ├───connect-mongo
│   │   └───src
│   ├───content-disposition
│   ├───content-type
│   ├───cookie
│   ├───cookie-parser
│   ├───cookie-signature
│   ├───core-util-is
│   │   └───lib
│   ├───crypto-random-string
│   ├───debug
│   │   └───src
│   ├───decompress-response
│   ├───deep-extend
│   │   └───lib
│   ├───defer-to-connect
│   │   └───dist
│   ├───denque
│   ├───depd
│   │   └───lib
│   │       ├───browser
│   │       └───compat
│   ├───destroy
│   ├───dicer
│   │   ├───bench
│   │   ├───lib
│   │   ├───node_modules
│   │   │   ├───isarray
│   │   │   │   └───build
│   │   │   ├───readable-stream
│   │   │   │   └───lib
│   │   │   └───string_decoder
│   │   └───test
│   │       └───fixtures
│   │           ├───many
│   │           ├───many-noend
│   │           ├───many-wrongboundary
│   │           ├───nested
│   │           └───nested-full
│   ├───dot-prop
│   ├───duplexer3
│   ├───ee-first
│   ├───ejs
│   │   ├───bin
│   │   └───lib
│   ├───emoji-regex
│   │   └───es2015
│   ├───encodeurl
│   ├───end-of-stream
│   ├───engine.io
│   │   ├───lib
│   │   │   └───transports
│   │   └───node_modules
│   │       ├───cookie
│   │       ├───debug
│   │       │   ├───dist
│   │       │   └───src
│   │       └───ms
│   ├───engine.io-client
│   │   ├───lib
│   │   │   └───transports
│   │   └───node_modules
│   │       ├───component-emitter
│   │       ├───debug
│   │       │   └───src
│   │       ├───parseqs
│   │       ├───parseuri
│   │       └───ws
│   │           └───lib
│   ├───engine.io-parser
│   │   └───lib
│   ├───escape-goat
│   ├───escape-html
│   ├───escape-string-regexp
│   ├───etag
│   ├───express
│   │   └───lib
│   │       ├───middleware
│   │       └───router
│   ├───express-ejs-layouts
│   │   ├───example
│   │   │   └───views
│   │   └───lib
│   ├───express-session
│   │   ├───node_modules
│   │   │   ├───depd
│   │   │   │   └───lib
│   │   │   │       └───browser
│   │   │   └───safe-buffer
│   │   └───session
│   ├───filelist
│   ├───fill-range
│   ├───finalhandler
│   ├───foreachasync
│   ├───forwarded
│   ├───fresh
│   ├───get-stream
│   ├───glob-parent
│   ├───global-dirs
│   ├───got
│   │   └───source
│   │       └───utils
│   ├───graceful-fs
│   ├───handlebars
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───amd
│   │   │   │   └───handlebars
│   │   │   │       ├───compiler
│   │   │   │       ├───decorators
│   │   │   │       ├───helpers
│   │   │   │       └───internal
│   │   │   └───cjs
│   │   │       └───handlebars
│   │   │           ├───compiler
│   │   │           ├───decorators
│   │   │           ├───helpers
│   │   │           └───internal
│   │   ├───lib
│   │   │   └───handlebars
│   │   │       ├───compiler
│   │   │       ├───decorators
│   │   │       ├───helpers
│   │   │       └───internal
│   │   └───types
│   ├───has-binary2
│   │   └───node_modules
│   │       └───isarray
│   ├───has-cors
│   ├───has-flag
│   ├───has-yarn
│   ├───hbs
│   │   └───lib
│   ├───http-cache-semantics
│   ├───http-errors
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───ignore-by-default
│   ├───import-lazy
│   ├───imurmurhash
│   ├───indexof
│   ├───inherits
│   ├───ini
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-binary-path
│   ├───is-ci
│   ├───is-extglob
│   ├───is-fullwidth-code-point
│   ├───is-glob
│   ├───is-installed-globally
│   ├───is-npm
│   ├───is-number
│   ├───is-obj
│   ├───is-path-inside
│   ├───is-typedarray
│   ├───is-yarn-global
│   ├───isarray
│   ├───jake
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───task
│   │   │   └───utils
│   │   ├───node_modules
│   │   │   ├───ansi-styles
│   │   │   ├───chalk
│   │   │   │   └───types
│   │   │   ├───color-convert
│   │   │   └───color-name
│   │   └───test
│   │       ├───integration
│   │       │   └───jakelib
│   │       └───unit
│   ├───json-buffer
│   │   └───test
│   ├───kareem
│   │   └───test
│   ├───keyv
│   │   └───src
│   ├───latest-version
│   ├───lowercase-keys
│   ├───make-dir
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───media-typer
│   ├───memory-pager
│   ├───merge-descriptors
│   ├───methods
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───mimic-response
│   ├───minimatch
│   ├───minimist
│   │   ├───example
│   │   └───test
│   ├───mkdirp
│   │   └───bin
│   ├───mongodb
│   │   └───lib
│   │       ├───async
│   │       ├───bulk
│   │       ├───cmap
│   │       ├───core
│   │       │   ├───auth
│   │       │   ├───connection
│   │       │   ├───sdam
│   │       │   ├───tools
│   │       │   ├───topologies
│   │       │   └───wireprotocol
│   │       ├───gridfs
│   │       ├───gridfs-stream
│   │       ├───operations
│   │       └───topologies
│   ├───mongoose
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───cast
│   │   │   ├───cursor
│   │   │   ├───drivers
│   │   │   │   ├───browser
│   │   │   │   └───node-mongodb-native
│   │   │   ├───error
│   │   │   ├───helpers
│   │   │   │   ├───aggregate
│   │   │   │   ├───cursor
│   │   │   │   ├───discriminator
│   │   │   │   ├───document
│   │   │   │   ├───indexes
│   │   │   │   ├───model
│   │   │   │   ├───populate
│   │   │   │   ├───projection
│   │   │   │   ├───query
│   │   │   │   ├───schema
│   │   │   │   ├───schematype
│   │   │   │   ├───timestamps
│   │   │   │   ├───topology
│   │   │   │   └───update
│   │   │   ├───options
│   │   │   ├───plugins
│   │   │   ├───schema
│   │   │   │   └───operators
│   │   │   └───types
│   │   ├───node_modules
│   │   │   ├───ms
│   │   │   └───safe-buffer
│   │   └───tools
│   ├───mongoose-legacy-pluralize
│   ├───mpath
│   │   ├───lib
│   │   └───test
│   ├───mquery
│   │   ├───lib
│   │   │   └───collection
│   │   ├───node_modules
│   │   │   └───debug
│   │   │       └───src
│   │   └───test
│   │       └───collection
│   ├───ms
│   ├───multer
│   │   ├───lib
│   │   └───storage
│   ├───negotiator
│   │   └───lib
│   ├───neo-async
│   ├───nodemon
│   │   ├───bin
│   │   ├───doc
│   │   │   └───cli
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───config
│   │   │   ├───help
│   │   │   ├───monitor
│   │   │   ├───rules
│   │   │   └───utils
│   │   └───node_modules
│   │       ├───debug
│   │       │   ├───dist
│   │       │   └───src
│   │       └───ms
│   ├───nopt
│   │   ├───bin
│   │   ├───examples
│   │   └───lib
│   ├───normalize-path
│   ├───normalize-url
│   ├───object-assign
│   ├───object-component
│   │   └───test
│   ├───on-finished
│   ├───on-headers
│   ├───once
│   ├───p-cancelable
│   ├───package-json
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───parseqs
│   ├───parseuri
│   ├───parseurl
│   ├───passport
│   │   └───lib
│   │       ├───errors
│   │       ├───framework
│   │       ├───http
│   │       ├───middleware
│   │       └───strategies
│   ├───passport-local
│   │   └───lib
│   ├───passport-strategy
│   │   └───lib
│   ├───path-to-regexp
│   ├───pause
│   ├───picomatch
│   │   └───lib
│   ├───prepend-http
│   ├───process-nextick-args
│   ├───proxy-addr
│   ├───pstree.remy
│   │   ├───lib
│   │   └───tests
│   │       └───fixtures
│   ├───pump
│   ├───pupa
│   ├───qs
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───random-bytes
│   ├───range-parser
│   ├───raw-body
│   ├───rc
│   │   ├───lib
│   │   └───test
│   ├───readable-stream
│   │   ├───doc
│   │   │   └───wg-meetings
│   │   └───lib
│   │       └───internal
│   │           └───streams
│   ├───readdirp
│   ├───regexp-clone
│   │   └───test
│   ├───registry-auth-token
│   ├───registry-url
│   ├───require_optional
│   │   └───test
│   │       └───nestedTest
│   ├───resolve-from
│   ├───responselike
│   │   └───src
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───saslprep
│   │   ├───lib
│   │   └───test
│   ├───semver
│   │   └───bin
│   ├───semver-diff
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───send
│   │   └───node_modules
│   │       └───ms
│   ├───serve-static
│   ├───setprototypeof
│   │   └───test
│   ├───sift
│   │   ├───coverage
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   ├───signal-exit
│   ├───sliced
│   ├───socket.io
│   │   ├───lib
│   │   └───node_modules
│   │       ├───debug
│   │       │   ├───dist
│   │       │   └───src
│   │       └───ms
│   ├───socket.io-adapter
│   │   └───.idea
│   │       └───inspectionProfiles
│   ├───socket.io-client
│   │   ├───dist
│   │   ├───lib
│   │   └───node_modules
│   │       ├───base64-arraybuffer
│   │       │   └───lib
│   │       ├───debug
│   │       │   ├───dist
│   │       │   └───src
│   │       ├───isarray
│   │       ├───ms
│   │       └───socket.io-parser
│   │           └───node_modules
│   │               ├───component-emitter
│   │               ├───debug
│   │               │   └───src
│   │               └───ms
│   ├───socket.io-parser
│   │   └───node_modules
│   │       ├───debug
│   │       │   ├───dist
│   │       │   └───src
│   │       ├───isarray
│   │       └───ms
│   ├───source-map
│   │   ├───dist
│   │   └───lib
│   ├───sparse-bitfield
│   ├───statuses
│   ├───streamsearch
│   │   └───lib
│   ├───string-width
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       ├───emoji-regex
│   │       │   └───es2015
│   │       ├───is-fullwidth-code-point
│   │       └───strip-ansi
│   ├───string_decoder
│   │   └───lib
│   ├───strip-ansi
│   ├───strip-json-comments
│   ├───supports-color
│   ├───term-size
│   │   └───vendor
│   │       ├───macos
│   │       └───windows
│   ├───to-array
│   ├───to-readable-stream
│   ├───to-regex-range
│   ├───toidentifier
│   ├───touch
│   │   └───bin
│   ├───type-fest
│   │   └───source
│   ├───type-is
│   ├───typedarray
│   │   ├───example
│   │   └───test
│   │       └───server
│   ├───typedarray-to-buffer
│   │   └───test
│   ├───uglify-js
│   │   ├───bin
│   │   ├───lib
│   │   └───tools
│   ├───uid-safe
│   ├───undefsafe
│   │   └───lib
│   ├───unique-string
│   ├───unpipe
│   ├───update-notifier
│   ├───url-parse-lax
│   ├───util-deprecate
│   ├───utils-merge
│   ├───vary
│   ├───walk
│   │   └───lib
│   ├───widest-line
│   ├───wordwrap
│   │   ├───example
│   │   └───test
│   ├───wrappy
│   ├───write-file-atomic
│   ├───ws
│   │   └───lib
│   ├───xdg-basedir
│   ├───xmlhttprequest-ssl
│   │   ├───example
│   │   ├───lib
│   │   └───tests
│   ├───xtend
│   └───yeast
├───public
│   ├───css
│   └───js
├───routes
│   ├───media
│   └───profile
└───views
    └───partials
</pre>
