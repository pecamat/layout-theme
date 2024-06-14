import React from 'react';

const Dialog = ({ children }) => {
  // Extract children components from props
  const [buttonSlot, dropdownSlot] = React.Children.toArray(children);

  return (
    <div className="dialog">
      <div className="button-slot">{buttonSlot}</div>
      <div className="dropdown-slot">{dropdownSlot}</div>
    </div>
  );
};

export default Dialog;
