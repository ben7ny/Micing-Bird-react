import React, { Component } from 'react';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
       <div className="three-btns">
           <section id="buttons">
             <button id="previous" onClick={this.props.handlePrevClick}>
               <span className="ion-skip-backward"></span>
             </button>
             <button id="play-pause" onClick={this.props.handleSongClick}>
               <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
             </button>
             <button id="next" onClick={this.props.handleNextClick}>
               <span className="ion-skip-forward"></span>
             </button>
           </section>
        </div>
          <div className="player-seekbar">
            <div className="play-bar">
                   <input
                     type="range"
                     className="seek-bar"
                     value={(this.props.currentTime / this.props.duration) || 0}
                     max="1"
                     min="0"
                     step="0.01"
                     onChange={this.props.handleTimeChange}
                   />
              </div>
              <div className="seekbar-time">
                 <div className="current-time">{this.props.currentTime}</div>
                 <div className="total-time">{this.props.duration}</div>
             </div>
          </div>
         <div className="the-sound-bar">
               <div className="icon ion-volume-low"></div>
              <input
                type="range"
                className="seek-bar"
                value={(this.props.currentVolume || 0.5)}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleVolumeChange}
              />

               <div className="icon ion-volume-high"></div>
          </div>
       </section>
     );
   }
 }

 export default PlayerBar;
