import React from "react";
import "./VideoPlayer.css";

class YouTubeVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: "TBtTIaq_4AE"
        };
    }

    render() {
        const { title } = this.props;
        const { videoId } = this.state;
        const url = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div className="video-container">
                <iframe
                    title={title}
                    className="video"
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
}

export default YouTubeVideo;