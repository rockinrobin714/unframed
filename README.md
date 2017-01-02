[![Stories in Ready](https://badge.waffle.io/Kreckin/unexpectedpony.png?label=ready&title=Ready)](https://waffle.io/Kreckin/unexpectedpony)
# Unexpectedpony

> Find and rate interesting things nearby.

## Team

  - __Product Owner__: teamMember
  - __Scrum Master__: Kevin Sheehy
  - __Development Team Members__: Robin Dykema, Casey Billman, Ethan Fourie, and Kelly Braun

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

TODO

## Requirements

- Node
- XCode
- Cocoapods
- React-native

## Development


### Installing Dependencies

From within the root directory:

```sh
npm install
```

#### Building the iOS app:

```sh
pod install
```

#### Running the database and server:

1. Install [docker](https://www.docker.com/products/overview).

2. Start the neo4j/spatial container

```sh
docker run \
  -d \
  --publish=7474:7474 --publish=7687:7687 \
  --volume=$HOME/neo4j/data:/data \
  --volume=$HOME/neo4j/logs:/logs \
  --name=DB \
  klaw/neo4j-spatial
```

This will:
 - run the container in the background
 - expose ports 7474 and 7687
 - use the designated files for data and logs
 - name the container 'DB'
 - use the image `klaw/neo4j-spatial` image

 Note: if this is your first time running with this directory you will need to log into the database, change the default password, and update config.js with this information.

 3. Start the server

From within the server directory
 `npm start`


### Roadmap

View the project roadmap [here](https://github.com/Kreckin/unexpectedpony/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
