# <p align="center">Electron template
## Uniqueness:
* Custom auto-reloader
* Config file with latest window state (position/size)

## Paragraphs:

* [Getting started](#getting-started)
  * [Init Project](#init-project)
  * [Run](#run)
* [Configuration](#configuration)
  * [Config file](#config-file)
  * [Bootstrap](#bootstrap)
## Getting started
<hr>

### Init Project:
```bash
git clone https://github.com/webshining/electron-template project-name
cd project-name
npm i
# Write npm i --platform=win32 for start from wsl in windows
npm start
# npm run test
```
## Configuration
<hr>

### Config file:
Config file have 2 element with settings
* DWindow - default window
* LWindow - latest window
### Bootstrap:
>The ```bootstrap``` function has an optional argument of type ```Object```