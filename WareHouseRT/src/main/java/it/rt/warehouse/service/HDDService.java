package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.HDD;
import it.rt.warehouse.repository.HddRepository;

public class HDDService{

	@Autowired
	private HddRepository repo;
	
	public void save(HDD hdd) {
		repo.save(hdd);
	}
	
}
