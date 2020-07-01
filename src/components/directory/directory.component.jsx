import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from '../menu-item/menu-item.component';
/* import './directory.styles.scss';
 */

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    const MappedMenuItems = sections.map(({ title, imageUrl, id }) => (
      <MenuItem key={id} title={title} img={imageUrl} />
    ));

    return (
      <DirectoryMenu>
        {/* {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} />
        ))} */}
        {MappedMenuItems}
      </DirectoryMenu>
    );
  }
}

export default Directory;
