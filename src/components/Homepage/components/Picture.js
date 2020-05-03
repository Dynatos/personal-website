import React, {Component} from 'react';
// import jasonPicture from '../../../static/htmlcssimages/images/jason.jpg';
import jasonPicture from '../../../static/images/0.jpg';

class Picture extends Component {

  render() {

    return(
      <div>
        <img className="resume-picture" src={jasonPicture} />
      </div>
    );
  }
}

export default Picture;
