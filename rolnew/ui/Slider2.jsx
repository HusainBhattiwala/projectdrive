import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Slider2() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: { perView: 'auto' },
  });

  return (
    <div ref={sliderRef} className="keen-slider" style={{ maxWidth: 600 }}>
      <div
        className="keen-slider__slide number-slide1 bg-red-500"
        style={{ maxWidth: 150, minWidth: 150 }}
      >
        1
      </div>
      <div
        className="keen-slider__slide number-slide2 bg-green-500"
        style={{ maxWidth: 100, minWidth: 100 }}
      >
        2
      </div>
      <div
        className="keen-slider__slide number-slide3 bg-blue-500"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        3
      </div>
      <div
        className="keen-slider__slide number-slide4 bg-black"
        style={{ maxWidth: 500, minWidth: 500 }}
      >
        4
      </div>
      <div
        className="keen-slider__slide number-slide5 bg-slate-900"
        style={{ maxWidth: 150, minWidth: 150 }}
      >
        5
      </div>
      <div
        className="keen-slider__slide number-slide6 bg-slate-950"
        style={{ maxWidth: 75, minWidth: 75 }}
      >
        6
      </div>
    </div>
  );
}
