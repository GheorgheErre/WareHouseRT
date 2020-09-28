package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.SSD;

import it.rt.warehouse.repository.SsdRepository;

public class SsdService {
	@Autowired
	private SsdRepository repo;

	public void save(SSD ssd) {
		repo.save(ssd);
	}

}
