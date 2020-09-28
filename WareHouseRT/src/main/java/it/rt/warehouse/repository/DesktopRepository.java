package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.Desktop;


public interface DesktopRepository extends MongoRepository<Desktop, Integer>{

}
