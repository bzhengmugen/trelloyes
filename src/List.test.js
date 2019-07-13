import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
      const section = document.createElement('section');
      ReactDOM.render(<List header="first list"  
      cards={[{id: 'a', title: 'First card', content: 'lorem ipsum'}]}/>, section);
      ReactDOM.unmountComponentAtNode(section);
    });
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<List header="first list"  
                cards={[{id: 'a', title: 'First card', content: 'lorem ipsum'}]} />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });
  });