import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CategoryFilter = ({ setCategoryParam, category }) => {
  const [selectedCategory, setSelectedCategory] = useState(category || null);
  const handleSelectedCategory = (value) => {
    setSelectedCategory(value);
    setCategoryParam(value);
  };

  return (
    <div className="mt-3">
      <h5>Category</h5>
      <Form>
        <Form.Check
          type="switch"
          id="custom-development"
          label="Development"
          onChange={() => handleSelectedCategory("Development")}
          checked={selectedCategory === "Development"}
           className="small-switch"
        />
        <Form.Check
          type="switch"
          id="custom-business"
          label="Business"
          onChange={() => handleSelectedCategory("Business")}
          checked={selectedCategory === "Business"}
           className="small-switch"
        />
        <Form.Check
          type="switch"
          id="custom-IT"
          label="IT"
          onChange={() => handleSelectedCategory("IT")}
          checked={selectedCategory === "IT"}
           className="small-switch"
        />
        <Form.Check
          type="switch"
          id="custom-music"
          label="Music"
          onChange={() => handleSelectedCategory("MUSIC")}
          checked={selectedCategory === "MUSIC"}
           className="small-switch"
        />
      </Form>
    </div>
  );
};

export default CategoryFilter;
