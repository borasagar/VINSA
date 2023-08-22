package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Bikes;
import com.example.demo.Entity.Cars;
import com.example.demo.Entity.Cart;
import com.example.demo.Entity.Users;
import com.example.demo.Repository.BikesRepository;
import com.example.demo.Repository.CarsRepository;
import com.example.demo.Repository.CartRepository;
import com.example.demo.Repository.UsersRepository;

@RestController
//@RequestMapping("project")
public class MainController {
	
	@Autowired
	private CarsRepository carsRepo;
	
	@Autowired
	private UsersRepository usersRepo;
	
	@Autowired
	private BikesRepository bikesRepo;
	
	@Autowired
	private CartRepository cartRepo;
	
//	public CarsController(CarsRepository carsRepo) {
//		this.carsRepo = carsRepo;
//	}
	
	//@GetMapping("carsAll")
	@RequestMapping("carsAll")
	public List<Cars> getAllCars(){
		return carsRepo.findAll();
	}
	
	@RequestMapping("bikesAll")
	public List<Bikes> getAllBikes(){
		return bikesRepo.findAll();
	}
	
	@RequestMapping("usersAll")
	public List<Users> getAllUsers(){
		return usersRepo.findAll();
	}
	
	@RequestMapping("cartAll")
	public List<Cart> getAllCart(){
		return cartRepo.findAll();
	}
	
	@PostMapping("insertUser")
	public void insertion(@RequestBody Users user) {
		user.setId(0);
		usersRepo.save(user);
	}
	
	@PostMapping("insertCar")
	public void insertCar(@RequestBody Cars car) {
		car.setId(0);
		carsRepo.save(car);
	}
	
	@PostMapping("insertBike")
	public void insertBike(@RequestBody Bikes bike) {
		bike.setId(0);
		bikesRepo.save(bike);
	}
	
	@PostMapping("insertCart")
	public Cart insertCart(@RequestBody Cart cart) {
		return cartRepo.save(cart);
	}
	
	@RequestMapping("getById/{userId}")
	public List<Cart> getById(@PathVariable long userId) throws Exception {
//		System.out.println(userId);
		return cartRepo.findByUserId(userId);
	}
	
//	@RequestMapping("getIdId/{userId}")
//	public List<Cart> getById(@PathVariable long userId){
////		return bikesRepo.findByBrandOrFueltype(brand);
//		List<Cart> cart = null;
//			cart = cartRepo.findByUserId(userId);
//		return cart;
//	}
	
	@PutMapping("updateCar")
	public Cars updateCar(@RequestBody Cars car) {
		carsRepo.save(car);
		return car;
	}
	
	@PutMapping("updateBike")
	public Bikes updateBike(@RequestBody Bikes bike) {
		bikesRepo.save(bike);
		return bike;
	}
	
	
	@DeleteMapping("deleteByCarId/{carsId}")
	public void deleteCar(@PathVariable long carsId) throws Exception {
		carsRepo.deleteById(carsId);		
	}
	
	@DeleteMapping("deleteByBikeId/{bikesId}")
	public void deleteBike(@PathVariable long bikesId) throws Exception {
		bikesRepo.deleteById(bikesId);	
	}
	
	@DeleteMapping("deleteByCartId/{cartId}")
	public void deleteCart(@PathVariable long cartId) throws Exception {
		cartRepo.deleteById(cartId);	
	}
	
	@RequestMapping("findCarName/{brand}")
	public List<Cars> findByCarName(@PathVariable String brand){
//		return carsRepo.findByBrandOrFueltype(brand);
		List<Cars> car = null;
		if (brand != null && brand.trim().length() > 0)
			car = carsRepo.findByBrandOrFueltype(brand, brand);
		return car;
	}
	
	@RequestMapping("findBikeName/{brand}")
	public List<Bikes> findByBikeBrand(@PathVariable String brand){
//		return bikesRepo.findByBrandOrFueltype(brand);
//		System.out.println(brand);
		List<Bikes> bike = null;
		if (brand != null && brand.trim().length() > 0)
			bike = bikesRepo.findByBrandOrFueltype(brand, brand);
		else
			bike=bikesRepo.findAll();
	return bike;
	}
	
	
//	public void clear() {
//		cartRepo.clear();
//	}
	
//	@RequestMapping("getById/{carsId}")
//	public Cars getIdDetails(@PathVariable long carsId) throws Exception {
//		Cars car = carsRepo.findById(carsId).get();
//		if (car == null) {
//			throw new Exception("Car id is not found : " + carsId);
//		}
//		return car;
//	}
	
	
}
