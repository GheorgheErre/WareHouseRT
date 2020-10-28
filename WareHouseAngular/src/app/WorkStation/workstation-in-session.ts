export abstract class WorkstationInSession {
    setWorkstationInSession(ufficio, numero){
        window.sessionStorage.setItem("ufficio_workstation", ufficio);
        window.sessionStorage.setItem("numero_workstation", numero);
      }
}
