package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Cars;

@Repository
public interface CarsRepository extends JpaRepository<Cars,Long>{
		

	public List<Cars> findByBrandOrFueltype(String brand,String fueltype);
	
}
