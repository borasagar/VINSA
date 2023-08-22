package com.example.demo.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private long id;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "country")
	private String country;
	@Column(name = "state")
	private String state;
	@Column(name = "gender")
	private String gender;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "phone_no")
	private long phoneNumber;
	
	@OneToMany(targetEntity = Cart.class,cascade = CascadeType.ALL)
	@JoinColumn(name="user_id",referencedColumnName = "user_id")
	private List<Cart> cart;
	
	public String toString() {
		return "Users [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", country=" + country
				+ ", state=" + state + ", gender=" + gender + ", email=" + email + ", password=" + password
				+ ", phoneNumber=" + phoneNumber + ", cart=" + cart + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}

	public Users() {
		// TODO Auto-generated constructor stub
	}

	public Users(long id, String firstName, String lastName, String country, String state, String gender, String email,
			String password, long phoneNumber, List<Cart> cart) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.state = state;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.cart = cart;
	}

	

}
