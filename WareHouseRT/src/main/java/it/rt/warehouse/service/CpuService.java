package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.rt.warehouse.beans.CPU;
import it.rt.warehouse.repository.CpuRepository;

@Service
public class CpuService {

	@Autowired
	private CpuRepository repo;
	
	public void save(CPU cpu) {
		repo.save(cpu);
	} 
	
}
