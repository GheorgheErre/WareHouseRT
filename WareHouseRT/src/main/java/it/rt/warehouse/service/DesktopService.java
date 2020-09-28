package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.Desktop;
import it.rt.warehouse.repository.DesktopRepository;


public class DesktopService {
	@Autowired
	private DesktopRepository repo;
	
	public void save(Desktop desktop) {
		repo.save(desktop);
	}
	
}
