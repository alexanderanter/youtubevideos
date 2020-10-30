import react from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

// import react, searchbar, youtube , videolist and videodetail
class App extends react.Component {
  state = { videos: [], selectedVideo: null };
  // create a life cycle method that clicks in after the component have loaded in
  componentDidMount() {
    // to select a default video
    this.onTermSubmit("Rick Astley - Never Gonna Give You Up");
  }

  // create a onTermSubmit asynchronous function that takes in a term as a parameter,
  onTermSubmit = async (term) => {
    // inside of onTermSubmit, create a response object that awaits the youtube.get("/search") with the q parameter that got the value of term

    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // set the state so that videos get the value from the response and selectedVideo get the first video.

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  /// create a onVideoSelect arrow function that takes video as a parameter,

  onVideoSelect = (video) => {
    // set the state of selectedVideo to video.
    this.setState({ selectedVideo: video });
  };
  // create a render function and inside a return statement that have a div named ui container
  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <div class="ui grid">
          <div class="row">
            <div class="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div class="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
