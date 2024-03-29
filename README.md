# Logo Icons for React Native

### react-native-ico-logo

99 Vector Icons for React Native

<img src="./static/windows-media-player.png" alt="windows-media-player" width="150" height="150"> <img src="./static/wechat.png" alt="wechat" width="150" height="150"> <img src="./static/waze.png" alt="waze" width="150" height="150">

## List of icons

- [List of Logo Icons](http://ico.simpleness.org/pack/logo)

## Usage

```
import Icon from 'react-native-ico-logo';


// Inside some view component
render() {
    return (
        <>
          <Icon name="windows-media-player" />
          <Icon name="wechat" height="40" width="40" />
          <Icon name="waze" color="red" />
          <Icon name="waze" colors={{ "#000000": "#FFFFFF" }} />
          <Icon name="wechat" badge="10" />
          <Icon name="wechat" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="windows-media-player" background="circle" />
          <Icon name="windows-media-player" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

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

### <Icon name [color width height background badge ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "windows-media-player"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
colors | yes | | replace colors | {"#FFFFFF": "#000000"} // white to black
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
background | yes | | background type | "circle"
background | yes | | background object | {type: "circle", color: 'yellow'}
badge | yes | | badge string | "10"
badge | yes | | badge object | {value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}
...rest | yes | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
