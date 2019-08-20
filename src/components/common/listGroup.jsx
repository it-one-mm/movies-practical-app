import React from "react";

const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;
  let classes = "list-group-item list-group-item-action";

  return (
    <div className="list-group">
      {items.map(item => (
        <button key={item[valueProperty]} className={classes}>
          {item[textProperty]}
        </button>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
