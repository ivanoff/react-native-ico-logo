# Logo Icons for React Native

### react-native-ico-logo

99 Icons

## Usage

```
import Icon from 'react-native-ico-logo';


// Inside some view component
render() {
    return (
        <>
          <Icon name="004-windows-media-player" />
          <Icon name="005-wechat" height="40" width="40" />
          <Icon name="006-waze" color="red" />
        </>
    );
}

```

## List of icons

- [List of Logo Icons](http://ico.simpleness.org/pack/logo)

## Installation

#### yarn

```bash
yarn add react-native-ico-logo react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-logo react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of file | "004-windows-media-player"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua