package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.MotherBoard;

public interface MotherBoardRepository extends MongoRepository<MotherBoard, Integer>{

}
