import React, {Component} from 'react';
import jasonPicture from '../../../static/htmlcssimages/images/jason.jpg';

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
