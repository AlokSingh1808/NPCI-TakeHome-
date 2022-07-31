package com.example.product.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productcategory")
public class ProductCategory {

	@Id
	@Column(name = "categoryid")
	private int categoryId;
	
	@Column(name = "categoryname")
	private String categoryname;

	public ProductCategory(int categoryId, String categoryname) {
		super();
		this.categoryId = categoryId;
		this.categoryname = categoryname;
	}
	
	public ProductCategory() {
	}

	public int getCategoryid() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	@Override
	public String toString() {
		return "ProductCategory [categoryid=" + categoryId + ", categoryname=" + categoryname + "]";
	}

	
}
