package WareHouseRT.WareHouseRT.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.repository.HistoricDeleteRepository;
import WareHouseRT.WareHouseRT.repository.HistoricMovementsRepository;

@Service
public class HistoricMovementsService {

	@Autowired
	private HistoricMovementsRepository repo;

	@Autowired
	private HistoricDeleteRepository deleteRepo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(HistoricRequest historicRequest, String tipoAzione) {

		HistoricMovements recordMove = new HistoricMovements();

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		DateTimeFormatter newFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

		LocalDate todayDate = LocalDate.now();

		String formattedDate = todayDate.format(formatter);
		
		LocalDate date = LocalDate.parse(formattedDate, formatter);
		String dateString = date.format(newFormatter);
		date = LocalDate.parse(dateString, newFormatter);

		
		recordMove.setDate(date);
		recordMove.setProduct(historicRequest.getProduct());
		recordMove.setNote(historicRequest.getNote());
		recordMove.setAction(tipoAzione);
		recordMove.setId(sequenceService.getNextSequence(HistoricMovements.SEQUENCE_NAME));
		repo.save(recordMove);
	}

	public void update(HistoricMovements entity) {
		repo.save(entity);
	}

	public void delete(HistoricMovements entity) {
		repo.delete(entity);
	}

	public Optional<HistoricMovements> findByID(long id) {
		return repo.findById(id);
	}

	public List<HistoricMovements> findAll() {
		return repo.findAll();

	}

//	public void updateMovementsOfProduct(HistoricRequest historicRequest) {
//		
//		List<HistoricMovements> movementsList = repo.findByProduct(historicRequest.getProduct());
//		Optional<HistoricDelete> historicDelete =deleteRepo.findByProduct(historicRequest.getProduct());
//		
//		for (HistoricMovements historicMovements : movementsList) {
//			
//			historicMovements.setProduct(historicDelete.get().getProduct());
//			this.update(historicMovements);
//		}
//
//	}

}
