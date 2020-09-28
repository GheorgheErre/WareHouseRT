package it.rt.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;

import it.rt.warehouse.beans.MotherBoard;
import it.rt.warehouse.repository.MotherBoardRepository;

public class MotherBoardService {
	@Autowired
	private MotherBoardRepository repo;
	
	public void save(MotherBoard motherBoard) {
		repo.save(motherBoard);
	}
	
}
