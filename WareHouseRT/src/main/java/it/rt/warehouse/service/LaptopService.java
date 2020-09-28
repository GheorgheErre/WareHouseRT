package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.Laptop;


public class LaptopService {

	@Autowired
	private LaptopService repo;
	
	public void save(Laptop laptop) {
		repo.save(laptop);
	}
	
}
