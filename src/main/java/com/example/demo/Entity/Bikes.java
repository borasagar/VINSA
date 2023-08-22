package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bikes")
public class Bikes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "fueltype")
	private String fueltype;
	@Column(name = "price")
	private long price;
	@Column(name = "description")
	private String description;
	@Column(name = "image")
	private String image;
	@Column(name = "brand")
	private String brand;

	public Bikes() {

	}

	public Bikes(long id, String name, String fueltype, long price, String description,String image,
			String brand) {
		
		this.id = id;
		this.name = name;
		this.fueltype = fueltype;
		this.price = price;
		this.description = description;
		this.image = image;
		this.brand = brand;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFueltype() {
		return fueltype;
	}

	public void setFueltype(String fueltype) {
		this.fueltype = fueltype;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	@Override
	public String toString() {
		return "Bikes [id=" + id + ", name=" + name + ", fueltype=" + fueltype + ", price=" + price + ", description="
				+ description + ", image=" + image + ", brand=" + brand + "]";
	}

}
