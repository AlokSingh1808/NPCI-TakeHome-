package com.example.product.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@Column(name ="id")
	private Integer id;
	
	@Column(name ="sku")
	private String sku;
	
	@Column(name ="pname")
	private String pname;
	
	@Column(name ="description")
	private String description;
	
	@Column(name ="unitprice")
	private Integer unitPrice;
	
	@Column(name ="imageurl")
	private String imageurl;
	
	@Column(name ="unitsinstock")
	private Integer unitsinStock;
	
	@Column(name ="datecreated")
	private Date dateCreated;
	
	@Column(name ="lastupdated")
	private Date lastUpdated;
	
	@Column(name ="categoryid")
	private Integer categoryId;
	
	public Product() {
		
	}

	public Product(Integer id, String sku, String pname, String description, Integer unitPrice, String imageurl,
			Integer unitsinStock, Date dateCreated, Date lastUpdated, Integer categoryId) {
		super();
		this.id = id;
		this.sku = sku;
		this.pname = pname;
		this.description = description;
		this.unitPrice = unitPrice;
		this.imageurl = imageurl;
		this.unitsinStock = unitsinStock;
		this.dateCreated = dateCreated;
		this.lastUpdated = lastUpdated;
		this.categoryId = categoryId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Integer unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public Integer getUnitsinStock() {
		return unitsinStock;
	}

	public void setUnitsinStock(Integer unitsinStock) {
		this.unitsinStock = unitsinStock;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", sku=" + sku + ", name=" + pname + ", description=" + description + ", unitPrice="
				+ unitPrice + ", imageurl=" + imageurl + ", unitsinStock=" + unitsinStock + ", dateCreated="
				+ dateCreated + ", lastUpdated=" + lastUpdated + ", categoryId=" + categoryId + "]";
	}
	
}

