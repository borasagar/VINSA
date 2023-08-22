package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Cars;
import com.example.demo.Entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{

//	@Query(value="truncate table cart")
//	public void clear();
//	public List<Cart> getAllByUser_id(long user_id);
//	@Query(value="Select c from cart c where c.user_id=?1")
	public List<Cart> findByUserId(long userId);
		
	}

