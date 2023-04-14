import debounce from "./debounce.js";
import Slide from "./slide.js";

const slide = new Slide(".slide", ".wrapper");
slide.init()
console.log(slide)

slide.changeSlide(3);
slide.activePrevSlide();