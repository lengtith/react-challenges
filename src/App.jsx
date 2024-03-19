import Accordian from "./components/accordian"
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-button";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from './components/random-color';
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";

function App() {

  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={5} />
      <ImageSlider />
      <LoadMoreData/> */}
      {/* <TreeView/> */}
      <QRCodeGenerator/>
    </>
  )
}

export default App
