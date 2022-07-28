package com.example.thymeleafDemo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.thymeleafDemo.entity.Product;
import com.example.thymeleafDemo.repository.ProductRepository;

@Service
public class ProductServiceImplementation implements ProductService {

	@Autowired
	ProductRepository prodRepo;
	
	public List<Product> findAll() {
		return prodRepo.findAll();
	}

	@Transactional
	public void save(Product prod) {
		prodRepo.save(prod);
	}

	public void deleteById(Integer id) {
		prodRepo.deleteById(id);
		
	}

	public Product findById(Integer id) {
		Optional<Product> p =  prodRepo.findById(id) ;
		Product prod  = null;
		
		if(p.isPresent())
			prod = p.get();
		
		return prod;
	}

	
}
