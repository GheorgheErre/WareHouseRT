package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.RAM;

public interface RamRepository extends MongoRepository<RAM, Integer>{

}
