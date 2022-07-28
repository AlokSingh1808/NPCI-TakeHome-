package com.example.thymeleafDemo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.thymeleafDemo.entity.Product;
import com.example.thymeleafDemo.service.ProductService;

@Controller
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	ProductService prodService;
	
	@GetMapping("/prodList")
	public String findAll(Model model) {
		List<Product> prod = prodService.findAll();
		model.addAttribute("Product", prod);
		return "prodUI/product.html";
	}
	
	@GetMapping("/addProd")
	public String prodForm(Model model) {
		model.addAttribute("Product", new Product());
		return "prodUI/productform.html";
	}
	
	@PostMapping("/save")
	public String save(@ModelAttribute("Product") Product prod) {
		prodService.save(prod);
		return "redirect:/product/prodList";
	}
	
	@GetMapping("/updateForm")
	public String updateForm(@RequestParam("id") Integer id, Model model) {
		Product emp = prodService.findById(id);
		model.addAttribute("Product",emp);
		return "prodUI/productform.html";
	}
	
	@GetMapping("/delete")
	public String deleteById(@RequestParam("id") Integer id) {
		prodService.deleteById(id);
		
		return "redirect:/product/prodList";
	}

	

}
