package com.example.demo.Entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {

	@Id // Represents primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Represents Auto Increment
	private long id;
	@Column(name="user_id")
	private long userId;
	private String name;
	private String fueltype;
	private long price;
	private String description;
	
	private String image;
	
	//@ManyToOne(targetEntity = Users.class,fetch=FetchType.EAGER)
	//@JoinColumn(name="user_id",insertable=false,updatable=false)
	// private List<Users> users;

	public Cart() {

	}

	public Cart(long id, long userId, String name, String fueltype, long price, String description,
			String image) {
		this.id = id;
		this.userId = userId;
		this.name = name;
		this.fueltype = fueltype;
		this.price = price;
		this.description = description;
		this.image = image;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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

	@Override
	public String toString() {
		return "Cart [id=" + id + ", userId=" + userId + ", name=" + name + ", fueltype=" + fueltype + ", price="
				+ price + ", description=" + description + ", image=" + image + "]";
	}

	
}
