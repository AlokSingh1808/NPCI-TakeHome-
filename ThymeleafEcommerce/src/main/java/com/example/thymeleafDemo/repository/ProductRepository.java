package com.example.thymeleafDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.thymeleafDemo.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
