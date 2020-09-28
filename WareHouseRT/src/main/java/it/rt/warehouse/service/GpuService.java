package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.GPU;
import it.rt.warehouse.repository.GpuRepository;


public class GpuService {
	@Autowired
	private GpuRepository repo;
	
	public void save(GPU gpu) {
		repo.save(gpu);
	}
	
}
