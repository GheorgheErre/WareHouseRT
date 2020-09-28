package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.PowerSupplie;
import it.rt.warehouse.repository.PowerSupplieRepository;

public class PowerSupplieService {
	@Autowired
	private PowerSupplieRepository repo;
	
	public void save(PowerSupplie powerSupplie) {
		repo.save(powerSupplie);
	}
	
}
