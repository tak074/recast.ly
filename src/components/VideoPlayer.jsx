import VideoList from './VideoList.js';
import exampleVideoData from './../data/exampleVideoData.js';
// import App from './App.js';

// in the VideoPlayer, there should props.video which points to a video component.
//video is firstChild of div with class = video-list
// VideoPlayer.defaultProps = {
//   state: {document.getElementsByClassName('video-list')[0].firstChild}
// };

var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src= {`https://www.youtube.com/embed/${props.currentVideo.id.videoId}?autoplay=1`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      {/* info component */}
      <h3>{props.currentVideo.snippet.title}</h3>
      <div>{props.currentVideo.snippet.description}</div>
    </div>
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  currentVideo: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
