package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.Laptop;

public interface LaptopRepository extends MongoRepository<Laptop, Integer>{

}
