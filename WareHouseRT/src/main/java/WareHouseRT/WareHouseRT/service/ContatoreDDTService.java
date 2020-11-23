package WareHouseRT.WareHouseRT.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.ContatoreDDT;
import WareHouseRT.WareHouseRT.repository.ContatoreDDTRepository;


@Service
public class ContatoreDDTService {
	
	@Autowired
	private ContatoreDDTRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	
	public ContatoreDDT saveOrUpdate() {
		int annoAttuale = LocalDate.now().getYear();
		
		Optional<ContatoreDDT> c = repo.findByAnno(annoAttuale);
		
		if (c.isPresent()) {
			return update(c.get());
		} else
			return save();
	}

	public ContatoreDDT save() {
	
		ContatoreDDT c = new ContatoreDDT();
		c.setId(sequenceService.getNextSequence(ContatoreDDT.SEQUENCE_NAME));
		
		c = repo.save(c);
		
		return c;

	}
	
	public ContatoreDDT update(ContatoreDDT entity) {
		
		int numeroDDT = entity.getNumero();
		numeroDDT++;
		entity.setNumero(numeroDDT);
		
		ContatoreDDT c = repo.save(entity);		
		return c;
	}

}
