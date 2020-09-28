package it.rt.warehouse.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "laptop")
public class Laptop extends WorkStation {

	@Id
	private int id;
}
