package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.SSD;

public interface SsdRepository extends MongoRepository<SSD, Integer>{

}
