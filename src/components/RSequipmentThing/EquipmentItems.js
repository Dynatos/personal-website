import React, {Component} from 'react';

/*
  let getItem = (url) => {
  return new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open('GET', url + topItems.id);
  req.onload = () => {
  if (req.status === 200) {
  resolve(req.response);
  }
  else {
  reject(Error(req.statusText));
  }
  };
  req.onerror = () => {
  reject(Error("Network Error"));
  };
  req.send();
  });
  };
  let fetchedJson = getItem(blankLink).then((response) => {
  console.log("Success!", response);
  }, (error) => {
  console.error("Failed!", error);
  });
  console.log("This is the fetchedJSON: " + JSON.stringify(fetchedJson));
  return fetchedJson.item.icon;
*/

class EquipmentItems extends Component {

  render() {
    let {topItems} = this.props;
    //const blankLink = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";
    const runeHQItemLink = "https://www.runehq.com/image/geimages/geitemimage_";

// This function is called in the return statement and sets the source of the image to be either pulled from the
// grand exchange on runescape.com if it is tradeable, sets it to be an image loaded locally if untradeable, or leaves
// it blank if it isn't a "topItems"
    function setImagePath() {
      if (topItems) {
        if (topItems.tradeable) {
          return runeHQItemLink + topItems.id + '.gif';
        }
        return require('../../static/itemspritesbyid/' + topItems.id + '.png');
      }
      return require('../../static/htmlcssimages/images/icons/blankitemfinal.png');
    }

// Our return statement gives back one image and the name of the item associated with that image based on the topItems
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
