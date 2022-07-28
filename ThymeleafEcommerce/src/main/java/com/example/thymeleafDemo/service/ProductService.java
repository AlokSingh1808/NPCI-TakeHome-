package com.example.thymeleafDemo.service;

import java.util.List;

import com.example.thymeleafDemo.entity.Product;

public interface ProductService {
	public List<Product> findAll();
	public void save(Product prod);
	public void deleteById(Integer id);
	public Product findById(Integer id);

}
