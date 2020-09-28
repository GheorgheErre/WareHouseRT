package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.RAM;
import it.rt.warehouse.repository.RamRepository;



public class RamService {
	@Autowired
	private RamRepository repo;
	
	public void save(RAM ram) {
		repo.save(ram);
	}
	
}
