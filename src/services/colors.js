const convert = require ('color-convert');

export default class Colors {

    getRandomColor = () => {
        const hex = Math.floor(Math.random() * 0xFFFFFF);
        return "#" + ("000000" + hex.toString(16)).substr(-6);
    };

    getContrastColor = (color) => {
        const v = convert.hex.hsv(color)[2]; // v is third value of hsv
        return ( v > 60 ) ? '#000' : '#fff';
    };

}
