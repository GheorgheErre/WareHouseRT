package WareHouseRT.WareHouseRT.beans;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cable")
public class ContatoreDDT {

	@Transient
	public static final String SEQUENCE_NAME = "contatoreDDT_sequence";

	@Id
	private long id;
	
	private int numero;
	
	private int anno;
	
	public ContatoreDDT(){
		this.numero = 1;
		this.anno = LocalDate.now().getYear();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public int getAnno() {
		return anno;
	}

	public void setAnno(int anno) {
		this.anno = anno;
	}

	
	
}
