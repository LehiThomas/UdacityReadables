import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Drawer, MenuItem, Divider } from "material-ui";

import CategoryService from "../../services/CategoryService";

import "./styles.css";

class SideBar extends Component {
  componentDidMount() {
    CategoryService.axiosCategories();
  }

  displayCategories = categories => {
    if (categories !== undefined) {
      const categoryArray = categories.categories;
      return (
        <div>
          {categoryArray.map((category, index) => (
            <MenuItem key={category + index}>
              <Link to={`/${category.name}`}>{category.name}</Link>
            </MenuItem>
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    const { categories } = this.props;
    return (
      <Drawer open={true} variant="permanent">
        <div className="categories">Categories:</div>
        <Divider />
        <MenuItem>
          <Link to={`/`}>Home</Link>
        </MenuItem>
        {this.displayCategories(categories)}
      </Drawer>
    );
  }
}

const mapStateToProps = ({ categoryReducer }) => ({
  categories: categoryReducer.categories
});

export default connect(mapStateToProps)(SideBar);
