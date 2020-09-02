import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from './../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

  }

  componentDidMount() {
    this.getYoutubeVideos('search');
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  eventHandlerVideoClick(video) {
    console.log(video);
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar" />
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search handleSearchInputChange={this.getYoutubeVideos.bind(this)}/></em> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer currentVideo = {this.state.currentVideo}/></em></h5></div>
          </div>
          <div id="videoList" className="col-md-5">
            <div><h5><em><VideoList
              videos={this.state.videos}
              eventHandlerVideoClick={this.eventHandlerVideoClick.bind(this)}
            /></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
