import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;