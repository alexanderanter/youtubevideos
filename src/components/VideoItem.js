import React from 'react';
import './VideoItem.css';
//import react and videoitem.css
//create an arrow function named VideoItem that deconstruct the video and onvideoselect props.

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div>
			<div onClick={() => onVideoSelect(video)} className="video-item">
				<img
					className="ui image video-thumb"
					width="300px"
					alt={video.snippet.description}
					src={video.snippet.thumbnails.medium.url}
				/>
			</div>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};
//export

export default VideoItem;
