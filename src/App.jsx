import Accordian from "./components/accordian"
import ImageSlider from "./components/image-slider";
import RandomColor from './components/random-color';
import StarRating from "./components/star-rating";

function App() {

  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={5} />
      <ImageSlider />
    </>
  )
}

export default App
