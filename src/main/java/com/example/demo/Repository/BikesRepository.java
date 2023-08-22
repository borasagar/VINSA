package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Bikes;

@Repository
public interface BikesRepository extends JpaRepository<Bikes,Long>{
	
	public List<Bikes> findByBrandOrFueltype(String brand,String fueltype);
	
}
