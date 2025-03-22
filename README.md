# Hide Unwanted Stuff

A simple Firefox web extension to hide unwanted HTML components.

## Configuration of the rules

Update the values in the `rules.js` file.

```js
const rules = [
  {
    // Hide any parent element with the `parentClass` class and having a
    // child with the `childClass` class.
    parentClass: "parentClass",
    childClass: "childClass",
  },
  {
    // Hide any element with the `idToBeRemoved` ID.
    idToBeRemoved: "idToBeRemoved",
  },
  {
    // Hide any element with the `classToBeRemoved` class.
    classToBeRemoved: "classToBeRemoved",
  },
];
```

The `reload` button can be used to refresh the extension configuration after a rule update.

**The rules will be applied on all the websites.** Specific websites can be targeted by updating the `manifest.json`
`matches` array.

## Installation of the extension

This extension is currently not published and need to be manually loaded as a temporary extension.

```bash
git clone https://github.com/ablandel/hide-unwanted-stuff-webextension.git
```

Open Firefox, go to `about:debugging` and under the `This Firefox` tab, use the `Load Temporary Add-on...` button to
load this extension `manifest.json`.

On some Firefox setup, it may be required to allow the extension to run on all the windows without restrictions. Open
Firefox, go to `about:addons` and under the `Extensions` tab and this `Hide Unwanted Stuff` extension section, allows
extensions to `Run in Private Windows` and `Run on sites with restrictions`.

**The extension must be (re-)installed after each Firefox (re)start.**
