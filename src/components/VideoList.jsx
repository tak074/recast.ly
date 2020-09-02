import exampleVideoData from './../data/exampleVideoData.js';
import App from './App.js';
import VideoListEntry from './VideoListEntry.js';
// var exampleVideoData = require('../data/exampleVideoData.js');

var VideoList = (props) => ( //VideoList
  <div className="video-list">
    <VideoEntries videos={props.videos} eventHandlerVideoClick={props.eventHandlerVideoClick} />
  </div>
);

var VideoEntries = (props) => (
  props.videos.map((exampleVid) => <VideoListEntry key={exampleVid.id.videoId} video={exampleVid} eventHandlerVideoClick={props.eventHandlerVideoClick}/>)
);

// refactor option: add a button component to scroll through the video list if it is longer than 5 videos long


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

