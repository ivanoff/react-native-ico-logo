declare module 'react-native-ico-logo' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'yelp' |
      'xiaomi' |
      'xbox' |
      'windows-media-player' |
      'wechat' |
      'waze' |
      'vlc' |
      'utorrent' |
      'uber' |
      'tripadvisor' |
      'trello' |
      'tinder' |
      'swift' |
      'swarm' |
      'overflowing' |
      'smugmug' |
      'slideshare' |
      'slack' |
      'sketch' |
      'simple' |
      'shazam' |
      'safari' |
      'quora' |
      'quicktime' |
      'pocket' |
      'periscope' |
      'pepsi' |
      'paypal' |
      'pandora' |
      'opera' |
      'open-source' |
      'odnoklassniki' |
      'nvidia' |
      'nike' |
      'netflix' |
      'msn' |
      'word' |
      'windows' |
      'powerpoint' |
      'outlook' |
      'office' |
      'microsoft' |
      'excel' |
      'edge' |
      'microsoft-access' |
      'mcdonalds' |
      'kik' |
      'inbox' |
      'icloud' |
      'ibooks' |
      'html-5' |
      'houzz' |
      'groupon' |
      'grooveshark' |
      'google-play' |
      'google-earth' |
      'google-duo' |
      'chrome' |
      'google-analytics' |
      'google-allo' |
      'adwords' |
      'adsense' |
      'gmail' |
      'fiverr' |
      'firefox' |
      'finder' |
      'feedburner' |
      'evernote' |
      'ello' |
      'electronics-arts' |
      'drupal' |
      'disqus' |
      'css-3' |
      'coderwall' |
      'brightkite' |
      'blackberry' |
      'bing' |
      'beats-pill' |
      'basecamp' |
      'baidu' |
      'ati' |
      'apple' |
      'app-net' |
      'android' |
      'amd' |
      'air-bnb' |
      'aim' |
      'premiere' |
      'prelude' |
      'photoshop' |
      'adobe' |
      'adobe-lightroom' |
      'indesign' |
      'illustrator' |
      'encore' |
      'creative-cloud' |
      'adobe-bridge' |
      'after-effects' |
      'adidas';

    type iconColors = '#00897B' |
      '#00BCD4' |
      '#0277BD' |
      '#03A9F4' |
      '#0D47A1' |
      '#1565C0' |
      '#1976D2' |
      '#1A937D' |
      '#1E88E5' |
      '#2196F3' |
      '#263238' |
      '#2E7D32' |
      '#303F9F' |
      '#37474F' |
      '#388E3C' |
      '#43A047' |
      '#455A64' |
      '#472A49' |
      '#4CAF50' |
      '#512DA8' |
      '#64B5F6' |
      '#65863A' |
      '#66BB6A' |
      '#7B1FA2' |
      '#8BC34A' |
      '#90CAF9' |
      '#B0BEC5' |
      '#BA68C8' |
      '#BBDEFB' |
      '#C8E6C9' |
      '#CC2027' |
      '#CDDC39' |
      '#CFD8DC' |
      '#D1C4E9' |
      '#D32F2F' |
      '#D81B60' |
      '#E1BEE7' |
      '#E64A19' |
      '#EC407A' |
      '#ECEFF1' |
      '#EF6C00' |
      '#F06292' |
      '#F44336' |
      '#F57C00' |
      '#FAFAFA' |
      '#FB8C00' |
      '#FF5722' |
      '#FF9800' |
      '#FFA000' |
      '#FFC107' |
      '#FFCA28' |
      '#FFD54F' |
      '#FFE0B2' |
      '#FFEB3B' |
      '#FFECB3';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
