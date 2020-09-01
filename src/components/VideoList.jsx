import exampleVideoData from './../data/exampleVideoData.js';
import App from './App.js';
// var exampleVideoData = require('../data/exampleVideoData.js');
console.log(App);

var VideoList = (props) => ( //App
  <div className="video-list">
    <indVids exampleVideoData = {exampleVideoData} />
  </div>
);

var indVids = (props) => ( //TodoList //Replace it with VideoListEntry
  <div>
    {props.exampleVideoData.map(video => <div><h5><em>{video['snippet']['title']}</em></h5>{video['snippet']['description']}</div>)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// ReactDOM.render(<VideoList />, document.getElementById('videoList'));

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


// <div><h5>{props.exampleVideoData[0]['snippet']['title']}</h5>{exampleVideoData[0]['snippet']['description']}</div>
//     <div><h5>{exampleVideoData[1]['snippet']['title']}</h5>{exampleVideoData[1]['snippet']['description']}</div>
//     <div><h5>{exampleVideoData[2]['snippet']['title']}</h5>{exampleVideoData[2]['snippet']['description']}</div>
//     <div><h5>{exampleVideoData[3]['snippet']['title']}</h5>{exampleVideoData[3]['snippet']['description']}</div>
//     <div><h5>{exampleVideoData[4]['snippet']['title']}</h5>{exampleVideoData[4]['snippet']['description']}</div>