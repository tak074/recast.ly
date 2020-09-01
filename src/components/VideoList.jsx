import exampleVideoData from './../data/exampleVideoData.js';
// import App from './App.js';
import VideoListEntry from './VideoListEntry.js';
// var exampleVideoData = require('../data/exampleVideoData.js');

var VideoList = (props) => ( //VideoList
  <div className="video-list">
    {videoEntries}
  </div>
);


let videoEntries = exampleVideoData.map((exampleVid) =>
  <VideoListEntry video = {exampleVid}/>
);




//example usage of map
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// ReactDOM.render(<VideoList />, document.getElementById('videoList'));

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

