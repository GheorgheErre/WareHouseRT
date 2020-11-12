package WareHouseRT.WareHouseRT.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.repository.HistoricDeleteRepository;

@Service
public class HistoricDeleteService {

	@Autowired
	private HistoricDeleteRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
		


	public void save(DeleteRequest deleteRequest) {
		HistoricDelete recordDelete= new HistoricDelete();
		recordDelete.setId(sequenceService.getNextSequence(HistoricDelete.SEQUENCE_NAME));
		
		recordDelete.setProduct(deleteRequest.getProduct());
		//da settare in FrontEnd prima di conferma eliminazione
		recordDelete.setNote(deleteRequest.getNote());
		recordDelete.setDate(new Date());
		repo.save(recordDelete);
	}
	

	
	public void delete(HistoricDelete entity) {
		
		repo.delete(entity);
	}
	
	public Optional<HistoricDelete> findByID(long id) {
		return repo.findById(id);
	}

	public List<HistoricDelete> findAll() {
		return repo.findAll();

	}


}
