# MakeCode "banana" Example Extension

 !["Build status badge"](https://github.com/carlosperate/pxt-banana/workflows/MakeCode/badge.svg)

An example MakeCode (PXT) extension using C++, with comments, and 🍌 flavour.

## Add to a MakeCode Project

This repository can be added as an **extension** in MakeCode.

- Open https://makecode.microbit.org
- Click on **New Project**
- Click on **Extensions** under the gearwheel menu
- Search for **https://github.com/carlosperate/pxt-banana** and import it

## Edit this extension

### In MakeCode

To edit this repository in MakeCode.

- Open https://makecode.microbit.org
- Click on **Import** then click on **Import URL**
- Paste **https://github.com/carlosperate/pxt-banana** and click import

After the extension is imported it can be tested via a second MakeCode
workspace/tab, which can load the opened extension from the original
workspace/tab:

- Click the Github Icon at the bottom of the editor, next to the project name
    - This is usually were the "save" (floppy disk) icon usually is placed
- Scroll down to the "Extension zone", click on the "Test Extension" button
- A new MakeCode tab or window should be opened, which automatically has your
  extension loaded
- Any changes on the MakeCode workspace with the extension will be synced with
  the second workspace with the test project
    - Whenever changes are made to the extension workspace, make sure you
      refresh the test project window to ensure the changes are loaded

### Local builds

Using the node.js pxt cli application:

```bash
git clone https://github.com/carlosperate/pxt-banana.git
cd pxt-banana
npm install pxt --no-save
npx pxt target microbit --no-save
npx pxt install
npx pxt
```

Using the `pxt` command without any arguments will use the MakeCode online
compiler to build the C++ portions of the project, and flash the resulting
hex file to the micro:bit.

The `PXT_FORCE_LOCAL=1` environmental variable can be used to force a local
build. By default it will use a docker image with the all the required
toolchain, adding `PXT_NODOCKER=1` will build with the local toolchain:

```bash
PXT_FORCE_LOCAL=1 PXT_NODOCKER=1 npx pxt
```

To build only for micro:bit V2 (saves time and the need to have the V1
build dependencies) the `PXT_COMPILE_SWITCHES=csv---mbcodal` env variable
can be used as well.

## Other options for the config files

JSON files cannot contain comments, so optional settings are documented here:

### Configure the extension to only build for micro:bit V1 or V2

If the extension contains any C++ code, MakeCode will attempt to compile it
with the micro:bit V1 DAL **and** micro:bit V2 CODAL.
If the C++ code is not compatible with both, it will cause compilation errors.
This `pxt.json` entry can configure what version to exclude.

To exclude V1 DAL compilation use value `mbdal`, to exclude V2 CODAL use
`mbcodal`:

```json
{
    "disablesVariants": [
        "mbdal"
    ]
}
```

### Add DAL or CODAL flags to the build

For example, these are the BLE flags for CODAL (`DEVICE_BLE`,
`SOFTDEVICE_PRESENT`, `MICROBIT_BLE_ENABLED`) and DAL
(`microbit-dal -> bluetooth -> enabled`).

```json
{
    "yotta": {
        "config": {
            "codal": {
                "DEVICE_BLE": 1,
                "MICROBIT_BLE_ENABLED": 1
            },
            "microbit-dal": {
                "bluetooth": {
                    "enabled": 1
                }
            }
        }
    }
}
```

> [!WARNING]
> MakeCode GH issue: https://github.com/microsoft/pxt-microbit/issues/5352
> 
> For each flag in `yotta.config.codal` MakeCode creates two defines, the
> first one prepended by `DEVICE_`, and the second by `YOTTA_CFG_CODAL_`.
> So, in this example `DEVICE_BLE` becomes `DEVICE_DEVICE_BLE` and
> `YOTTA_CFG_CODAL_DEVICE_BLE`.
>
> Flags added to parent `yotta.config` are not modified, but will be
> present in all variants, i.e. `mbdal` and`mbcodal`:
> ```json
> "yotta": {
>     "config": {
>         "DEVICE_BLE": 1,
>     }
> }
> ```

## Available blocks in this extension

The rendering of this sections can be seen in:
https://carlosperate.github.io/pxt-banana/

This snippet will render as blocks:

```blocks
basic.showNumber(banana.bananas(1))
```

This snippet should render each API call as individual cards
(currently not rendering):

```cards
banana.bananaAdd(2, 3)
banana.bananaMultiplier(4)
```

This snippet should render as a signature in blocks, JavaScript, and Python
(currently not rendering):

```sig
banana.bananaMultiplier(5)
```

And this should render a simulator showing all the code above
(currently not rendering):

```sim
basic.showNumber(banana.bananas(1))
basic.showNumber(banana.bananaAdd(2, 3))
basic.showNumber(banana.bananaMultiplier(4))
basic.showNumber(banana.bananasV2Only(5))
```

## Useful links

- [Building your own extension](https://makecode.com/extensions/getting-started)
- [Naming Conventions](https://makecode.com/extensions/naming-conventions)
- [Extension localization](https://makecode.com/extensions/localization)
- [MakeCode Blocks Playground](https://makecode.com/playground)
- [pxt.json Manual Page](https://makecode.com/extensions/pxt-json)

## License

MIT

#### Metadata (used for search, rendering)

* for PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
