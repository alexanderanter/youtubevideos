import React from "react";
//import react
// create a functional component called VideoDetail with deconstructed prop called video

const VideoDetail = ({ video }) => {
  // write an if statement that if video is not returning trueish, return a div and Loading... inside of it.

  if (!video) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <div className="ui embed div">
          <iframe
            title="Video Player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
