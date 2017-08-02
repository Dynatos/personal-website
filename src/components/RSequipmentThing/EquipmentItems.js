import React, {Component} from 'react';


class EquipmentItems extends Component {

  render() {

    let {topItems} = this.props;


// this function is called in the return statement and sets the source of the image to be either pulled from the
// grand exchange on runescape.com if it is tradeable, sets it to be an image loaded locally if untradeable, or leaves
// it blank if it isn't a "topItems".
    function setImagePath() {
      if (topItems) {
        if (topItems.tradeable) {
          return "http://services.runescape.com/m=itemdb_oldschool/a=1/1501497033562_obj_sprite.gif?id=" + topItems.id;
        }
        return require('../../static/itemspritesbyid/' + topItems.id + '.png');
      }
      return require('../../static/htmlcssimages/images/icons/blankitemfinal.png');
    }

// our return statement gives back one image and the name of the item associated with that image based on the topItems
// prop that it was handed in the component where it was called. Also sets the css classes based on the finalColumn prop
    return (
      <div className={"equipment--item-names equipment--item" + this.props.uniqueClassNumber}>
        {topItems && topItems.name || <br />}
        <div className="equipment--image-containers">
          <img src={setImagePath()} className="equipment--image" />
        </div>
      </div>
    );
  }
}

export default EquipmentItems;
