const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
const randomColor = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

export default randomColor;
