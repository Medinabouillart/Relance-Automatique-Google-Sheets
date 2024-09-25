function envoyerRappelRelance() {
  // Accéder à la feuille 'suivis_alternance'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('suivis_alternance');
  
  // Vérifier si la feuille existe
  if (!sheet) {
    Logger.log("La feuille 'suivis_alternance' n'a pas été trouvée.");
    return; // Arrêter le script si la feuille n'est pas trouvée
  }

  Logger.log("Feuille trouvée : " + sheet.getName()); // Confirme que la feuille est trouvée
  
  var lastRow = sheet.getLastRow(); // Récupère le dernier numéro de ligne contenant des données
  if (lastRow <= 1) {
    Logger.log("Aucune donnée trouvée dans la feuille.");
    return; // Si aucune donnée, arrêter le script
  }
  
  var data = sheet.getRange(2, 1, lastRow - 1, 7).getValues(); // Récupère toutes les lignes de données à partir de la ligne 2
  var aujourdhui = new Date(); // Date actuelle
  var destinataire = "medina.bllrt@gmail.com"; // Ton adresse e-mail

  for (var i = 0; i < data.length; i++) {
    var dateRelance = new Date(data[i][5]); // Colonne "Date de relance"
    if (dateRelance <= aujourdhui && data[i][4] == "En attente") { // Vérifie la date et le statut
      var nomContact = data[i][2]; // Colonne "Nom du contact"
      var entreprise = data[i][0]; // Colonne "Entreprise"

      Logger.log("Envoi d'un e-mail de rappel pour " + nomContact + " de " + entreprise);

      // Envoie un e-mail de rappel
      MailApp.sendEmail({
        to: destinataire,
        subject: "Rappel : Relancer " + nomContact + " de " + entreprise,
        body: "Bonjour,\n\nIl est temps de relancer " + nomContact + " de l'entreprise " + entreprise + ".\n\nVérifie la date de relance dans ton tableau et contacte-le dès que possible.\n\nCordialement,\nTon tableau de suivi"
      });
    }
  }
}
